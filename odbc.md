# ODBC

Драйвер ODBC поддерживает базовые возможности ODBC в семантике вызовов ODBC 3.0 в пределах функциональности самой СУБД.

Уровень реализации функциональности — ODBC Core.

Примеры использования драйвера находятся в папке examples дистрибутива.

## Поддерживаемая функциональность

Функции управления соединением:

* SQLDriverConnect
* SQLDisconnect

Функции аллокации:

* SQLAllocHandle
* SQLFreeHandle
* SQLAllocEnv
* SQLFreeEnv
* SQLAllocConnect
* SQLFreeConnect
* SQLAllocStmt
* SQLFreeStmt
* SQLAllocDesc
* SQLFreeDesc

Функции выборки данных:

* SQLPrepare
* SQLExecute
* SQLExecDirect
* SQLGetData
* SQLFetch
* SQLNumResultCols
* SQLRowCount
* SQLDescribeCol
* SQLNativeSql

Функции диагностики

* SQLGetDiagRec
* SQLGetDiagField
* SQLError

## Неподдерживаемая функциональность

В версии драйвера 1.0 не поддерживается следующая функциональность:

* [скалярные функции ODBC](https://docs.microsoft.com/en-us/sql/t-sql/functions/odbc-scalar-functions-transact-sql?view=sql-server-2017),
* параметризованные запросы

Также следующие функции реализованы лишь как «заглушки», при их вызове возвращается ошибка “Не реализовано”.

Функции транзакций

* SQLEndTran
* SQLTransact

Функции атрибутов

* SQLSetConnectAttr
* SQLGetConnectAttr
* SQLGetStmtAttr
* SQLSetStmtAttr
* SQLSetEnvAttr

Функции параметров

* SQLBindParameter
* SQLPutData
* SQLParamData
* SQLNumParams

Функции курсоров

* SQLCloseCursor
* SQLGetCursorName
* SQLSetCursorName

## Нестандартная функциональность

Ниже приведены замечания к реализации в драйвере NitrosBase отдельных функций.

## SQLDriverConnect

Реализован только режим соединения SQL\_DRIVER\_NOPROMPT. Попытка создать соединение в другом режиме вызовет ошибку IM001 not implemented.

Имена атрибутов для строки соединения:

* DRIVER — имя драйвера, должно быть "NitrosBase Driver";
* SERVER — имя или адрес сервера БД;
* PORT — TCP-порт сервера БД. Необязателен, по умолчанию 3020.
* UID — имя пользователя БД;
* PWD — пароль пользователя БД.

## SQLGetDiagField

Реализованы следующие идентификационные коды \(параметр DiagIdentifier\):

* SQL\_DIAG\_NATIVE
* SQL\_DIAG\_MESSAGE\_TEXT
* SQL\_DIAG\_SQLSTATE

Вызов функции с иными номерами кодов вернет статус SQL\_NO\_DATA.

## SQLGetDiagRec

При обработке ошибок сохраняется лишь одна \(последняя\) запись об ошибке. Попытка вызвать функцию с значением параметра RecNumber, отличающимся от единицы, приведет к ошибке.

## SQLPrepare

Производит непосредственное выполнение запроса, так как в текущей версии драйвера и СУБД параметризованные запросы не поддерживаются.

## SQLFetch

В текущей версии драйвера окончание данных в результирующем наборе приводит к возврату статуса SQL\_ERROR.

## SQLNumResultCols

Вызов функции необходимо делать после каждого вызова SQLFetch — ввиду того, что в графовой модели данных.число полей является переменной величиной.

## SQLRowCount

Название функции зарезервировано, но реализация отсутствует. Невозможно получить количество записей в ответе до окончания итерации по всем записям. Это связано со спецификой реализацией самой СУБД.

## SQLNativeSql

Название функции зарезервировано, однако реализация отсутствует.  
Метаязык ODBC \(функции ODBC и пр.\) не поддерживается текущей версией драйвера.