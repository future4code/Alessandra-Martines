//RESPOSTA EXERCÍCIO 1 - ele está checando a ação até que ela após ter acrecentado + 1 condição, até que ela chegue ao 15.
//Valor impresso - 105 - index.html:39 Live reload enabled.
let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)

//RESPOSTA EXERCÍCIO 2 
// a - ele adiciona mais uma "informação/item"
// b - Valor impresso - (4) [10, 15, 25, 30]
// c - Valor impresso para numero 3 - (6) [12, 15, 18, 21, 27, 30]/ Valor impresso para numero 4 - [12]

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)

//RESPOSTA EXERCÍCIO 3
//a - 
let array = [10, 163, 1, 19, 6]
let maiorNumero = array[0]
let menorNumero = array[0]

for (let i = 0; i< array.length; i++){
    if (array[i] > maiorNumero){
        maiorNumero = array[i]
    }
    if (array[i] < menorNumero){
        menorNumero = array[i]
    }
}
console.log("O Maior valor é" + maiorNumero +"o menor valor é" + menorNumero)

//b - 
const lista = [10, 163, 200, 30, 50, 530]
let numero = 40

for(let novaArray of lista) {
    numero.push(numero/10)
    }
console.log(`${numero}`)