/* JavaScript CheetSheet
 * <https://github.com/jacobxperez/javascript-cheetsheet>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/

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
