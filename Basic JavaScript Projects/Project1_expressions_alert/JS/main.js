function My_First_Function() { 
    //Define the function
    var str = "This text is green!";
    //Variable "str" is now a string of text
    var result = str.fontcolor("green");
    //Sets font color in the string to green
    document.getElementById("Green_Text").innerHTML = result;
    //This should put the string into the button element.
}

//Put a couple strings into the X and Y variables:
var X = "A wise man once said: ";
var Y = "\"Baseball wrong! Man with four ball cannot walk\"";

//Add colors to both variables
var X = X.fontcolor("red");
var Y = Y.fontcolor("blue");

//Concatenates and writes the strings to the page
document.write(X + Y);

//Commits the Cardinal Sin of forcing the user to click off a pop-up.
window.alert("This is a pop-up! I vow to NEVER USE THESE if I can possibly avoid it.");
//Seriously, this is right up there with autoplay MIDI songs from the
//Geocities days. Remember Geocities? Those were the days, man.
//Anyway, pop-ups are a sin, no matter what they're for.
//Screw your ads, my adblocker stays on, by Crom!