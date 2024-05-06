let calculate = "";
const pElement = document.querySelector(".js-result-text");

const operandButtonElement = document.querySelectorAll(".js-operand-btn");
operandButtonElement.forEach((button) => {
  button.addEventListener("click", () => {
    updateExpression(button.innerText);
  });
});

const operatorButtonElement = document.querySelectorAll(".js-operator-btn");
operatorButtonElement.forEach((button) => {
  button.addEventListener("click", () => {
    updateExpression(button.innerText);
  });
});

const calculateButtonElement = document.querySelector(".js-calculate-btn");
calculateButtonElement.addEventListener("click", calculateExpression);

const clearButtonElement = document.querySelector(".js-clr-btn");
clearButtonElement.addEventListener("click", clearExpression);

function updateExpression(operator) {
  calculate += operator;
  pElement.innerText = calculate;
}

function calculateExpression() {
  if (calculate) {
    calculate = eval(calculate);
    if (calculate.toString().length > 15) {
      pElement.style.fontSize = "35px";
      pElement.innerText = calculate;
    } else if (calculate.toString().length > 30) {
      pElement.style.fontSize = "25px";
      pElement.innerText = calculate;
    }
    pElement.innerText = calculate;
  }
}

function clearExpression() {
  calculate = "";
  pElement.innerText = calculate;
}
