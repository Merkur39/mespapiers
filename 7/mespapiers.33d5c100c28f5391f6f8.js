(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9Yiz":function(e,t,n){"use strict";n.r(t);var r=n("lSNA"),a=n.n(r),u=n("J4zp"),i=n.n(u),o=n("q1tI"),s=n.n(o),p=n("17x9"),c=n.n(p),l=n("ERmx"),b=n("buk/"),f=n("Vggm"),g=n.n(f);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e,t){return e>0&&t.length<=e||0===e},h=function(e){var t=e.attrs,n=e.setValue,r=e.setValidInput,u=e.idx,p=t.name,c=t.inputLabel,f=t.metadata,d=t.type,h=Object(b.f)().t,m=Object(o.useState)(f[p]||""),j=i()(m,2),w=j[0],v=j[1],x=Object(o.useState)(!1),T=i()(x,2),P=T[0],L=T[1];Object(o.useEffect)((function(){n((function(e){return y(y({},e),{},a()({},p,w))}))}),[p,n,w]),Object(o.useEffect)((function(){r((function(e){return y(y({},e),{},a()({},u,0===w.length||w.length===I))}))}),[u,I,r,w.length]);var k=Object(o.useMemo)((function(){return function(e){var t=e.split(":"),n=i()(t,2),r=n[0],a=void 0===r?e:r,u=n[1],o={inputType:"",inputMaxLength:0};switch(a){case"Number":o.inputType="Number".toLowerCase();break;case"Text":o.inputType="Text".toLowerCase();break;default:g()("warn",'"type" in "attributes" property is not defined or unexpected, "type" set to "text" by default'),o.inputType="Text".toLowerCase()}return u&&(o.inputMaxLength=parseInt(u,10)),o}(d)}),[d]),E=k.inputType,I=k.inputMaxLength,M=Object(o.useCallback)((function(e){var t=e.target.value;if("number"===E){var n=parseInt(t,10);/^[0-9]*$/.test(n)?O(I,t)&&v(n.toString()):""===t&&v(t)}else O(I,t)&&v(t)}),[I,E]),S=P?h("InputTextAdapter.invalidTextMessage",{smart_count:I-w.length}):"";return s.a.createElement(l.a,{value:w,className:"u-h-2",error:P,onBlur:function(){w.length>0?L(I>0&&w.length<I):L(!1)},onFocus:function(){return L(!1)},helperText:S,inputProps:{inputMode:"number"===E?"numeric":"text"},onChange:M,variant:"outlined",label:c?h(c):"",fullWidth:!0,autoFocus:!0})},m=c.a.shape({name:c.a.string,inputLabel:c.a.string,metadata:c.a.shape(a()({},"attrsProptypes.name",c.a.string)),type:c.a.string});h.propTypes={attrs:m.isRequired,setValue:c.a.func.isRequired,setValidInput:c.a.func.isRequired,idx:c.a.number};t.default=h}}]);