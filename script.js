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
    let result = 0;
    switch (operation) {
        case "x": 
            result = multiply(operatorOne, operatorTwo);
            updateDisplay(result);
            return result;
        case "+": 
            result = add(operatorOne, operatorTwo);
            updateDisplay(result);
            return result;
        case "-": 
            result = subtract(operatorOne, operatorTwo);
            updateDisplay(result);
            return result;
        case "/":
            result = divide(operatorOne, operatorTwo);
            updateDisplay(result);
            return result;
    }
}

const display = document.querySelector(".display");
let displayValue = document.querySelector(".display-value");

function updateOperators (operatorNumber, input) {
    switch (operatorNumber) {
        case 1: 
            operatorOne = input;
            updateDisplay(operatorOne);
            break;
        case 2:
            operatorTwo = input;
            updateDisplay(operatorTwo);
            break;
        case 3:
            operatorOne += input;
            updateDisplay(operatorOne);
            break;
        case 4:
            operatorTwo += input;
            updateDisplay(operatorTwo);
            break;
    };
};
function updateOperation (input) {
    operation = input;
};
function updateDisplay(input) {
    display.removeChild(displayValue);
    displayValue.textContent = input;
    display.appendChild(displayValue);
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
    if (!opOne && !op && !opTwo) { // Scenario one: _ _ _
        if (!isNaN(input)) { // if input is #
            updateOperators(1, input);
        }
    } else if (opOne && !op && !opTwo) { // Scenario two: x _ _
        if (!isNaN(input)) { // if input is #
            updateOperators(3, input);
        }
        if (isNaN(input)) { // if input is string
            updateOperation(input);
        }
    } else if (opOne && op && !opTwo) { // Scenario three: x o _
        if (!isNaN(input)) { // if input is #
            updateOperators(2, input);
        }
        if (isNaN(input)) { // if input is string
            if (input != "=") {
                updateOperation(input);
            }
        }
    } else if (opOne && op && opTwo) { // Scenario four: x o x
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

