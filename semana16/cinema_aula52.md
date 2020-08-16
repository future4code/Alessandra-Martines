## Semana 16 - Exercícios aula 52 <h2>

#### APROFUNDAMENTO SQL <h4>

**Exercício 1** 

**Leia os comandos abaixo e indique o que eles fazem. Não os rode nas tabelas desse projeto! Explique o que elas fariam se fossem rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder**

**a)**
* Exclui a coluna selecionada

**b)**
* Muda a palavra gender para sex

**c)**
* Não mudaria nada, pq ele pede de gender para gender...

**Exercício 2**

**a)** 
```
UPDATE Actor
SET name = "Debora Secco"
WHERE id = "003"
```

**b)**
```
UPDATE Actor
SET name = "DEBORA SECCO"
WHERE name = "Debora Secco";
```

**c)**
```
UPDATE Actor
SET name = "Tais Araújo", salary = "600", birth_date = "1976-03-22", gender = "female", hometown = "SP"
WHERE id = "003";
```

**d)**
* Ele aceitou como se tivesse criado, mas não crou e nem deu erro!


**Exercício 3**

**a)** 
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```

**b)**
* Fiz com female pq meu exercício fiz algumas coisas diferentes...
```
DELETE FROM Actor
WHERE
	gender = "female" AND
	salary > 1000000
```

**Exercício 4**

**a)** 
```
SELECT MAX(salary) FROM Actor;
```

**b)**
```
SELECT MIN(salary) FROM Actor
WHERE gender = "female";
```

**c)**
```
SELECT COUNT(*) FROM Actor 
WHERE gender = "female";
```

**d)**
```
SELECT SUM(salary) FROM Actor;
```

**Exercício 5**

**a)** 
* Ele dá quantas mulheres em uma linha e na outra quantos homens! Porque usamos o GROUP BY, que puxa todos os generos da planilha.

**b)**
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

**c)**
```
SELECT * FROM Actor
ORDER BY salary;
```

**d)**
```
SELECT * FROM Actor
ORDER BY salary
LIMIT 3;
```

**e)**
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

**Exercício 6**

**a)** 
```
ALTER TABLE Film
ADD playing_limit_date DATE;
```

**b)**
```
ALTER TABLE Film
CHANGE evaluation evalution FLOAT NOT NULL;
```

**c)**
```
UPDATE Film
SET playing_limit_date = "2020-01-01"
WHERE id = "001";

UPDATE Film
SET playing_limit_date = "2019-01-01"
WHERE id = "002";
```

**d)**
* Não sei!

**Exercício 7**

**a)** 
```
SELECT COUNT(*) FROM Film 
WHERE evaluation > 7.5;
```

**b)**
```
SELECT AVG(evatualiton) FROM Film;
```

**c)**
```
SELECT COUNT(*) FROM Film WHERE playing_limit_date > CURDATE();
```

**d)**
```
SELECT COUNT(*) FROM Film WHERE release_date > CURDATE();
```

**e)**
```
SELECT MAX(evaluation) FROM Film;
```

***f)***
```
SELECT MIN(evaluation) FROM Film;
```

**Exercício 8**

**a)**
```
SELECT * FROM Film ORDER BY name;
```

**b)**
```
SELECT * FROM Film ORDER BY name LIMIT 5;
```

**c)**
```
SELECT * FROM Film
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;
```

**d)**
```
SELECT * FROM Film
ORDER BY evaluation DESC
LIMIT 3;
````