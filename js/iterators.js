/* JavaScript CheetSheet
 * <https://github.com/jacobxperez/javascript-cheetsheet>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/

// Functions Assigned to Variables
let plusFive = (number) => {
    return number + 5;
};
// f is assigned the value of plusFive
let f = plusFive;

plusFive(3); // 8
// Since f has a function value, it can be invoked. 
f(9); // 14


// Callback Functions
const isEven = (n) => {
    return n % 2 == 0;
}

let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even number: ${isNumEven}.`)
}
// Pass in isEven as the callback function
printMsg(isEven, 4);
// Prints: The number 4 is an even number: True.


// Higher-Order Functions
//Assign a function to a variable originalFunc
const originalFunc = (num) => { return num + 2 };
//Re-assign the function to a new variable newFunc
const newFunc = originalFunc;
//Access the function's name property
newFunc.name; //'originalFunc'
//Return the function's body as a string
newFunc.toString(); //'(num) => { return num + 2 }'
//Add our own isMathFunction property to the function
newFunc.isMathFunction = true;
//Pass the function as an argument
const functionNameLength = (func) => { return func.name.length }; 
functionNameLength(originalFunc); //12
//Return the function
const returnFunc = () => { return newFunc };
returnFunc(); //[Function: originalFunc]
