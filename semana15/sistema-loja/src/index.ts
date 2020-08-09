import { User } from "./User";
import { Customer } from "./Customer";
import { Employee } from "./Employee";
import { Seller } from "./Seller";
import moment from "moment";

/* REPOSTAS 1 */
const newUser: User = new User("0001", "leka.produtora@gmail.com", "Alessandra", "123456");
console.log(newUser.getId());
console.log(newUser.getName());
console.log(newUser.getEmail());

/* a) Seria possível imprimir a senha (password) atrelada a essa instância? 
RESPOSTA - NÃO, POIS ELE NÃO TEM O GET CRIADO E É PRIVADO, SOMENTE IMPRIMINDO DENTRO DA CLASSE*/

/* b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
RESPOSTA - 1 UNICA VEZ, SÓ TEM UM CONSOLE */


/* ****************************************************************************************************************** */

/* REPOSTAS 2 */
const newCustomer: Customer = new Customer("0002", "glauco@gmail.com", "Glauco", "654321", "1234 5678 9101");

/* a) Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?
RESPOSTA - 1 VEZ */

/* b) Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê? 
RESPOSTA - 2 VEZES*/


/* ****************************************************************************************************************** */

/* REPOSTAS 3 */
console.log(newCustomer.getId());
console.log(newCustomer.getName());
console.log(newCustomer.getEmail());
console.log(newCustomer.purchaseTotal);
console.log(newCustomer.getCreditCard());

/* a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê? 
RESPOSTA - NÃO, PQ ELE É PAI E PRIVADO, SÓ DENTRO DA USER*/


/* ****************************************************************************************************************** */

/* REPOSTAS 4 */
newCustomer.introduceYourself();

/* ****************************************************************************************************************** */

/* REPOSTAS 5
RESPOSTA - NA PÁGINA USER */

/* ****************************************************************************************************************** */

/* REPOSTAS 6 */
const newEmployee: Employee = new Employee ("0003", "joaodebarro@gmail.com", "João de Barro", "000000", moment("29/08/1958", "DD/MM/YYYY").format("DD/MM/YYYY"), 100 )
console.log(newEmployee)

/* a) Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?
RESPOSTA - 03 VEZES */

/* b) Imprima as informações dessa instância no terminal. Quais dados são possíveis de serem impressos? */

console.log(newEmployee.getId());
console.log(newEmployee.getEmail());
console.log(newEmployee.getName());
console.log(newEmployee.getAdmission());
console.log(newEmployee.getSalary());

/* ****************************************************************************************************************** */

/* REPOSTAS 7 */
console.log(newEmployee.totalSalary());

/* ****************************************************************************************************************** */

/* REPOSTAS 8 */
const newSeller: Seller = new Seller ("0004", "piriquitu@gmail.com", "Piriquitu", "111111", moment("20/01/2020", "DD/MM/YYYY").format("DD/MM/YYYY"), 200 )
console.log(newSeller)
/* a) Crie uma instância da classe `Seller`. Você vai reparar que essa classe já possui um construtor, pois quando **não colocamos um construtor na classe filha**, ela **herda** o construtor da classe Pai. Quais parâmetros você teve que passar para esse construtor?
RESPOSTA - TODOS OS HERDADOS*/

/* b) Imprima todas as informações da instância que você criou individualmente (ou seja, cada uma em uma linha própria). O que você conseguiu imprimir? O que não conseguiu? Por quê? */

console.log(newSeller.getId());
console.log(newSeller.getEmail());
console.log(newSeller.getName());
console.log(newSeller.getAdmission());
console.log(newSeller.getSalary());

/* ****************************************************************************************************************** */

/* REPOSTAS 9 */

/* a) Agora, teste o método setter, atualizando esse valor para o que você quiser. É possível imprimir no terminal o valor `salesQuantity` da instância que você criou? Por quê?
RESPOSTA - NÃO, PQ ELE É PAI E PRIVADO E NÃO TEM GET */
console.log(newSeller.getSalesQuantity());
newSeller.setSalesQuantity(100);
console.log(newSeller.getSalesQuantity());

/* ****************************************************************************************************************** */

/* REPOSTAS 10 */
/* a) Agora, teste o método setter, atualizando esse valor para o que você quiser. É possível imprimir no terminal o valor `salesQuantity` da instância que você criou? Por quê?
RESPOSTA - IMPRIMIU 1600 */
const seller2: Seller = new Seller ("0005", "vendas@gmail.com", "Vendedor de Pamonha", "010101", moment("09/10/2017", "DD/MM/YYYY").format("DD/MM/YYYY"), 200);
seller2.setSalesQuantity(200);
console.log(seller2.calculateTotalSalary());


/* ****************************************************************************************************************** */

/* REPOSTAS 11 
RESPOSTAS - NAS PÁGINAS SELLER E EMPLOYEE*/




