'use strict';

/* пример 1
1. переменная а сперва инкрементируется (к ней прибавляется 1)
2. значение переменной а (2) записывается в переменную с
3. значение переменной с (2) выводится методом alert
*/
let a = 1, b = 1, c, d;
c = ++a;
alert(c); //2

/* пример 2
1. значение переменной b (1) записывается в переменную d
2. переменная b инкрементируется и становится равно 2
3. значение переменной d (2) выводится методом alert
*/
d = b++;
alert(d); //1

/* пример 3
1. значение а инкрементируется и становится равно 3 (т.к. 2+1)
2. 2+3 = 5 записывается в с
3. значение переменной с (5) выводится методом alert
*/
c = 2 + ++a;
alert(c); //5

/* пример 4
1. сперва происходит сложение 2+b (b тоже равно 2)
2. после этого 4 записывается в d, а значение b инкрементируется
и становится равно 3 (т.к. 2+1)
3. значение переменной d (4) выводится методом alert
*/
d = 2 + b++;
alert(d); //4

/* на строке 8 объявляется переменная a = 1
на строке 9 она инкрементируется и становится равна 2
на строке 25 она инкрементируется снова и становится равна 3
*/
alert(a); //3

/* на строке 8 объявляется переменная b = 1
на строке 17 она инкрементируется и становится равна 2
на строке 34 она инкрементируется снова и становится равна 3
*/
alert(b); //3