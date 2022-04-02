/* JavaScript CheetSheet
 * <https://github.com/jacobxperez/javascript-cheetsheet>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/

// For loop
for (let i = 0; i < 4; i += 1) {
    console.log(i);
};
// Output: 0, 1, 2, 3


// Reverse Loop
const items = ['apricot', 'banana', 'cherry'];

for (let i = items.length - 1; i >= 0; i -= 1) {
    console.log(`${i}. ${items[i]}`);
}
// Prints: 2. cherry
// Prints: 1. banana
// Prints: 0. apricot


// While Loop
while (condition) {
    // code block to be executed
}

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}


// Do…While Statement
x = 0
i = 0

do {
    x = x + i;
    console.log(x)
    i++;
} while (i < 5);
// Prints: 0 1 3 6 10
