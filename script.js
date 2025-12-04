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
let operation = 0;

function operate (operatorOne, operatorTwo, operation) {
    switch (operation) {
        case "x": return multiply(operatorOne, operatorTwo);
        case "+": return add(operatorOne, operatorTwo);
        case "-": return subtract(operatorOne, operatorTwo);
        case "/": return divide(operatorOne, operatorTwo);
    }
}