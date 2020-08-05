import moment from "moment"

moment.locale('pt-br')

/* 1) a) Crie um tipo para representar um evento. Ele deve possuir: um nome, uma descrição,  uma data de início 
(com dia, mês, ano, e hora) e uma data de fim.  Ambas as datas devem ser do tipo moment.Moment. */

type event = {
    name: string,
    description: string,
    startDate: moment.Moment,
    endDate: moment.Moment
}

/* b) Agora, crie um array no escopo global do seu código para representar todos os eventos da agenda. Coloque, nele,
ao menos dois eventos.*/

const allEvents: event[] = [
    {
        name: "Drive In Taby",
        description: "Show em formato drive-in",
        startDate: moment("10/04/2020 16:00", "DD/MM/YYYY, HH:mm"),
        endDate: moment("10/04/2020 22:00", "DD/MM/YYYY, HH:mm"),
    },
    {
        name: "Lançamento Chrigor",
        description: "Lançamento da single Pais e Filhos nas plataformas digitais",
        startDate: moment("07/08/2020 00:00", "DD/MM/YYYY, HH:mm"),
        endDate: moment("09/08/2020 23:59", "DD/MM/YYYY, HH:mm"),
    }
];

/* 2) Crie uma função que recebe o array de eventos criado no exercício anterior, e imprime algumas informações sobre 
cada um no console

a) Exiba as informações do evento como uma string com o seguinte formato: */

 const dataEvents = (allEvent: event[]): void => {
    allEvents.forEach((item: event) => {
        const hours: number = item.endDate.diff(item.startDate, "minutes")
        const today: moment.Moment = moment()
        const dayCount: number = item.startDate.diff(today, "days")
    
    console.log(`
    Nome: ${item.name}, 
    Horário de início: ${item.startDate.format("dddd - DD [de] MMMM [de] YYYY, HH:mm")}, 
    Horário de fim: ${item.endDate.format("dddd - DD [de] MMMM [de] YYYY, HH:mm")}, 
    Descrição: ${item.description},
    Duração: ${hours} minutos,
    Dias até o evento: ${dayCount}
    `)
});
}
dataEvents(allEvents)

/* b) Que alterações precisariam ser feitas com as datas e horários caso a festa acontecesse em Londres, Inglaterra? 
(Responda essa pergunta em um comentário. Você não precisa implementar)
RESPOSTA - usaria (bst) */

/* 3) Vamos alterar um pouco o exercício anterior, agora, exibindo duas outras informações: 
- A duração do evento (em minutos); 
- A quantidade de dias que faltam até o evento começar

RESPOSTAS NO EXERCÌCIO ACIMA!! */


/* 4) Crie uma função para guardar um evento (`createEvent`) no array
Adicione duas validações na função `createEvent`:   
(a) se ela for chamada sem passar alguma das informações necessárias para a criação do evento, imprima uma mensagem de erro no console;
(b) se ela for chamada com uma data anterior ao dia de hoje, imprima uma mensagem de erro também */

const createEvent = (
  name: string,
  description: string,
  startDate: moment.Moment,
  endDate: moment.Moment
): void => {
  if (!name || !description || !startDate || !endDate) {
    console.log("Invalid input");
    return;
  }

  const diffStartDateAndToday = startDate.diff(moment(), "seconds");
  const diffEndDateAndToday = endDate.diff(moment(), "seconds");

  if (diffStartDateAndToday < 0 && diffEndDateAndToday < 0) {
	console.log("Date cannot be prior to the current date");
    return;
  }

  allEvents.push({
    name,
    description,
    startDate,
    endDate,
  });
};

createEvent(process.argv[2], process.argv[3], moment(process.argv[4]), moment(process.argv[5]))