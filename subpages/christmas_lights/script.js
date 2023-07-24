let stopLight = document.querySelector('#stopLight');
let startLight = document.querySelector('#startLight');

let red = Array.from(document.querySelectorAll('.red'));
let blue = Array.from(document.querySelectorAll('.blue'));
let green = Array.from(document.querySelectorAll('.green'));

stopLight.addEventListener('click', function () {
    for (element of red) {
        element.style.animation = 'none';
    }
    for (element of blue) {
        element.style.animation = 'none';
    }
    for (element of green) {
        element.style.animation = 'none';
    }
});
startLight.addEventListener('click', function () {
    red.forEach((element, index) => {
        if (index % 2 === 0) {
            element.style.animation = 'glowRed 1s infinite alternate 1s';
        } else {
            element.style.animation = 'glowRed 1s infinite alternate 0.5s';
        }
    });


    blue.forEach((element, index) => {
        if (index % 2 === 0) {
            element.style.animation = 'glowBlue 1s infinite alternate 0.7s';
        } else {
            element.style.animation = 'glowBlue 1s infinite alternate 0.3s';
        }
    });
    green.forEach((element, index) => {
        if (index % 2 === 0) {
            element.style.animation = 'glowGreen 1s infinite alternate 1.5s';
        } else {
            element.style.animation = 'glowGreen 1s infinite alternate 0.2s';
        }
    });
    
});