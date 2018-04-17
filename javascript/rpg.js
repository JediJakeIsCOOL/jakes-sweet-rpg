//figure out a way that when someone creates their new character, the character is created automatically and properties are auto assigned.

// have to make a system where the images are connected to certain values and are injected into the dom when they are called in the app


//character creation first, choice of what to do- 

//need to create different characters, monsters, and all the different actions each of them have 

// need random stats and level with constraints of monster added when encountering them.

//learn how to modulize the enimes and heroes and everything in order to make the code easier to read/use

var Apple = function() {
    this.color = "red";

    this.changeColor = function(new_color) {
        this.color = new_color;
    };
    this.getColor = function() {
        console.log('color: '+this.color);
    };
};

var apple1 = new Apple();
var apple2 = new Apple();
apple2.changeColor("green");
apple1.getColor();
apple2.getColor();
