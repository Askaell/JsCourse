'use strict';

/**
 * mathOperation performs 4 operation: +, -, /, *
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation may be only: "+", "-", "/", "*"
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return getSum(arg1, arg2);
        case "-":
            return getDifference(arg1, arg2);
        case "/":
            return getDivision(arg1, arg2);
        case "*":
            return getMultiplication(arg1, arg2);
        default:
            throw new Error('func mathOperation(arg1, arg2, operation). Incorrect operation value.\n Expected: "+", "-", "/", "*".\n Received: ', operation);
    }
}

/**
 * getSum returns the sum of a and b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function getSum(a, b) {
    return a + b;
}

/**
 * getDifference returns the difference of a and b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function getDifference(a, b) {
    return a - b;
}

/**
 * getDivision returns the division of a and b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function getDivision(a, b) {
    return a / b;
}

/**
 * getMultiplicationreturns the multiplication of a and b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function getMultiplication(a, b) {
    return a * b;
}
