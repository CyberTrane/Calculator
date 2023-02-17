function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'You Silly Goose!';
    } else {
        return num1 / num2;
    }
}

function operate(operator, num1, num2) {
    if (operator === 'add') {
        return add(num1, num2);
    } else if (operator === 'subtract') {
        return subtract(num1, num2);
    } else if (operator === 'multiply') {
        return multiply(num1, num2);
    } else if (operator === 'divide') {
        return divide(num1, num2);
    } 
}

function populateDisplay(e) {
    if (displayBool) {
        display.textContent = '';
        displayBool = false;
        operatorBool = false;
        equalsBool = false;
    }

    if (this.textContent === '.' && display.textContent.includes('.')) {
        return
    } else {
        display.textContent += this.textContent;
    }
}

function deleteDigit() {
    if (display.textContent !== '') {
        let temp = display.textContent;
        const arr = temp.split('');
        arr.pop();
        display.textContent = '';
        for (let i = 0; i < arr.length; i++) {
            display.textContent += arr[i];
        }
    }
}

function startOperation(e) {
    if (this.textContent === 'AC') {
        display.textContent = '';
        operand = '';
        displayBool = false;
        equalsBool = false;
        operatorBool = false;
        storedValues = [];
        return
    }

    if (operatorBool) {
        operand = this.id;
        return
    }

    displayBool = true;
    if (storedValues.length === 0) {
        if (display.textContent !== '') {
            storedValues.push(Number(display.textContent)); 
            operand = this.id;
            operatorBool = true;
        }
    } else if (storedValues.length === 1 && equalsBool) {
        operand = this.id;
        equalsBool = false;
    } else if (storedValues.length === 1) {
        finishOperation();
        operand = this.id;
        operatorBool = true;
    }
}

function finishOperation() {
    if (storedValues.length === 0 || equalsBool) {
        return
    }

    storedValues.push(Number(display.textContent));
    display.textContent = '';

    let temp = operate(operand, storedValues[0], storedValues[1]);
    if (temp.toString().length > 12 && temp.toString().includes('.')) {
        const arr = temp.toString().split('.');
        temp = temp.toFixed(11 - arr[0].length);
    }
    display.textContent = temp;
    storedValues = [];
    storedValues.push(Number(display.textContent));

    equalsBool = true;
    displayBool = true;
    operatorBool = true;
}

let storedValues = [];
let operand = '';
let displayBool = false;
let equalsBool = false;
let operatorBool = false;

const display = document.querySelector('.display');

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', populateDisplay));

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', startOperation));

const equals = document.querySelector('#equals');
equals.addEventListener('click', finishOperation);

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', deleteDigit);