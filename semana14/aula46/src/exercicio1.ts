import moment from "moment"


/* a) Crie um tipo para representar um evento. Ele deve possuir: um nome, uma descrição,  uma data de início 
(com dia, mês, ano, e hora) e uma data de fim.  Ambas as datas devem ser do tipo moment.Moment. */

type event = {
    name: string,
    description: string,
    startDate: moment.Moment,
    endDate: moment.Moment
}

/* b) Agora, crie um array no escopo global do seu código para representar todos os eventos da agenda. Coloque, nele,
ao menos dois eventos.*/

const allEvent: event[] = [
    {
        name: "Drive In Taby",
        description: "Show em formato drive-in",
        startDate: moment("10/04/2020 16:00"),
        endDate: moment("10/04/2020 22:00"),
    },
    {
        name: "Lançamento Chrigor",
        description: "Lançamento da single Pais e Filhos nas plataformas digitais",
        startDate: moment("08/07/2020 00:00"),
        endDate: moment("08/09/2020 23:59"),
    }
]
console.log(allEvent)

