
// --------------- DATA TYPES ---------------- //

function datatype() {
    document.getElementById("ofType").innerHTML = (typeof "Car.Model");
} // typeof will return the data type of the variable or value asked

function blackHole() {
    document.getElementById("geezRick").innerHTML = 0/0;
} // Dividing by zero returns NaN (Not a Number)

function is7ANumber() {
    var isit = "seven";
    var itis = isNaN(isit)
    document.getElementById("numero").innerHTML = itis
} // isNaN asks if the data is a number.

// ----------------- BOOLEANS -------------------- //

document.write("Is ten greater than two? ... " + (10 > 2));
// should return "true"

document.write(" | Is ten lesser than two? ... " + (10 < 2));
// returns "false"

// ----------------- CONSOLE ---------------------- //

// this will log the result/output in the console -- viewable in the brower
console.log(2 + 2);
// will return 4 -- this number now appears in the console.

console.log("Hello, console!")

// -------------------- TYPE COERCION ----------------- //

document.write("10" + 5)
// We are forcing Javascript to concatenate a "5" on the string.
// This does NOT return the integer 15! This returns the STRING "105"

// What if we put the integer first, and add the string?
var coerce = (10 + "5");
console.log(typeof coerce)
// returns "string" -- so (10 + "5") gets the same result as ("10" + 5)
// Javascript defaults to string data type?

// to get a "false" in the console:
console.log(10 < 2);
// console is handy for testing wacky JS stuff.

// ------------------ COMPARISON ------------------------ //

// == is direct exact comparison. X == Y "is X exactly what Y is?"
console.log("10" == 10);
// And yet, the above returns "true" -- WHAT BLACK MAGIC IS THIS!?
console.log("Ten" == 10);
// This returns "false" -- the string "Ten" is not equal to integer 10. HMM, THONK

// OH SNAP, the triple equals === checks for data type, too!
console.log("10" === 10);
// This returns false.
console.log(10 === 8); //false, obviously
// OK I get it.

// --------------- LOGIAL OPERATORS ---------------- //

// There are 3 logical operators:
// AND - written && (ampersands)
// OR - written || (pipes)
// NOT - written ! (exclam)

console.log(5 > 2 && 10 > 4);
// is 5 greater than 2, AND is 10 greater than 4? Return TRUE

console.log(5 > 10 || 10 > 4);
// one is true, the other isn't, but we used OR so return TRUE

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
} // Note the syntax here. Let's try this in console...

console.log( !(10>20) ) //Ok, this worked.
// So for some reason you don't do (20 ! 10) "twenty NOT ten"
// NOT isn't a comparison, it FLIPS a boolean. 20 > 10 should be "true"
// But NOT(20 > 10) is "false" -- NOT false is true, NOT true is false.