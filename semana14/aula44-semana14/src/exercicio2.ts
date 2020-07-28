/* Observe a função a seguir, escrita em JavaScript:

```jsx
function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
```
a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros*/
/* RESPOSTA - ENTRADA É UM ARRAY DE NÚMEROS, SAÍDA É A ESTATISTICA, TIPOGRAFIA ABAIXO! */
type statistics = {
     maior: number,
     menor: number,
     media: number
 };

/* b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas */
function obterEstatisticas(numeros: number[]): statistics {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const statistics = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return statistics
}

/* c. Crie um *type* para representar uma **amostra** de dados, isto é, um objeto com as chaves **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:*/
type amostra = {
    numeros: number[];
    obterEstatistica: (numeros: number[]) => statistics
}

const amostraDeIdades: amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatistica: (numeros: number[]) => obterEstatisticas(numeros)
}