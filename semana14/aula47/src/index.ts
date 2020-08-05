import axios from "axios";
import { userInfo } from "os";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/";

/* EXERCÍCIO 1  */
/* RESPOSTA A - ESTE ENDPOINT - "https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all */
/* RESPOSTA B - AO TIPAR, DECLARO PROMISES ANY */
/* RESPOSTA C - FUNÇÃO COMPLETA ABAIXO */

async function getUsers1(): Promise<any[]> {  
        const users = await 
        axios.get(`${baseUrl}subscribers/all`) 
        console.log("Rolou")
        return users.data
};
getUsers1().then((res => {
    console.log(res)
}))

/* EXERCÍCIO 2 */
/* RESPOSTA A - EM FUNÇÃO ASSÍNCROMA DECLARO FUNÇÃO, NA ARROW FUNCTION DECLARO UMA CONSTANTE, 
PORÉM AMBAS FUNCIONAM IGUALMENTE! */

/* RESPOSTA B - FUNÇÃO COMPLETA ABAIXO */

const getUsers2 = async (): Promise<any[]> => {
    const users = await axios.get(`${baseUrl}subscribers/all`);
    return users.data;
};

getUsers2().then((res => {
    console.log(res)
})) 


/* EXERCÍCIO 3  */
/* RESPOSTA A - SEM ERRO, TUDO FUNCIONA */
/* RESPOSTA B - PRA TER CERTEZA DE QUE A PROMESSA DE RESPOSTA SEJA EXECUTADA DE FORMA CORRETA */
/* RESPOSTA C - FUNÇÃO COMPLETA ABAIXO */

 type User = {
    id: string,
    name: string,
    email: string,
}

async function getUsers3(): Promise<User[]> {
    const users = await 
    axios.get(`${baseUrl}subscribers/all`) 
    return users.data.map((res: any) => { 
        return { 
            id: res.id,
            name: res.name,
            email: res.email
        }
    });
}

getUsers3().then((res => {
    console.log(res);
})) 

/* EXERCÍCIO 4  */
/* RESPOSTA A - FUNÇÃO ASSÍNCROMA */ 
/* RESPOSTA B - FUNÇÃO COMPLETA ABAIXO */

async function createNew(title: string, content: string, date: number): Promise<void> {
    try {
        await axios.put(`${baseUrl}news`, {
            title: title,
            content: content,
            date: date,
        });
    } catch (err) {
        console.log(err.message);
    }
}
createNew("Turma Mello entra no módulo 3", "Alunos estudam fervorosamente sem saber se terão vaina contra COVID-19", Date.now()) 

/* EXERCÍCIO 5  */
/* RESPOSTA A - RECOMENDA-SE USAR FOR OF EM FUNÇÕES ASSÍNCROMAS, POIS FOREACH DA PROBLEMINHA */
/* RESPOSTA B - FUNÇÃO COMPLETA ABAIXO */

const sendNotifications1 = async (users: User[], message: string): Promise<void> => {
    const promiseArray: Promise<any>[] = [];
    for (const user of users) {
      await axios.post(`${baseUrl}notifications/send`, {
        subscriberId: user.id,
        message: message,
      });
    }
    console.log("Notificação enviada!");
  };


/* EXERCÍCIO 6 */
/* RESPOSTA A - RECEBE UMA PROMESSA EM ARRAY E RETORNA UMA RESPOSTA */
/* RESPOSTA B -  */
/* RESPOSTA C - FUNÇÃO COMPLETA ABAIXO */

 const sendNotifications2 = async (users: User[], message: string): Promise<void> => {
    const promiseArray = [];
    for (const user of users) {
      promiseArray.push(
          axios.post(`${baseUrl}notifications/send`, {
          subscriberId: user.id,
          message: message,
        })
      );
    }
  
    await Promise.all(promiseArray);
  };
  
  /* EXERCÍCIO 7
  RESPOSTA A */
    const createSubscriber = async (name: string, email: string) => {
    await axios.put(`${baseUrl}subscribers`, {
        name,
        email
      });
    };
  
/*  RESPOSTA B */
  const createAndSendNotifications = async () => {
      try {
        await createNews(
          "Novidade a caminho",
          "Labenu: uma nova escola de programação",
          1590522289000
        );
    
        const users = await getSubscribers2();
    
        await sendNotifications(users, "Teste ¬¬' ");
      } catch (err) {
        console.log("err: ", err.message);
      }
    };
  
  /* RESPOSTA C */
  const getAllNotifications = async (): Promise<any> => {
      const users = await getSubscribers();
    
      const notificationPromises = [];
      for (const user of users) {
        notificationPromises.push(
          axios.get(`${baseUrl}subscribers/${user.id}/notifications/all`)
        );
      }
    
      const result = await Promise.all(notificationPromises);
    
      const dataFromResult = result.map((res) => res.data);
    
      return dataFromResult;
    };