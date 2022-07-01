"use strict";
let valorAny;
valorAny = 3;
valorAny = 'Ola';
valorAny = true;
let valorString = 'Ola teste';
valorString = valorAny;
let valorString2 = 'Olá também Testao';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString('ola', ', como vai?');
