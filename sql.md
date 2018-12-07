# SQL

В документе описан поддерживаемый NitrosBase диалект SQL. Во всех примерах в данном документе используется база данных, описанная в документах «[Мультимодельность](multimodelnost.md)» и «[Демонстрационная база данных](demonstracionnaya-baza-dannykh.md)»

## **Запрос CREATE TABLE**

```sql
CREATE TABLE [IF NOT EXISTS] tbl_name 
    ( create_definition [, create_definition] ... )
 
create_definition:
    col_name data_type 
      [NOT NULL | NULL] [DEFAULT literal]
      [COMMENT 'string']
    | [CONSTRAINT [symbol]] FOREIGN KEY
      [index_name] (col_name,...) REFERENCES tbl_name 
```

**Пример**

```sql
CREATE TABLE person (
  name varchar, 
  lastname varchar, 
  age bigint, 
  city varchar, 
  income int, 
  dbl double, 
  dtime datetime
);
```

> CREATE TABLE автоматически создает поле id как PRIMARY KEY. Так сделано из соображений мультимодельности — отличные от реляционной модели предполагают наличие поля id у каждого узла графа или у JSON-документа. В последующих версиях будет добавлена возможность указывать CONSTRAINT PRIMARY KEY для произвольного поля

> FOREIGN KEY может ссылаться только на PRIMARY KEY \(на поле id\) и, соответственно, также может быть представлен одним полем

## Запрос CREATE TABLE AS EDGE 

Создание специальной таблицы для представления графовых ссылок \(связей типа многие-ко-многим\). Может интерпретироваться как промежуточная таблица в обычной реляционной базе данных, имеющая два стандартных поля: fromid и toid. 

**Синтаксис** 

```sql
CREATE TABLE link_name AS EDGE from_tablename to_tablename; 
```

**Пример**

```sql
CREATE TABLE owner AS EDGE car person;
```

Пример использования таблицы в SELECT запросах

```sql
SELECT p.id, name, lastname, age, c.id, c.model 
FROM person p 
  JOIN owner o ON p.id = o.toid 
  JOIN car c ON c.id = o.fromid 
WHERE age > 20 AND model = 'Toyota' 
```

То же самое может быть сделано более простым запросом \(см. описание выражения JOIN\):

```sql
SELECT p.id, name, lastname, age, c.id, c.model 
FROM person p 
  JOIN car c ON p.id = c.owner 
WHERE age > 20 AND model = 'Toyota'
```

##  Запрос ALTER TABLE 

```sql
ALTER TABLE tbl_name
    [alter_specification [, alter_specification] ...]

alter_specification:
  table_options
  | ADD [COLUMN] col_name column_definition,...
  | ADD [COLUMN] (col_name column_definition,...)
  | ADD [CONSTRAINT [symbol]]
        FOREIGN KEY [index_name] (col_name) REFERENCES tbl_name
  | {ALTER|MODIFY} [COLUMN] col_name column_definition,...
  | DROP [COLUMN] col_name


column_definition:
    data_type [NOT NULL | NULL] [DEFAULT literal]
```

**Пример**

```sql
ALTER TABLE person ADD birthday DATE;
```

## Запрос **CREATE INDEX** 

```sql
CREATE [UNIQUE] INDEX index_name ON tbl_name (col_name,...)
```

**Пример**

```sql
CREATE INDEX p_ndx_age ON person (age);
```

## Запрос **DROP TABLE** 

```sql
DROP TABLE [IF EXISTS]
    tbl_name
```

**Пример**

```sql
DROP TABLE person;
```

## Запрос **DROP INDEX** 

```sql
DROP INDEX index_name [ON tbl_name]
```

**Пример**

```sql
DROP INDEX p_ndx_age;
```

## Запрос **INSERT** 

```sql
INSERT [INTO] tbl_name
    [(col_name,...)]
     VALUES (value,...)
```

**Пример**

```sql
INSERT INTO person
     (id, name, lastname, age, city, dbl, dtime)
     VALUES
     ('person5000', 'John', 'Tester', 30, 
     'Lissabon', 1.11, '2018-07-03 01:52:02.65');
```

