// --------------- SWITCH STATEMENT ---------------------- //

function Dog_Function() {
    var Breed_Output;
    var Breeds = document.getElementById("Breed_Input").value;
    var Breed_String = " is a GOOD DOG!";
    switch(Breeds) {
        case "Pibble":
            Breed_Output = "Pibble" + Breed_String;
        break;
        case "Husky":
            Breed_Output = "Husky" + Breed_String;
        break;
        case "Poodle":
            Breed_Output = "Poodle" + Breed_String;
        break;
        case "Labrador":
            Breed_Output = "Labrador" + Breed_String;
        break;
        case "Mastiff":
            Breed_Output = "Mastiff" + Breed_String;
        break;
        case "Mutt":
            Breed_Output = "Mutt" + Breed_String;
        break;
        default:
        Breed_Output = "Please enter a breed exactly as written in the above list."
    }
    document.getElementById("Output").innerHTML = Breed_Output;
}

// ------------ FOR LOOP EXAMPLE ---------------- //

{ // simple way to use a for loop to traverse an array:
var numberArray = [2, 3, 6, 7, 11, 4];
for (var i = 0; i < numberArray.length; i++) {console.log(numberArray[i])}
} // note this syntax -- this is basically how for loops work
  // (create or invoke a variable; give a comparative statement; iterate the variable)

// ---------------- GET ELEMENTS BY CLASS NAME ------------ //

function Hello_World_Function() {
    var A = document.getElementsByClassName("click");
        // Catch that? We defined "A" as a method!
    A[0].innerHTML = "The text has changed!";
        // Now A contains not only the method but also an array of what was grabbed.
    console.log(A)
        // The console shows us that we actually captured quite a bit of data!
        // Including things like styles and the size of the displayed element.
        // There's more going on behind the scene, here...
}

// ----------------- 


{ // Playing with a canvas:
var canvas = document.getElementById("canvasBox");
var ctx = canvas.getContext("2d"); // dramatically simplifies the following code

// This will draw a circle:
ctx.beginPath();
ctx.arc(250, 125, 80, 0, 2 * Math.PI);
ctx.stroke();

// Draws a line diagonally across the canvas
ctx.moveTo(0, 0);
ctx.lineTo(500, 250);
ctx.stroke();
} 

{ // Create a gradient inside another canvas: 
var canvas = document.getElementById("canvasBox2");
var ctx = canvas.getContext("2d"); // dramatically simplifies the following code

var gradient = ctx.createLinearGradient(0, 0, 500, 0);
gradient.addColorStop(0, "steelBlue");
gradient.addColorStop(1, "beige");

ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 480, 230);

}