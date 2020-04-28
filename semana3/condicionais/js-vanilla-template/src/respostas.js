//RESPOSTA EXERCÍCIO 1 //
//ele colhe dados para concatera e testar 
//verifica se o valor digitado é igual ao sugerido  (no caso o 2) 
//imprimi "PASSOU" para números menores ou iguais a 2
//"NÃO PASSOU" para maiores de 2
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
