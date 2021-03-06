'use strict';

/*
result = "2010"
1. 10+10 = 20
2. 20+"10" = "2010" 
- здесь происходит неявное приведение значения 20 числового типа к строковому,
а далее конкатенация строк
3. результат выражения записывается в переменную result
4. метод console.log выводит result в консоль
*/
let result = 10 + 10 + "10";
console.log(result);

/*
result = "101010"
1. 10+"10" = "1010"
- здесь происходит неявное приведение значения 10 числового типа к строковому,
а далее конкатенация строк
2. "1010"+"10" = "101010" 
- то же самое
3. результат выражения записывается в переменную result
4. метод console.log выводит result в консоль
*/
result = 10 +"10" +10;
console.log(result);

/*
result = 30
1. 10+10 = 20
2. 20 + +"10" = 30
- за счёт оператара +, стоящего непосредственно перед литералом "10"
и после другого оператара +, происходит преобразование
строкового типа в числовой, в результате которого
значение +"10" становится равно 10,
а далее сложение со значением 20
3. результат выражения записывается в переменную result
4. метод console.log выводит result в консоль
*/
result = 10 + 10 + +"10";
console.log(result);

/*
result = -Infinity
1. -""
- данное значение интерпретируется как -0 по принципу, описанному выше
2. 10 / -0 = -Infinity
- деление на -0 даёт -бесконечность
3. результат выражения записывается в переменную result
4. метод console.log выводит result в консоль
*/
result = 10 / -"";
console.log(result);

/*
result = NaN
1. +"2,5"
данное значение не может быть интерпретированно, как число
потому что стоит запятая. Унарный + преобразует строку в NaN
1. 10 / NaN = NaN
- в результате происходит деление числа на NaN,
результат которого всегда равняется NaN
3. результат выражения записывается в переменную result
4. метод console.log выводит result в консоль
*/
result = 10 / +"2,5";
console.log(result);