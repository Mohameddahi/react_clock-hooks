(this["webpackJsonpreact_clock-hooks"]=this["webpackJsonpreact_clock-hooks"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),r=c(2),a=c(1),s=(c(9),c(0)),i=function(e){var t=Object(a.useState)(new Date),c=Object(r.a)(t,2),n=c[0],o=c[1],i=Object(a.useRef)(e);return Object(a.useEffect)((function(){var t=window.setInterval((function(){o(new Date)}),1e3),c=e.clockName;return c!==i.current.clockName&&(console.debug("Renamed from ".concat(i.current.clockName," to ").concat(c)),i.current=e),function(){return window.clearInterval(t)}}),[e.clockName]),Object(s.jsxs)("div",{className:"Clock",children:[Object(s.jsx)("strong",{className:"Clock__name",children:e.clockName})," time is ",Object(s.jsx)("span",{className:"Clock__time",children:n.toUTCString().slice(-12,-4)})]})};var u=function(){var e=Object(a.useState)("Clock-0"),t=Object(r.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(!0),u=Object(r.a)(o,2),l=u[0],m=u[1];return Object(a.useEffect)((function(){document.addEventListener("contextmenu",(function(e){e.preventDefault(),m(!1)})),document.addEventListener("click",(function(){m(!0)}));var e=window.setInterval((function(){n(function(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}())}),3300);return function(){window.clearInterval(e),document.removeEventListener("contextmenu",(function(e){e.preventDefault(),m(!1)})),document.removeEventListener("click",(function(){m(!0)}))}}),[]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"React clock"}),l&&Object(s.jsx)(i,{clockName:c})]})};o.a.render(Object(s.jsx)(u,{}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.2f66a18c.chunk.js.map