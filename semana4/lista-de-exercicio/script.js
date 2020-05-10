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


