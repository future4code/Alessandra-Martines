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


