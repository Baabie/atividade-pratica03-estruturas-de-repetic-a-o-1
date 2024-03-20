// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

function  calcularAltura() {
    

    let maiorAltura = Infinity;
    let menorAltura = -Infinity;

for (let contador = 1; contador <= 15; i++) {
    let altura = parseFloat(prompt("Digite a altura da pessoa" +i+ ("em metros):")));
}

if (altura) {
    if (altura < menorAltura) {
        menorAltura = altura;
    }

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }
}else {
    console.log('Altura inválida. Por favor, digite um valor numérico.');
}
alert("A menor altura do grupo é: " + menorAltura.toFixed(2) + " metros\n" +
"A maior altura do grupo é: " + maiorAltura.toFixed(2) + " metros");
}

calcularAltura();