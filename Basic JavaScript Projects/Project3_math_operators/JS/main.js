function addition() {
    var twoPlusTwo = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + twoPlusTwo;
}

function subtraction() {
    var fiveMinusTwo = 5 - 2;
    document.getElementById("moreMath").innerHTML = "5 - 3 = " + fiveMinusTwo;
}

function multiplication() {
    var sixTimesEight = 6 * 8;
    document.getElementById("evenMoreMath").innerHTML = "6 * 8 = " + sixTimesEight;
}

function division() {
    var backwardsMultiply = 48 / 6;
    document.getElementById("stillMoreMath").innerHTML = "48 / 6 = " + backwardsMultiply;
}

function bunchaMath() {
    var shitTonOMath = (5 + 3) * 10 / 18;
    document.getElementById("ohGodTooMuchMath").innerHTML = "(5 + 3) * 10 / 18 = " + shitTonOMath;
}

function modulate() {
    var modulatory = (25 % 6);
    document.getElementById("mathapalooza").innerHTML = "25 % 6 r= " + modulatory;
}

function negate() {
    var x = 10;
    document.getElementById("mathalympics").innerHTML = "The negation of " + x + " is " + -x;
}

function increment() {
    var z = 5;
    z++;
    document.getElementById("mathgate").innerHTML = "5 incremented once is " + z;
}

function decrement() {
    var c = 5.25;
    c--;
    document.getElementById("mathament").innerHTML = "5.25 decremented once is " + c;
}

function randomize() {
    document.getElementById("randomath").innerHTML = (Math.random() * 100);
}

function pime() {
    document.getElementById("piemath").innerHTML = (Math.PI);
}