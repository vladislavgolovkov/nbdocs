(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{159:function(e,t,a){"use strict";a.r(t);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=a(1),n=Object(o.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"net-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#net-api","aria-hidden":"true"}},[e._v("#")]),e._v(" .NET API")]),e._v(" "),a("h2",{attrs:{id:"ado-net"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ado-net","aria-hidden":"true"}},[e._v("#")]),e._v(" ADO.NET")]),e._v(" "),a("p",[e._v("Подключение к СУБД NitrosBase из C# производится через драйвер ADO.Net с названием Nitros.Net. Он включает в себя две библиотеки: Nitros.Net.Win.dll и nbclient.dll, и реализует подмножество интерфейсов, стандартных для ADO.Net:")]),e._v(" "),a("ul",[a("li",[e._v("IDbConnection")]),e._v(" "),a("li",[e._v("IDbTransaction")]),e._v(" "),a("li",[e._v("IDbCommand")]),e._v(" "),a("li",[e._v("IDataReader")]),e._v(" "),a("li",[e._v("IDbDataParameter")]),e._v(" "),a("li",[e._v("IDataParameterCollection")])]),e._v(" "),a("h3",{attrs:{id:"idbconnection-nitrosbaseconnection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idbconnection-nitrosbaseconnection","aria-hidden":"true"}},[e._v("#")]),e._v(" IDbConnection: NitrosBaseConnection")]),e._v(" "),a("p",[e._v("Интерфейс IDbConnection реализован в классе NitrosBaseConnection.")]),e._v(" "),a("p",[e._v("Формат строки соединения (connection string):")]),e._v(" "),a("p",[e._v("data source='dbserver';initial catalog='dbname'; userid='username';password='password';")]),e._v(" "),a("p",[e._v("Справка по свойствам и методам интерфейса приведена в "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/api/system.data.idbconnection?view=netframework-4.7.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("документации Microsoft"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"idbtransaction-nitrosbasetransaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idbtransaction-nitrosbasetransaction","aria-hidden":"true"}},[e._v("#")]),e._v(" IDbTransaction: NitrosBaseTransaction")]),e._v(" "),a("p",[e._v("Интерфейс IDbTransaction реализован в классе NitrosBaseTransaction.")]),e._v(" "),a("p",[e._v("Транзакции в СУБД NitrosBase в настоящее время не поддерживаются.")]),e._v(" "),a("p",[e._v("Справка по свойствам и методам интерфейса приведена в "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/api/system.data.idbtransaction?view=netframework-4.7.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("документации Microsoft"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"idbcommand-nitrosbasecommand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idbcommand-nitrosbasecommand","aria-hidden":"true"}},[e._v("#")]),e._v(" IDbCommand: NitrosBaseCommand")]),e._v(" "),a("p",[e._v("Интерфейс IDbCommand реализован в классе NitrosBaseCommand.")]),e._v(" "),a("ul",[a("li",[e._v("Метод ExecuteNonQuery всегда возвращает 0, поскольку СУБД не поддерживает получение числа измененных запросом строк.")]),e._v(" "),a("li",[e._v("Метод Cancel ничего не делает, поскольку соответствующий метод отсутствует в API СУБД.")]),e._v(" "),a("li",[e._v("Метод Prepare производит фактическую подстановку значений параметров в запрос на стороне клиента.")])]),e._v(" "),a("p",[e._v("Справка по свойствам и методам интерфейса приведена в "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/api/system.data.idbcommand?view=netframework-4.7.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("документации Microsoft"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"idatareader-nitrosbasedatareader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idatareader-nitrosbasedatareader","aria-hidden":"true"}},[e._v("#")]),e._v(" IDataReader: NitrosBaseDataReader")]),e._v(" "),a("p",[e._v("Интерфейс IDataReader реализован в классе NitrosBaseDataReader.")]),e._v(" "),a("p",[e._v("Не поддерживаются (выбрасывают NotImplementedException) следующие методы:")]),e._v(" "),a("ul",[a("li",[e._v("GetBoolean")]),e._v(" "),a("li",[e._v("GetByte")]),e._v(" "),a("li",[e._v("GetBytes")]),e._v(" "),a("li",[e._v("GetChars")])]),e._v(" "),a("p",[e._v("Свойство RecordsAffected всегда возвращает -1, поскольку СУБД не поддерживает определение числа затронутых записей.")]),e._v(" "),a("p",[e._v("Справка по свойствам и методам интерфейса приведена в "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/api/system.data.idatareader?view=netframework-4.7.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("документации Microsoft"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"idbdataparameter-nitrosbasedataparameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idbdataparameter-nitrosbasedataparameter","aria-hidden":"true"}},[e._v("#")]),e._v(" IDbDataParameter: NitrosBaseDataParameter")]),e._v(" "),a("p",[e._v("Интерфейс IDbDataParameter реализован в классе NitrosBaseDataParameter.")]),e._v(" "),a("p",[e._v("Свойства Scale, Precision, Size, ParameterDirection не поддерживаются или поддерживаются частично:")]),e._v(" "),a("ul",[a("li",[e._v("Precision, Scale возвращают 0, при присвоении значения выбрасывают NotImplementedException.")]),e._v(" "),a("li",[e._v("Size всегда выбрасывает NotImplementedException.")]),e._v(" "),a("li",[e._v("ParameterDirection возвращает InputDirection, при присвоении значения выбрасывает NotImplementedException.")])]),e._v(" "),a("p",[e._v("Справка по свойствам и методам интерфейса приведена в "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/api/system.data.idbdataparameter?view=netframework-4.7.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("документации Microsoft"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"idataparametercollection-nitrosbasedataparametercollection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idataparametercollection-nitrosbasedataparametercollection","aria-hidden":"true"}},[e._v("#")]),e._v(" IDataParameterCollection: NitrosBaseDataParameterCollection")]),e._v(" "),a("p",[e._v("IDataParameterCollection реализован в NitrosBaseDataParameterCollection.Справка по свойствам и методам интерфейса приведена в "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/api/system.data.idataparametercollection?view=netframework-4.7.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("документации Microsoft"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"драйвер-ssrs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#драйвер-ssrs","aria-hidden":"true"}},[e._v("#")]),e._v(" Драйвер SSRS")]),e._v(" "),a("p",[e._v("Драйвер Microsoft Reporting Services позволяет строить отчеты на основе данных, хранящихся в NitrosBase. Регистрация драйвера описана "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/reporting-services/report-data/register-a-standard-net-framework-data-provider-ssrs?view=sql-server-2017",target:"_blank",rel:"noopener noreferrer"}},[e._v("на сайте Microsoft"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("При регистрации в RSReportDesigner.config:")]),e._v(" "),a("ul",[a("li",[e._v("для Visual Studio следует использовать 32-разрядную сборку (nbclient32.dll, Nitros.Net.Win.dll)")]),e._v(" "),a("li",[e._v("обе библиотеки (nbclient32.dll, Nitros.Net.Win) нужно скопировать во все указанные в инструкции каталоги")]),e._v(" "),a("li",[e._v("теги для RSReportDesigner.config:")])]),e._v(" "),a("p",[e._v('<Extension Name="NB"'),a("br"),e._v('\nType="NitrosData.Nitros.Net.NitrosBaseConnectionReporting,Nitros.Net.Win"/><Extension Name="NB"'),a("br"),e._v('\nType="Microsoft.ReportingServices.QueryDesigners.SMQLQueryDesigner,'),a("br"),e._v('\nMicrosoft. ReportingServices.QueryDesigners.Extensions"/>')])])},[],!1,null,null,null);n.options.__file="dotnet-api.md";t.default=n.exports}}]);