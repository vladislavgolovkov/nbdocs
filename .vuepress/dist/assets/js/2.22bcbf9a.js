(window.webpackJsonp=window.webpackJsonp||[]).push([[2],Array(63).concat([function(t,e,n){var r=n(34),i=n(4)("toStringTag"),s="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:s?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},,,,,function(t,e,n){"use strict";var r=n(2),i=n(13),s=n(5),o=n(4)("species");t.exports=function(t){var e=r[t];s&&e&&!e[o]&&i.f(e,o,{configurable:!0,get:function(){return this}})}},,,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(33),i=n(85)(3);r(r.P+r.F*!n(83)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(22);t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},,function(t,e,n){var r=n(35),i=n(42),s=n(38),o=n(37),a=n(114);t.exports=function(t,e){var n=1==t,u=2==t,c=3==t,l=4==t,f=6==t,p=5==t||f,h=e||a;return function(e,a,d){for(var v,g,m=s(e),b=i(m),_=r(a,d,3),x=o(b.length),k=0,y=n?h(e,x):u?h(e,0):void 0;x>k;k++)if((p||k in b)&&(g=_(v=b[k],k,m),t))if(n)y[k]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return k;case 2:y.push(v)}else if(l)return!1;return f?-1:c||l?l:y}}},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){var r=n(38),i=n(26);n(113)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){var r=n(33);r(r.S+r.F,"Object",{assign:n(121)})},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";var r=n(10);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(47)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){"use strict";var r=n(63),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var s=n.call(t,e);if("object"!=typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},function(t,e,n){"use strict";n(135);var r=n(15),i=n(3),s=n(22),o=n(16),a=n(4),u=n(107),c=a("species"),l=!s(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=a(t),h=!s(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=h?!s(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[p](""),!e}):void 0;if(!h||!d||"replace"===t&&!l||"split"===t&&!f){var v=/./[p],g=n(o,p,""[t],function(t,e,n,r,i){return e.exec===u?h&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),m=g[0],b=g[1];r(String.prototype,t,m),i(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},function(t,e,n){"use strict";var r,i,s=n(103),o=RegExp.prototype.exec,a=String.prototype.replace,u=o,c=(r=/a/,i=/b*/g,o.call(r,"a"),o.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),l=void 0!==/()??/.exec("")[1];(c||l)&&(u=function(t){var e,n,r,i,u=this;return l&&(n=new RegExp("^"+u.source+"$(?!\\s)",s.call(u))),c&&(e=u.lastIndex),r=o.call(u,t),c&&r&&(u.lastIndex=u.global?r.index+r[0].length:e),l&&r&&r.length>1&&a.call(r[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),t.exports=u},function(t,e,n){"use strict";var r=n(10),i=n(38),s=n(37),o=n(18),a=n(104),u=n(105),c=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;n(106)("replace",2,function(t,e,n,d){return[function(r,i){var s=t(this),o=null==r?void 0:r[e];return void 0!==o?o.call(r,s,i):n.call(String(s),r,i)},function(t,e){var i=d(n,t,this,e);if(i.done)return i.value;var f=r(t),p=String(this),h="function"==typeof e;h||(e=String(e));var g=f.global;if(g){var m=f.unicode;f.lastIndex=0}for(var b=[];;){var _=u(f,p);if(null===_)break;if(b.push(_),!g)break;""===String(_[0])&&(f.lastIndex=a(p,s(f.lastIndex),m))}for(var x,k="",y=0,$=0;$<b.length;$++){_=b[$];for(var C=String(_[0]),S=c(l(o(_.index),p.length),0),w=[],L=1;L<_.length;L++)w.push(void 0===(x=_[L])?x:String(x));var O=_.groups;if(h){var E=[C].concat(w,S,p);void 0!==O&&E.push(O);var I=String(e.apply(void 0,E))}else I=v(C,p,S,w,O,e);S>=y&&(k+=p.slice(y,S)+I,y=S+C.length)}return k+p.slice(y)}];function v(t,e,r,s,o,a){var u=r+t.length,c=s.length,l=h;return void 0!==o&&(o=i(o),l=p),n.call(a,l,function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":a=o[i.slice(1,-1)];break;default:var l=+i;if(0===l)return i;if(l>c){var p=f(l/10);return 0===p?i:p<=c?void 0===s[p-1]?i.charAt(1):s[p-1]+i.charAt(1):i}a=s[l-1]}return void 0===a?"":a})}})},function(t,e,n){"use strict";var r=n(33),i=n(85)(1);r(r.P+r.F*!n(83)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},,function(t,e,n){var r=n(13).f,i=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in i||n(5)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},function(t,e,n){var r,i;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(i="function"==typeof(r=function(){var t,e,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(t,e,n){return t<e?e:t>n?n:t}function s(t){return 100*(-1+t)}n.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(r[e]=n);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=i(t,r.minimum,1),n.status=1===t?null:t;var u=n.render(!e),c=u.querySelector(r.barSelector),l=r.speed,f=r.easing;return u.offsetWidth,o(function(e){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),a(c,function(t,e,n){var i;return(i="translate3d"===r.positionUsing?{transform:"translate3d("+s(t)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+s(t)+"%,0)"}:{"margin-left":s(t)+"%"}).transition="all "+e+"ms "+n,i}(t,l,f)),1===t?(a(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){a(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){n.remove(),e()},l)},l)):setTimeout(e,l)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout(function(){n.status&&(n.trickle(),t())},r.trickleSpeed)};return r.trickle&&t(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?("number"!=typeof t&&(t=(1-e)*i(Math.random()*e,.1,.95)),e=i(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},t=0,e=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===e&&n.start(),t++,e++,r.always(function(){0==--e?(t=0,n.done()):n.set((t-e)/t)}),this):this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=r.template;var i,o=e.querySelector(r.barSelector),u=t?"-100":s(n.status||0),l=document.querySelector(r.parent);return a(o,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),r.showSpinner||(i=e.querySelector(r.spinnerSelector))&&p(i),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(e),e},n.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(r.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&p(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var o=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),a=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()}),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var r,i=t.length,s=e.charAt(0).toUpperCase()+e.slice(1);i--;)if((r=t[i]+s)in n)return r;return e}(n))}function r(t,e,r){e=n(e),t.style[e]=r}return function(t,e){var n,i,s=arguments;if(2==s.length)for(n in e)void 0!==(i=e[n])&&e.hasOwnProperty(n)&&r(t,n,i);else r(t,s[1],s[2])}}();function u(t,e){var n="string"==typeof t?t:f(t);return n.indexOf(" "+e+" ")>=0}function c(t,e){var n=f(t),r=n+e;u(n,e)||(t.className=r.substring(1))}function l(t,e){var n,r=f(t);u(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function f(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function p(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n})?r.call(e,n,e,t):r)||(t.exports=i)},function(t,e,n){var r=n(33),i=n(11),s=n(22);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*s(function(){n(1)}),"Object",o)}},function(t,e,n){var r=n(115);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(12),i=n(116),s=n(4)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[s])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var r=n(34);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";n(118)("link",function(t){return function(e){return t(this,"a","href",e)}})},function(t,e,n){var r=n(33),i=n(22),s=n(16),o=/"/g,a=function(t,e,n,r){var i=String(s(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),a+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(a),r(r.P+r.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},function(t,e,n){"use strict";var r=n(86);n.n(r).a},function(t,e,n){"use strict";var r=n(87);n.n(r).a},function(t,e,n){"use strict";var r=n(26),i=n(122),s=n(102),o=n(38),a=n(42),u=Object.assign;t.exports=!u||n(22)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=o(t),u=arguments.length,c=1,l=i.f,f=s.f;u>c;)for(var p,h=a(arguments[c++]),d=l?r(h).concat(l(h)):r(h),v=d.length,g=0;v>g;)f.call(h,p=d[g++])&&(n[p]=h[p]);return n}:u},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){"use strict";var r=n(33),i=n(46)(!1),s=[].indexOf,o=!!s&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(o||!n(83)(s)),"Array",{indexOf:function(t){return o?s.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,e,n){"use strict";n(125)("trim",function(t){return function(){return t(this,3)}})},function(t,e,n){var r=n(33),i=n(16),s=n(22),o=n(126),a="["+o+"]",u=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),l=function(t,e,n){var i={},a=s(function(){return!!o[t]()||"​"!="​"[t]()}),u=i[t]=a?e(f):o[t];n&&(i[n]=u),r(r.P+r.F*a,"String",i)},f=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){"use strict";var r=n(88);n.n(r).a},function(t,e,n){var r=n(2),i=n(129),s=n(13).f,o=n(132).f,a=n(133),u=n(103),c=r.RegExp,l=c,f=c.prototype,p=/a/g,h=/a/g,d=new c(p)!==p;if(n(5)&&(!d||n(22)(function(){return h[n(4)("match")]=!1,c(p)!=p||c(h)==h||"/a/i"!=c(p,"i")}))){c=function(t,e){var n=this instanceof c,r=a(t),s=void 0===e;return!n&&r&&t.constructor===c&&s?t:i(d?new l(r&&!s?t.source:t,e):l((r=t instanceof c)?t.source:t,r&&s?u.call(t):e),n?this:f,c)};for(var v=function(t){t in c||s(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=o(l),m=0;g.length>m;)v(g[m++]);f.constructor=c,c.prototype=f,n(15)(r,"RegExp",c)}n(68)("RegExp")},function(t,e,n){var r=n(12),i=n(130).set;t.exports=function(t,e,n){var s,o=e.constructor;return o!==n&&"function"==typeof o&&(s=o.prototype)!==n.prototype&&r(s)&&i&&i(t,s),t}},function(t,e,n){var r=n(12),i=n(10),s=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(35)(Function.call,n(131).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:s}},function(t,e,n){var r=n(102),i=n(27),s=n(17),o=n(44),a=n(6),u=n(43),c=Object.getOwnPropertyDescriptor;e.f=n(5)?c:function(t,e){if(t=s(t),e=o(e,!0),u)try{return c(t,e)}catch(t){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(45),i=n(28).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(12),i=n(34),s=n(4)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},function(t,e,n){"use strict";var r=n(10),i=n(37),s=n(104),o=n(105);n(106)("match",1,function(t,e,n,a){return[function(n){var r=t(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=a(n,t,this);if(e.done)return e.value;var u=r(t),c=String(this);if(!u.global)return o(u,c);var l=u.unicode;u.lastIndex=0;for(var f,p=[],h=0;null!==(f=o(u,c));){var d=String(f[0]);p[h]=d,""===d&&(u.lastIndex=s(c,i(u.lastIndex),l)),h++}return 0===h?null:p}]})},function(t,e,n){"use strict";var r=n(107);n(33)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,e,n){"use strict";var r=n(89);n.n(r).a},function(t,e,n){"use strict";var r=n(90);n.n(r).a},function(t,e,n){"use strict";var r=n(91);n.n(r).a},function(t,e,n){"use strict";var r=n(92);n.n(r).a},function(t,e,n){"use strict";var r=n(33),i=n(85)(0),s=n(83)([].forEach,!0);r(r.P+r.F*!s,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,e,n){"use strict";var r=n(93);n.n(r).a},function(t,e,n){"use strict";var r=n(94);n.n(r).a},function(t,e,n){"use strict";var r=n(95);n.n(r).a},function(t,e,n){"use strict";var r=n(96);n.n(r).a},function(t,e,n){"use strict";var r=n(97);n.n(r).a},function(t,e,n){"use strict";var r=n(98);n.n(r).a},,function(t,e,n){"use strict";n.r(e);n(111);var r=n(0),i=n(112),s=n.n(i);n(39),n(100),n(82),n(117);const o=/#.*$/,a=/\.(md|html)$/,u=/\/$/,c=/^(https?:|mailto:|tel:)/;function l(t){return decodeURI(t).replace(o,"").replace(a,"")}function f(t){return c.test(t)}function p(t){if(f(t))return t;const e=t.match(o),n=e?e[0]:"",r=l(t);return u.test(r)?t:r+".html"+n}function h(t,e){const n=t.hash,r=function(t){const e=t.match(o);if(e)return e[0]}(e);return(!r||n===r)&&l(t.path)===l(e)}function d(t,e,n){n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=l(e);for(let e=0;e<t.length;e++)if(l(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:p(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function v(t,e,n,r){const{pages:i,themeConfig:s}=n,o=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const a=o.sidebar||s.sidebar;if(a){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(r))return{base:r,config:e[r]};var n;return{}}(e,a);return n?n.map(e=>(function t(e,n,r,i){if("string"==typeof e)return d(n,e,r);if(Array.isArray(e))return Object.assign(d(n,e[0],r),{title:e[1]});{i&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const s=e.children||[];return{type:"group",title:e.title,children:s.map(e=>t(e,n,r,!0)),collapsable:!1!==e.collapsable}}})(e,i,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var b={props:{item:{required:!0}},computed:{link:function(){return p(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:f,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},_=n(1),x=Object(_.a)(b,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);x.options.__file="NavLink.vue";var k=x.exports,y={components:{NavLink:k},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},$=(n(119),Object(_.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null));$.options.__file="Home.vue";var C=$.exports,S=(n(120),Object(_.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null));S.options.__file="SidebarButton.vue";var w=S.exports,L=(n(101),n(123),n(124),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,r=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},i=[],s=0;s<e.length&&!(i.length>=5);s++){var o=e[s];if(this.getPageLocalePath(o)===n)if(r(o))i.push(o);else if(o.headers)for(var a=0;a<o.headers.length&&!(i.length>=5);a++){var u=o.headers[a];r(u)&&i.push(Object.assign({},o,{path:o.path+"#"+u.slug,header:u}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),O=(n(127),Object(_.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,r){return n("li",{staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){t.go(r)},mouseenter:function(e){t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})):t._e()])},[],!1,null,null,null));O.options.__file="SearchBox.vue";var E=O.exports;n(128),n(134);function I(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(108),n(109);var T={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},j=(n(136),Object(_.a)(T,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null));j.options.__file="DropdownTransition.vue";var A=j.exports,N={components:{NavLink:k,DropdownTransition:A},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},P=(n(137),Object(_.a)(N,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})):n("NavLink",{attrs:{item:e}})],1)}))])],1)},[],!1,null,null,null));P.options.__file="DropdownLink.vue";var M={components:{NavLink:k,DropdownLink:P.exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,i=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(s){var o,a=e[s],u=i[s]&&i[s].label||a.lang;return a.lang===t.$lang?o=n:(o=n.replace(t.$localeConfig.path,s),r.some(function(t){return t.path===o})||(o=s)),{text:u,link:o}})};return I(this.userNav).concat([s])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(m(t),{items:(t.items||[]).map(m)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}},R=(n(138),Object(_.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null));R.options.__file="NavLinks.vue";var U=R.exports;function D(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var W={components:{SidebarButton:w,NavLinks:U,SearchBox:E,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(D(this.$el,"paddingLeft"))+parseInt(D(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},B=(n(139),Object(_.a)(W,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null));B.options.__file="Navbar.vue";var H=B.exports;n(140);function q(t,e,n){var r=[];e.forEach(function(t){"group"===t.type?r.push.apply(r,I(t.children||[])):r.push(t)});for(var i=0;i<r.length;i++){var s=r[i];if("page"===s.type&&s.path===decodeURIComponent(t.path))return r[i+n]}}var G={props:["sidebarItems"],computed:{contentMounted:function(){return this.$vuepress.$get("contentMounted")},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?d(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,q(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?d(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,q(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,r=t.docsDir,i=void 0===r?"":r,s=t.docsBranch,o=void 0===s?"master":s,a=t.docsRepo,c=void 0===a?e:a,f=l(this.$page.path);return u.test(f)?f+="README.md":f+=".md",c&&n?this.createEditLink(e,c,i,o,f):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,i){return/bitbucket.org/.test(t)?(c.test(e)?e:t).replace(u,"")+"/".concat(r)+(n?"/"+n.replace(u,""):"")+i+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(c.test(e)?e:"https://github.com/".concat(e)).replace(u,"")+"/edit/".concat(r)+(n?"/"+n.replace(u,""):"")+i}}},F=(n(141),Object(_.a)(G,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),t.contentMounted?n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]):t._e(),t._v(" "),t.contentMounted&&(t.prev||t.next)?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));F.options.__file="Page.vue";var z=F.exports;function V(t,e,n,r){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}},n)}function J(t,e,n,r,i){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>i?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var o=h(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[V(t,n+"#"+e.slug,e.title,o),J(t,e.children,n,r,i,s+1)])}))}var X={functional:!0,props:["item"],render:function(t,e){var n=e.parent,r=n.$page,i=n.$site,s=n.$route,a=e.props.item,u=h(s,a.path),c="auto"===a.type?u||a.children.some(function(t){return h(s,a.basePath+"#"+t.slug)}):u,l=V(t,a.path,a.title||a.path,c),f=null!=r.frontmatter.sidebarDepth?r.frontmatter.sidebarDepth:i.themeConfig.sidebarDepth,p=null==f?1:f,d=!!i.themeConfig.displayAllHeaders;return"auto"===a.type?[l,J(t,a.children,a.basePath,s,p)]:(c||d)&&a.headers&&!o.test(a.path)?[l,J(t,g(a.headers),a.path,s,p)]:l}},Y=(n(142),Object(_.a)(X,void 0,void 0,!1,null,null,null));Y.options.__file="SidebarLink.vue";var K=Y.exports,Q={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:K,DropdownTransition:A}},Z=(n(143),Object(_.a)(Q,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})):t._e()])],1)},[],!1,null,null,null));Z.options.__file="SidebarGroup.vue";var tt={components:{SidebarGroup:Z.exports,SidebarLink:K,NavLinks:U},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if("group"===r.type&&r.children.some(function(e){return h(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return h(this.$route,t.regularPath)}}},et=(n(144),Object(_.a)(tt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===r,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{item:e}})],1)})):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));et.options.__file="Sidebar.vue";var nt={components:{Home:C,Page:z,Sidebar:et.exports,Navbar:H},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return v(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;s.a.configure({showSpinner:!1}),this.$router.beforeEach(function(t,e,n){t.path===e.path||r.a.component(t.name)||s.a.start(),n()}),this.$router.afterEach(function(){s.a.done(),t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},rt=(n(145),n(146),Object(_.a)(nt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));rt.options.__file="Layout.vue";e.default=rt.exports}])]);