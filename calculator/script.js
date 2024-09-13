function calculate(operator) {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "number not valid";
    } else {
        switch (operator) {
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
                result = num2 !== 0 ? num1 / num2 : 'tidak bisa dibagi 0';
                break;
            default:
                result = 'operator invalid';
        }
    }
    document.getElementById('result').textContent = result;
}
