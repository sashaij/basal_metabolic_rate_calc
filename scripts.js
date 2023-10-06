'use strict'

const form = document.querySelector('form');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const age = document.getElementById('age');
const gender = document.querySelector('gender');
const male = document.getElementById('male');
const female = document.getElementById('female');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');


submitButton.addEventListener('click', () => {
    displayValues();
})



resetButton.addEventListener('click', () => {
    weight.value = 0;
    height.value = 0;
    age.value = 0;
})

const displayValues = () => {
    console.log('h: ' +  weight.value);
    console.log('w: ' + height.value);
    console.log('a: ' + age.value);
    console.log(gender.value);
}



const BMR = function (isGender) {
    if (isGender === 'male') {
        88.362 + (13.397 * weight.value) + (4.799 * height.value) - (5.677 * age.value);
    } else if (isGender === 'female') {
        447.593 + (9.247 * weight.value) + (3.098 * height.value) - (4.330 * age.value);
    }
}



