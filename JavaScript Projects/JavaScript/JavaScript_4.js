
// -------------- ARROW FUNCTIONS ------------------ //

// Standard function:
function fibonacci() {
    return "11235813"
}

// Same function, written as an arrow funciton:
fibonacci = () => "11235813"
// So much cleaner!

// Either way, we get the same output:
console.log(fibonacci()) // return "11235813"


// -------------- ARRAY SOME() METHOD ---------------- //

// The some() method looks through an array to check if one of them is "true"

var ages = [2, 10, 18, 20, 13, 15, 30];

//Using the arrow function to pass in a parameter of age
checkAge = (age) => age >= 18;

function myFunction() {
    // .some method will iterate through the array of ages and display the result.
    document.getElementById('displayAge').innerHTML = ages.some(checkAge);
}
myFunction() // returns "true"

// Some() looked through the array, performing the checkAge() function,
// right up until it found an array element that returned "true".
// "is one of these true?" some(): "true!"

var stuff = ["Blarg", "Uggo", "Stonk", "Moog"];

// I don't actually understand this syntax.
isBlarg = (blarg) => blarg == "Blarg";

function someBlarg() {
	document.getElementById("demo2").innerHTML = stuff.some(isBlarg);
	}

someBlarg()

// ------------ FURTHER NOTES ----------------- //

// document.querySelector() method returns the first element within a file that
// matches the selector specified. If no matches, returns null.
// document.querySelectorAll() will return a group of elements.
// EXAMPLE: 
// document.querySelectorAll("p"); returns all paragraph elements in a document.

// ParseFloat() parses a string and returns a floating point number.
// Determines whether the first character in a string is a number. If it is,
// it continues parsing until it reaches the end of the string. If the entire
// string is really a number, it returns the number in the series as a number.
// If the first character is not a number, it will return NaN.

// In JS, "!" (bang) means NOT.