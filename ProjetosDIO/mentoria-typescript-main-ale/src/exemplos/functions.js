"use strict";
function somarValoresNumericos(num1, num2) {
    return num1 + num2;
}
console.log(somarValoresNumericos(1, 3));
// função que não retorna nada
function imprimirValoresNumericos(num1, num2) {
    console.log(num1 + num2);
}
// funcao callback - vai rodar quando certa ação ocorrer
function somarValoresNumericosTratar(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(num) {
    return num * num;
}
function dividirPorEleMesmo(num) {
    return num / num;
}
console.log(somarValoresNumericosTratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosTratar(1, 3, dividirPorEleMesmo));
