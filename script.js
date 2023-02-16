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
    return num1 / num2;
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
    if (displayCounter) {
        display.textContent = '';
        displayCounter = false;
    }
    display.textContent += this.textContent;
}

function startOperation(e) {
    if (this.textContent === 'AC') {
        display.textContent = '';
        operand = '';
        storedValues = [];
        return
    }

    operand = this.id;
    displayCounter = true;
    /* if (storedValues.length === 2) {} */
    storedValues.push(Number(display.textContent));  
}

function finishOperation() {
    storedValues.push(Number(display.textContent));
    display.textContent = '';

    display.textContent = operate(operand, storedValues[0], storedValues[1]);
    storedValues = [];
    storedValues.push(Number(display.textContent));
    console.log(storedValues);
}

let storedValues = [];
let operand = '';
let displayCounter = false;

const display = document.querySelector('.display');

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', populateDisplay));

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', startOperation));

const equals = document.querySelector('#equals');
equals.addEventListener('click', finishOperation);