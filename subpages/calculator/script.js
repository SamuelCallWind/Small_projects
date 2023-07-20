
let num1, num2, operator, temporary;

let result = document.querySelector('.result');
let allButtons = Array.from(document.querySelectorAll('.button'))

for (let i = 0; i < allButtons.length; i++) {
    let currentNumber = allButtons[i];
    let numContent = currentNumber.textContent;

    currentNumber.addEventListener('click', function () {
        if (numContent === '+' || numContent === '-' || numContent === '×' || numContent === '÷') {
            if (!num1) {
                num1 = result.value;
                result.value += numContent;
                operator = numContent;
            } else {
                // if the number 1 is not empty, add the two results because it would mean
                // that the user has a second addition (e.g 55 + 55 + .....) so we calculate the two first
            num2 = result.value.slice(num1.length + 1);
            result.value = calculateTwoNumbers(num1, num2, operator);
            num1 = result.value;
            num2 = '';
            operator = '';
            }
            // If user click again on an operator, keep only 1
            if (result.value === '+' || result.value === '-' || result.value === '×' || result.value === '÷'){
                // result.value = num;
                console.log('test');

            } 

        } else if (numContent === '=') {
            result.value = calculateTwoNumbers(num1, num2, numContent);
        } else if (numContent === 'Reset') {
            num1 = '';
            num2 = '';
            result.value = '';
            operator = '';
        } else {
            result.value += numContent;
        } 
    });
}

function calculateTwoNumbers(num1, num2, operator) {
    switch (operator) {
        case '+':
            return parseInt(num1) + parseInt(num2);
        case '-':
            return parseInt(num1) - parseInt(num2);
        case '×':
            return parseInt(num1) * parseInt(num2);
        case '÷':
            if (num2 !== 0) {
                return parseInt(num1) / parseInt(num2);
            } else {
                return 'Error'
            }
        default:
            return 'Error';
    }

}