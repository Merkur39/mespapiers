(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9Yiz":function(e,t,n){"use strict";n.r(t);var r=n("lSNA"),a=n.n(r),u=n("J4zp"),i=n.n(u),p=n("q1tI"),o=n.n(p),s=n("17x9"),c=n.n(s),b=n("ERmx"),l=n("buk/"),f=n("Vggm"),y=n.n(f);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.attrs,n=e.setValue,r=e.setValidInput,u=e.idx,s=t.name,c=t.inputLabel,f=t.metadata,O=t.type,d=Object(l.f)().t,w=Object(p.useState)(f[s]||""),h=i()(w,2),j=h[0],m=h[1];Object(p.useEffect)((function(){r((function(e){return g(g({},e),{},a()({},u,0===j.length||j.length===P))})),n((function(e){return g(g({},e),{},a()({},s,j))}))}),[s,j,n,r,P,u]);var v=Object(p.useMemo)((function(){return function(e){var t=e.split(":"),n=i()(t,2),r=n[0],a=void 0===r?e:r,u=n[1],p={inputType:"",inputMaxLength:0};switch(a){case"Number":p.inputType="Number".toLowerCase();break;case"Text":p.inputType="Text".toLowerCase();break;default:y()("warn",'"type" in "attributes" property is not defined or unexpected, "type" set to "text" by default'),p.inputType="Text".toLowerCase()}return u&&(p.inputMaxLength=parseInt(u,10)),p}(O)}),[O]),x=v.inputType,P=v.inputMaxLength,T=Object(p.useCallback)((function(e){var t=e.target.value;(P>0&&t.length<=P||0===P)&&m(t)}),[P]);return o.a.createElement(b.a,{value:j,type:x,onChange:T,variant:"outlined",label:c?d(c):"",fullWidth:!0,autoFocus:!0})},w=c.a.shape({name:c.a.string,inputLabel:c.a.string,metadata:c.a.shape(a()({},"attrsProptypes.name",c.a.string)),type:c.a.string});d.propTypes={attrs:w.isRequired,setValue:c.a.func.isRequired};t.default=d}}]);