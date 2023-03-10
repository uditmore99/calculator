const calcDisplay = document.getElementById("displayCalc");

const allClearBtn = document.getElementById("allClear");
const percentageBtn = document.getElementById("percentage");
const deleteBtn = document.getElementById("delete");
const divideBtn = document.getElementById("divide");

const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const multiplyBtn = document.getElementById("multiply");

const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const minusBtn = document.getElementById("minus");

const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const plusBtn = document.getElementById("plus");

const zeroBtn = document.getElementById("zero");
const dotBtn = document.getElementById("dot");
const equalsBtn = document.getElementById("equals");

let displayText = "";
let symbolCond = false;

// function addEventListeners(){
// }

allClearBtn.addEventListener("click", () => {
  calcDisplay.innerText = "";
  symbolCond = false;
});

percentageBtn.addEventListener("click", () => {
  if (symbolCond === true) {
    calcDisplay.innerText += "%";
    symbolCond = false;
  }
});

deleteBtn.addEventListener("click", () => {
  calcDisplay.innerText = calcDisplay.innerText.substring(
    0,
    calcDisplay.innerText.length - 1
  );
  if (isNaN(calcDisplay.innerText.charAt(calcDisplay.innerText.length - 1))) {
    symbolCond = false;
  } else symbolCond = true;
});

divideBtn.addEventListener("click", () => {
  if (symbolCond === true) {
    calcDisplay.innerText += "/";
    symbolCond = false;
  }
});

multiplyBtn.addEventListener("click", () => {
  if (symbolCond === true) {
    calcDisplay.innerText += "x";
    symbolCond = false;
  }
});

minusBtn.addEventListener("click", () => {
  if (symbolCond === true) {
    calcDisplay.innerText += "-";
    symbolCond = false;
  }
});

plusBtn.addEventListener("click", () => {
  if (symbolCond === true) {
    calcDisplay.innerText += "+";
    symbolCond = false;
  }
});

dotBtn.addEventListener("click", () => {
  if (symbolCond === true) {
    calcDisplay.innerText += ".";
    symbolCond = false;
  }
});

oneBtn.addEventListener("click", () => {
  calcDisplay.innerText += "1";
  symbolCond = true;
});

twoBtn.addEventListener("click", () => {
  calcDisplay.innerText += "2";
  symbolCond = true;
});

threeBtn.addEventListener("click", () => {
  calcDisplay.innerText += "3";
  symbolCond = true;
});

fourBtn.addEventListener("click", () => {
  calcDisplay.innerText += "4";
  symbolCond = true;
});

fiveBtn.addEventListener("click", () => {
  calcDisplay.innerText += "5";
  symbolCond = true;
});

sixBtn.addEventListener("click", () => {
  calcDisplay.innerText += "6";
  symbolCond = true;
});

sevenBtn.addEventListener("click", () => {
  calcDisplay.innerText += "7";
  symbolCond = true;
});

eightBtn.addEventListener("click", () => {
  calcDisplay.innerText += "8";
  symbolCond = true;
});

nineBtn.addEventListener("click", () => {
  calcDisplay.innerText += "9";
  symbolCond = true;
});

zeroBtn.addEventListener("click", () => {
  calcDisplay.innerText += "0";
  symbolCond = true;
});
