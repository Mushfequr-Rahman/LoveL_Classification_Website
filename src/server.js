const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('./static/public'));
app.use(cors());

app.listen(3000, () => console.log('LoveL app on 3000'));
let session = require('express-session');
let bodyParser = require('body-parser');
let uuid = require('uuid/v1');
let mongoose = require('mongoose');
let bcrypt = require('bcrypt-nodejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Configure Database:
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:9000/LoveL', {
        useNewUrlParser: true
    },
    function(error) {
        if (error) {
            return console.error('Unable to connect:', error);
        }
    });
//, {useMongoClient: true});
mongoose.set('useCreateIndex', true);


app.get('/', (req, res) => {
    res.send("node server request recieved")
})

app.use(session({
    genid: function(request) {
        return uuid();
    },
    resave: false,
    saveUninitialized: false,
    // cookie: {secure: true},
    secret: 'apollo slackware prepositional expectations'
}));


let dummy_user = [{
        id: 1,
        name: 'Random Dude',
        messages: [{
            message: 'Hi there',
            date: '12-25-2019',
            time: '11:30'
        }],

        partner: {
            name: 'Random Dude',
            messages: [{
                message: 'Hi there',
                date: '12-25-2019',
                time: '11:30'
            }],

        }
    }

];

//Create database schemas:
let Schema = mongoose.Schema;

let userSchema = new Schema({
    id: String,
    username: {
        type: String,
        unique: true,
        index: true
    },
    password: String,
    email: String,
    name: String,
    messages: [{
        id: Number,
        time: String,
        content: String,
    }],
    points: {
        touch: Number,
        time: Number,
        gift: Number,
        service: Number,
        words: Number,
    },
    partner: {
        id: Number,
        name: String,
        messages: [{
            time: { type: Date, default: Date.now },
            content: String,
        }],
        points: {
            touch: Number,
            time: Number,
            gift: Number,
            service: Number,
            words: Number,
        }


    }

}, {
    collection: 'users_test'
})

let User = mongoose.model('users', userSchema)

app.get('/dummy_user', (req, res) => {
    res.json(dummy_user);
})

app.set('views', __dirname + '/static/public/views');
app.set('view engine', 'pug');


app.get('/login', function(request, response) {
    response.render('login', {
        title: 'Login Page',
        errorMessage: ''
    });
});

// TODO: Return JASON instead of a pug render HTML
app.post("/processLogin", function(request, response) {
    console.log("Prcoess Login called");
    username = request.body.username;
    password = request.body.password;
    console.log("Looking for username: ", username);
    User.find({ username: username }).then(function(results) {
        console.log(results)
        if (results.length != 1) {
            console.log("No user found");
            response.render('login', {
                errorMessage: "No Username Like that"
            });
        }
        let val = results[0];
        console.log("Login Password: ", results[0].password)
        if (password == results[0].password) {
            request.session.username = username;
            console.log("Successfully Logged In User");
            response.sendFile(response.render("simpleSVG", {
                  username: val.username,
                  title: "Welcome " + val.name + " and " + val.partner.name,
                  points: val.points,
                  ppoints: val.partner.points
            }));
            // response.render("main_page", {
            //     username: val.username,
            //     title: "Welcome " + val.name + " and " + val.partner.name,
            //     points: val.points,
            //     ppoints: val.partner.points
            // })
        } else {
            console.log("Password Mismatch");
            response.send({ err: 'Error' });
            response.send({ err: 'Error' });
            // response.render('login', {
            //     errorMessage: "Wrong Password",
            // });
        }
    }).catch(function(error) {
        // error logging in - no such user
        console.log('login: catch');
        response.render('login', {
            errorMessage: 'Login Incorrect'
        });
    });
})

app.get('/signup', function(request, response) {
    response.render('signup', {
        title: 'Signup Page',
        errorMessage: ''
    });
});


//Create Sign up functions:
app.post("/processSignUp", function(request, response) {
    username = request.body.username;
    email = request.body.email;
    password = request.body.pwd;
    console.log("Registering new User", username)
    newUser = new User({
        username: username,
        email: email,
        password: password
    })

    newUser.save(function(error) {
        if (error) {
            response.render('signup', {
                errorMessage: "Could Not register"
            })

        } else {
            response.render('main_page', {
                title: "Welcome"
            })
        }
    })

});

// API for text classification:
const tf = require('@tensorflow/tfjs-node');
var fs = require('fs');

app.get("/classify", function(request, res) {

    message = request.query.message;
    console.log("Recieved message to classify: ", message);

    async function classify(message) {
        /*
        Classes:
            1- Word of Affirmation
            2- Acts of Service
            3- Gifts
            4- Time
            5- Physical Touch
        */

        var vocab_json = JSON.parse(fs.readFileSync('weights/t_config.json', 'utf8'));
        const handler = tf.io.fileSystem('weights/model.json');
        var model = await tf.loadLayersModel(handler).catch(error => console.error(error));
        console.log("Inside classification");
        const temp = tf.zeros([1, 50]);

        let text = message.split(" ");

        function cleanText(text) {
            return text
                .replace(this.filters, '')
                .replace(/\s{2,}/g, ' ')
                .split(' ');
        }

        function textsToSequences(texts, wordIndex) {
            return texts.map(text => cleanText(text).map(word => wordIndex[word] || 0));
        }


        function padArray(arr, len, fill) {
            return arr.concat(Array(len).fill(fill));
        }

        var seq = textsToSequences(text, vocab_json)
        seq = [].concat.apply([], seq);
        console.log(seq)
        var padded = padArray(seq, 50, 0);

        var tensor = tf.expandDims(tf.tensor1d(padded))
        tensor.print();
        var pred = model.predict(tensor);
        pred.print()
        let x = pred.dataSync()
        console.log(x)
        let res = x.indexOf(Math.max.apply(Math, x))
        console.log(res);

        var result = "None";
        if (res == 0) result = "word";
        else if (res == 1) result = "service";
        else if (res == 2) result = "gift";
        else if (res == 3) result = "time";
        else if (res == 4) result = "service";


        return result;


    }

    classify(message).then(result => res.json(result))

})
