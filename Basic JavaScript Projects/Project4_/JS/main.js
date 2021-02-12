function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!",
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}


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