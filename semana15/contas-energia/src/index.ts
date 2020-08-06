import { Client } from "./Client";
import { Residence } from "./Residence";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";
import { ResidenceClient } from "./ResidenceClient";
import { CommerceClient } from "./CommerceClient";
import { IndustryClient } from "./IndustryClient";
import { Manager } from "./Manager";


/* EXERCÍCIO 1 */
const client: Client = {
    name: "Alessandra",
    registrationNumber: 1,
    consumedEnergy: 178,

    calculateBill: () => {
        return 2;
    }
}

console.log(client)

/* a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
RESPOSTA - TODAS MENOS CALCULATEBILL,  QUE É UMA FUNÇÃO*/

/* EXERCÍCIO 2 */

/* a. Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou? 
RESPOSTA - Cannot create an instance of an abstract class.*/
/* const place: Place = new Place("02411-000") */

/* b. Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
RESPONDER - ESTENDER ESSA CLASSE EM UMA NOVA CLASSE PARA CRIAR A INSTANCIA */

/* EXERCÍCIO 3 */

const residence: Residence = new Residence(4, "02411-000")
const commerce: Commerce = new Commerce(3, "032195-010")
const industry: Industry = new Industry(10, "02112-120")
console.log(residence)
console.log(commerce)
console.log(industry)

/* EXERCÍCIO 4 */

/* a. Que métodos e propriedades essa classe possui? Por quê? 
RESPOSTA - ESTÃO NO RESIDENCECLIENT*/

/* EXERCÍCIO 5 */

/* a. Quais as semelhanças dessa classe com a `ResidentialClient`? 
RESPOSTA - NAME, REGISTRATIONNUMBER, CONSUMEENERGY E CEP*/

/* b. Quais as diferenças dessa classe com a `ResidentialClient`?
RESPOSTA - A TAXA CALCULATEBILL */

/*  EXERCÍCIO 6  */
/* a. De qual classe a `IndustrialClient` deve ser filha? Por quê?* 
RESPOSTA - DA INDUSTRY */

/* b. Que interface a `IndustrialClient` implementa? Por quê?
RESPOSTA - CLIENT*/

/* c. *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters? */

/*  EXERCÍCIO 7 
RESPOSTA - ESTÃO NO  MANAGER */


/*  EXERCÍCIO 8  */
const manager = new Manager

const residenceClient = new ResidenceClient("Sandra", 1, 10, "1234567890", 4, "03455-000")
manager.registerClient(residenceClient)

const commerceClient = new CommerceClient("Almas Livres", 101, 200, "0987654321", 5, "21344-643" )
manager.registerClient(commerceClient)

const industryClient = new IndustryClient("Warner Music", 2001, 5600, "C22235", 50, "04222-111")
manager.registerClient(industryClient)

console.log(`O valor da conta a ser paga é de R$${manager.calculateBillOfClient(10)}.`)

console.log(`O valor total recebido pela concessionária é de R$${manager.calculateTotalIncome()}.`)