## Запрос **BULK INSERT**

```sql
BULK INSERT table_name (col_name,...) 
FROM 'file_path' 
[WITH ([FIRSTROW = number,] [FIELDTERMINATOR = 'character'])]
```

**Пример**

```sql
BULK INSERT person (id, name, lastname, age, city, income, dbl, dtime) 
FROM 'sntest1/person.csv' 
WITH (FIRSTROW = 2, FIELDTERMINATOR = ',');
```

**Замечания**

Параметр FIRSTROW указывает с какой строки файлов начинать импорт \(нумерация строк начинаются с 1\). Например, для того чтобы пропустить заголовок \(пропустить одну первую строку\), нужно указать FIRSTROW = 2.

Путь к файлу должен быть абсолютным, возможно также указывать путь относительно файла запущенного сервера. Например, если сервер nbserver.exe лежит в каталоге c:/nitrosbase/bin, то относительный путь ../data/csv/person.csv будет раскрыт как c:/nitrosbase/data/csv/person.csv.

## Запрос **UPDATE** 

```sql
UPDATE table_reference
    SET col_name = value,...
    [WHERE where_condition]

UPDATE table_name_or_alias
    SET col_name = value,...
    FROM tablename [alias] | join_expression
    [WHERE where_condition]
```

**Пример**

```sql
UPDATE person SET name = 'LAMAR' WHERE name = 'Lamar'
```

**Замечания**

Синтаксис выражений FROM и WHERE тот же, что и в запросе SELECT.

## Запрос **DELETE**

```sql
DELETE FROM tbl_name
    [WHERE where_condition]
 
DELETE table_name_or_alias FROM join_expression
    [WHERE where_condition]
```

**Пример**

```sql
DELETE FROM person WHERE name = 'Livia'
```

**Замечания**

Синтаксис выражений FROM и WHERE тот же, что и в запросе SELECT.

## Запрос BACKUP

```sql
BACKUP DATABASE TO path
```

**Пример**

```sql
BACKUP DATABASE TO 'c:/data/sntest1/backup'
```

## Запрос SELECT 

```sql
SELECT
    [ DISTINCT ]
    select_expression [, select_expression ...]
    FROM tablename | join_expression
    [WHERE where_condition]
    [GROUP BY col_name [, col_name ...]]
    -- [HAVING where_condition]
    [ORDER BY col_name [ASC | DESC] [, col_name …] ]
    [LIMIT row_count] 
    [OFFSET offset]
    [INDEX WHERE where_condition]
```

**Пример**

```sql
DROP INDEX p_ndx_age;
```

### Выражение SELECT

* Простой список полей

  ```sql
  select name, lastname from person
  ```

* Все поля

  ```sql
  select * from person
  select p.*, c.model from person p join car c on p.id = c.owner
  ```

* AS

  ```sql
  select count(*) as countofpersons from person
  ```

* Простые выражения и функции

  ```sql
  select upper(name) as uname, age*2 as dbl from person
  ```

* Агрегирующие функции

  ```sql
  select count(age), min(age), max(age), avg(age) from person
  ```

* DISTINCT

  ```sql
  select distinct name, lastname from person
  ```

### Выражение WHERE

* Простые операторы сравнения и логические операторы

  ```sql
  select * from person where age > 20 and name = 'Lamar'
  ```

* Простые выражения и функции \(список операторов и функций см ниже\)

  ```sql
  select * from person where age*2 - income/20 > 0 and upper(name) = 'LAMAR'
  ```

* Оператор IN

  ```sql
  select name, age from person 
  where age in (20, 22, 24) and name in ('Lamar', 'Susan')
  ```

* Проверка на NULL

  ```sql
  select * from person WHERE age IS NULL
  select * from person WHERE age IS NOT NULL
  ```

См. также разделы операторы и функции

### Выражение **FROM и JOIN**

* Запрос к одной таблице

  ```sql
  select * from person 
  ```

* JOIN между двумя таблицами через поле с FOREIGN KEY

  ```sql
  select name, model from person p join car c on p.id = c.owner
  ```

