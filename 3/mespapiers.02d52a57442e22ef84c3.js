(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{BeY5:function(e,t,a){"use strict";a.r(t);var n=a("yXPU"),r=a.n(n),c=a("J4zp"),o=a.n(c),l=a("o0o1"),i=a.n(l),s=a("q1tI"),u=a.n(s),m=a("buk/"),f=a("SH7X"),d=a("1aYg"),p=a("cbAs"),v=a("gPjO"),b=a("aN1g"),E=a("vEVt"),y=a("JeaN"),g=a("MSWZ"),O=a("KXWi"),C=a("BuRe"),x=a("QaI8"),h=a("V2U0"),I=a("I4GL"),j=a("Eyyc"),N=a("nZHA"),w=function(){var e=Object(f.useClient)(),t=Object(m.f)().t,a=Object(I.a)().formSubmit,n=Object(s.useState)(null),c=o()(n,2),l=c[0],N=c[1],w=Object(s.useState)(!1),S=o()(w,2),k=S[0],z=S[1];Object(s.useEffect)((function(){var t=!0;return r()(i.a.mark((function a(){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(j.a)(e);case 2:n=a.sent,t&&N(n);case 4:case"end":return a.stop()}}),a)})))(),function(){t=!1}}),[e]);return u.a.createElement(d.a,{elevation:2,className:"u-mt-1"},u.a.createElement(p.a,null,u.a.createElement(v.a,{onClick:!k&&function(){z(!0),a()},disabled:k},u.a.createElement(b.a,null,u.a.createElement(C.a,{size:"small",style:{color:"var(--primaryColor)",backgroundColor:"var(--primaryColorLightest)"}})),u.a.createElement(E.a,{primary:t("ContactAdapter.me",{name:(null==l?void 0:l.fullname)||""})}),k&&u.a.createElement(y.a,{className:"u-mr-half"},u.a.createElement(h.a,{color:"var(--secondaryTextColor)"}))),u.a.createElement(g.a,{variant:"inset",component:"li"}),u.a.createElement(v.a,{disabled:!0},u.a.createElement(b.a,null,u.a.createElement(C.a,{size:"small",style:{color:"var(--primaryColor)",backgroundColor:"var(--primaryColorLightest)"}})),u.a.createElement(E.a,{primary:t("ContactAdapter.other")}),u.a.createElement(y.a,null,u.a.createElement(O.c,{label:t("ContactAdapter.other"),theme:"text",icon:x.a,extension:"narrow",iconOnly:!0,style:{color:"var(--secondaryTextColor)"},className:"u-m-0"})))))};t.default=function(e){var t=e.currentStep,a=Object(m.f)().t,n=t.illustration,r=t.text;return u.a.createElement(N.a,{icon:n,iconSize:"small",title:a(r),text:u.a.createElement(w,null)})}},I4GL:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r=a("Nl77"),c=function(){var e=Object(n.useContext)(r.b);if(!e)throw new Error("useFormDataContext must be used within a FormDataProvider");return e}},Jnff:function(e,t,a){var n={"./Account.svg":["9vNz",8],"./GenericInputDate.svg":["PmMc",9],"./GenericInputText.svg":["E4M7",10],"./GenericScan.svg":["Lz7q",11],"./HomeCloud.svg":["crtK"],"./IlluIdCardBack.svg":["rp3j",12],"./IlluIdCardExpirationDateHelp.svg":["pCpU",13],"./IlluIdCardFront.svg":["7WME",14],"./IlluIdCardNumberHelp.svg":["UQdY",15],"./Konnectors.svg":["YqmH"]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id="Jnff",e.exports=r},n2U4:function(e,t,a){},nZHA:function(e,t,a){"use strict";var n=a("pVnL"),r=a.n(n),c=a("lSNA"),o=a.n(c),l=a("yXPU"),i=a.n(l),s=a("J4zp"),u=a.n(s),m=a("QILm"),f=a.n(m),d=a("o0o1"),p=a.n(d),v=a("q1tI"),b=a.n(v),E=a("17x9"),y=a.n(E),g=a("TSYQ"),O=a.n(g),C=a("Z0cm"),x=a.n(C),h=a("c8ah"),I=a("y6ex"),j=(a("n2U4"),["icon","fallbackIcon","iconSize","title","text","className"]),N=function(e){var t=e.icon,n=e.fallbackIcon,c=e.iconSize,l=e.title,s=e.text,m=e.className,d=f()(e,j),E=Object(v.useState)(null),y=u()(E,2),g=y[0],C=y[1];return Object(v.useEffect)((function(){var e=!0;return i()(p.a.mark((function r(){var c;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a("Jnff")("./".concat(t)).catch((function(){return{default:n}}));case 2:c=r.sent,e&&C(c.default);case 4:case"end":return r.stop()}}),r)})))(),function(){e=!1}}),[t,n]),b.a.createElement("div",r()({className:O()("composite-header-container",m)},d),g&&b.a.createElement(I.a,{className:O()("composite-header-img",o()({},"composite-header-img--".concat(c),"normal"!==c)),icon:g,size:"100%"}),l&&(Object(v.isValidElement)(l)?l:b.a.createElement(h.a,{variant:"h5",color:"textPrimary"},l)),s&&(Object(v.isValidElement)(s)||x()(s)?b.a.createElement("div",{className:"u-mt-1"},s):b.a.createElement(h.a,{variant:"body1",className:"u-mt-1"},s)))};N.propTypes={icon:I.b,fallbackIcon:I.b,iconSize:y.a.oneOf(["small","normal","medium","large"]),title:y.a.oneOfType([y.a.string,y.a.object]).isRequired,text:y.a.oneOfType([y.a.string,y.a.object,y.a.arrayOf(y.a.node)]),className:y.a.string},N.defaultProps={iconSize:"normal"},t.a=N}}]);