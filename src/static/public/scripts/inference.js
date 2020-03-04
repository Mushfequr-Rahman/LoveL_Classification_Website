import * as tf from '@tensorflow/tfjs';





//const model = await tf.loadLayersModel('weights/model.js');

const classes = ['Quality Time', ''];

window.onload = function() {


    console.log("Window Loaded");

    $("#test").on("click", function(e) {
        console.log("After button clicked");
        var str = $("#input").val();
        console.log("Text that we got: ", str);


        //convert input String to vectors and run
        //model.predict on it . 
        /*
        var prediction = model.predict(str)
        console.log("Prediction", prediction)
        */

    });



}