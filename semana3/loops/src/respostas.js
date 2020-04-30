//RESPOSTA EXERCÍCIO 1 - ele está checando a ação até que ela após ter acrecentado + 1 condição, até que ela chegue ao 15.
//Valor impresso - 105 - index.html:39 Live reload enabled.
let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)

//DESAFIO 1 - O resultado impresso é 0, 00, 000, 0000 (ele imprime 4 linhas adicionando 0 a partir da quantidade atual 0 )
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

//RESPOSTA EXERCÍCIO 2 
// a - ele adiciona mais uma "item na lista"
// b - Valor impresso - (4) [10, 15, 25, 30]
// c - Valor impresso para numero 3 - (6) [12, 15, 18, 21, 27, 30]/ Valor impresso para numero 4 - [12]

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {acho 
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)

//RESPOSTA EXERCÍCIO 3
//a - O Maior valor é 163 o menor valor é 1
let array = [10, 163, 1, 19, 6]
let maiorNumero = array[0]
let menorNumero = array[0]

for (let i = 0; i < array.length; i++){
    if (array[i] > maiorNumero){
        maiorNumero = array[i]
    }
    if (array[i] < menorNumero){
        menorNumero = array[i]
    }
}
console.log("O Maior valor é " + maiorNumero +" o menor valor é " + menorNumero)

//b - Impresso 40,1,16.3,20,3,5,53
const array = [10, 163, 200, 30, 50, 530]
let numero = [40]
for(let item of array) {
    numero.push(item/10)
    }
console.log(`${numero}`)

//c - Imprime 12,34,30,50 são pares
const array = [12, 23, 34, 30, 50, 85]
let numero = []
for(let item of array) {
    if (item % 2 === 0){  
    numero.push(item)
    }
}
console.log(numero + " são pares")

//d - Imprimiu - (6) ["O elemento index 0 é 1", "O elemento index 1 é 2", "O elemento index 2 é 3", "O elemento index 3 é 4", "O elemento index 4 é 5", "O elemento index 5 é 6"]
let array = [1, 2, 3, 4, 5, 6]
let arrayNovo = []
for (let i = 0; i < array.length; i++) {
    arrayNovo.push(`O elemento index ${i} é ${array[i]}`)
}
console.log(arrayNovo)