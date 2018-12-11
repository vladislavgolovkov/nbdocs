(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(t,n,e){"use strict";e.r(n);e(40),e(69),e(81);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=e(1),o=Object(s.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[e("h1",{attrs:{id:"установка-и-администрирование"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#установка-и-администрирование","aria-hidden":"true"}},[t._v("#")]),t._v(" Установка и администрирование")]),t._v(" "),e("h2",{attrs:{id:"системные-требования"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#системные-требования","aria-hidden":"true"}},[t._v("#")]),t._v(" Системные требования")]),t._v(" "),e("h3",{attrs:{id:"требования-к-программному-обеспечению"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#требования-к-программному-обеспечению","aria-hidden":"true"}},[t._v("#")]),t._v(" Требования к программному обеспечению")]),t._v(" "),e("h4",{attrs:{id:"операционная-система"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#операционная-система","aria-hidden":"true"}},[t._v("#")]),t._v(" Операционная система")]),t._v(" "),e("p",[t._v("Дистрибутивы СУБД NitrosBase существуют для следующих операционных систем:")]),t._v(" "),e("ul",[e("li",[t._v("Windows Server 2016 и выше, Windows 10;")]),t._v(" "),e("li",[t._v("Ubuntu 16.0 и выше.")])]),t._v(" "),e("h4",{attrs:{id:"программные-бибnиотеки"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#программные-бибnиотеки","aria-hidden":"true"}},[t._v("#")]),t._v(" Программные библиотеки")]),t._v(" "),e("p",[t._v("Возможны следующие способы подключения к СУБД NitrosBase:")]),t._v(" "),e("ul",[e("li",[t._v("через С API,")]),t._v(" "),e("li",[t._v("через С# API,")]),t._v(" "),e("li",[t._v("через ODBC,")]),t._v(" "),e("li",[t._v("через MS SQL Reporting Services.")])]),t._v(" "),e("p",[t._v("Соответствующие библиотеки и драйвера поставляются в составе дистрибутива. На машине с NitrosBase должна быть развернута среда исполнения, необходимая для функционирования этих библиотек.")]),t._v(" "),e("p",[t._v("В отсутствие возможностей использовать какой-либо из указанных способов подключения для выполнения запросов можно использовать утилиту  testsql, также поставляемую в составе дистрибутива.")]),t._v(" "),e("p",[t._v("Более подробно использование программных библиотек описано в документе «NitrosBase. Способы подключения и API».")]),t._v(" "),e("h3",{attrs:{id:"требования-к-аппаратному-обеспечению"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#требования-к-аппаратному-обеспечению","aria-hidden":"true"}},[t._v("#")]),t._v(" Требования к аппаратному обеспечению")]),t._v(" "),e("p",[t._v("Минимальные требования к аппаратному обеспечению:")]),t._v(" "),e("ul",[e("li",[t._v("Количество ядер процессора — от 4,")]),t._v(" "),e("li",[t._v("Частота процессора — от 2.0 GHz,")]),t._v(" "),e("li",[t._v("Объем оперативной памяти — от 16 GB,")]),t._v(" "),e("li",[t._v("Объем свободного места на жестком диске (предпочтителен SSD) — от 128 GB.")])]),t._v(" "),e("h2",{attrs:{id:"установка"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#установка","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Установка")])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("ПРОСТАЯ УСТАНОВКА")]),t._v(" "),e("p",[t._v("Для установки достаточно распаковать архив с дистрибутивом в любой каталог. ПО поставляется как портабельное, функционирование которого не зависит от расположения в структуре каталогов операционной системы.")])]),t._v(" "),e("p",[t._v("Дистрибутивы для Windows и Linux почти полностью эквивалентны по структуре и функциональности, за исключением случаев, когда явно оговорено иное.")]),t._v(" "),e("h4",{attrs:{id:"структура-катаnогов"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#структура-катаnогов","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Структура каталогов")])]),t._v(" "),e("p",[t._v("Распакованный дистрибутив содержит следующие каталоги:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("bin")]),t._v(" — исполняемые файлы сервера и клиента СУБД, часть библиотек;")]),t._v(" "),e("li",[e("strong",[t._v("data")]),t._v(" — данные для импорта в демонстрационную базу данных;")]),t._v(" "),e("li",[e("strong",[t._v("docs")]),t._v(" — документация;")]),t._v(" "),e("li",[e("strong",[t._v("include")]),t._v(" — заголовочные файлы C/C++;")]),t._v(" "),e("li",[e("strong",[t._v("lib")]),t._v(" — клиентские библиотеки, драйвера;")]),t._v(" "),e("li",[e("strong",[t._v("samples.c++")]),t._v(" — примеры.")])]),t._v(" "),e("h4",{attrs:{id:"установка-odbc-драйвера-под-windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#установка-odbc-драйвера-под-windows","aria-hidden":"true"}},[t._v("#")]),t._v(" Установка ODBC-драйвера под Windows")]),t._v(" "),e("p",[t._v("Windows-дистрибутив содержит драйвер ODBC, отсутствующий в дистрибутиве для Linux. Для установки драйвера ODBC запустите командную строку (cmd.exe) от имени администратора, перейдите в каталог bin и запустите файл nb_odbc_install.bat.")]),t._v(" "),e("p",[t._v("Для деинсталляции драйвера предназначен скрипт nb_odbc_uninstall.bat (также запускается с правами администратора).")]),t._v(" "),e("h2",{attrs:{id:"подготовка-демонстрационной-бд"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#подготовка-демонстрационной-бд","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Подготовка демонстрационной БД")])]),t._v(" "),e("p",[t._v("Чтобы подготовить демонстрационную БД, нужно запустить два файла сценариев"),e("br"),t._v("\n(в Linux следует запускать файлы с тем же именем и расширением .sh вместо .bat):")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("start runserver.bat\n")])])]),e("p",[t._v("В отдельном окне запустится сервер, который в свою очередь создаст новую базу данных sntest1.")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sntest_prepare.bat\n")])])]),e("p",[t._v("Демонстрационная база будет наполнена данными.")]),t._v(" "),e("p",[t._v("Проверку работоспособности можно выполнить с помощью утилиты testsql")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("echo select name,lastname,age from person limit 10 | testsql.exe -m speed -t nb -d sntest1 -H 127.0.0.1 -P 3020 -i -v \n")])])]),e("h2",{attrs:{id:"сервер-nitrosbase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#сервер-nitrosbase","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Сервер NitrosBase")])]),t._v(" "),e("p",[t._v("Сервер NitrosBase — процесс, обслуживающий базу данных и обрабатывающий запросы к ней. Один сервер обслуживает одну базу данных. Для обслуживания нескольких баз данных следует запускать несколько экземпляров сервера.")]),t._v(" "),e("h4",{attrs:{id:"синтаксис-запуска"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#синтаксис-запуска","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Синтаксис запуска")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server.exe -c create|open|close -d <dbname> [-p <datapath>]\n[-n <cluster_node>] [-m worker|watchdog] [-b] [-P <port>] [-N nodes..]\n[-R <restorepath>]\n\n--help или -h      -- эта справка  \n    \n--command=<action>\n -c <command>  \t  -- команда:\n                     create - создание новой БД и старт сервера для нее\n                     open   - запуск сервера для указанной БД\n                     close  - выключение сервера для указанной БД\n--dbname=<dbname>\n -d <dbname>   \t  -- имя БД, см. также примечания по кластерному режиму\n\n--dbpath=<path>\n -p <path>     \t  -- путь к каталогу, содержащему базы данных\n\n--clusternodes=<nodes>\n -N <nodes>       -- (кластерный режим) общее число узлов в кластере\n\n--node=<cluster_node>\n -n <cluster_node> -- (кластерный режим)\n                      номер узла в кластере (от 0 до cluster_nodes-1);\n                      этот номер узла добавляется в конец названия БД,\n                      указанного в параметре <dbname>;\n                      например, при -n 1 -d dbfoo имя БД будет dbfoo1.\n--mode=<mode>\n -m <mode>     \t  -- режим работы:\n                     supervisor - режим watchdog’a, перезапускающего\n                     сервер при падении (режим выбирается по умолчанию)\n                     worker - одиночный worker, обслуживает одну БД\n--background\n -b            \t  -- запуск процесса в фоновом режиме\n\n--port=<port>\n -P <port>     \t  -- TCP-порт, который слушает сервер\n\n--restorepath=<restorepath>\n -R <restorepath> -- путь к каталогу резервных копий\n")])])]),e("p",[t._v("Таким образом, сервер имеет три команды (create, open, close) и два режима:")]),t._v(" "),e("ul",[e("li",[t._v("режим supervisor — сторожевой процесс перезапускает упавший сервер; рекомендуется использовать в промышленной эксплуатации.")]),t._v(" "),e("li",[t._v("режим worker -- обычный режим обслуживания БД; для тестирования.")])]),t._v(" "),e("h2",{attrs:{id:"кnиент-nitrosbase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#кnиент-nitrosbase","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Клиент NitrosBase")])]),t._v(" "),e("p",[t._v("В качестве клиента используется testsql (может являться клиентом и других СУБД).")]),t._v(" "),e("h4",{attrs:{id:"синтаксис-запуска-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#синтаксис-запуска-2","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Синтаксис запуска")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('testsql -h\n\ntestsql -m compare\n-t dbtype1\n(-c connstr1|-d dbname1 -h host1 -u user1 -p pw1 -P port1)\n-t dbtype2\n(-c connstr2|-d dbname2 -h host2 -u user2 -p pw2 -P port2)\n(-q query|-i) [-v]\n\ntestsql -m speed|shell\n-t dbtype\n(-c connstr|-d dbname -h host -u user -p pw -P port)\n(-q query|-i) [-v]\n\n-h                      -- вывод краткой справки\n\n-m compare|speed|shell  -- режим:\n      compare - сравнение выполнения запросов\n                на различных СУБД\n      speed   - профилировка скорости выполнения запроса\n      shell   - интерактивный режим выполнения запросов\n\n-t odbc|mysql|pgsql|nb  -- тип СУБД, "nb" для NitrosBase\n\n-d dbname               -- имя базы данных\n-H hostname             -- имя узла сервера БД\n-u username             -- имя пользователя сервера БД\n-p password             -- пароль пользователя сервера БД\n-P port                 -- TCP-порт сервера БД\n-c <connstr>            -- строка соединения; вместо набора -H -u -p -P -d\n-q <query>              -- SQL запрос для выполнения\n-n <iterations>         -- выполнение SQL-запроса N раз\n-i                      -- чтение SQL-запроса со стандартного ввода\n-v                      -- вывод результатов запроса; всегда включен\n                           для режимов -m compare и -m shell.\n')])])])])},[],!1,null,null,null);o.options.__file="ustanovka-i-administrirovanie.md";n.default=o.exports},63:function(t,n,e){var r=e(34),s=e(4)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),s))?e:o?r(n):"Object"==(a=r(n))&&"function"==typeof n.callee?"Arguments":a}},64:function(t,n,e){var r=e(10),s=e(36),o=e(4)("species");t.exports=function(t,n){var e,a=r(t).constructor;return void 0===a||null==(e=r(a)[o])?n:s(e)}},65:function(t,n,e){var r,s,o,a=e(35),i=e(75),c=e(41),v=e(24),u=e(2),l=u.process,d=u.setImmediate,h=u.clearImmediate,_=u.MessageChannel,f=u.Dispatch,p=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},b=function(t){g.call(t.data)};d&&h||(d=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++p]=function(){i("function"==typeof t?t:Function(t),n)},r(p),p},h=function(t){delete m[t]},"process"==e(34)(l)?r=function(t){l.nextTick(a(g,t,1))}:f&&f.now?r=function(t){f.now(a(g,t,1))}:_?(o=(s=new _).port2,s.port1.onmessage=b,r=a(o.postMessage,o,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(r=function(t){u.postMessage(t+"","*")},u.addEventListener("message",b,!1)):r="onreadystatechange"in v("script")?function(t){c.appendChild(v("script")).onreadystatechange=function(){c.removeChild(this),g.call(t)}}:function(t){setTimeout(a(g,t,1),0)}),t.exports={set:d,clear:h}},66:function(t,n,e){"use strict";var r=e(36);function s(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new s(t)}},67:function(t,n,e){var r=e(10),s=e(12),o=e(66);t.exports=function(t,n){if(r(t),s(n)&&n.constructor===t)return n;var e=o.f(t);return(0,e.resolve)(n),e.promise}},68:function(t,n,e){"use strict";var r=e(2),s=e(13),o=e(5),a=e(4)("species");t.exports=function(t){var n=r[t];o&&n&&!n[a]&&s.f(n,a,{configurable:!0,get:function(){return this}})}},69:function(t,n,e){"use strict";var r,s,o,a,i=e(23),c=e(2),v=e(35),u=e(63),l=e(33),d=e(12),h=e(36),_=e(70),f=e(71),p=e(64),m=e(65).set,g=e(76)(),b=e(66),x=e(77),w=e(78),y=e(67),C=c.TypeError,P=c.process,k=P&&P.versions,j=k&&k.v8||"",B=c.Promise,q="process"==u(P),S=function(){},N=s=b.f,T=!!function(){try{var t=B.resolve(1),n=(t.constructor={})[e(4)("species")]=function(t){t(S,S)};return(q||"function"==typeof PromiseRejectionEvent)&&t.then(S)instanceof n&&0!==j.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),O=function(t){var n;return!(!d(t)||"function"!=typeof(n=t.then))&&n},A=function(t,n){if(!t._n){t._n=!0;var e=t._c;g(function(){for(var r=t._v,s=1==t._s,o=0,a=function(n){var e,o,a,i=s?n.ok:n.fail,c=n.resolve,v=n.reject,u=n.domain;try{i?(s||(2==t._h&&L(t),t._h=1),!0===i?e=r:(u&&u.enter(),e=i(r),u&&(u.exit(),a=!0)),e===n.promise?v(C("Promise-chain cycle")):(o=O(e))?o.call(e,c,v):c(e)):v(r)}catch(t){u&&!a&&u.exit(),v(t)}};e.length>o;)a(e[o++]);t._c=[],t._n=!1,n&&!t._h&&E(t)})}},E=function(t){m.call(c,function(){var n,e,r,s=t._v,o=M(t);if(o&&(n=x(function(){q?P.emit("unhandledRejection",s,t):(e=c.onunhandledrejection)?e({promise:t,reason:s}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",s)}),t._h=q||M(t)?2:1),t._a=void 0,o&&n.e)throw n.v})},M=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){m.call(c,function(){var n;q?P.emit("rejectionHandled",t):(n=c.onrejectionhandled)&&n({promise:t,reason:t._v})})},R=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),A(n,!0))},D=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw C("Promise can't be resolved itself");(n=O(t))?g(function(){var r={_w:e,_d:!1};try{n.call(t,v(D,r,1),v(R,r,1))}catch(t){R.call(r,t)}}):(e._v=t,e._s=1,A(e,!1))}catch(t){R.call({_w:e,_d:!1},t)}}};T||(B=function(t){_(this,B,"Promise","_h"),h(t),r.call(this);try{t(v(D,this,1),v(R,this,1))}catch(t){R.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(79)(B.prototype,{then:function(t,n){var e=N(p(this,B));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=q?P.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&A(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=v(D,t,1),this.reject=v(R,t,1)},b.f=N=function(t){return t===B||t===a?new o(t):s(t)}),l(l.G+l.W+l.F*!T,{Promise:B}),e(25)(B,"Promise"),e(68)("Promise"),a=e(11).Promise,l(l.S+l.F*!T,"Promise",{reject:function(t){var n=N(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(i||!T),"Promise",{resolve:function(t){return y(i&&this===a?B:this,t)}}),l(l.S+l.F*!(T&&e(80)(function(t){B.all(t).catch(S)})),"Promise",{all:function(t){var n=this,e=N(n),r=e.resolve,s=e.reject,o=x(function(){var e=[],o=0,a=1;f(t,!1,function(t){var i=o++,c=!1;e.push(void 0),a++,n.resolve(t).then(function(t){c||(c=!0,e[i]=t,--a||r(e))},s)}),--a||r(e)});return o.e&&s(o.v),e.promise},race:function(t){var n=this,e=N(n),r=e.reject,s=x(function(){f(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return s.e&&r(s.v),e.promise}})},70:function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},71:function(t,n,e){var r=e(35),s=e(72),o=e(73),a=e(10),i=e(37),c=e(74),v={},u={};(n=t.exports=function(t,n,e,l,d){var h,_,f,p,m=d?function(){return t}:c(t),g=r(e,l,n?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(o(m)){for(h=i(t.length);h>b;b++)if((p=n?g(a(_=t[b])[0],_[1]):g(t[b]))===v||p===u)return p}else for(f=m.call(t);!(_=f.next()).done;)if((p=s(f,g,_.value,n))===v||p===u)return p}).BREAK=v,n.RETURN=u},72:function(t,n,e){var r=e(10);t.exports=function(t,n,e,s){try{return s?n(r(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&r(o.call(t)),n}}},73:function(t,n,e){var r=e(14),s=e(4)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[s]===t)}},74:function(t,n,e){var r=e(63),s=e(4)("iterator"),o=e(14);t.exports=e(11).getIteratorMethod=function(t){if(null!=t)return t[s]||t["@@iterator"]||o[r(t)]}},75:function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},76:function(t,n,e){var r=e(2),s=e(65).set,o=r.MutationObserver||r.WebKitMutationObserver,a=r.process,i=r.Promise,c="process"==e(34)(a);t.exports=function(){var t,n,e,v=function(){var r,s;for(c&&(r=a.domain)&&r.exit();t;){s=t.fn,t=t.next;try{s()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(c)e=function(){a.nextTick(v)};else if(!o||r.navigator&&r.navigator.standalone)if(i&&i.resolve){var u=i.resolve(void 0);e=function(){u.then(v)}}else e=function(){s.call(r,v)};else{var l=!0,d=document.createTextNode("");new o(v).observe(d,{characterData:!0}),e=function(){d.data=l=!l}}return function(r){var s={fn:r,next:void 0};n&&(n.next=s),t||(t=s,e()),n=s}}},77:function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},78:function(t,n,e){var r=e(2).navigator;t.exports=r&&r.userAgent||""},79:function(t,n,e){var r=e(15);t.exports=function(t,n,e){for(var s in n)r(t,s,n[s],e);return t}},80:function(t,n,e){var r=e(4)("iterator"),s=!1;try{var o=[7][r]();o.return=function(){s=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!s)return!1;var e=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:e=!0}},o[r]=function(){return a},t(o)}catch(t){}return e}},81:function(t,n,e){"use strict";var r=e(33),s=e(11),o=e(2),a=e(64),i=e(67);r(r.P+r.R,"Promise",{finally:function(t){var n=a(this,s.Promise||o.Promise),e="function"==typeof t;return this.then(e?function(e){return i(n,t()).then(function(){return e})}:t,e?function(e){return i(n,t()).then(function(){throw e})}:t)}})}}]);