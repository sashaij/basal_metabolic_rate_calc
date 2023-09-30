'use strict'

const weight = document.getElementById('weight');
const height = document.getElementById('height');
const age = document.getElementById('age');
const gender = document.querySelector('.genders');
const male = document.getElementById('male');
const female = document.getElementById('female');

let currentGender = '';
let currentDigit = 0;
let currentNumber = []; //number that user inputs;


/* console.log(weight);
console.log(height);
console.log(age);
console.log(gender); */

weight.textContent = 0;
height.textContent = 0;
age.textContent = 0;



const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');

/* submitButton.addEventListener("click", (event) => {
  });
resetButtonButton.addEventListener("click", (event) => {
}); */

const displayFill = function () {
    if (currentNumber[0] === 0) {
        //replace first item with current digit
        currentNumber.splice(0, 1, currentDigit);
    } else {
        currentNumber.push(currentDigit);
    }
}

const displayValues = function () {
    console.log(currentDigit);
    console.log(currentNumber);
    console.log(currentGender);
    console.log(height.classList);
    console.log(weight.classList);
    console.log(age.classList);
}

//digit that was last input from user
const formNumber = function () {
    currentNumber.push(currentDigit);
}

const BMR = function (isGender) {
    if (isGender === 'Male') {
        88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (isGender === 'Female') {
        447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
}

const inputNumber = function () {
    if (weight.classList.contains('active')) {
        displayValues();
        weight.textContent = currentNumber.join('');
    } else if (height.classList.contains('active')) {
        displayValues();
        height.textContent = currentNumber.join('');
    } else if (age.classList.contains('active')) {
        displayValues();
        age.textContent = currentNumber.join('');
    }
}



//toggle between input fields
const addContent = function () {
    if (age.classList.contains('active')) {
        currentNumber.join('');
        age.textContent = currentNumber;
        currentNumber = [];
    } else if (weight.classList.contains('active')) {
        currentNumber.join('');
        weight.textContent = currentNumber;
        currentNumber = [];
    } else if (height.classList.contains('active')) {
        currentNumber.join('');
        height.textContent = currentNumber;
        currentNumber = [];
    }
}

const toZero = function () {
    currentNumber = [];
    currentDigit = 0;
}

male.addEventListener('click', () => {
    currentGender = 'male';
    male.classList.add('active');
    female.classList.remove('active');
    console.log(currentGender);
})
female.addEventListener('click', () => {
    currentGender = 'female';
    female.classList.add('active');
    male.classList.remove('active');
    console.log(currentGender);
});

weight.addEventListener('click', () => {
    weight.classList.add('active');
    height.classList.remove('active');
    age.classList.remove('active');
    toZero();
})

height.addEventListener('click', () => {
    height.classList.add('active');
    weight.classList.remove('active');
    age.classList.remove('active');
    toZero();
})

age.addEventListener('click', () => {
    age.classList.add('active');
    height.classList.remove('active');
    weight.classList.remove('active');
    toZero();
})

window.addEventListener('keydown', (event) => {
    if (event.key === '1') {
        event.preventDefault();
        currentDigit = 1;
        displayFill();
        inputNumber();
        displayValues();
    } else if (event.key === '2') {
        event.preventDefault();
        currentDigit = 2;
        displayFill();
        inputNumber();
        displayValues();
    } else if (event.key === '3') {
        event.preventDefault();
        currentDigit = 3;
        displayFill();
        inputNumber();
        displayValues();
    } else if (event.key === '4') {
        event.preventDefault();
        currentDigit = 4;
        displayFill();
        inputNumber();
        displayValues();
    } else if (event.key === '5') {
        event.preventDefault();
        currentDigit = 5;
        displayFill();
        inputNumber();
        displayValues();
    } else if (event.key === '6') {
        event.preventDefault();
        currentDigit = 6;
        displayFill();
        inputNumber();
        displayValues();
    } else if (event.key === '7') {
        event.preventDefault();
        currentDigit = 7;
        displayFill();
        inputNumber();
        displayValues();
    } else if (event.key === '8') {
        event.preventDefault();
        currentDigit = 8;
        displayFill();
        inputNumber();
        displayValues();
    } else if (event.key === '9') {
        event.preventDefault();
        currentDigit = 9;
        displayFill();
        inputNumber();
        displayValues();
    } else if (event.key === '0') {
        event.preventDefault();
        currentDigit = 0;
        displayFill();
        inputNumber();
        displayValues();
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        actionDelete();
    } else if (event.key === 'Enter') {
        event.preventDefault();
        actionEqal();
    } else if (event.key === '.') {
        event.preventDefault();
        actionPoint();
    } 

})



