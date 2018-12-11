(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{157:function(t,v,_){"use strict";_.r(v);var e={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=_(1),a=Object(r.a)(e,function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[_("h1",{attrs:{id:"odbc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#odbc","aria-hidden":"true"}},[t._v("#")]),t._v(" ODBC")]),t._v(" "),_("p",[t._v("Драйвер ODBC поддерживает базовые возможности ODBC в семантике вызовов ODBC 3.0 в пределах функциональности самой СУБД.")]),t._v(" "),_("p",[t._v("Уровень реализации функциональности — ODBC Core.")]),t._v(" "),_("p",[t._v("Примеры использования драйвера находятся в папке examples дистрибутива.")]),t._v(" "),_("h2",{attrs:{id:"поддерживаемая-функционаnьность"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#поддерживаемая-функционаnьность","aria-hidden":"true"}},[t._v("#")]),t._v(" Поддерживаемая функциональность")]),t._v(" "),_("p",[t._v("Функции управления соединением:")]),t._v(" "),_("ul",[_("li",[t._v("SQLDriverConnect")]),t._v(" "),_("li",[t._v("SQLDisconnect")])]),t._v(" "),_("p",[t._v("Функции аллокации:")]),t._v(" "),_("ul",[_("li",[t._v("SQLAllocHandle")]),t._v(" "),_("li",[t._v("SQLFreeHandle")]),t._v(" "),_("li",[t._v("SQLAllocEnv")]),t._v(" "),_("li",[t._v("SQLFreeEnv")]),t._v(" "),_("li",[t._v("SQLAllocConnect")]),t._v(" "),_("li",[t._v("SQLFreeConnect")]),t._v(" "),_("li",[t._v("SQLAllocStmt")]),t._v(" "),_("li",[t._v("SQLFreeStmt")]),t._v(" "),_("li",[t._v("SQLAllocDesc")]),t._v(" "),_("li",[t._v("SQLFreeDesc")])]),t._v(" "),_("p",[t._v("Функции выборки данных:")]),t._v(" "),_("ul",[_("li",[t._v("SQLPrepare")]),t._v(" "),_("li",[t._v("SQLExecute")]),t._v(" "),_("li",[t._v("SQLExecDirect")]),t._v(" "),_("li",[t._v("SQLGetData")]),t._v(" "),_("li",[t._v("SQLFetch")]),t._v(" "),_("li",[t._v("SQLNumResultCols")]),t._v(" "),_("li",[t._v("SQLRowCount")]),t._v(" "),_("li",[t._v("SQLDescribeCol")]),t._v(" "),_("li",[t._v("SQLNativeSql")])]),t._v(" "),_("p",[t._v("Функции диагностики")]),t._v(" "),_("ul",[_("li",[t._v("SQLGetDiagRec")]),t._v(" "),_("li",[t._v("SQLGetDiagField")]),t._v(" "),_("li",[t._v("SQLError")])]),t._v(" "),_("h2",{attrs:{id:"неподдерживаемая-функционаnьность"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#неподдерживаемая-функционаnьность","aria-hidden":"true"}},[t._v("#")]),t._v(" Неподдерживаемая функциональность")]),t._v(" "),_("p",[t._v("В версии драйвера 1.0 не поддерживается следующая функциональность:")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/t-sql/functions/odbc-scalar-functions-transact-sql?view=sql-server-2017",target:"_blank",rel:"noopener noreferrer"}},[t._v("скалярные функции ODBC"),_("OutboundLink")],1),t._v(",")]),t._v(" "),_("li",[t._v("параметризованные запросы")])]),t._v(" "),_("p",[t._v("Также следующие функции реализованы лишь как «заглушки», при их вызове возвращается ошибка “Не реализовано”.")]),t._v(" "),_("p",[t._v("Функции транзакций")]),t._v(" "),_("ul",[_("li",[t._v("SQLEndTran")]),t._v(" "),_("li",[t._v("SQLTransact")])]),t._v(" "),_("p",[t._v("Функции атрибутов")]),t._v(" "),_("ul",[_("li",[t._v("SQLSetConnectAttr")]),t._v(" "),_("li",[t._v("SQLGetConnectAttr")]),t._v(" "),_("li",[t._v("SQLGetStmtAttr")]),t._v(" "),_("li",[t._v("SQLSetStmtAttr")]),t._v(" "),_("li",[t._v("SQLSetEnvAttr")])]),t._v(" "),_("p",[t._v("Функции параметров")]),t._v(" "),_("ul",[_("li",[t._v("SQLBindParameter")]),t._v(" "),_("li",[t._v("SQLPutData")]),t._v(" "),_("li",[t._v("SQLParamData")]),t._v(" "),_("li",[t._v("SQLNumParams")])]),t._v(" "),_("p",[t._v("Функции курсоров")]),t._v(" "),_("ul",[_("li",[t._v("SQLCloseCursor")]),t._v(" "),_("li",[t._v("SQLGetCursorName")]),t._v(" "),_("li",[t._v("SQLSetCursorName")])]),t._v(" "),_("h2",{attrs:{id:"нестандартная-функционаnьность"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#нестандартная-функционаnьность","aria-hidden":"true"}},[t._v("#")]),t._v(" Нестандартная функциональность")]),t._v(" "),_("p",[t._v("Ниже приведены замечания к реализации в драйвере NitrosBase отдельных функций.")]),t._v(" "),_("h2",{attrs:{id:"sqldriverconnect"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sqldriverconnect","aria-hidden":"true"}},[t._v("#")]),t._v(" SQLDriverConnect")]),t._v(" "),_("p",[t._v("Реализован только режим соединения SQL_DRIVER_NOPROMPT. Попытка создать соединение в другом режиме вызовет ошибку IM001 not implemented.")]),t._v(" "),_("p",[t._v("Имена атрибутов для строки соединения:")]),t._v(" "),_("ul",[_("li",[t._v('DRIVER — имя драйвера, должно быть "NitrosBase Driver";')]),t._v(" "),_("li",[t._v("SERVER — имя или адрес сервера БД;")]),t._v(" "),_("li",[t._v("PORT — TCP-порт сервера БД. Необязателен, по умолчанию 3020.")]),t._v(" "),_("li",[t._v("UID — имя пользователя БД;")]),t._v(" "),_("li",[t._v("PWD — пароль пользователя БД.")])]),t._v(" "),_("h2",{attrs:{id:"sqlgetdiagfield"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sqlgetdiagfield","aria-hidden":"true"}},[t._v("#")]),t._v(" SQLGetDiagField")]),t._v(" "),_("p",[t._v("Реализованы следующие идентификационные коды (параметр DiagIdentifier):")]),t._v(" "),_("ul",[_("li",[t._v("SQL_DIAG_NATIVE")]),t._v(" "),_("li",[t._v("SQL_DIAG_MESSAGE_TEXT")]),t._v(" "),_("li",[t._v("SQL_DIAG_SQLSTATE")])]),t._v(" "),_("p",[t._v("Вызов функции с иными номерами кодов вернет статус SQL_NO_DATA.")]),t._v(" "),_("h2",{attrs:{id:"sqlgetdiagrec"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sqlgetdiagrec","aria-hidden":"true"}},[t._v("#")]),t._v(" SQLGetDiagRec")]),t._v(" "),_("p",[t._v("При обработке ошибок сохраняется лишь одна (последняя) запись об ошибке. Попытка вызвать функцию с значением параметра RecNumber, отличающимся от единицы, приведет к ошибке.")]),t._v(" "),_("h2",{attrs:{id:"sqlprepare"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sqlprepare","aria-hidden":"true"}},[t._v("#")]),t._v(" SQLPrepare")]),t._v(" "),_("p",[t._v("Производит непосредственное выполнение запроса, так как в текущей версии драйвера и СУБД параметризованные запросы не поддерживаются.")]),t._v(" "),_("h2",{attrs:{id:"sqlfetch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sqlfetch","aria-hidden":"true"}},[t._v("#")]),t._v(" SQLFetch")]),t._v(" "),_("p",[t._v("В текущей версии драйвера окончание данных в результирующем наборе приводит к возврату статуса SQL_ERROR.")]),t._v(" "),_("h2",{attrs:{id:"sqlnumresultcols"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sqlnumresultcols","aria-hidden":"true"}},[t._v("#")]),t._v(" SQLNumResultCols")]),t._v(" "),_("p",[t._v("Вызов функции необходимо делать после каждого вызова SQLFetch — ввиду того, что в графовой модели данных.число полей является переменной величиной.")]),t._v(" "),_("h2",{attrs:{id:"sqlrowcount"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sqlrowcount","aria-hidden":"true"}},[t._v("#")]),t._v(" SQLRowCount")]),t._v(" "),_("p",[t._v("Название функции зарезервировано, но реализация отсутствует. Невозможно получить количество записей в ответе до окончания итерации по всем записям. Это связано со спецификой реализацией самой СУБД.")]),t._v(" "),_("h2",{attrs:{id:"sqlnativesql"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sqlnativesql","aria-hidden":"true"}},[t._v("#")]),t._v(" SQLNativeSql")]),t._v(" "),_("p",[t._v("Название функции зарезервировано, однако реализация отсутствует."),_("br"),t._v("\nМетаязык ODBC (функции ODBC и пр.) не поддерживается текущей версией драйвера.")])])},[],!1,null,null,null);a.options.__file="odbc.md";v.default=a.exports}}]);