// ----------------------- SCOPE ------------------------- //

// This sets a GLOBAL variable:
var X = 10;

// These functions both refer to the "X" variable:
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}

// Executes the functions (they print to document)
Add_numbers_1();
Add_numbers_2();

document.write("<br>")

// This function has a LOCAL variable in it:
function Add_numbers_3() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}

// This function tries to use the "Y" variable:
function Add_numbers_4() {
    document.write(Y + 100);
}

// Now execute these:
Add_numbers_3()
Add_numbers_4()

// We get a "Y is not defined" error on 4
// because Y was a LOCAL variable in a different function!
// CONSOLE IS SUPER HELPFUL FOR DEBUGGING

// ------------- CONDITIONAL STATEMENTS ------------------ //

// Conditional operators:
// == Is it equal?
// === Is it equal and of same data type?
// > Is it greater than?
// < Is it lesser than?
// >= Is it greater than or equal to?
// <= Is it lesser than or equal to?

// ---------------- IF STATEMENTS --------------------- //

// Conditional operators can be used with "if" statements.

// Simple example of an "if" statement:
if (1 < 2) {
    document.write("One is less than two!")
}

// Another example:
function get_Date() {
    // Date().getHours() is a method native to JS,
    // it returns the current hour of the day as an integer between 0 and 23
    if (new Date().getHours() < 18) {
        document.getElementByIdById("Greeting").innerHTML = "How are you today?";
    } 
} // if it's later than 6pm, this will do nothing, as there is no "else" statement.

// Assignment 134:
function sleepReminder() {
    if (new Date().getHours() > 22) {
        document.getElementById("goSleep").innerHTML = "You should get some sleep soon.";
    }
}

// Assignment 135:
if (0 > 1) {
    document.write("Something is really wrong, here")
}

// ---------------------- ELSE STATEMENTS ---------------------- //

// else statements specify something to do if the "if" statement is NOT satisfied:

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

// Assignment 137:
function howManyCars() {
    Cars = document.getElementById("Cars").value;
    if (Cars = 0 ) {
        Return = "Alright bro, bike to work, I dig it."
    }
    else if (Cars > 6) {
        Return = "Jeez. What are you, a Saudi prince?"
    }
    else {
        Return = "That is a reasonable number of cars."
    }
    document.getElementById("carsReturn").innerHTML = Return;
} // This works, but not quite as intended -- inputting "0" returns the else result.

// --------------------- ELSE IF STATEMENTS ---------------- //

// Example of using "else if" in a function:

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { // * note how this is constructed!
        Reply = "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
} // * Nested comparisons! If both conditions come out true, then true == true

