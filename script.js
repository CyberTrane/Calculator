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
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } 
}

function populateDisplay(e) {
    display.textContent += this.textContent;
}

function operation(e) {
    if (this.textContent === 'AC') {
        display.textContent = '';
        storedValues = [];
        return
    }

    operand = this.id;
    storedValues.push(display.textContent);
    display.textContent = '';  
    console.log(storedValues); 
}

let storedValues = [];
let operand;

const display = document.querySelector('.display');

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', populateDisplay));

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', operation));