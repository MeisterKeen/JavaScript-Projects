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
    showSlides(slideIndex += n);
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
}


// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// FRUSTRATION ANGER DESPAIR WOE AND GRIEF
// I RUE THE DAY I DECIDED TO BECOME A CODER

// I could NOT get this BLASTED slideshow to display the first image on refresh.
// I tried everything! I hunted for every possible typo --
// And then I moved the <script> element from the head of the site, to the bottom
// of the <body>. Because fuck it, MAYBE IT'LL WORK THAT WAY.

// AND NOW IT WORKS
// I HATE IT. I HATE THAT IT WASN'T WORKING
// AND NOW I HATE THAT IT WORKS
// LOOK AT IT. LOOK AT THE SMUG LOOK ON ITS FACE.
// IT KNOWS WHAT IT DID.

// So anyway I guess I learned something.