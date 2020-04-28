const kw=0.05
var resultadoA = kw * 280
console.log( resultadoA, "Valor a ser pago sem desconto") //R$14,00//
var resultadoB = (kw * 280)*0.15
console.log( resultadoB, "Valor do desconto") //66.2//
var resultadoC = resultadoA - resultadoB
console.log( resultadoC, "Valor a ser pago com desconto") //66.2//