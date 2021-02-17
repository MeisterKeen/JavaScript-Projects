// ----------------- LOOPS ---------------------------- //

function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X; // Digit becomes the string "<br> + (whatever X is)"
        X++; //increment X
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}

// Assignment 179:
function Call_Loop() { // Let's do the fibonacci sequence!
    var fib0 = 0;
    var fib1 = 1;
    var fibNext; // I figured out I needed a third variable to store the result of 0 and 1
    var fibonacci = ""; // needs to be a string to work right
    while (fib1 < 14) {
        fibonacci += fib1;
        fibNext = fib0 + fib1;
        fib0 = fib1;
        fib1 = fibNext;
    }
    document.getElementById("Loop").innerHTML = fibonacci;
} // returns "11235813" -- perfect


// playing with string length:

var blarg = "This is a biiiiiiig 'ol string, yes sir indeed it is."
console.log(blarg.length) // returns 53
//haven't I seen this used to determine the number of elements in an array?


// key difference between for loops and while loops:

// A while loop determines its own escape -- we don't know the exact number of iterations
// going in, so we say "as long as the counter is less than 'X' we keep looping"

// a for loop is used when the number of iterations is known -- such as the exact number of
// elements in an array to be traversed. We can grab the length of the array and then use it
// as the number of iterations of the loop.

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// --------------------- ARRAYS --------------------- //

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "Sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "in this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function array_Function() {
    var fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
    document.getElementById("Array").innerHTML = "The third number in the fibonacci sequence is \"" +
        fibonacciNumbers[2] + "\" ."
}

// ------------------- CONSTANTS ----------------------- //

// This function creates an array which is itself a constant:
function guitar_Constant() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Guitar!").innerHTML = "The cost of the " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price;
} // You can add the "price" property to it, but otherwise the constant stays constant.

// Assignment 195:
function constant_function() {
    const KeenCar = {Make:"Oldsmobile", Model:"Bravada", Year:"2000", Color:"Beige"};
    KeenCar.Color = "Red";
    KeenCar.Tires = "Bald";
    document.getElementById("Constant").innerHTML = "Keen's car is a " + 
        KeenCar.Color + " " + KeenCar.Make + ". His car's tires are " + KeenCar.Tires;
} // It did actually let me change the color to "Red". Odd.

// ------------------- MORE ON SCOPE -------------------- //

var X = 82; // Establish variable 82, returns 82 at console.
console.log(X);
{
    let X = 33; // This variable has block scope -- within this block, X is 33.
    console.log(X);
}
console.log(X); // This now returns 82 -- we're not in the block where X is 33.

// Do this the other way around and the outputs would be 82, 33, 33.
// var can't have block scope!

// To review, in order of specificity:
// GLOBAL SCOPE: applies to the entire script
// LOCAL SCOPE: applies to the function it's in
// BLOCK SCOPE: applies within its code block {}

// ----------------- USING RETURN STATEMENT ------------------ //

//Challenge 200:

function meh() {
    return "blarg"; // blarg!
} // for some reason, JS won't let me call this function blarg().

function blargFunction() {
    document.getElementById("blarg").innerHTML = meh();
}

// ---------------------- OBJECTS ---------------------------- //

//Example of an object:
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();


// Assignment 203:

let machine = {
    processor: "Ryzen 7 ",
    motherboard: "ASUS Rog Strix B-450 ",
    memory: "32GB DDR4 ",
    storage: "M.2 512GB SSD ",
    brag : function() {
        return "My computer has a " + this.processor + "processor with " + this.memory + 
        " memory. Storage is " + this.storage + "." ;
    }
};
document.getElementById("Computer").innerHTML = machine.brag();

// Neato! That's an actual object!
// It has properties and a method!

// --------------------- CHALLENGES --------------------- //

//Challenge: 204
// Write a loop with a break statement, and a loop with a continue statement.

// break: a command that escapes a loop.
function breakFunction() {
    var text = "";
    var i ;
    for (i = 0; i < 5; i++) { // iterate 5 times
        if (i === 3) {break;} // break when it reaches 3
       text += i + "  ";
    };
    console.log(text);
}; // Without the break, it would have stopped counting when i = 5
breakFunction();

// continue: break the loop for one iteration.
function continueFunction() {
    var text = ""
    var i ; 
    for (i = 0; i < 5; i++) { // iterate 5 times
        if (i === 3) {continue;} // continue when i is 3
        text += i + "   "
    };
    console.log(text);
}; // So the "continue" function causes the loop not to run if the conditional is true!
continueFunction();

// ---------------------

