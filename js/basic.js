/* JavaScript CheetSheet
 * <https://github.com/jacobxperez/javascript-cheetsheet>
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


    // String Concatenation
    let service = 'credit card';
    let month = 'May 30th';
    let displayText = 'Your ' + service + ' bill is due on ' + month + '.';
    console.log(displayText);
    // Prints: Your credit card bill is due on May 30th.


    // Template Literals
    let name = "Jacob";
    console.log(`Hello, ${name}`);
    // Prints: Hello, Jacob
    console.log(`Billy is ${6+8} years old.`);
    // Prints: Billy is 14 years old.

});
