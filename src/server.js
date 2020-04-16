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
         time: { type: String, default: Date.now },
         content: String,
         class: {
             type: String,
                 default: "service"
         },
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
             id: Number,
             time: { type: Date, default: Date.now },
             content: String,
             class: {
                 type: String,
                     default: "service"
             },
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
     /*
      * @desc Function to return a login page
      * @return Returns a pug rendered html page
      */

     response.render('login', {
         title: 'Login Page',
         errorMessage: ''
     });
 });


 app.post("/processLogin", function(request, response) {
     /*
      * @desc Function to process Log in and check if password matched.
      * @param string username - username of the user trying to login
      * @param string password - password of the user trying to login
      * @return JSON object - the profile of the user.
      */

     console.log("Prcoess Login called");
     username = request.body.username;
     password = request.body.password;
     console.log("Looking for username: ", username);
     User.find({ username: username }).then(function(results) {

         if (results.length != 1) {
             console.log("No user found");
             response.render('login', {
                 errorMessage: "No Username Like that"
             });
         }
         let val = results[0];

         if (password == results[0].password) {
             request.session.username = username;
             console.log("Successfully Logged In User");
             console.log(val);
             response.json(val);

             /*
             response.sendFile(response.render("simpleSVG", {
                   username: val.username,
                   title: "Welcome " + val.name + " and " + val.partner.name,
                   points: val.points,
                   ppoints: val.partner.points
             }));
             */
         //     response.render("main_page", {
         //         username: val.username,
         //         title: "Welcome " + val.name + " and " + val.partner.name,
         //         points: val.points,
         //         ppoints: val.partner.points
         //     })
         } else {
             console.log("Password Mismatch");
             response.send({ err: 'Error' });


         }
     }).catch(function(error) {
         // error logging in - no such user
         console.log('login: catch');
         response.render('login', {
             errorMessage: 'Login Incorrect'
         });
     });
 });

 app.get('/signup', function(request, response) {
     /*
      * @desc Function to render a signup page
      * @return a dynamic rendering of signup.pug
      */
     response.render('signup', {
         title: 'Signup Page',
         errorMessage: ''
     });
 });


 app.post("/processSignUp", function(request, response) {
     /*
      * @desc Function to create a new user based to the bd from the form
      * @param string username - username to be added
      * @param string email - email of the user
      * @param string password - password of the user
      * @param string name - name of the user
      * @param string pname - name of the partner
      * @return bool -if the user has been added properly.
      */
     username = request.body.username;
     email = request.body.email;
     password = request.body.pwd;
     name = request.body.name;
     pname = request.body.name;
     console.log("Registering new User", username)
     newUser = new User({
         username: username,
         email: email,
         name: name,
         password: password,
         partner: {
             name: name
         }
     })

     newUser.save(function(error) {
         if (error) {
             response.send(400, { "result": false })

         } else {
             response.send(200, { "result": true })
         }
     })

 });

 // API for text classification:
 const tf = require('@tensorflow/tfjs-node');
 var fs = require('fs');


 app.get("/classify", function(request, res) {
     /*
      * @desc Function to classify daily message and send them to the database:
      * @param string message - message to classify
      * @param string username - user who postesd the message
      * @param bool isPartner - Check to see if the patner is posting the message
      * @return string class - class which the message belongs to.
      */



     let message = request.query.message;
     let username = request.query.username;
     let isPartner = request.query.isPartner;
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
         var padded = padArray(seq, 50, 0);

         var tensor = tf.expandDims(tf.tensor1d(padded))
         var pred = model.predict(tensor);
         let x = pred.dataSync()
         let res = x.indexOf(Math.max.apply(Math, x))


         var result = "None";
         if (res == 0) result = "words";
         else if (res == 1) result = "service";
         else if (res == 2) result = "gift";
         else if (res == 3) result = "time";
         else if (res == 4) result = "touch";


         return result;


     }

     classify(message).then(function(msg_class) {
         User.find({ username: username }).then(function(result) {
             var user = result[0]
             console.log("isPartner:", isPartner)
             var new_message = {
                 content: message,
                 time: new Date(),
                 class: msg_class

             }
             if (isPartner == true) user.messages.push(new_message)
             else {
                 user.partner.messages.push(new_message)
             }

             //TODO: Calculate the new scores:
             classes = ["service", "time", "gift", "touch", "words"]
             if (isPartner == true) {
                 var points = user.points;

                 var length = user.messages.length;
                 for (i in classes) {
                     var s_len = user.messages.filter(c => c.class === classes[i]).length;
                     s_len = Math.floor((s_len / length) * 10)
                     points[classes[i]] = s_len
                 }
                 user.points = points;


             } else {
                 var points = user.partner.points
                 var length = user.partner.messages.length;
                 for (i in classes) {

                     var s_len = user.partner.messages.filter(c => c.class === classes[i]).length;
                     s_len = Math.floor((s_len / length) * 10)
                     console.log(s_len)
                     console.log(points[classes[i]])
                     points[classes[i]] = s_len
                 }
                 user.partner.points = points;



             }

             //console.log(user.messages)
             console.log("Partner message", user.partner.points)
             user.save(function(error) {
                 if (error) {
                     console.log(error);
                     res.status(404)

                 } else {
                     res.json(msg_class);
                 }

             })
         })



     });

 });


 app.get("/history", function(request, res) {
     /*
      * @desc Function to get the history of messages
      * @param  string username - username of the user we are searching for
      * @param bool isPartner - indicate wheter it is the partner or the main user
      * @param string daterange - indicate which range of dates the messages are from
      * @return list<messages> - List of messages that fall with in the range.\
       new Date(12 -10-15)
      */


     let username = request.query.username;
     let isPartner = request.query.isPartner;
     let daterange = request.query.daterange;
     console.log("daterange: ", daterange);
     var current_date = new Date();
     var pastdate;
     if (daterange == "week") pastdate = current_date.getDate() - 7;
     else if (daterange == "month") pastdate = current_date.getDate() - 30;
     else pastdate = current_date.getDate() - 200;
     User.find({ username: username }).then(function(result) {
         user = result[0]
         var messages;
         if (isPartner == true) messages = user.messages;
         else messages = user.partner.messages;
         console.log(messages)
         messages = messages.filter(function(d) {
             return (pastdate <= d.date <= current_date);
         })
         console.log(messages)
         res.json(messages);
     });




 });
