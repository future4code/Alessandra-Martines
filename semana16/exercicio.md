## Semana 16 - Exercícios aula 51 <h2>

#### BANCO DE DADOS <h4>

**Exercício 1** 
 
**a. Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.**

* CREATE TABLE - cria uma tabela
* VARCHAR - aceita strings e os 255 e 6 são o tamanho permitido para caracteres
* DATE - represena uma data, em formato parecido com o moment (YYYY/MM/DD)

**b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.**

* `SHOW DATABASES` - abriu uma janela escrita schemata e `SHOW TABLES` não aceitou o tables no plural, e no singular deu o seguinte erro - SQL Error [1064] [42000]: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 1

**c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando `SHOW Actor` e explique os resultados.**

* `SHOW Actor` não aceitou deu o seguinte erro - SQL Error [1064] [42000]: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 1. Testei usando o `DESCRIBE Actor` e ele abriu a tabela criada.

**Exercício 2** 

**a. Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963**

* Primeiro que faltou o gender, que eu acrescentei. Dai adicionei o do Tony e o da Glória.

**b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.**

*SQL Error [1062] [23000]: Duplicate entry '002' for key 'PRIMARY' - entrada duplicada, não podemos ter o mesmo id para duas pessoas diferentes. Igual cpf.

**c. Tente usar as queries abaixo**
* SQL Error [1136] [21S01]: Column count doesn't match value count at row 1 - contagem de colunas não bate com a contagens de linhas.

**d. Tente usar as queries abaixo**
* SQL Error [1364] [HY000]: Field 'name' doesn't have a default value - o campo nome não tem valor padrão.

**e. Tente usar as queries abaixo**
* SQL Error [1292] [22001]: Data truncation: Incorrect date value: '1950' for column 'birth_date' at row 1 -  Truncamento de dados: Valor de data incorreto: '1950' para a coluna 'data_de_nascimento' na linha 1

**f. Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.**
* Criado com sucesso.

**Exercício 3** 

**a. Escreva uma query que retorne todas as informações das atrizes**
* SELECT name from Actor WHERE gender = "female" (Retornou Glória Pires e Fernanda Montenegro)

**b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`**
* SELECT salary from Actor WHERE name = "Tony Ramos"

**c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.**
* SELECT * FROM Actor WHERE gender = "invalid" - não apareceu nada, pq não inseri nada sem valor

**d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000**
* SELECT id, name, salary from Actor WHERE salary > 500000 - retornou o da Glória de 1200.000

**e. Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta**
* SQL Error [1054] [42S22]: Unknown column 'nome' in 'field list' - Coluna desconhecida 'nome' na 'lista de campos', o correto é escrever NAME.

**Exercício 4** 
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

**a. Explique com as suas palavras a query acima**
* Seleciona todos os atores nome começando com a letra A ou começando por J e salário maior que 300000

**b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00**
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
```

**c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.**
```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR "%g%"
```

**d. Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00**
```
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR "%A%" OR "%G%") AND salary BETWEEN 350000 AND 900000
```

**Exercício 5**

**a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. Explique a query resumidamente.**
* Ela aceita valores acima de 255 caracteres

**Exercício 6**

**a. Retorne o id, título e avaliação a partir de um id específico;**
* SELECT id, name, evaluation FROM Film WHERE id = "003";

**b. Retorne um filme a partir de um nome específico;**
* SELECT name  FROM Film WHERE name = "Doce de mãe";

**c. Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`**
* SELECT id, name, evaluation FROM Film WHERE evaluation = 7; - (Se eu fosse vc)

**Exercício 7**
**a. Retorna um filme cujo título contenha a palavra `vida`**
* SELECT * FROM Film WHERE name LIKE "%vida%" (NENHUM)

**b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.**
* SELECT * FROM Film WHERE name LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%";

**c. Procure por todos os filmes que já tenham lançado**
* SELECT * FROM Film WHERE release_of_date < "2020-05-04"

**d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.**
* SELECT * FROM Film WHERE release_of_date < CURDATE() AND 
(name LIKE "%termo%" OR sinopse LIKE "%termo%") AND evaluation > 7;
