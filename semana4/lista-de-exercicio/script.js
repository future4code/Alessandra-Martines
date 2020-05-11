//INTERPRETAÇÃO DE CÓDIGOS
//RESPOSTA 1 - A função é para converter dólar para real. Foi criada a variável de cotação, que puxa o valor do dólar do 
// dias no prompt (serve para perguntar e digitar a resposta) em número. Ele retorna (return) uma string mais uma operação
// de valor do dolar * o valor do prompt declarado. Fora do escopo, ele declara a constante do dinheiro a ser convertido e
//pede para imprimir o valor (ele vai imprimir no console o valor que foi digitado * 100, por exemplo: digito 5, ele imprime R$500)

//RESPOSTA 2 - Ele usa o switch para comparar as variáveis e declara o primeiro sendo os 150 * 1.1 = 165 e da alert pra 
// a segunda, já que ela não está declarada nas cases.

//RESPOSTA 3 - foi declarada uma array com 14 números, em seguida duas arrays vazias. Em seguida ele usa um loop para
//percorrer a array declarada com a ação de se o número dividido por 2 ter o resto 0, ele armazena no array1 e imprime  
//quantas tem nessa array (6). Agora, se o resto da divisão por 2 não for 0, ele armazena no array2 e imprime quantas tem
//nesse array (8). Mas antes dessas impressões ele imprime a string + o total da array declarada (Quantidade total de número 14)

//RESPOSTA 4 - foi declarada uma constante de números uma variável indinita e uma zero. E ele pede no loop para achar o
// menor e o maior número e colocar nas variáveis declaradas. (numero1 = -10 numero2 = 1950)

//EXERCÍCIO DE LOGICA DE PROGRAMAÇÃO
//RESPOSTA 1 EX.1 - você cria uma variavel e chama ela no console, ela percorrer e imprimir quantas tem e quais são as arrays [(4) ["Bom", "dia", "Labenudos", "!"]]
const words = ["Bom", "dia", "Labenudos","!"]
console.log(words)

//RESPOSTA 1 EX.2 - usando o for e adicionando um push, neste caso pedi pra ele percorrer do começo (i=0) ao 
//fim (length) cada ala (array) e animal do zoológico.
let animais = ["Macaco", "Girafa", "Leão", "Zebra"]
let zoo = []
for (let i = 0; i < animais.length; i++) {
    zoo.push(`Em nosso zoologico na ala ${i} temos o seguinte bicho ${animais[i]}`)
}
console.log(zoo)

//RESPOSTA 1 EX.3 - Por último, usei uma condicional para percorrer minhas variaveis e dizer qual vem antes e depois (O 100 vem depois do 32)
const numero1 = 100;
const numero2 = 32;

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = `O ${numero1} vem depois do ${numero2}`
} else {
    mensagem = `O ${numero2} vem depois do ${numero1}`
  }
  console.log(mensagem)
}

//RESPOSTA 2 - a) será FALSE, pois para o && são necessários 2 trues. 
// b) também será FALSE, se fosse (booleano1 && booleano1) || !booleano3 daria true 
// c) para este será TRUE, pois bool2 e bool3 são FALSE e bool4 é false e bool1 é TRUE, no uso de || (ou, basta um ser TRUE)
// d) este não tenho tanta certeza, acho que FALSE, porque para o segundo parenteses, precisamos de dois TRUE, mas não sei pq o negação apareceu
// e) este também fiquei na dúvida, mas arrisco TRUE pois para o || basta 1 true

//RESPOSTA 3

//RESPOSTA 4

//RESPOSTA 5 - codigo abaixo
const numero1 = 15
const numero2 = 30

let a = numero1
let b = numero2

if (a < b) {
    console.log(`O maior é: ${numero2}`)
} else {
	console.log(`O menor é: ${numero1}`)
}

if (a % b === 0){
    console.log(`${numero2} é divisível por ${numero1}`)
} else if(b % a === 0){
    console.log(`${numero2} é divisível por ${numero1}`)
} else {
	console.log('Nenhum é divisível')
}

if (b % a === 0){
    console.log(`${numero1} não é divisível por ${numero2}`)
} else if(b % a === 0){
    console.log(`${numero1} não é divisível por ${numero2}`)
} else {
	console.log('Nenhum é divisível')
}

diferença = b - a
console.log(`A diferença entre eles é ${diferença}`)

//EXERCÍCIOS DE FUNÇÕES
//RESPOSTA 1 - 

//EXERCICIOS DE OBJETOS
//RESPOSTA 1 -  O array é usado pra guardas valores de várias variaveis, já o objeto separa variavel por variável, 
// ele nomeia o tipo de variável. Ex: animal1 = [dog], animal2 = [cat] essas são arrays, já o objeto seria animal1: dog, animal2: gato.

//RESPOSTA 2 - código abaixo
function criaRetangulo(lado1, lado2){
	let largura = lado1
	let altura = lado2
	perimetro = 2*(altura + largura)
	area = altura * largura
}

criaRetangulo(2,5)
console.log(`O perimetro é ${perimetro}`)
console.log(`Sua area é ${area}`)

//RESPOSTA 3 - codigo abaixo
const filmePreferido = {
  nome: 'Bastardos Inglorios',
  direção: 'Quentin Tarantino',
  lançado: '2009',
  ator1: 'Brad Pitt',
  ator2: 'Mélanie Laurent',
  ator3: 'Christoph Waltz',
}
console.log('Venha assistir ao filme '+ filmePreferido.nome +', ' + 'dirigido por '+ filmePreferido.direção + ' e estrelado por ' + filmePreferido.ator1 + ',' + filmePreferido.ator2 +' e '+ filmePreferido.ator3)

