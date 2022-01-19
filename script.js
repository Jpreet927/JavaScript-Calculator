let currOperand_div = document.querySelector('.current-operation');
let prevOperand_div = document.querySelector('.previous-operation');
let allClear_div = document.querySelector('.clear-all');
let delete_div = document.querySelector('.delete-one');
let operands_divs = document.querySelectorAll('.number');
let operations_divs = document.querySelectorAll('.operation');
let equals_div = document.querySelector('.equals');
let decimal_div = document.querySelector('.decimal');

let currOperand = '';
let prevOperand = '';
let currOperation = '';
let result = null;
let hasDecimal = false;

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
    num1 = parseFloat(operand1);
    num2 = parseFloat(operand2);

    if (operation == '/') {
        result = divide(num1, num2);
    } else if (operation == 'x') {
        result = multiply(num1, num2);
    } else if (operation == '+') {
        result = add(num1, num2);
    } else if (operation == '-') {
        result = subtract(num1, num2);
    } else if (operation == '%') {
        result = modulus(num1, num2);
    }
    console.log(operation);
    return String(result.toFixed(2));
}

function createOperand(num) {
    currOperand += num;
    currOperand_div.textContent = currOperand;
}

allClear_div.addEventListener('click', () => {
    currOperand_div.textContent = '';
    currOperand = '';
    prevOperand_div.textContent = '';
    prevOperand = '';
    currOperation = '';
    hasDecimal = false;
})

delete_div.addEventListener('click', () => {

})

operands_divs.forEach((num) => {
    num.addEventListener('click', () => {
        createOperand(num.textContent);
    })
})

decimal_div.addEventListener('click', () => {
    if (hasDecimal === false) {
        createOperand(decimal_div.textContent);
        hasDecimal = true;
    }
})

operations_divs.forEach((op) => {
    op.addEventListener('click', () => {
        if (prevOperand_div.textContent == '' && currOperation == '') {
            prevOperand_div.textContent = currOperand;
            prevOperand = currOperand;

            currOperand_div.textContent = "";
            currOperand = '';

            currOperation = op.textContent;
            
        } else if (prevOperand_div.textContent != '' && currOperand_div.textContent != '' && currOperation != '') {
            prevOperand = prevOperand_div.textContent;
            currOperand = currOperand_div.textContent;
            result = operate(currOperation, prevOperand, currOperand);

            prevOperand_div.textContent = result;
            prevOperand = result;
            currOperand = '';
            currOperand_div.textContent = '';

            currOperation = op.textContent;
        }
        hasDecimal = false;
    })
})

equals_div.addEventListener('click', () => {
    if (currOperand == '' || prevOperand == '' || currOperation == '') {
        return
    } else {
        result = operate(currOperation, prevOperand, currOperand);
    }
    currOperation = '';
    currOperand_div.textContent = result;
})