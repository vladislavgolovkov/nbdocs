# .NET API

## ADO.NET

Подключение к СУБД NitrosBase из C\# производится через драйвер ADO.Net с названием Nitros.Net. Он включает в себя две библиотеки: Nitros.Net.Win.dll и nbclient.dll, и реализует подмножество интерфейсов, стандартных для ADO.Net:

* IDbConnection
* IDbTransaction
* IDbCommand
* IDataReader
* IDbDataParameter
* IDataParameterCollection

### IDbConnection: NitrosBaseConnection

Интерфейс IDbConnection реализован в классе NitrosBaseConnection.

Формат строки соединения \(connection string\):

data source='dbserver';initial catalog='dbname'; userid='username';password='password';

Справка по свойствам и методам интерфейса приведена в [документации Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.data.idbconnection?view=netframework-4.7.2).

### IDbTransaction: NitrosBaseTransaction

Интерфейс IDbTransaction реализован в классе NitrosBaseTransaction.

Транзакции в СУБД NitrosBase в настоящее время не поддерживаются.

Справка по свойствам и методам интерфейса приведена в [документации Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.data.idbtransaction?view=netframework-4.7.2).

### IDbCommand: NitrosBaseCommand

Интерфейс IDbCommand реализован в классе NitrosBaseCommand.

* Метод ExecuteNonQuery всегда возвращает 0, поскольку СУБД не поддерживает получение числа измененных запросом строк.
* Метод Cancel ничего не делает, поскольку соответствующий метод отсутствует в API СУБД.
* Метод Prepare производит фактическую подстановку значений параметров в запрос на стороне клиента.

Справка по свойствам и методам интерфейса приведена в [документации Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.data.idbcommand?view=netframework-4.7.2).

### IDataReader: NitrosBaseDataReader

Интерфейс IDataReader реализован в классе NitrosBaseDataReader.

Не поддерживаются \(выбрасывают NotImplementedException\) следующие методы:

* GetBoolean
* GetByte
* GetBytes
* GetChars

Свойство RecordsAffected всегда возвращает -1, поскольку СУБД не поддерживает определение числа затронутых записей.

Справка по свойствам и методам интерфейса приведена в [документации Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.data.idatareader?view=netframework-4.7.2).

### IDbDataParameter: NitrosBaseDataParameter

Интерфейс IDbDataParameter реализован в классе NitrosBaseDataParameter.

Свойства Scale, Precision, Size, ParameterDirection не поддерживаются или поддерживаются частично:

* Precision, Scale возвращают 0, при присвоении значения выбрасывают NotImplementedException.
* Size всегда выбрасывает NotImplementedException.
* ParameterDirection возвращает InputDirection, при присвоении значения выбрасывает NotImplementedException.

Справка по свойствам и методам интерфейса приведена в [документации Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.data.idbdataparameter?view=netframework-4.7.2).

### IDataParameterCollection: NitrosBaseDataParameterCollection

IDataParameterCollection реализован в NitrosBaseDataParameterCollection.Справка по свойствам и методам интерфейса приведена в [документации Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.data.idataparametercollection?view=netframework-4.7.2).



## Драйвер SSRS

Драйвер Microsoft Reporting Services позволяет строить отчеты на основе данных, хранящихся в NitrosBase. Регистрация драйвера описана [на сайте Microsoft](https://docs.microsoft.com/en-us/sql/reporting-services/report-data/register-a-standard-net-framework-data-provider-ssrs?view=sql-server-2017).

При регистрации в RSReportDesigner.config:

* для Visual Studio следует использовать 32-разрядную сборку \(nbclient32.dll, Nitros.Net.Win.dll\)
* обе библиотеки \(nbclient32.dll, Nitros.Net.Win\) нужно скопировать во все указанные в инструкции каталоги
* теги для RSReportDesigner.config:

&lt;Extension Name="NB"  
Type="NitrosData.Nitros.Net.NitrosBaseConnectionReporting,Nitros.Net.Win"/&gt;&lt;Extension Name="NB"  
Type="Microsoft.ReportingServices.QueryDesigners.SMQLQueryDesigner,  
Microsoft. ReportingServices.QueryDesigners.Extensions"/&gt;
