// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let media = 0;
let positivos = 0;
let negativos = 0;
let negativosPositivos = 0;

for (let i = 0; i < 10; i++) {
    let numero = Number(prompt("Insira um valor: "));
    media += numero;
    if (numero > 0) {
        positivos++;
    } else if (numero < 0) {
        negativos++;
        if (numero < 0) {
            negativosPositivos++;
        }
    }
}
media = media / 10;
console.log("A media aritmetica dos valores e: " + media);
console.log("A quantidade de valores positivos e: " + positivos);
console.log("A quantidade de valores negativos e: " + negativos);
console.log("O percentual de valores negativos e positivos e: " + (negativosPositivos / negativos) * 100);