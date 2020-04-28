let numero1 = prompt("Digite o primeiro número:")
let numero2 = prompt("Digite o segundo número:")
let numero3 = prompt("Digite o terceiro número:")

numero1 = Number(numero1)
numero2 = Number(numero2)
numero3 = Number(numero3)

if (numero1 < numero2 && numero2 < numero3) {
    console.log(numero3, numero2, numero1)
} else {
    console.log(numero1,numero2,numero3)
}

if (numero1 < numero3 && numero3 < numero2) {
    console.log(numero3, numero1, numero2)
} else {
    console.log(numero2,numero1,numero3)
}

S


