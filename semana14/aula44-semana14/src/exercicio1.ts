/* EXERCÍCIO 1 */
/* a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta 
variável. O que acontece? */
const minhaString: string = 10
/* RESPOSTA - Type '10' is not assignable to type 'string'.ts(2322) - SÓ ACEITA A ATRIBUIÇÃO STRING */


/* b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como podemos fazer para que essa
variável também aceite strings?*/
const meuNumero: number | string = 10
/* RESPOSTA - USANDO O OPERADOR "OU" |   */

/* c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:*/
/* `nome`, que é uma string;*//* `idade`, que é um número;*//* `corFavorita`, que é uma string.*/

let alessandra: person = {
    name: "Alessandra",
    age: 36,
    favoriteColor: "Preta"
}

/* Como você faria para garantir que o objeto só tenha as propriedades descritas acima? Faça a tipagem do objeto para
que ele só aceite os valores acima.*/
/* RESPOSTA - DECLARANDO A TIPAGEM ANTES DO OBJETO, O OBJETO SÓ RECEBE OS DADOS DA TIPAGEM DECLARADA */
type person = {
    name: string,
    age: number,
    favoriteColor: string
}

/* d) Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` 
para garantir que todos os objetos tenham os mesmos campos.*/
let paulo: person = {
    name: "Paulo",
    age: 37,
    favoriteColor: "Azul"
}

let sandra: person = {
    name: "Sandra",
    age: 61,
    favoriteColor: "Amarelo"
}

let carlos: person = {
    name: "Carlos",
    age: 63,
    favoriteColor: "Verde"
}
/* e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um `enum` 
para isso. */

enum favoriteColor {
    Red = "Vermelho",
    Orange = "Laranja",
    Yellow = "Amarelo",
    Green = "Verde",
    Blue = "Azul",
    Indigo = "Anil",
    Violet = "Violeta",
}

type enumPerson = {
    name: string,
    age: number,
    favoriteColor: favoriteColor,
}
let person1: enumPerson = {
    name: "Paulo",
    age: 37,
    favoriteColor: favoriteColor.Orange
}

let person2: enumPerson = {
    name: "Sandra",
    age: 61,
    favoriteColor: favoriteColor.Violet
}

let person3: enumPerson = {
    name: "Carlos",
    age: 63,
    favoriteColor: favoriteColor.Indigo
}

console.log(person1, person2, person3)