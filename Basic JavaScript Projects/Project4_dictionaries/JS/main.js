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