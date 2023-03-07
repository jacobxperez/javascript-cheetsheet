/* JavaScript CheetSheet
 * <https://github.com/jacobxperez/javascript-cheetsheet>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/

// Static Methods
class Dog {
    constructor(name) {
        this._name = name
    }
    introduce() {
        console.log('This is ' + this._name + ' !')
    }
    // A static method
    static bark() {
        console.log('Woof!')
    }
}

const myDog = new Dog('Buster')
myDog.introduce()
// Calling the static method
Dog.bark()

// Class
class Song {
    constructor() {
        this.title
        this.author
    }

    play() {
        console.log('Song playing!')
    }
}

const mySong = new Song()
mySong.play()

// Class Constructor
class Song {
    constructor(title, artist) {
        this.title = title
        this.artist = artist
    }
}

const mySong = new Song('Bohemian Rhapsody', 'Queen')
console.log(mySong.title)

// Class Methods
class Song {
    play() {
        console.log('Playing!')
    }

    stop() {
        console.log('Stopping!')
    }
}

// extends
// Parent class
class Media {
    constructor(info) {
        this.publishDate = info.publishDate
        this.name = info.name
    }
}
// Child class
class Song extends Media {
    constructor(songData) {
        super(songData)
        this.artist = songData.artist
    }
}

const mySong = new Song({
    artist: 'Queen',
    name: 'Bohemian Rhapsody',
    publishDate: 1975,
})
