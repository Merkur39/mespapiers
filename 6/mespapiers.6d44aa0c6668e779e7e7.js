(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{"9Yiz":function(e,t,n){"use strict";n.r(t);var r=n("lSNA"),a=n.n(r),u=n("J4zp"),c=n.n(u),o=n("q1tI"),i=n.n(o),l=n("17x9"),s=n.n(l),p=n("ERmx"),f=n("buk/"),b=n("Vggm"),d=n.n(b);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e,t){return e>0&&t.length<=e||0===e},y=function(e){var t=e.attrs,n=e.setValue,r=e.setValidInput,u=e.setIsFocus,l=e.idx,s=t.name,b=t.inputLabel,g=t.metadata,y=t.type,O=Object(f.f)().t,h=Object(o.useState)(g[s]||""),j=c()(h,2),w=j[0],x=j[1],P=Object(o.useState)(!1),E=c()(P,2),k=E[0],T=E[1];Object(o.useEffect)((function(){n((function(e){return v(v({},e),{},a()({},s,w))}))}),[s,n,w]),Object(o.useEffect)((function(){r((function(e){return v(v({},e),{},a()({},l,0===w.length||w.length===S))}))}),[l,S,r,w.length]);var D=Object(o.useMemo)((function(){return function(e){var t=e.split(":"),n=c()(t,2),r=n[0],a=void 0===r?e:r,u=n[1],o={inputType:"",inputMaxLength:0};switch(a){case"Number":o.inputType="Number".toLowerCase();break;case"Text":o.inputType="Text".toLowerCase();break;default:d()("warn",'"type" in "attributes" property is not defined or unexpected, "type" set to "text" by default'),o.inputType="Text".toLowerCase()}return u&&(o.inputMaxLength=parseInt(u,10)),o}(y)}),[y]),I=D.inputType,S=D.inputMaxLength,V=Object(o.useCallback)((function(e){var t=e.target.value;if("number"===I){var n=parseInt(t,10);/^[0-9]*$/.test(n)?m(S,t)&&x(n.toString()):""===t&&x(t)}else m(S,t)&&x(t)}),[S,I]),L=k?O("InputTextAdapter.invalidTextMessage",{smart_count:S-w.length}):"";return i.a.createElement(p.a,{value:w,error:k,onBlur:function(){u(!1),w.length>0?T(S>0&&w.length<S):T(!1)},onFocus:function(){u(!0),T(!1)},helperText:L,inputProps:{inputMode:"number"===I?"numeric":"text"},onChange:V,variant:"outlined",label:b?O(b):"",fullWidth:!0})},O=s.a.shape({name:s.a.string,inputLabel:s.a.string,metadata:s.a.shape(a()({},"attrsProptypes.name",s.a.string)),type:s.a.string});y.propTypes={attrs:O.isRequired,setValue:s.a.func.isRequired,setValidInput:s.a.func.isRequired,idx:s.a.number};t.default=y},C2q6:function(e,t,n){"use strict";n.r(t);var r=n("lSNA"),a=n.n(r),u=n("q1tI"),c=n.n(u),o=n("/yuz"),i=n("55Ip"),l=n("SH7X"),s=n("buk/"),p=n("1I/2"),f=n("dHS8"),b=n("d7tf"),d=n("cqqa"),g=n("owhZ"),v=n("7dT6");jest.mock("cozy-scanner/dist/locales",(function(){return{getBoundT:jest.fn((function(){return jest.fn()}))}})),jest.mock("cozy-scanner/dist/DocumentTypeData",(function(){return{themes:[{}]}}));var m=function(e){var t=e.children,n=e.client;return c.a.createElement(l.CozyProvider,{client:n||Object(l.createMockClient)({})},c.a.createElement(s.d,{dictRequire:function(){return v},lang:"en"},c.a.createElement(g.a,{lang:"en"},c.a.createElement(p.a,null,c.a.createElement(f.a,null,c.a.createElement(b.a,null,c.a.createElement(d.a,null,c.a.createElement(i.a,null,t))))))))},y=n("9Yiz");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}jest.mock("cozy-scanner/dist/locales",(function(){return{getBoundT:jest.fn((function(){return jest.fn()}))}}));var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fakeValue";return{name:"name01",inputLabel:"PaperJSON.IDCard.number.inputLabel",metadata:{name01:t},type:e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j(),t=e.metadata.name01,n=Object(o.b)(c.a.createElement(m,null,c.a.createElement(y.default,{attrs:e,setValue:jest.fn(),setValidInput:jest.fn()}))),r=n.getByDisplayValue(t);return h({input:r},n)};describe("InputTextAdapter components:",(function(){it("should be rendered correctly",(function(){var e=w().container;expect(e).toBeDefined()})),it("should have a value of 5 letters",(function(){var e=w(j(":5")).input;o.a.change(e,{target:{value:"abcde"}}),expect(e.value).toBe("abcde")})),it('should have a value of "fakeValue"',(function(){var e=w(j(":5")).input;o.a.change(e,{target:{value:"abcdefgh"}}),expect(e.value).toBe("fakeValue"),o.a.change(e,{target:{value:"123456789"}}),expect(e.value).toBe("fakeValue")})),it("should have a value of 5 digits",(function(){var e=w(j("Number:5","789")).input;o.a.change(e,{target:{value:"12345"}}),expect(e.value).toBe("12345")}))}))}}]);