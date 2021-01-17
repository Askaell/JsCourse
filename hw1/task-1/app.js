'use strict';

function celsiumToFahrenheit(temperatureC) {
    return (9/5) * temperatureC + 32;
}

let temperatureC = prompt("Введите температуру по цельсию");
let temperatureF = celsiumToFahrenheit(temperatureC);

alert(temperatureF);