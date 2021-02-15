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



// OBJECT: Encapsulated package of functions and parameters.
// CLASS: An extensible program-code-template for creating objects.
// CONSTRUCTOR: Gives the default state of any new instance of of the class
// that may be created. It's a state-template for creating an object of a class.

// Notes on classes and constructors:

//class Customer
//{
//    string FullName;
//    Boolean Active;
//    Customer(str name) {
//      Fullname = name;
//      Active = true;
//    }
//}

//Customer cust = new Customer("Brenda Smith");
// (creates a Customer object named "Brenda Smith", with Active = True)

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

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}