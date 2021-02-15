// ------------------ TERNARY OPERATORS ----------------------//

//console.log(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");

function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}  // So can I use ? and : to branch my code?

function Voter_Age() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age > 19) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}


// --------------- CLASSES AND CONSTRUCTORS --------------- //

// OBJECT: Encapsulated package of functions and parameters.
// CLASS: An extensible program-code-template for creating objects.
// CONSTRUCTOR: Gives the default state of any new instance of of the class
// that may be created. It's a state-template for creating an object of a class.

// Keywords!
// "this" is a keyword which references the object that a given function
//  belongs to. "new" is a keyword used to create a new object of a class.

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
} // ^^^^ THIS, the "Vehicle()"" function, IS A CONSTRUCTOR.

// Make a bunch of new Vehicle objects:
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawwk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");


// I hooked this to a clickable <p> element:
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}


// Step 123: "Open main.js and utilize the new keyword. Save the file."
// "Successfully run index.html in the browser."

// What, just use the "new" keyword somewhere? What's the button hook to?
// I don't understand what this assignment is asking me to do.
// I can make a new vehicle:

var Keen = new Vehicle("Oldsmobile", "Bravada", 2000, "Beige");

// OK, I made a new vehicle.
// Now I'll hook the button to a function:

//function KeenCar() {
//    document.getElementById("New_and_This").innerHTML = 
//    "Keen drives a " + Keen.Vehicle_Color + "-colored " + Keen.Vehicle_Model +
//    " built by " + Keen.Vehicle.Make + " in " + Keen.Vehicle_Year;
//}  // No worky. Why no work?
// This looks exactly like myFunction() above. Why. No. Worky?

//OH YOU SONS A BITCHES -- ok, I'm going to comment out that function above
//and fix it by removing the keywords from the variables!
//"New_and_This" must be the problem, right?

//function KeenCar() {
//    document.getElementById("carkeen").innerHTML = 
//    "Keen drives a " + Keen.Vehicle_Color + "-colored " + Keen.Vehicle_Model +
//    " built by " + Keen.Vehicle.Make + " in " + Keen.Vehicle_Year;
//} // STILL NO WORKY! WHY?
// NO, FKIN SRSLY, WHY? DAMMIT.

// Let's try to debug this
console.log(Keen)

// Console prints the whole array of properties of "Keen" just fine.
// But then throws an error 'Cannot read property "Make" of undefined'
// when I press the button.
// YOU LYING WHORE, THE PROPERTIES ARE RIGHT. THERE.
// YOU JUST READ THEM!!!!

//Oh God dammit I am an idiot.

//It was a typo.

function KeenCar() {
    document.getElementById("carkeen").innerHTML = 
    "Keen drives a " + Keen.Vehicle_Color + "-colored " + Keen.Vehicle_Model +
    " made by " + Keen.Vehicle_Make + " in " + Keen.Vehicle_Year;
}

// "Keen.Vehicle.Make" was the problem.
// Should be "Keen.Vehicle_Make"
// It was a damn typo all along.
// I feel like there's a profound lesson to be learned from this.



//var else = "Haha no worky";
//console.log(else);
// "SyntaxError: Unexpected token 'else'"
// Yep ok, so that doesn't work.

//Challenge: write an object constructor function
function Dog(Breed, Age,) {
    this.Dog_Breed = Breed;
    this.Dog_Age = Age;
} // This function needs a boolean "Goodboy = true"

var Sharky = new Dog("Mixed Pitbull", "4");
//WHOOZAGOOBOY? YES YOU ARE!


// --------------- IDENTIFIERS AND LITERALS ------------

// IDENTIFIER: a name for something.
// In JS: identifiers are names of variables, functions, keywords and labels.
var X = 10;
// "X" is the IDENTIFIER in the line above.

//LITERAL: a value! In var X = 10; the integer 10 is the literal.
var Y = "Charlie";
// "Charlie" is the literal, here ^

// ------------------ NESTED FUNCTIONS -------------------

// Functions can be nested!

function count_Function() {
    document.getElementById("Counting").innterHTML = count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
} //Literally just adds 1 to 9 and returns 10. Super cool, tho.

// Challenge: write and execute a nested function:
function divideZero() {
    document.getElementById("Nested_Function").innerHTML = divide();
    function divide() {
        var numerator = 1
        function blackHole() {numerator / 0;}
        blackHole();
        return numerator;
    }
}// lol, just returns "1"

