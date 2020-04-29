//RESPOSTA EXERCÍCIO 1 //
//ele colhe dados para testar se é par ou ímpar 
//imprimi "PASSOU" para números pares e 0
//"NÃO PASSOU" para números ímpares
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//RESPOSTA EXERCÍCIO 2 //
//ele colhe dados para precificar o produto 
//imprimi "O preço da fruta  Maçã  é  R$  2.25"
//"Se for tudo em letras minúsculas, ele não dá o preço exato e calcula no default, então ficaria R$35,00 pq o valor sai a R$5,00 cada, mas se for digitado da forma correta ele cobra o preço correto e ficaria R$24.55, lembrando que a banana por não estar no código fica a R$5,00 cada"
// Retirando o break da Pêra, imprime "O preço da fruta  Pêra  é  R$  5"
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//RESPOSTA EXERCÍCIO 3 //
// Ele dá uma mensagem de erro de NÃO DEFINIDO (Uncaught ReferenceError: mensagem is not defined)
//O erro se dar pq o console.log está fora do escopo, o correto seria ela dentro do escopo, logo abaixo da chave de fechamento de else e ante do fechamento do bloco
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}
console.log(mensagem)

//RESPOSTA EXERCÍCIO 4 //
//a - para números iguais ele repete o número 2x//
let numero1 = prompt("Digite o primeiro número:")
let numero2 = prompt("Digite o segundo número:")

numero1 = Number(numero1)
numero2 = Number(numero2)

if (numero1 < numero2 && numero2 > numero1) {
    console.log(numero2, numero1)
} else {
    console.log(numero1, numero2)
}

if (numero1 > numero2 && numero2 < numero1){
    console.log(numero1, numero2)
} else {
    console.log(numero2, numero1)
}

//b (ainda falta descobrir mais)//
let numero1 = prompt("Digite o primeiro número:")
let numero2 = prompt("Digite o segundo número:")
let numero3 = prompt("Digite o terceiro número:")

numero1 = Number(numero1)
numero2 = Number(numero2)
numero3 = Number(numero3)

if (numero1 > numero2 && numero2 > numero3){
    console.log(numero1, numero2, numero3)
}

if (numero2 < numero1 && numero3 < numero2){
    console.log(numero1, numero2, numero3)
}

if (numero1 < numero2 && numero2 < numero3){
    console.log(numero3, numero2, numero1)
}

if (numero2 > numero1 && numero2 > numero3){
    console.log(numero2, numero1, numero3)
}

