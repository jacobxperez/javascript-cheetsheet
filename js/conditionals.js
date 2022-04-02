/* JavaScript CheetSheet
 * <https://github.com/jacobxperez/javascript-cheetsheet>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/

// Logical Operator ||
true || false;        // true
10 > 5 || 10 > 20;    // true
false || false;       // false
10 > 100 || 10 > 20;  // false


// Logical Operator &&
true && true; // true
1 > 2 && 2 > 1; // false
true && false; // false
4 === 4 && 3 > 1; // true


// Logical Operator !
let lateToWork = true;
let oppositeValue = !lateToWork;
 
console.log(oppositeValue); 
// Prints: false


// Comparison Operators
1 > 3       // false
3 > 1       // true
250 >= 250  // true
1 === 1     // true
1 === 2     // false
1 === '1'   // false


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


// Switch Statement
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
