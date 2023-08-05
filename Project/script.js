let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result = 0;
    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    currentInput = result.toString();
    previousInput = '';
    currentOperator = '';
    updateDisplay();
}

function clearResult() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}

/*This code is Contributed by Nikunj Soni*/