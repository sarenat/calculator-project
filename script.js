function add (x, y) {
    return x + y;
}
function subtract (x, y) {
    return x - y;
}
function multiply (x, y) {
    return x * y;
}
function divide (x, y) {
    return x / y;
}

let operatorOne = null;
let operatorTwo = null;
let operation = "";

function operate (operatorOne, operatorTwo, operation) {
    switch (operation) {
        case "x": return multiply(operatorOne, operatorTwo);
        case "+": return add(operatorOne, operatorTwo);
        case "-": return subtract(operatorOne, operatorTwo);
        case "/": return divide(operatorOne, operatorTwo);
    }
}

const display = document.querySelector(".display");
let displayValue = document.querySelector(".display-value");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", e => {
        display.removeChild(displayValue);
        displayValue.textContent += button.textContent;
        display.appendChild(displayValue);
    });
});

const operatorButtons = document.querySelectorAll(".operator");

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", e => {
    display.removeChild(displayValue);
    displayValue.textContent = null;
    display.appendChild(displayValue);
});