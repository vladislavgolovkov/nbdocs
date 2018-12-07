# Демонстрационная база данных

Демонстрационная база содержит сведения об автомобилях, их владельцах и связях между владельцами. Схема реляционного представления базы приведена на рисунке.

![](https://lh4.googleusercontent.com/S1sjnqa3x7zgCqqRZ6RxvKquFEEDvPCHvn2RVx2mvtQoyC0xTw8gn6J-m6fnDktGZFI-elqHUTEnI3oVsIaRuJDzDpSuzxxa4rdQJWoEB9FEY2WzYbjKJzlYgXmct_VjLxtbOQzD)

Развертывание демонстрационной базы производится в панели запросов в три этапа.

1. Создание таблиц реляционного представления.  


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
   CREATE TABLE car (
     model varchar,
     year int,
     color varchar,
     number varchar,
     owner varchar,
     FOREIGN KEY (owner) REFERENCES person
   );
   CREATE TABLE friend AS EDGE person person;
   CREATE TABLE owner AS EDGE car person;
   ```

2. Импорт данных из CSV-файлов, поставляемых вместе с дистрибутивом.  


   ```sql
   BULK INSERT person (id, name, lastname, age, city, income, dbl, dtime)
     FROM '../data/sntest1/person.csv'
     WITH (FIRSTROW = 2, FIELDTERMINATOR = ',');
   BULK INSERT car (id, model, year, color, number)
     FROM '../data/sntest1/car.csv'
     WITH (FIRSTROW = 2, FIELDTERMINATOR = ',');
   BULK INSERT friends
     FROM '../data/sntest1/friends.csv'
     WITH (FIRSTROW = 2, FIELDTERMINATOR = ',');
   BULK INSERT owner
     FROM '../data/sntest1/owner.csv'
     WITH (FIRSTROW = 2, FIELDTERMINATOR = ',');
   ```

3. Создание индексов  


   ```sql
   CREATE INDEX i_age ON person (age);
   CREATE INDEX i_city ON person (city);CREATE INDEX i_model ON car (model);
   ```



