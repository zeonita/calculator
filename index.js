const calculator = new Calculator();

const divText = document.getElementById('total-text');

const displayText = () => {
    divText.innerHTML = calculator.getText();
}

const handleNumber = (number) => {
    calculator.setEntry(number);
    displayText();
}

const handleAction = (action) => {
    calculator.setAction(action);
    displayText();
}

const handleAllClear = () => {
    calculator.doAllClear();
    displayText();
}

const handleClearEntry = () => {
    calculator.doClearEntry();
    displayText();
}

const handleEqual = () => {
    calculator.doEqual();
    displayText();
}