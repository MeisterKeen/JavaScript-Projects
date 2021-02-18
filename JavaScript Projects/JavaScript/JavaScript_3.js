

// -------- PLAYING WITH HTML DATA ATTRIBUTES --------- //

function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is the hero ship of the " + character.innerHTML + " universe!");
}