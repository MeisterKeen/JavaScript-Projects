// -------------- STRING METHODS --------------------- //

// The six primitive data types of JavaScript:
// (1) String, (2) Number, (3) Boolean, (4) Null, (5) Symbol, (6) Undefined.
// Everything else (non-primitive data types) are objects.

// So what can we do with strings in JS?

function full_Sentence() {
    var Part_1 = "I have ";
    var Part_2 = "made this ";
    var Part_3 = "into a complate ";
    var Part_4 = "sentence.";
    var whole_sentence= Part_1.concat(Part_2, Part_3, Part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
} // concat() method concatenates a bunch of strings.

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33); //grabbing a section by character count!
    document.getElementById("Slice").innerHTML = Section;
} // slice() pulls a chunk out of a string. Interesting!

// So... a string is just an array of characters that can be called by index.
// Does this mean a string is actually a simple array?


//Playing with string methods:

// Find the length of a string:
 var blarg = "a'psjglnajd;flha;sldfhaamln aaksbjdf.;ajs;gahvaishfg";
 console.log(blarg.length); //return 52. Neat!

 //Find where a string occurs inside a string:
 console.log(blarg.indexOf("najd")); // "najd" occurs at index 7.


//Challenge 146:

console.log(blarg.toUpperCase()); // returns the whole keyboard-mash in uppercase. Heh.

console.log(blarg.search("g")); // returns the first instance of "g" -- index 5.

// indexOf() and search() actually do have important differences (research later)


// ------------------- NUMBER METHODS --------------------------- //

// toString() will return a number as a string:
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function messWithTypes() {
    var X = 1234            // Make a number variable
    Y = toString(X)         // Make a string out of it
    Z = typeof Y            // What data type is it?
    console.log(Z)          // Oh look, it's a string now. Neat!
}
messWithTypes();


// toPrecision() formats a number to a specified length.

function precision_Method() {
    var X = 12938.23987612985651141242; // big messy number, but we only want 10 digits
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
} // This returns the same number but cuts off everything after 10 places.

// Assignment 150:

function truncatePi() {
    var pi = 3.14159265358979; // Whoa, buddy. We don't need that much pi!
    var littlePi = pi.toPrecision(5);
    console.log(littlePi); // That's enough pi for anybody.
}
truncatePi() // returns 3.1416 -- OOOH LOOK IT ROUNDED CORRECTLY!


// Challenge 151:

// toFixed() converts a number to a string and only keeps the specified number of decimals
function fixPi() {
    var pi = 3.14159265358979;
    var fixedPi = pi.toFixed(4);
    console.log(fixedPi);
}
fixPi() // This method ALSO correctly rounds the result. Excellent.


// valueOf() returns the primitive value of a number.
function primitivePi () {
    var pi = 3.14159265358979;
    var primitivePi = pi.valueOf();
    console.log(primitivePi);
}
primitivePi() // This returns the full "primitive" value of the number.
// I wonder when or why this would be useful?

