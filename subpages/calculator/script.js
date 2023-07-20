let zero = 0;
let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
let six = 6;
let seven = 7;
let eight = 8;
let nine = 9;
let plus = '+';
let minus = '-';
let divide = '/';
let times = '*';

let num1, num2, operator, temporary;

let result = document.querySelector('.result');
let allButtons = Array.from(document.querySelectorAll('.button'))

for (let i = 0; i < allButtons.length; i++) {
    let currentNumber = allButtons[i];
    let num = allButtons[i].textContent;
    currentNumber.addEventListener('click', function () {
        if (num === '+' || num === '-' || num === '×' || num === '÷') {
            operator = currentNumber;
            num1 = result.value;
            result.value = num;
        } else {
            result.value = result.value + num;
        }
    });
}