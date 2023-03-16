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
let firstPress = false;
let expressionOne;
let expressionTwo;
let operator;
let result;

// function addEventListeners(){
// }

allClearBtn.addEventListener("click", () => {
  calcDisplay.innerText = "";
  displayText = "";
  symbolCond = false;
  firstPress = false;
  expressionOne = 0;
  expressionTwo = 0;
  operator = "";
  result = 0;
  console.clear();
});

deleteBtn.addEventListener("click", () => {
  calcDisplay.innerText = calcDisplay.innerText.substring(
    0,
    calcDisplay.innerText.length - 1
  );
  if (calcDisplay.innerText.length === 0) {
    symbolCond = false;
  } else if (
    isNaN(calcDisplay.innerText.charAt(calcDisplay.innerText.length - 1))
  ) {
    symbolCond = false;
  } else symbolCond = true;
});

divideBtn.addEventListener("click", () => {
  if (symbolCond === true) {
    //calcDisplay.innerText += "/";
    symbolCond = false;
    if (firstPress === true) {
      expressionTwo = parseFloat(calcDisplay.innerText);
      calcDisplay.innerText = "";
      operate(operator, expressionTwo);
      operator = "/";
    } else if (firstPress === false) {
      operator = "/";
      expressionOne = parseFloat(calcDisplay.innerText);
      calcDisplay.innerText = "";
      firstPress = true;
    }
  }
});

multiplyBtn.addEventListener("click", () => {
  if (symbolCond === true) {
    //calcDisplay.innerText += "x";
    symbolCond = false;
    if (firstPress === true) {
      expressionTwo = parseFloat(calcDisplay.innerText);
      calcDisplay.innerText = "";
      operate(operator, expressionTwo);
      operator = "x";
    } else if (firstPress === false) {
      operator = "x";
      expressionOne = parseFloat(calcDisplay.innerText);
      calcDisplay.innerText = "";
      firstPress = true;
    }
  }
});

minusBtn.addEventListener("click", () => {
  if (symbolCond === true) {
    //calcDisplay.innerText = "";
    symbolCond = false;
    if (firstPress === true) {
      expressionTwo = parseFloat(calcDisplay.innerText);
      calcDisplay.innerText = "";
      operate(operator, expressionTwo);
      operator = "-";
    } else if (firstPress === false) {
      operator = "-";
      expressionOne = parseFloat(calcDisplay.innerText);
      calcDisplay.innerText = "";
      firstPress = true;
    }
  }
});

percentageBtn.addEventListener("click", () => {
  if (symbolCond === true) {
    symbolCond = false;
    if (firstPress === true) {
      expressionTwo = parseFloat(calcDisplay.innerText);
      calcDisplay.innerText = "";
      operate(operator, expressionTwo);
      operator = "%";
    } else if (firstPress === false) {
      operator = "%";
      expressionOne = parseFloat(calcDisplay.innerText);
      calcDisplay.innerText = "";
      firstPress = true;
    }
  }
});

plusBtn.addEventListener("click", () => {
  if (symbolCond === true) {
    symbolCond = false;
    if (firstPress === true) {
      expressionTwo = parseFloat(calcDisplay.innerText);
      calcDisplay.innerText = "";
      operate(operator, expressionTwo);
      operator = "+";
    } else if (firstPress === false) {
      operator = "+";
      expressionOne = parseFloat(calcDisplay.innerText);
      calcDisplay.innerText = "";
      firstPress = true;
    }
  }
});

dotBtn.addEventListener("click", () => {
  if (symbolCond === true) {
    calcDisplay.innerText += ".";
    symbolCond = false;
  }
});

oneBtn.addEventListener("click", () => {
  if (calcDisplay.innerText === "") {
    calcDisplay.innerText = "1";
    symbolCond = true;
  } else calcDisplay.innerText += "1";
  symbolCond = true;
});

twoBtn.addEventListener("click", () => {
  if (calcDisplay.innerText === "") {
    calcDisplay.innerText = "2";
    symbolCond = true;
  } else calcDisplay.innerText += "2";
  symbolCond = true;
});

threeBtn.addEventListener("click", () => {
  if (calcDisplay.innerText === "") {
    calcDisplay.innerText = "3";
    symbolCond = true;
  } else calcDisplay.innerText += "3";
  symbolCond = true;
});

fourBtn.addEventListener("click", () => {
  if (calcDisplay.innerText === "") {
    calcDisplay.innerText = "4";
    symbolCond = true;
  } else calcDisplay.innerText += "4";
  symbolCond = true;
});

fiveBtn.addEventListener("click", () => {
  if (calcDisplay.innerText === "") {
    calcDisplay.innerText = "5";
    symbolCond = true;
  } else calcDisplay.innerText += "5";
  symbolCond = true;
});

sixBtn.addEventListener("click", () => {
  if (calcDisplay.innerText === "") {
    calcDisplay.innerText = "6";
    symbolCond = true;
  } else calcDisplay.innerText += "6";
  symbolCond = true;
});

sevenBtn.addEventListener("click", () => {
  if (calcDisplay.innerText === "") {
    calcDisplay.innerText = "7";
    symbolCond = true;
  } else calcDisplay.innerText += "7";
  symbolCond = true;
});

eightBtn.addEventListener("click", () => {
  if (calcDisplay.innerText === "") {
    calcDisplay.innerText = "8";
    symbolCond = true;
  } else calcDisplay.innerText += "8";
  symbolCond = true;
});

nineBtn.addEventListener("click", () => {
  if (calcDisplay.innerText === "") {
    calcDisplay.innerText = "9";
    symbolCond = true;
  } else calcDisplay.innerText += "9";
  symbolCond = true;
});

zeroBtn.addEventListener("click", () => {
  if (calcDisplay.innerText === "") {
    calcDisplay.innerText = "0";
    symbolCond = true;
  } else calcDisplay.innerText += "0";
  symbolCond = true;
});

equalsBtn.addEventListener("click", () => {
  expressionTwo = parseFloat(calcDisplay.innerText);
  operate(operator, expressionTwo);
  calcDisplay.innerText = expressionOne;
  firstPress = false;
});

function operate(operator, expressionTwo) {
  if (operator === "/") {
    return divideNum(expressionTwo);
  } else if (operator === "x") {
    return multiplyNum(expressionTwo);
  } else if (operator === "-") {
    return subtractNum(expressionTwo);
  } else if (operator === "+") {
    return addNum(expressionTwo);
  } else if (operator === "%") {
    return percentNum(expressionTwo);
  }
}

function addNum(expressionTwo) {
  expressionOne = expressionOne + expressionTwo;
  console.log("ans = " + expressionOne);
  // calcDisplay.innerText = expressionOne;
  return expressionOne;
}

function subtractNum(expressionTwo) {
  expressionOne = expressionOne - expressionTwo;
  console.log("ans = " + expressionOne);
  // calcDisplay.innerText = expressionOne;
  return expressionOne;
}

function multiplyNum(expressionTwo) {
  expressionOne = expressionOne * expressionTwo;
  console.log("ans = " + expressionOne);
  // calcDisplay.innerText = expressionOne;
  return expressionOne;
}

function divideNum(expressionTwo) {
  expressionOne = expressionOne / expressionTwo;
  console.log("ans = " + expressionOne);
  // calcDisplay.innerText = expressionOne;
  return expressionOne;
}

function percentNum(expressionTwo) {
  expressionOne = expressionOne / 100;
  console.log("ans = " + expressionOne);
  return expressionOne;
}
