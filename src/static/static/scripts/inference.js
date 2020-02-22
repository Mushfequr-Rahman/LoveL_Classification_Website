import * as tf from '@tensorflow/tfjs';
const model = await tf.loadLayersModel('weights/model.js');


window.onload = function() {

    $(":button").on("click", function(e) {
        var str = $("#input").val();
        console.log("Text that we got: ", str);


    });
}