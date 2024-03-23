// 6. Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...
function numeroPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function contandoPrimos() {
    let saida = "";
    for (let i = 30; i >= 1; i--) {
        if (numeroPrimo(i)) {
            saida += `[${i}] `;
        } else {
            saida += `${i} `;
        }
    }
    console.log(saida);
}

contandoPrimos();
