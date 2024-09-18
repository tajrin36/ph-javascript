console.log("hello");

//way-2 onclick button
function makered() {
  document.body.style.backgroundColor = "red";
}

//way -3 onclick button
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeblue;

function makeblue() {
  document.body.style.backgroundColor = "blue";
}

//way-4
const makePink = document.getElementById("make-pink");
makePink.addEventListener("click", makepink);

function makepink() {
  document.body.style.backgroundColor = "pink";
}

//way-5
const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

//way-6
document.getElementById("make-orange").addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
});
