

function clickFunction () {

let output = document.getElementById("output");
let text = document.getElementById("myText").value;

if (document.getElementById("myText").value.length == 0 || isNaN(document.getElementById("myText")) {
    output.innerHTML = "A NUMBER must be entered!";
} else if (text < 10) {
    output.innerHTML = "This number is small";
} else if (text > 19) {
    output.innerHTML = "This number is big";
} else {
    output.innerHTML = "This number is medium";
}
}

document.getElementById("btn").addEventListener("click", function(){console.log("Button Two Pressed")})
