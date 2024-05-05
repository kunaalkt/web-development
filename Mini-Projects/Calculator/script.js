let calculate = '';
const pElement = document.querySelector('.result-text');
function updateExpression(operator) {
    calculate += operator;
    pElement.innerText = calculate;
}

function calculateExpression() {
    calculate = eval(calculate);
    pElement.innerText = calculate;
}

function clearExpression() {
    calculate = '';
    pElement.innerText = calculate;
}