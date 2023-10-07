'use strict'

const result = document.querySelector('.result');
const form = document.querySelector('form');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const age = document.getElementById('age');
const male = document.getElementById('male');
const female = document.getElementById('female');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');

let gender = '';
let yourBMR = "";

submitButton.addEventListener('click', () => {
    genderValue();
    BMR(gender);
})

resetButton.addEventListener('click', () => {
    result.textContent = '0';
})

function genderValue() {
    let ele = document.getElementsByName('gender');

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            gender = ele[i].value;
        }
    }
}


const BMR = function (isGender) {
    if (isGender === 'male') {
        yourBMR = 88.362 + (13.397 * weight.value) + (4.799 * height.value) - (5.677 * age.value);
        result.textContent = yourBMR.toFixed(0);
    } else if (isGender === 'female') {
        yourBMR = 447.593 + (9.247 * weight.value) + (3.098 * height.value) - (4.330 * age.value);
        result.textContent = yourBMR.toFixed(0);
    }
}



