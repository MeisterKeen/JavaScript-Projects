
function writeString() {
    document.getElementById("JSme").innerHTML = "Hello, World"
}
writeString();

function addAttribute() {
    var p = document.getElementsByTagName("p")[0];
    var att = document.createAttribute("style");
    att.value = "color:blue"
    p.setAttributeNode(att);
}
addAttribute();