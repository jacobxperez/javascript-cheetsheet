/* JavaScript CheetSheet
 * <https://github.com/jacobxperez/full-screen-jquery-content-slider>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/

// Object literal
const person = {
    getName: function () {
        return "Name is " + this.firstName + " " + this.lastName;
    }
};

const funnyGuy = Object.create(person);
funnyGuy.firstName = "Conan";
funnyGuy.lastName = "O'Brian";
console.log(funnyGuy);

const newGuy = Object.create(person);
newGuy.firstName = "Jacob";
newGuy.lastName = "Perez";
console.log(newGuy);


// Object Factory
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw");
        }
    }
};

const circle = createCircle(1);


// Object Constructor
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
};

const another = new Circle(1);


// Class Constructor
class Surgeon {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}

// Instance of class Surgeon
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
