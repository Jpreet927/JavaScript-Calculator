let currOperation_div = document.querySelector('.current-operation');
let prevOperation_div = document.querySelector('.previous-operation');
let allClear_div = document.querySelector('.clear-all');
let delete_div = document.querySelector('.delete-one');
let operands_divs = document.querySelectorAll('.number');
let operations_divs = document.querySelectorAll('.operation');
let equals_div = document.querySelector('.equals');
let decimal_div = document.querySelector('.decimal');

let currOperand = '';
let prevOperand = '';
let result = null;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function modulus(a, b) {
    return a % b;
}

function operate(operation, operand1, operand2) {
    if (operation == '/') {
        result = divide(operand1, operand2);
    } else if (operation == 'x') {
        result = multiply(operand1, operadn2);
    } else if (operation == '+') {
        result = add(operand1, operand2);
    } else if (operation == '-') {
        result = subtract(operand1, operand2);
    } else if (operation == '%') {
        result = modulus(operand1, operand2);
    }
}

function createOperand(num) {
    currOperand += num;
    currOperation_div.textContent = currOperand;
}

allClear_div.addEventListener('click', () => {
    currOperation_div.textContent = '';
    currOperand = '';
})

operands_divs.forEach((num) => {
    num.addEventListener('click', () => {
        createOperand(num.textContent);
    })
})

console.log(operands_divs[1].textContent)