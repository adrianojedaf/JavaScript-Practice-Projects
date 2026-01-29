let addButton = document.querySelector(".add");
let substractButton = document.querySelector(".substract");
let counterDisplay = document.querySelector(".counter-value");

let counter = 0;

function add() {
  counter += 1;
  updateCounterDisplay();
}

function substract() {
  if (counter > 0) {
    counter -= 1;
    updateCounterDisplay();
  } else {
    counter = 0;
  }
}

function updateCounterDisplay() {
  counterDisplay.textContent = counter;
}

addButton.addEventListener("click", add);
substractButton.addEventListener("click", substract);

updateCounterDisplay();