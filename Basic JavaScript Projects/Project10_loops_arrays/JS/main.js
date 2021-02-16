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

