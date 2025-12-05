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
    button.addEventListener("click", () => {
        display.removeChild(displayValue);
        if (displayValue.textContent != 0) displayValue.textContent += button.textContent;
        else displayValue.textContent = button.textContent;
        display.appendChild(displayValue);
    });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        operation = button.textContent;
    });
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    display.removeChild(displayValue);
    displayValue.textContent = 0;
    display.appendChild(displayValue);
});