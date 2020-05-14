/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
alert("Bem vindo ao jogo de Blackjack!") //** Este é o alerta de bem vindo que abre ao iniciar a tela */

if(confirm("Quer iniciar uma nova rodada?")){ //**Aqui, caso o jogador confirme, é feito o sortei das cartas */
   const carta1Jogador = comprarCarta() //** Nas constantes deste if elas puxam o comprarCarta do arquivo naoMexer.js */
   const carta2Jogador = comprarCarta()
   const carta1Maquina = comprarCarta()
   const carta2Maquina = comprarCarta()

   console.log(carta1Jogador.texto) //**Aqui nomeei o jogador e a máquina, ambos com duas cartas e ele puxa os naipes */
   console.log(carta2Jogador.texto)
   console.log(carta1Maquina.texto)
   console.log(carta2Maquina.texto)

   let jogador = carta1Jogador.valor + carta2Jogador.valor //**Aqui ele puxa os valores das cartas */
   let maquina = carta1Maquina.valor + carta2Maquina.valor

   if(jogador > 21 && maquina <= 21){ //** Comando de pontuação, se o jogador for maior que 21 ele perde */
      console.log("Pontuação " + jogador)
      console.log("Pontuação " + maquina)
      console.log("Perdeu!")
   } else if(jogador <= 21 && maquina > 21 || jogador === 21 && maquina != 21){ //** Neste o jogador ganha se for menor ou igual a 21, caso a máquina seja diferente de 21 */
      console.log("Pontuação " + jogador)
      console.log("Pontuação " + maquina)
      console.log("Ganhou!")
   }
   else {
      if(jogador > maquina){ //**Neste criei as pontuações para quando não alcança o 21, mas não estoura...e também o empate */
         console.log("Pontuação " + jogador)
         console.log("Pontuação " + maquina)
         console.log("Ganhou!")
      } else if(jogador < maquina){
         console.log("Pontuação " + jogador)
         console.log("Pontuação " + maquina)
         console.log("Perdeu!")
      } else{
         console.log("Pontuação " + jogador)
         console.log("Pontuação " + maquina)
         console.log("Empate!")
      }
   }
} else {
   alert("O jogo acabou!") //**Aqui é caso o jogador cancele a rodada! */
}
