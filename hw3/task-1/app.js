'use strict';

for (let i = 0; i <= 10; i++) {
    writeNumberToConsole(i);
}

/**
 * writeNumberToConsole writes n to the console
 * with a description of whether the number is even
 * @param {number} n 
 */
function writeNumberToConsole(n) {
    if (n == 0) {
        console.log(n+' - это ноль');
        return;
    }
    if (isEven(n)) {
        console.log(n+' - это четное число');
    } else {
        console.log(n+' - это нечетное число');
    }
}

/**
 * isEven returns true if n is even or false if n is not even
 * @param {number} n 
 */
function isEven(n) {
    return n % 2 == 0;
}