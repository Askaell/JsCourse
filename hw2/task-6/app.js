'use strict';

let userNumber = Number(prompt("Введите сумму"))

if (isNaN(userNumber)){
    alert('Необходимо ввести число')
} else if (userNumber <= 0) {
    alert('Число должно быть положительным')
} else {
    let lastNumbers = getLastNumbers(String(userNumber))
    let ending = getEnding(lastNumbers)
    alert(`Ваша сумма в ${userNumber} руб${ending} успешно зачислена.`)
}

/**
 * getEnding returns one of endings of ruble or .
 * @param {number} n
 * @returns {string}
 */
function getEnding(n) {
    let endings = ['ль', 'ля', 'лей']
    switch (true) {
        case n >= 10 && n < 20:
            return endings[2];
        case n == 0 || n == 5 || n == 6 || n == 7 || n == 9:
            return endings[2];
        case n == 2 || n == 3 || n == 4:
            return endings[1];
        case n == 1:
            return endings[0];
        default:
            return '.'
    }
}

/**
 * getLastNumbers returns two numbers if get (10 < number < 20)
 * and returns one number if get any other
 * @param {string} str 
 * @returns {number}
 */
function getLastNumbers(str) {
    let strLenght = str.length;

    if (strLenght < 2) {
        return Number(str);
    }
    if (Number(str[strLenght-2]) !== 1) {
        return Number(str[strLenght-1]);
    }

    return Number(str[strLenght-2]+str[strLenght-1]);
}