const generateButton = document.querySelector("#genNumber");
const generatePowerBall = document.querySelector("#genPowerBall");
const clearNumbers = document.querySelector("#clearNumbers");
const clearPower = document.querySelector("#clearPowerBall");
const displayNumbers = document.querySelector("#display");
const displayPowerBall = document.querySelector("#displayPower");
let numberOfBalls = 0;
let numberOfBall = 0;

// running the functions after clicking the generate button
generateButton.addEventListener("click", function() {
  generatingNumbers();
});

generatePowerBall.addEventListener("click", function() {
  generatingPowerBall();
});

// Clearing the random 5 numbers for powerball
clearNumbers.addEventListener("click", function() {
  displayNumbers.innerHTML = "";
  numberOfBalls = 0;
});

// Clearing the powerball number
clearPower.addEventListener("click", function() {
  displayPowerBall.innerHTML = "";
  numberOfBall = 0;
});

// Generating random 5 numbers for the powerball
function generatingNumbers() {
  while (numberOfBalls < 5) {
    let randomNumber = Math.floor(Math.random() * 51);
    let displayElement = document.createElement("div");
    if (randomNumber === 0) {
      randomNumber += 1;
    }
    displayElement.setAttribute("class", "displayNumbers");
    displayElement.textContent = randomNumber;
    displayNumbers.appendChild(displayElement);
    numberOfBalls += 1;
  }
}
// Generating the power ball number
function generatingPowerBall() {
  while (numberOfBall < 1) {
    let randomNumber = Math.floor(Math.random() * 21);
    let displayElement = document.createElement("div");
    if (randomNumber === 0) {
      randomNumber += 1;
    }
    displayElement.setAttribute("class", "displayNumbers");
    displayElement.textContent = randomNumber;
    displayPowerBall.appendChild(displayElement);
    numberOfBall += 1;
  }
}
