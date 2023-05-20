"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var React__default=_interopDefaultLegacy(React);function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var propTypes={exports:{}},reactIs={exports:{}},reactIs_production_min={},hasRequiredReactIs_production_min;function requireReactIs_production_min(){if(hasRequiredReactIs_production_min)return reactIs_production_min;hasRequiredReactIs_production_min=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,n=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,i=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,s=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var d=e.$$typeof;switch(d){case t:switch(e=e.type){case i:case u:case o:case a:case n:case p:return e;default:switch(e=e&&e.$$typeof){case l:case s:case y:case f:case c:return e;default:return d}}case r:return d}}}function v(e){return _(e)===u}return reactIs_production_min.AsyncMode=i,reactIs_production_min.ConcurrentMode=u,reactIs_production_min.ContextConsumer=l,reactIs_production_min.ContextProvider=c,reactIs_production_min.Element=t,reactIs_production_min.ForwardRef=s,reactIs_production_min.Fragment=o,reactIs_production_min.Lazy=y,reactIs_production_min.Memo=f,reactIs_production_min.Portal=r,reactIs_production_min.Profiler=a,reactIs_production_min.StrictMode=n,reactIs_production_min.Suspense=p,reactIs_production_min.isAsyncMode=function(e){return v(e)||_(e)===i},reactIs_production_min.isConcurrentMode=v,reactIs_production_min.isContextConsumer=function(e){return _(e)===l},reactIs_production_min.isContextProvider=function(e){return _(e)===c},reactIs_production_min.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},reactIs_production_min.isForwardRef=function(e){return _(e)===s},reactIs_production_min.isFragment=function(e){return _(e)===o},reactIs_production_min.isLazy=function(e){return _(e)===y},reactIs_production_min.isMemo=function(e){return _(e)===f},reactIs_production_min.isPortal=function(e){return _(e)===r},reactIs_production_min.isProfiler=function(e){return _(e)===a},reactIs_production_min.isStrictMode=function(e){return _(e)===n},reactIs_production_min.isSuspense=function(e){return _(e)===p},reactIs_production_min.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===n||e===p||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===f||e.$$typeof===c||e.$$typeof===l||e.$$typeof===s||e.$$typeof===b||e.$$typeof===h||e.$$typeof===g||e.$$typeof===m)},reactIs_production_min.typeOf=_,reactIs_production_min}var reactIs_development={},hasRequiredReactIs_development,hasRequiredReactIs,objectAssign,hasRequiredObjectAssign,ReactPropTypesSecret_1,hasRequiredReactPropTypesSecret,has,hasRequiredHas,checkPropTypes_1,hasRequiredCheckPropTypes,factoryWithTypeCheckers,hasRequiredFactoryWithTypeCheckers,factoryWithThrowingShims,hasRequiredFactoryWithThrowingShims;
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function requireReactIs_development(){return hasRequiredReactIs_development||(hasRequiredReactIs_development=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,n=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,i=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,s=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var d=e.$$typeof;switch(d){case t:var m=e.type;switch(m){case i:case u:case o:case a:case n:case p:return m;default:var b=m&&m.$$typeof;switch(b){case l:case s:case y:case f:case c:return b;default:return d}}case r:return d}}}var v=i,C=u,k=l,R=c,I=t,S=s,T=o,x=y,E=f,w=r,O=a,P=n,j=p,N=!1;function $(e){return _(e)===u}reactIs_development.AsyncMode=v,reactIs_development.ConcurrentMode=C,reactIs_development.ContextConsumer=k,reactIs_development.ContextProvider=R,reactIs_development.Element=I,reactIs_development.ForwardRef=S,reactIs_development.Fragment=T,reactIs_development.Lazy=x,reactIs_development.Memo=E,reactIs_development.Portal=w,reactIs_development.Profiler=O,reactIs_development.StrictMode=P,reactIs_development.Suspense=j,reactIs_development.isAsyncMode=function(e){return N||(N=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),$(e)||_(e)===i},reactIs_development.isConcurrentMode=$,reactIs_development.isContextConsumer=function(e){return _(e)===l},reactIs_development.isContextProvider=function(e){return _(e)===c},reactIs_development.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},reactIs_development.isForwardRef=function(e){return _(e)===s},reactIs_development.isFragment=function(e){return _(e)===o},reactIs_development.isLazy=function(e){return _(e)===y},reactIs_development.isMemo=function(e){return _(e)===f},reactIs_development.isPortal=function(e){return _(e)===r},reactIs_development.isProfiler=function(e){return _(e)===a},reactIs_development.isStrictMode=function(e){return _(e)===n},reactIs_development.isSuspense=function(e){return _(e)===p},reactIs_development.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===n||e===p||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===f||e.$$typeof===c||e.$$typeof===l||e.$$typeof===s||e.$$typeof===b||e.$$typeof===h||e.$$typeof===g||e.$$typeof===m)},reactIs_development.typeOf=_}()),reactIs_development}function requireReactIs(){return hasRequiredReactIs||(hasRequiredReactIs=1,"production"===process.env.NODE_ENV?reactIs.exports=requireReactIs_production_min():reactIs.exports=requireReactIs_development()),reactIs.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function requireObjectAssign(){if(hasRequiredObjectAssign)return objectAssign;hasRequiredObjectAssign=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return objectAssign=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(o,n){for(var a,c,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(o),i=1;i<arguments.length;i++){for(var u in a=Object(arguments[i]))t.call(a,u)&&(l[u]=a[u]);if(e){c=e(a);for(var s=0;s<c.length;s++)r.call(a,c[s])&&(l[c[s]]=a[c[s]])}}return l},objectAssign}function requireReactPropTypesSecret(){if(hasRequiredReactPropTypesSecret)return ReactPropTypesSecret_1;hasRequiredReactPropTypesSecret=1;return ReactPropTypesSecret_1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function requireHas(){return hasRequiredHas?has:(hasRequiredHas=1,has=Function.call.bind(Object.prototype.hasOwnProperty))}function requireCheckPropTypes(){if(hasRequiredCheckPropTypes)return checkPropTypes_1;hasRequiredCheckPropTypes=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=requireReactPropTypesSecret(),r={},o=requireHas();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function n(n,a,c,l,i){if("production"!==process.env.NODE_ENV)for(var u in n)if(o(n,u)){var s;try{if("function"!=typeof n[u]){var p=Error((l||"React class")+": "+c+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}s=n[u](a,u,l,c,null,t)}catch(e){s=e}if(!s||s instanceof Error||e((l||"React class")+": type specification of "+c+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in r)){r[s.message]=!0;var d=i?i():"";e("Failed "+c+" type: "+s.message+(null!=d?d:""))}}}return n.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},checkPropTypes_1=n}function requireFactoryWithTypeCheckers(){if(hasRequiredFactoryWithTypeCheckers)return factoryWithTypeCheckers;hasRequiredFactoryWithTypeCheckers=1;var e=requireReactIs(),t=requireObjectAssign(),r=requireReactPropTypesSecret(),o=requireHas(),n=requireCheckPropTypes(),a=function(){};function c(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),factoryWithTypeCheckers=function(l,i){var u="function"==typeof Symbol&&Symbol.iterator,s="@@iterator";var p="<<anonymous>>",d={array:b("array"),bigint:b("bigint"),bool:b("boolean"),func:b("function"),number:b("number"),object:b("object"),string:b("string"),symbol:b("symbol"),any:m(c),arrayOf:function(e){return m((function(t,o,n,a,c){if("function"!=typeof e)return new y("Property `"+c+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var l=t[o];if(!Array.isArray(l))return new y("Invalid "+a+" `"+c+"` of type `"+_(l)+"` supplied to `"+n+"`, expected an array.");for(var i=0;i<l.length;i++){var u=e(l,i,n,a,c+"["+i+"]",r);if(u instanceof Error)return u}return null}))},element:m((function(e,t,r,o,n){var a=e[t];return l(a)?null:new y("Invalid "+o+" `"+n+"` of type `"+_(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(t,r,o,n,a){var c=t[r];return e.isValidElementType(c)?null:new y("Invalid "+n+" `"+a+"` of type `"+_(c)+"` supplied to `"+o+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,r,o,n,a){if(!(t[r]instanceof e)){var c=e.name||p;return new y("Invalid "+n+" `"+a+"` of type `"+(((l=t[r]).constructor&&l.constructor.name?l.constructor.name:p)+"` supplied to `")+o+"`, expected instance of `"+c+"`.")}var l;return null}))},node:m((function(e,t,r,o,n){return g(e[t])?null:new y("Invalid "+o+" `"+n+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,a,c,l){if("function"!=typeof e)return new y("Property `"+l+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var i=t[n],u=_(i);if("object"!==u)return new y("Invalid "+c+" `"+l+"` of type `"+u+"` supplied to `"+a+"`, expected an object.");for(var s in i)if(o(i,s)){var p=e(i,s,a,c,l+"."+s,r);if(p instanceof Error)return p}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c;return m((function(t,r,o,n,a){for(var c=t[r],l=0;l<e.length;l++)if(f(c,e[l]))return null;var i=JSON.stringify(e,(function(e,t){return"symbol"===v(t)?String(t):t}));return new y("Invalid "+n+" `"+a+"` of value `"+String(c)+"` supplied to `"+o+"`, expected one of "+i+".")}))},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+C(n)+" at index "+t+"."),c}return m((function(t,n,a,c,l){for(var i=[],u=0;u<e.length;u++){var s=(0,e[u])(t,n,a,c,l,r);if(null==s)return null;s.data&&o(s.data,"expectedType")&&i.push(s.data.expectedType)}return new y("Invalid "+c+" `"+l+"` supplied to `"+a+"`"+(i.length>0?", expected one of type ["+i.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,o,n,a,c){var l=t[o],i=_(l);if("object"!==i)return new y("Invalid "+a+" `"+c+"` of type `"+i+"` supplied to `"+n+"`, expected `object`.");for(var u in e){var s=e[u];if("function"!=typeof s)return h(n,a,c,u,v(s));var p=s(l,u,n,a,c+"."+u,r);if(p)return p}return null}))},exact:function(e){return m((function(n,a,c,l,i){var u=n[a],s=_(u);if("object"!==s)return new y("Invalid "+l+" `"+i+"` of type `"+s+"` supplied to `"+c+"`, expected `object`.");var p=t({},n[a],e);for(var d in p){var f=e[d];if(o(e,d)&&"function"!=typeof f)return h(c,l,i,d,v(f));if(!f)return new y("Invalid "+l+" `"+i+"` key `"+d+"` supplied to `"+c+"`.\nBad object: "+JSON.stringify(n[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(u,d,c,l,i+"."+d,r);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function y(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){if("production"!==process.env.NODE_ENV)var t={},o=0;function n(n,c,l,u,s,d,f){if(u=u||p,d=d||l,f!==r){if(i){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var b=u+":"+l;!t[b]&&o<3&&(a("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[b]=!0,o++)}}return null==c[l]?n?null===c[l]?new y("The "+s+" `"+d+"` is marked as required in `"+u+"`, but its value is `null`."):new y("The "+s+" `"+d+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(c,l,u,s,d)}var c=n.bind(null,!1);return c.isRequired=n.bind(null,!0),c}function b(e){return m((function(t,r,o,n,a,c){var l=t[r];return _(l)!==e?new y("Invalid "+n+" `"+a+"` of type `"+v(l)+"` supplied to `"+o+"`, expected `"+e+"`.",{expectedType:e}):null}))}function h(e,t,r,o,n){return new y((e||"React class")+": "+t+" type `"+r+"."+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+n+"`.")}function g(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(g);if(null===e||l(e))return!0;var t=function(e){var t=e&&(u&&e[u]||e[s]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,o=t.call(e);if(t!==e.entries){for(;!(r=o.next()).done;)if(!g(r.value))return!1}else for(;!(r=o.next()).done;){var n=r.value;if(n&&!g(n[1]))return!1}return!0;default:return!1}}function _(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function v(e){if(null==e)return""+e;var t=_(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function C(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return y.prototype=Error.prototype,d.checkPropTypes=n,d.resetWarningCache=n.resetWarningCache,d.PropTypes=d,d},factoryWithTypeCheckers}function requireFactoryWithThrowingShims(){if(hasRequiredFactoryWithThrowingShims)return factoryWithThrowingShims;hasRequiredFactoryWithThrowingShims=1;var e=requireReactPropTypesSecret();function t(){}function r(){}return r.resetWarningCache=t,factoryWithThrowingShims=function(){function o(t,r,o,n,a,c){if(c!==e){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function n(){return o}o.isRequired=o;var a={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:n,element:o,elementType:o,instanceOf:n,node:o,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:r,resetWarningCache:t};return a.PropTypes=a,a}}if("production"!==process.env.NODE_ENV){var ReactIs=requireReactIs(),throwOnDirectAccess=!0;propTypes.exports=requireFactoryWithTypeCheckers()(ReactIs.isElement,throwOnDirectAccess)}else propTypes.exports=requireFactoryWithThrowingShims()();var propTypesExports=propTypes.exports,PropTypes=getDefaultExportFromCjs(propTypesExports);const arrToStr=(e,t,r)=>{let o="";e.forEach((e=>{o+=`${e.color} ${e.stop}%, `})),r(`linear-gradient(${t}deg, ${o.substring(0,o.length-2)})`)},themeSelector=(e,t,r)=>{switch(e){case 1:r(`linear-gradient(${t}deg, rgba(166,255,203,1) 0%, rgba(18,216,250,1) 50%, rgba(31,162,255,1) 100%)`);break;case 2:r(`linear-gradient(${t}deg, rgba(0,57,115,1) 0%, rgba(229,229,190,1) 100%)`);break;case 3:r(`linear-gradient(${t}deg, rgba(72,85,99,1) 0%, rgba(41,50,60,1) 100%)`);break;case 4:r(`linear-gradient(${t}deg, rgba(136,21,191,1) 0%, rgba(170,7,107,1) 50%, rgba(237,9,64,1) 100%)`)}};function styleInject(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var css_248z$2=".calculator-container{background-color:transparent;border-radius:10px;box-shadow:0 2px 5px rgba(0,0,0,.3);margin:auto;padding:20px}.calculator-display{background-color:#fff;border:1px solid #ccc;border-radius:5px;margin-bottom:10px;padding:10px}.calculator-display input{border:none;font-size:24px;height:50px;text-align:right;width:100%}.calculator-row{display:flex;justify-content:space-between}.calculator-button{background-color:#fff;border:none;border-radius:20px;color:#1e88e5;cursor:pointer;font-size:24px;height:50%;margin-bottom:10px;transition:background-color .3s ease-in-out,transform .3s ease-in-out;width:20%}.calculator-button:hover{background-color:#f2f2f2}.calculator-button:active{background-color:#e6e6e6;transform:scale(.95)}.calculator-button:focus{box-shadow:0 0 3px #1e88e5;outline:none}.clear{width:145px}";styleInject(css_248z$2);const Calculator=_ref=>{let{backgroundColor:backgroundColor,theme:theme,primaryFont:primaryFont,rotation:rotation,primaryColor:primaryColor}=_ref;const[input,setInput]=React.useState(""),[colorString,setColorString]=React.useState("");function handleButtonClick(event){const value=event.target.value;switch(value){case"=":try{const result=eval(input);setInput(result.toString())}catch(e){setInput("Error")}break;case"C":setInput("");break;case"CE":setInput(input.slice(0,-1));break;default:setInput((e=>e+value))}}return React.useEffect((()=>{0!==theme?themeSelector(theme,rotation,setColorString):backgroundColor?arrToStr(backgroundColor,rotation,setColorString):setColorString("linear-gradient(transparent)")}),[backgroundColor,theme,primaryFont,rotation,primaryColor]),React__default.default.createElement("div",{className:"calculator-container",style:{backgroundImage:colorString}},React__default.default.createElement("div",{className:"calculator-display",style:{backgroundColor:primaryColor}},React__default.default.createElement("input",{type:"text",value:input,onChange:e=>setInput(e.target.value),style:{backgroundColor:primaryColor}})),React__default.default.createElement("div",{className:"calculator-row",style:{color:"#fff"}},React__default.default.createElement("button",{className:"calculator-button",value:"7",onClick:handleButtonClick,style:{color:primaryFont,backgroundColor:primaryColor}},"7"),React__default.default.createElement("button",{className:"calculator-button",value:"8",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick},"8"),React__default.default.createElement("button",{className:"calculator-button",value:"9",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick},"9"),React__default.default.createElement("button",{className:"calculator-button",style:{color:primaryFont,backgroundColor:primaryColor},value:"+",onClick:handleButtonClick},"+")),React__default.default.createElement("div",{className:"calculator-row"},React__default.default.createElement("button",{className:"calculator-button",value:"4",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick},"4"),React__default.default.createElement("button",{className:"calculator-button",value:"5",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick},"5"),React__default.default.createElement("button",{className:"calculator-button",value:"6",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick},"6"),React__default.default.createElement("button",{className:"calculator-button",style:{color:primaryFont,backgroundColor:primaryColor},value:"-",onClick:handleButtonClick},"-")),React__default.default.createElement("div",{className:"calculator-row"},React__default.default.createElement("button",{className:"calculator-button",value:"1",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick},"1"),React__default.default.createElement("button",{className:"calculator-button",value:"2",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick},"2"),React__default.default.createElement("button",{style:{color:primaryFont,backgroundColor:primaryColor},className:"calculator-button",value:"3",onClick:handleButtonClick},"3"),React__default.default.createElement("button",{className:"calculator-button",style:{color:primaryFont,backgroundColor:primaryColor},value:"*",onClick:handleButtonClick},"*")),React__default.default.createElement("div",{className:"calculator-row"},React__default.default.createElement("button",{className:"calculator-button",value:"0",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick},"0"),React__default.default.createElement("button",{className:"calculator-button",value:".",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick},"."),React__default.default.createElement("button",{className:"calculator-button",style:{color:primaryFont,backgroundColor:primaryColor},value:"=",onClick:handleButtonClick},"="),React__default.default.createElement("button",{className:"calculator-button",style:{color:primaryFont,backgroundColor:primaryColor},value:"/",onClick:handleButtonClick},"/")),React__default.default.createElement("div",{className:"calculator-row"},React__default.default.createElement("button",{className:"calculator-button clear",value:"CE",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick},"Clear Last"),React__default.default.createElement("button",{className:"calculator-button clear",value:"C",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick},"Clear All")))};Calculator.prototype={backgroundColor:PropTypes.array,theme:PropTypes.oneOf([0,1,2,3,4]),primaryFont:PropTypes.string,rotation:PropTypes.number,primaryColor:PropTypes.string},Calculator.defaultProps={backgroundColor:void 0,primaryFont:"#333",theme:0,primaryColor:"#000",rotation:90};var css_248z$1=".clock-container{align-items:center;display:flex;height:80%;justify-content:center;width:80%}.clock-time{font-size:6em;text-shadow:0 0 10px rgba(0,0,0,.3)}";styleInject(css_248z$1);const Clock=e=>{let{backgroundColor:t,theme:r,primaryFont:o,primaryColor:n,rotation:a}=e;const[c,l]=React.useState(new Date),[i,u]=React.useState("");return React.useEffect((()=>{const e=setInterval((()=>l(new Date)),1e3);return()=>clearInterval(e)}),[]),React.useEffect((()=>{0!==r?themeSelector(r,a,u):t?arrToStr(t,a,u):u("linear-gradient(transparent)")}),[t,r,o,a,n]),React__default.default.createElement("div",{className:"clock-container",style:{backgroundImage:i,color:o,color:n}},React__default.default.createElement("div",{className:"clock-time"},c.toLocaleTimeString()))};Clock.prototype={backgroundColor:PropTypes.array,theme:PropTypes.oneOf([0,1,2,3,4]),primaryColor:PropTypes.string,primaryFont:PropTypes.string,rotation:PropTypes.number},Clock.defaultProps={backgroundColor:void 0,primaryColor:"#000",primaryFont:"#333",theme:0,rotation:90};var css_248z=".calendar-container{border:none;border-radius:5px;box-shadow:0 2px 4px rgba(0,0,0,.1);display:inline-block;overflow:hidden}.calendar-header{align-items:center;background-color:transparent;display:flex;justify-content:space-between;padding:10px}.calendar-header button{background-color:transparent;border:none;border-radius:10px;cursor:pointer;font-size:20px;outline:none;transition:color .2s ease-in-out}.calendar-header button:hover{color:#007bff}.calendar-header h2{font-size:18px;font-weight:700;margin:0}.calendar-body{background-color:transparent;display:grid;gap:1px;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(6,1fr);padding:10px}.calendar-day{align-items:center;border-radius:10px;display:flex;font-size:16px;height:40px;justify-content:center;margin:2px;transition:transform .2s ease-in-out,font-weight .2s ease-in-out;width:40px}.calendar-day:hover{cursor:pointer;font-weight:700;transform:scale(1.3)}.calendar-day.active{background-color:#007bff;color:#fff}.calendar-day.today{background-color:#e8f0fe}.calendar-day-header,.calendar-day.empty{background-color:transparent}.calendar-day-header{align-items:center;border-radius:10px;display:flex;font-size:14px;height:30px;justify-content:center;text-align:center}";styleInject(css_248z);const Calendar=e=>{let{backgroundColor:t,theme:r,primaryFont:o,rotation:n,primaryColor:a}=e;const[c,l]=React.useState(""),[i,u]=React.useState(new Date),s=new Date(i.getFullYear(),i.getMonth(),1).getDay(),p=new Date(i.getFullYear(),i.getMonth()+1,0).getDate();return React.useEffect((()=>{0!==r?themeSelector(r,n,l):t?arrToStr(t,n,l):l("linear-gradient(transparent)")}),[t,r,o,n,a]),React__default.default.createElement("div",{className:"calendar-container",style:{backgroundImage:c,color:o}},React__default.default.createElement("div",{className:"calendar-header"},React__default.default.createElement("button",{style:{color:o,backgroundColor:a},onClick:()=>{u(new Date(i.getFullYear(),i.getMonth()-1,1))}},"<"),React__default.default.createElement("h2",null,["January","February","March","April","May","June","July","August","September","October","November","December"][i.getMonth()]),React__default.default.createElement("button",{style:{color:o,backgroundColor:a},onClick:()=>{u(new Date(i.getFullYear(),i.getMonth()+1,1))}},">")),React__default.default.createElement("div",{className:"calendar-body"},["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((e=>React__default.default.createElement("div",{key:e,style:{backgroundColor:a},className:"calendar-day-header"},e))),(()=>{let e=[];for(let t=1;t<=p;t++)e.push(React__default.default.createElement("div",{key:t,style:{backgroundColor:a},className:"calendar-day"},t));for(let t=0;t<s;t++)e.unshift(React__default.default.createElement("div",{key:-t,className:"calendar-day empty"}));return e})()))};Calendar.prototype={backgroundColor:PropTypes.array,theme:PropTypes.oneOf([0,1,2,3,4]),primaryFont:PropTypes.string,primaryColor:PropTypes.string,rotation:PropTypes.number},Calendar.defaultProps={backgroundColor:void 0,primaryFont:"#333",theme:0,rotation:90,primaryColor:"#fff"},exports.Calculator=Calculator,exports.Calendar=Calendar,exports.Clock=Clock;
