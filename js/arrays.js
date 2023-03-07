/* JavaScript CheetSheet
 * <https://github.com/jacobxperez/javascript-cheetsheet>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/

// Accessing an array element
const myArray = [100, 200, 300]

console.log(myArray[0]) // 100
console.log(myArray[1]) // 200
console.log(myArray[2]) // 300

// Adding a single element:
const cart = ['apple', 'orange']
cart.push('pear')
// Adding multiple elements:
const numbers = [1, 2]
numbers.push(3, 4, 5)

// Removes the last element from an array and returns that element
const ingredients = ['eggs', 'flour', 'chocolate']

const poppedIngredient = ingredients.pop() // 'chocolate'
console.log(ingredients) // ['eggs', 'flour']
