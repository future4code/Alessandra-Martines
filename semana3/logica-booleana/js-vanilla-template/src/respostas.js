//EXERCÍCIO 1 - RESPOSTAS//
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3 //false//
console.log("a. ", resultado)

resultado = (bool2 || bool1) && !bool3 //false//
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1) //true//
console.log("c. ", resultado)

resultado = (resultado && (!bool1 || bool2)) && !bool3 //false//
console.log("d. ", resultado)

console.log("e. ", typeof resultado) //boolean//

//EXERCÍCIO 2 - RESPOSTAS//
a. O que é `array` e como se declara em `JS`? //São formas de se armazenar e acessar várias informações ao mesmo tempo e se declara [i].//

b. Qual o index inicial de um `array`? // o número 0//

c. Como se determinar o tamanho do `array`? //Usando .length//

d. Indique todas as mensagens impressas no console. //respostas abaixo//

let array //I.undefined//
console.log('I. ', array)

array = null //II.null//
console.log('II. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] //III.11//
console.log('III. ', array.length)

let i = 0 //IV.3 e 4//
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19 //V.19 e 9//
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1 //VI.3//
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1 //VII.1//
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)

//RESPOSTAS - EXERCÍCIO 1 ESCRITA DE CÓDIGO//
//a//
const f=77
const k=(f - 32)*5/9 + 273.15
var resultadoA = (f - 32)*5/9 + 273.15
console.log( resultadoA, "k") //298.15//

//b//
const c=80
const f=(c)*9/5 + 32
var resultadoA = (f - 32)*5/9 + 273.15
console.log( resultadoA, "c") //353.15//

//c//
const c=30
const f=(c)*9/5 + 32
var resultadoB = (c - 32)*5/9 + 273.15
console.log( resultadoB, "k") //272.0388888888889//
var resultadoA = (c)*9/5 + 32
console.log( resultadoA, "f") //86//

//d//
const c=prompt("Quantos graus está hoje?")
let resposta1=Number("19")
console.log("Ela respondeu:", resposta1)

const f=(c)*9/5 + 32
var resultadoB = (c - 32)*5/9 + 273.15
console.log( resultadoB, "k") //265.92777777777775//
var resultadoA = (c)*9/5 + 32
console.log( resultadoA, "f") //66.2//


//RESPOSTAS - EXERCÍCIO 2 ESCRITA DE CÓDIGO//
const bemEstar=prompt("Olá, você está bem?")
let resposta1=prompt("-Estou bem, obrigada!")
console.log("Ela respondeu:", resposta1)

const idade=prompt("Qual sua idade?")
let resposta2=Number("-Tenho 36 anos")
console.log("Ela respondeu:", resposta2)

const profissao=prompt("Trabalha em quê?")
let resposta3=prompt("-Sou produtora de eventos!")
console.log("Ela respondeu:", resposta3)

const musica=prompt("E sua banda preferida?")
let resposta4=prompt("-Pearl Jam, é claaaaro!")
console.log("Ela respondeu", resposta4)

const musica2=prompt("E qual música preferida do Pearl Jam?")
let resposta5=prompt("-Huuuuum, Black sem sombra de dúvidas!") 
console.log("E por fim, ela disse:", resposta5)

//RESPOSTAS - EXERCÍCIO 3 ESCRITA DE CÓDIGO//
const kw=0.05
var resultadoA = kw * 280
console.log( resultadoA, "Valor a ser pago sem desconto") //R$14,00//
var resultadoB = (kw * 280)*0.15
console.log( resultadoB, "Valor do desconto") //R$2,10//
var resultadoC = resultadoA - resultadoB
console.log( resultadoC, "Valor a ser pago com desconto") //R$11,90//

