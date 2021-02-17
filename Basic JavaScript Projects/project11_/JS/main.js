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