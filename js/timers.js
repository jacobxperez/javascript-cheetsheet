/* JavaScript CheetSheet
 * <https://github.com/jacobxperez/javascript-cheetsheet>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/

// Delaying with setTimeout
function showMessage() {
    console.log("delayd for 5 seconds");
}

var timeID = setTimeout(showMessage, 5000);


// Looping with setInterval
function drawText() {
    console.log("looping text");
}

var intervalID = setInterval(drawText, 2000);
// stop time looping
// clearInterval(intervalID);


// Animating smoothly
function animationLoop() {
    // animation related code

    requestAnimationFrame(animationLoop);
}
// start animation loop
animationLoop();


// Stop requestAnimationFrame
var requestID;

function animationLoop() {
    // animation related code

    requestID = requestAnimationFrame(animationLoop);
}

cancelAnimationFrame(requestID);
