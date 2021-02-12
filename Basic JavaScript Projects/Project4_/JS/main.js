function my_Dictionary() {
    var Animal = { // Note on syntax: the dictionary is a "var",
        Species:"Dog", // with listed Key:Value pairs inside
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!",
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}  // Note on syntax-- dictionary title DOT key, returns value



function bad_Dictionary() {
    var Car = {
        Make:"Oldsmobile", //note: this is a type of array. Commas, not semicolons!
        Model:"Bravada",
        Year:"2000",
        Color:"Beige",
        //Whoops! TWo of the same key:
        Year:"2001", //Looks like the second "Year" value takes precedence.
    };
    delete Car.Year; //deleting the "Year" key removes both values, returns "undefined"
    document.getElementById("myCar").innerHTML = Car.Year;
}

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

document.write(2E310)
//To infinity... AND BELOW!
document.write(-2E310)
// 2E310 or its negative is beyond the number limit of Javascript.
// Is there a hacky way to get around that limit? Why would you ever need to?