* JOIN между несколькими таблицами

  ```sql
  SELECT p.id, name, lastname, age, c.id, c.model
  FROM person p 
    JOIN owner o ON p.id = o.toid 
    JOIN car c ON c.id = o.fromid
  WHERE age > 20 AND model = 'Toyota'
  ```

* JOIN между двумя таблицами через промежуточную таблицу \(в данном примере через таблицу owner, имеющую тип EDGE, описывающий ребра графа\)

  ```sql
  SELECT p.id, name, lastname, age, c.id, c.model
  FROM person p 
    JOIN owner o ON p.id = o.toid 
    JOIN car c ON c.id = o.fromid
  WHERE age > 20 AND model = 'Toyota'
  ```

  NitrosBase позволяет упростить подобный запрос и рассматривать такую таблицу как простое поле c FOREIGN KEY, имеющее множество значений:  


  ```sql
  SELECT p.id, name, lastname, age, c.id, c.model
  FROM person p 
    JOIN car c ON p.id = c.owner
  WHERE age > 20 AND model = 'Toyota'
  ```

**Особенности реализации** 

NitrosBase существенно ускоряет обработку JOIN, так как является мультимодельной и для хранения связей использует возможности графовой подсистемы. 

В реляционном представлении связи между объектам представляются как ссылки через поля с FOREIGN KEY на id записей в этой же или другой таблице. Условие ON может содержать только оператор =.

### Выражение **GROUP BY**

* Простая группировка по одному полю

  ```sql
  select count(dbl), avg(dbl), min(dbl), max(dbl) 
  from person 
  group by city
  ```

* Группировка по нескольким полям

  ```sql
  select count(dbl), avg(dbl), min(dbl), max(dbl) 
  from person 
  group by city, name
  ```

### Выражение ORDER BY

* Простая сортировка по одному полю

  ```sql
  select name, lastname, age
  from person 
  order by name
  ```

* Сортировка по нескольким полям и с указанием порядка сортировки

  ```sql
  select name, lastname, age
  from person
  order by name, lastname asc, age desc
  ```

### Выражения LIMIT и OFFSET

LIMIT и OFFSET служат для ограничения количества записей в результате.

* Вывести только 100 записей:

  ```sql
  select * from person limit 100
  ```

* Вывести 10 записей, начиная с 100-й \(нумерация записей начинается с нуля — то есть в данном случае нужно пропустить первые 100 записей\):

  ```sql
  select * from person limit 10 offset 100
  ```

### Операторы

* операторы сравнения:   
  
  **&gt;, &gt;=, &lt;, &lt;=, =, &lt;&gt;, !=, IS NULL, IS NOT NULL, IN**  


  ```sql
  select * from person where age is null
  ```

* логические операторы:   
  
  **and \(&&\), or \(\|\|\), not**  


  ```sql
  select * from person
  where age > 50 and (name = 'Lamar' or lastname = 'Wurdeman')
  ```

* арифметические операторы:   
  
  **+, -, \*, /**  


  ```sql
  select age*2 from person where age*100/income > 3
  ```

### Функции

| Функция | Описание |
| :--- | :--- |
| **ASCII** | Returns the ASCII value for the specific character |
| **CONCAT** | Adds two or more expressions together |
| **LENGTH** | Returns the length of a string \(in bytes\)  |
| **LOWER** | Converts a string to lower-case |
| **LPAD** | Left-pads a string with another string, to a certain length |
| **POSITION** | Returns the position of the first occurrence of a substring in a string |
| **REPEAT** | Repeats a string as many times as specified |
| **REPLACE** | Replaces all occurrences of a substring within a string |
| **REVERSE** | Reverses a string and returns the result |
| **STRLEFT** | Extracts a number of characters from a string \(starting from left\) |
| **STRRIGHT** | Extracts a number of characters from a string \(starting from right\) |
| **RPAD** | Right-pads a string with another string, to a certain length |
| **REGEX** | Match regex pattern |
| **SUBSTR** | Extracts a substring from a string \(starting at any position\) |
| **TRIM** | Removes leading and trailing spaces from a string |
| **UPPER** | Converts a string to upper-case |



