// ------------ FORM FUNCTIONALITY ----------------- //

// Return an alert if a form field is empty:
function validateForm() {
    var x = document.forms["newsletter"]["Name"].value;
    if (x == "") {
        alert("Please enter your name and email address");
        return false;
    };
    var y = document.forms["newsletter"]["Email"].value;
    if (y == "") {
        alert("Please enter your name and email address");
        return false;
    }
}

