function add (x, y) {
    return Number(x) + Number(y);
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
let operation = null;

function operate (operatorOne, operation, operatorTwo) {
    switch (operation) {
        case "x": return multiply(operatorOne, operatorTwo);
        case "+": return add(operatorOne, operatorTwo);
        case "-": return subtract(operatorOne, operatorTwo);
        case "/": return divide(operatorOne, operatorTwo);
    }
}

const display = document.querySelector(".display");
let displayValue = document.querySelector(".display-value");

function updateOperators (operatorNumber, input) {
    switch (operatorNumber) {
        case 1: 
            operatorOne = input;
            break;
        case 2:
            operatorTwo = input;
            break;
        case 3:
            operatorOne += input;
            break;
        case 4:
            operatorTwo += input;
            break;
    };
};
function updateOperation (input) {
    operation = input;
};
function updateDisplay() {

}
function clearDisplay () {
    operatorOne = null;
    operatorTwo = null; 
    operation = null;

    display.removeChild(displayValue);
    displayValue.textContent = 0;
    display.appendChild(displayValue);
}
function evaluate (opOne, op, opTwo, input) {
    if (!opOne && !op && !opTwo) { // Scenario one
        if (!isNaN(input)) { // if input is #
            updateOperators(1, input);
        }
    } else if (opOne && !op && !opTwo) { // Scenario two
        if (!isNaN(input)) { // if input is #
            updateOperators(3, input);
        }
        if (isNaN(input)) { // if input is string
            updateOperation(input);
        }
    } else if (opOne && op && !opTwo) { // Scenario three
        if (!isNaN(input)) { // if input is #
            updateOperators(2, input);
        }
        if (isNaN(input)) { // if input is string
            if (input != "=") {
                updateOperation(input);
            }
        }
    } else if (opOne && op && opTwo) { // Scenario four 
        if (!isNaN(input)) { // if input is #
            updateOperators(4, input);
        }
        if (isNaN(input)) { // if input is string
            const newOperatorOne = operate(opOne, op, opTwo);
            operatorOne = newOperatorOne;

            operatorTwo = null;
            operation = null;

            if (input != "=") {
                updateOperation(input);
            }
        }
    }
}

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const input = button.textContent;
        evaluate(operatorOne, operation, operatorTwo, input);
    });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const input = button.textContent; 
        evaluate(operatorOne, operation, operatorTwo, input);
    });
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => clearDisplay());

