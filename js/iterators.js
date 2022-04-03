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
// Assign a function to a variable originalFunc
const originalFunc = (num) => {
    return num + 2
};
// Re-assign the function to a new variable newFunc
const newFunc = originalFunc;
// Access the function's name property
newFunc.name; //'originalFunc'
// Return the function's body as a string
newFunc.toString(); //'(num) => { return num + 2 }'
// Add our own isMathFunction property to the function
newFunc.isMathFunction = true;
// Pass the function as an argument
const functionNameLength = (func) => {
    return func.name.length
};
functionNameLength(originalFunc); //12
// Return the function
const returnFunc = () => {
    return newFunc
};
returnFunc(); //[Function: originalFunc]


// The .findIndex() Method
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's' ? true : false;
});


// The .forEach() Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Iterate over fruits below
fruits.forEach(function (fruitCall) {
    console.log('I want to eat a ' + fruitCall);
});


// The .map() Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));
console.log(secretMessage.join(''));


// Create the smallNumbers array below
const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(num => num / 100);

console.log(smallNumbers);


// The .filter() Method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
    return num < 250;
})


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7;
});


// The .reduce() Method
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
}, 10);

console.log(newSum)
