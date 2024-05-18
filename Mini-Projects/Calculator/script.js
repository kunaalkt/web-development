const pElement = document.querySelector(".js-result-text");
const operandButtonElement = document.querySelectorAll(".js-operand-btn");
const operatorButtonElement = document.querySelectorAll(".js-operator-btn");
const calculateButtonElement = document.querySelector(".js-calculate-btn");
const backButtonElement = document.querySelector(".js-back-btn");
const allClearButtonElement = document.querySelector(".js-ac-btn");

let calculate = "";

document.body.addEventListener("keydown", (event) => {
  document.activeElement.blur();
  if (
    (event.key >= 0 && event.key <= 9) ||
    event.key === "." ||
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    updateExpression(event.key);
  } else if (event.key === "Enter" || event.key === "=") {
    calculateExpression();
  } else if (event.key === "Backspace") {
    backExpression();
  } else if (event.key === "c") {
    allClearExpression();
  }
});

operandButtonElement.forEach((button) => {
  button.addEventListener("click", () => {
    updateExpression(button.innerText);
  });
});

operatorButtonElement.forEach((button) => {
  button.addEventListener("click", () => {
    updateExpression(button.innerText);
  });
});

calculateButtonElement.addEventListener("click", calculateExpression);

backButtonElement.addEventListener("click", backExpression);

allClearButtonElement.addEventListener("click", allClearExpression);

function updateExpression(operator) {
  calculate += operator;
  renderCalculate();
}

function calculateExpression() {
  if (calculate) {
    try {
      calculate = eval(calculate).toString();
      renderCalculate();
    } catch (e) {
      alert("Invalid Expression!");
    }
  }
}

function backExpression() {
  calculate = calculate.slice(0, -1);
  renderCalculate();
}

function allClearExpression() {
  calculate = "";
  renderCalculate();
}

function renderCalculate() {
  if (calculate.length > 20) {
    pElement.style.fontSize = "25px";
    pElement.innerText = calculate;
  } else if (calculate.length > 15) {
    pElement.style.fontSize = "30px";
    pElement.innerText = calculate;
  } else {
    pElement.style.fontSize = "45px";
    pElement.innerText = calculate;
  }
}
