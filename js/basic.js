/* JavaScript CheetSheet
 * <https://github.com/jacobxperez/full-screen-jquery-content-slider>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/

// Run code on document load
document.addEventListener("DOMContentLoaded", function () {

    // Variable declaration
    var varVariable = "var variable";
    let letVariable = "let variable";
    const constVariable = "const variable";


    // Ternary Operator
    let price = 10.5;
    let day = "Monday";

    day === "Monday" ? price -= 1.5 : price += 1.5;


    // if else Statement
    const isTaskCompleted = false;

    if (isTaskCompleted) {
        console.log('Task completed');
    } else {
        console.log('Task incomplete');
    }

    // else if Clause
    const size = 10;

    if (size > 100) {
        console.log('Big');
    } else if (size > 20) {
        console.log('Medium');
    } else if (size > 4) {
        console.log('Small');
    } else {
        console.log('Tiny');
    }


    // switch Statement
    const food = 'salad';

    switch (food) {
        case 'oyster':
            console.log('The taste of the sea 🦪');
            break;
        case 'pizza':
            console.log('A delicious pie 🍕');
            break;
        default:
            console.log('Enjoy your meal');
    }


    // For loop
    for (var i = 0; i < variable; i++) {
        // add code
    } // end for loop


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


    // Function
    function showDistance(speed, time) {
        console.log(speed * time);
    };

    showDistance(10, 5);


    // Function that returns data
    function getDistance(speed, time) {
        var distance = speed * time;
        return distance;
    };

    var myDistance = getDistance(10, 5);
    console.log(myDistance);


    // Walking the DOM
    function theDOMElementWalker() {
        if (node.nodeType === 1) {
            // add code
            nodde = node.firstChild;

            while (node) {
                theDOMElementWalker(node);
                node = node.nextSibling;
            }
        }
    };

    var texasRanger = document.querySelector("#texas");
    theDOMElementWalker(texasRanger);


    // Anonymus Function #1
    var isLucky = function () {
        let foo = Math.round(Math.random() * 100);

        if (foo > 50) {
            return "You are lucky!";

        } else {
            return "You are not lucky!";
        }
    };

    let me = isLucky();
    console.log(me);


    // Anonymus Function #2
    window.setTimeout(function () {
        console.log("Everything is awsome!");
    }, 2000);


    // IIFE Function
    (function () {
        console.log();
    })();


    // IIFE Function with arguments
    (function (first, last) {
        let messege = "My name is " + first + " " + last;
        console.log(messege);
    })("Jacob", "Perez");

});
