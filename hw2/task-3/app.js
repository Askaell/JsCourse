'use strict';

let a = parseInt(prompt("Введите значение а"));
let b = parseInt(prompt("Введите значение b"));

if (isPositiveNumber(a) && isPositiveNumber(b)) {
    console.log("Разность: ",a - b)
} else if (!isPositiveNumber(a) && !isPositiveNumber(b)) {
    console.log("Произведение: ", a * b);
} else {
    console.log("Сумма: ", a + b);
}

/**
 * isPositiveNumber returns true if number >= 0 or false if number < 0
 * @param {number} n 
 * @returns {boolean}
 */
function isPositiveNumber(n) {
    return n >= 0;
}
