/* JavaScript CheetSheet
 * <https://github.com/jacobxperez/javascript-cheetsheet>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/

// Run code on document load
document.addEventListener('DOMContentLoaded', function () {
    // Variable declaration
    let a = 'Tammy'
    const b = false
    var c = 3
    console.log(a, b, c)
    // Tammy, false, 3

    // Print messages to the console
    console.log('Hi there!')
    // Prints: Hi there!

    // Methods
    console.log(Math.floor(5.95))
    // Math is the library, Prints: 5

    // Returns the number of characters that make up the string.
    let message = 'good nite'
    console.log(message.length)
    // Prints: 9
    console.log('howdy'.length)
    // Prints: 5

    // Assignment Operators
    // assigns a value to its left operand based on the value of its right operand.
    let number = 100
    // Both statements will add 10
    number = number + 10
    number += 10
    console.log(number)
    // Prints: 120

    // String Interpolation
    let age = 7
    // String concatenation
    'Tommy is ' + age + ' years old.'
    // String interpolation
    ;`Tommy is ${age} years old.`

    // String Concatenation
    let service = 'credit card'
    let month = 'May 30th'
    let displayText = 'Your ' + service + ' bill is due on ' + month + '.'
    console.log(displayText)
    // Prints: Your credit card bill is due on May 30th.

    // Template Literals
    let name = 'Jacob'
    console.log(`Hello, ${name}`)
    // Prints: Hello, Jacob
    console.log(`Billy is ${6 + 8} years old.`)
    // Prints: Billy is 14 years old.
})
