function somarValoresNumericos(num1: number, num2: number): number{
    return num1 + num2;
}

console.log(somarValoresNumericos(1, 3));

// função que não retorna nada
function imprimirValoresNumericos(num1: number, num2: number): void{
    console.log( num1 + num2);
}

// funcao callback - vai rodar quando certa ação ocorrer
function somarValoresNumericosTratar(num1: number, num2: number, callback: (num: number) => number): number{
   let resultado = num1 + num2;
   return callback(resultado);
}

function aoQuadrado(num: number): number{
    return num * num;
}

function dividirPorEleMesmo(num: number): number{
    return num / num;

}

console.log(somarValoresNumericosTratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosTratar(1, 3, dividirPorEleMesmo));

