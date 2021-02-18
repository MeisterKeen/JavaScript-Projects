
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

isBlarg = (blarg) => blarg == "Blarg";

function someBlarg() {
	document.getElementById("demo2").innerHTML = stuff.some(isBlarg);
	}

someBlarg()