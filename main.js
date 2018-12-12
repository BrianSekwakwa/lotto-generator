const generateButton = document.querySelector('#genNumber');
const clearButton = document.querySelector('#clear');
const displayNumbers = document.querySelector('main');
let numberOfBalls = 0;

generateButton.addEventListener('click', function () {
  generatingNumbers();
});

clearButton.addEventListener('click', function () {
  displayNumbers.innerHTML = '';
  numberOfBalls = 0;
})

function generatingNumbers() {
  while (numberOfBalls < 6) {
    let randomNumber = Math.floor(Math.random() * 53)
    let displayElement = document.createElement('div');
    if (randomNumber === 0) {
      randomNumber += 1; 
    }
    displayElement.setAttribute('class','displayNumbers');
    displayElement.textContent = randomNumber;
    displayNumbers.appendChild(displayElement);
    numberOfBalls += 1;
  }
}
