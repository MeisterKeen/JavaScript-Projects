// countdown widget
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if (seconds == -1) {
        alert("Time's up!");
    }
        }
        tick();
} // it keeps counting after 0! Lol!!!



// ------------ SLIDESHOW ------------------- //

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex +- n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;                  // Interesting -- grabbing by class name instead of ID
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    console.log(slides); //Sticking this in to try to debug something
    console.log(dots); 
} // This is working, except it is NOT displaying a slide until I click a dot.

// I have tried everything I can think of, including duplicating this entire project,
// and copy-pasting the w3schools code whole cloth, and I can't figure out how to make
// the damn thing display an image before manually clicking a dot. 

// I have absolutely no solutions to this.
