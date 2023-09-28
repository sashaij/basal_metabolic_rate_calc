'use strict'

const weight = document.getElementById('weight');
const height = document.getElementById('height');
const age = document.getElementById('age');
const gender = document.querySelector('.genders');

/* console.log(weight);
console.log(height);
console.log(age);
console.log(gender); */

weight.textContent = 0;
height.textContent = 0;
age.textContent = 0;

const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');

submitButton.addEventListener("click", (event) => {
  });
resetButtonButton.addEventListener("click", (event) => {
});

const BMR = function (isGender) {
    if (isGender === 'Male') {
        88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (isGender === 'Female') {
        447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
}

