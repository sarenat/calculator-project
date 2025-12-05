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

let operatorOne = 0;
let operatorTwo = 0;
let operation = "";

function operate (operatorOne, operatorTwo, operation) {
    switch (operation) {
        case "x": return multiply(operatorOne, operatorTwo);
        case "+": return add(operatorOne, operatorTwo);
        case "-": return subtract(operatorOne, operatorTwo);
        case "/": return divide(operatorOne, operatorTwo);
    }
}

function display() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", e => {
            const display = document.querySelector(".display");
            let value = document.querySelector(".display-value");

            display.removeChild(value);
            value.textContent = button.textContent;
            display.appendChild(value);
        });
    });
}
display();