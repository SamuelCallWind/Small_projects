
let num1, num2, operator, temporary;

let result = document.querySelector('.result');
let allButtons = Array.from(document.querySelectorAll('.button'))

for (let i = 0; i < allButtons.length; i++) {
    let currentNumber = allButtons[i];
    let numContent = currentNumber.textContent;

    currentNumber.addEventListener('click', function () {
        if (numContent === '+' || numContent === '-' || numContent === '×' || numContent === '÷') {
            if (result.value === '') {
                //do nothing
            }
            if (!num1 && result.value) {
                num1 = result.value;
                result.value += numContent;
                operator = numContent;
            } else if (operator) {
                if (result.value.split(operator)[1]) {
                    // if the number 1 is not empty, add the two results because it would mean
                    // that the user has a second addition (e.g 55 + 55 + .....) so we calculate the two first
                    num2 = result.value.slice(num1.length + 1);
                    result.value = calculateTwoNumbers(num1, num2, operator);
                    num2 = '';
                    operator = numContent;
                    num1 = result.value;
                    // add the next operator at the end to not add it in a number variable
                    result.value += numContent;
                } else {
                    return;
                }
                
            } else if (result.value.length > 0){
                result.value += numContent;
                operator = numContent;
            }
            // If user click again on an operator, keep only 1
            if (result.value === '+' || result.value === '-' || result.value === '×' || result.value === '÷'){
                // result.value = num;
                console.log('test');

            } 

            
        } else if (numContent === '=' && !result.value || numContent === '=' && !operator){
            // In case user click on equal before giving inputs or giving an operator
        } else if (numContent === '=' && operator) {
            // split the result to check if there is a number after the operator
            if (result.value.split(operator)[1]) {
                num2 = result.value.slice(num1.length + 1);
            } else {
                return;
            }
            if (calculateTwoNumbers(num1, num2, operator) === 'Error') {
                num1 = '';
                num2 = '';
                result.value = '';
                operator = '';
            } else {
                result.value = calculateTwoNumbers(num1, num2, operator)
                num1 = result.value;
                num2 = '';
                operator = '';
            }
            
        } else if (numContent === 'Reset') {
            num1 = '';
            num2 = '';
            result.value = '';
            operator = '';
        } else {
            result.value += numContent;
            // This add any other number to the screen
        } 
    });
}

function calculateTwoNumbers(num1, num2, operator) {
    switch (operator) {
        case '+':
            return parseFloat(num1) + parseFloat(num2);
        case '-':
            return parseFloat(num1) - parseFloat(num2);
        case '×':
            return parseFloat(num1) * parseFloat(num2);
        case '÷':
            if (num2 !== 0) {
                return parseFloat(num1) / parseFloat(num2);
            } else {
                return 'Error'; 
            }
        default:
            return 'Error';
    }

}