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

});
