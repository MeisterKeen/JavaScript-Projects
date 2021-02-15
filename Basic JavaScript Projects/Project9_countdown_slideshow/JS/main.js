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
    var i;
    // This creates an array of slides -- I could add more slides to the HTML!
    var slides = document.getElementsByClassName("mySlides");
    // Creates a matching array of "dots"
    var dots = document.getElementsByClassName("dot");
    // Returns to first slide if you hit "next" at the last slide:
    if (n > slides.length) {slideIndex = 1}
    // Goes to last slide if you hit "prev" at first slide (indexes to last item):
    if (n < 1) {slideIndex = slides.length}
    // Changes which slide is displayed according to value of i:
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Changes which dot has the "active" appearance according to value of i:
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Active slide is now displayed (display mode is no longer "none"):
    slides[slideIndex-1].style.display = "block";
    // Active dot now calls the "active" css class:
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
// Try sticking the <script> element in the header to see what I was seeing.