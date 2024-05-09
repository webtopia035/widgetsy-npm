/*! For license information please see stories-Calculator-stories.7dd005cf.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkwidgetsy=self.webpackChunkwidgetsy||[]).push([[326],{"./src/stories/Calculator.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_Calculator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Calculator.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Calculator",component:_components_Calculator__WEBPACK_IMPORTED_MODULE_0__.y},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Calculator__WEBPACK_IMPORTED_MODULE_0__.y,{...args});Template.displayName="Template";const Default=Template.bind({}),Primary={args:{backgroundColor:[{color:"#ffffff",stop:0,stopPx:0},{color:"#757ff3",stop:50,stopPx:348.2624816894531},{color:"#000000",stop:100,stopPx:800}],primaryFont:"#ccc",theme:0,primaryColor:"#757ff3",rotation:90}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Calculator {...args} />",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    backgroundColor: [{\n      color: "#ffffff",\n      stop: 0,\n      stopPx: 0\n    }, {\n      color: "#757ff3",\n      stop: 50,\n      stopPx: 348.2624816894531\n    }, {\n      color: "#000000",\n      stop: 100,\n      stopPx: 800\n    }],\n    primaryFont: "#ccc",\n    theme: 0,\n    primaryColor: "#757ff3",\n    rotation: 90\n  }\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary"]},"./src/components/Calculator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Calculator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_utils_arrToStr__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/arrToStr.js"),_utils_ThemeSelector__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/ThemeSelector.js"),_calculator_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/calculator.css"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Calculator=_ref=>{let{backgroundColor,theme,primaryFont,rotation,primaryColor}=_ref;const[input,setInput]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[colorString,setColorString]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");function handleButtonClick(event){const value=event.target.value;switch(value){case"=":try{const result=eval(input);setInput(result.toString())}catch(error){setInput("Error")}break;case"C":setInput("");break;case"CE":setInput(input.slice(0,-1));break;default:setInput((input=>input+value))}}return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{0!==theme?(0,_utils_ThemeSelector__WEBPACK_IMPORTED_MODULE_3__.F)(theme,rotation,setColorString):backgroundColor?(0,_utils_arrToStr__WEBPACK_IMPORTED_MODULE_4__.o)(backgroundColor,rotation,setColorString):setColorString("linear-gradient(transparent)")}),[backgroundColor,theme,primaryFont,rotation,primaryColor]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"calculator-container",style:{backgroundImage:colorString},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"calculator-display",style:{backgroundColor:primaryColor},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",value:input,onChange:e=>setInput(e.target.value),style:{backgroundColor:primaryColor}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"calculator-row",style:{color:"#fff"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",value:"7",onClick:handleButtonClick,style:{color:primaryFont,backgroundColor:primaryColor},children:"7"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",value:"8",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick,children:"8"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",value:"9",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick,children:"9"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",style:{color:primaryFont,backgroundColor:primaryColor},value:"+",onClick:handleButtonClick,children:"+"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"calculator-row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",value:"4",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick,children:"4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",value:"5",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick,children:"5"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",value:"6",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick,children:"6"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",style:{color:primaryFont,backgroundColor:primaryColor},value:"-",onClick:handleButtonClick,children:"-"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"calculator-row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",value:"1",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick,children:"1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",value:"2",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick,children:"2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{style:{color:primaryFont,backgroundColor:primaryColor},className:"calculator-button",value:"3",onClick:handleButtonClick,children:"3"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",style:{color:primaryFont,backgroundColor:primaryColor},value:"*",onClick:handleButtonClick,children:"*"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"calculator-row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",value:"0",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick,children:"0"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",value:".",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick,children:"."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",style:{color:primaryFont,backgroundColor:primaryColor},value:"=",onClick:handleButtonClick,children:"="}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button",style:{color:primaryFont,backgroundColor:primaryColor},value:"/",onClick:handleButtonClick,children:"/"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"calculator-row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button clear",value:"CE",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick,children:"Clear Last"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"calculator-button clear",value:"C",style:{color:primaryFont,backgroundColor:primaryColor},onClick:handleButtonClick,children:"Clear All"})]})]})};Calculator.displayName="Calculator",Calculator.prototype={backgroundColor:prop_types__WEBPACK_IMPORTED_MODULE_5___default().array,theme:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf([0,1,2,3,4]),primaryFont:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,rotation:prop_types__WEBPACK_IMPORTED_MODULE_5___default().number,primaryColor:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Calculator.defaultProps={backgroundColor:void 0,primaryFont:"#333",theme:0,primaryColor:"#000",rotation:90},Calculator.__docgenInfo={description:"",methods:[],displayName:"Calculator",props:{backgroundColor:{defaultValue:{value:"undefined",computed:!0},required:!1},primaryFont:{defaultValue:{value:'"#333"',computed:!1},required:!1},theme:{defaultValue:{value:"0",computed:!1},required:!1},primaryColor:{defaultValue:{value:'"#000"',computed:!1},required:!1},rotation:{defaultValue:{value:"90",computed:!1},required:!1}}}},"./src/utils/ThemeSelector.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>themeSelector});const themeSelector=(theme,rotation,setColorString)=>{switch(theme){case 1:setColorString(`linear-gradient(${rotation}deg, rgba(166,255,203,1) 0%, rgba(18,216,250,1) 50%, rgba(31,162,255,1) 100%)`);break;case 2:setColorString(`linear-gradient(${rotation}deg, rgba(0,57,115,1) 0%, rgba(229,229,190,1) 100%)`);break;case 3:setColorString(`linear-gradient(${rotation}deg, rgba(72,85,99,1) 0%, rgba(41,50,60,1) 100%)`);break;case 4:setColorString(`linear-gradient(${rotation}deg, rgba(136,21,191,1) 0%, rgba(170,7,107,1) 50%, rgba(237,9,64,1) 100%)`)}}},"./src/utils/arrToStr.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>arrToStr});const arrToStr=(backgroundColor,rotation,setColorString)=>{let colorStr="";backgroundColor.forEach((color=>{colorStr+=`${color.color} ${color.stop}%, `})),setColorString(`linear-gradient(${rotation}deg, ${colorStr.substring(0,colorStr.length-2)})`)}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/calculator.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".calculator-container {\r\n  display: inline-block;\r\n  border: none;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  overflow: hidden;\r\n}\r\n\r\n.calculator-display {\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n}\r\n\r\n.calculator-display input {\r\n  width: 100%;\r\n  height: 50px;\r\n  border: none;\r\n  font-size: 24px;\r\n  text-align: right;\r\n}\r\n\r\n.calculator-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.calculator-button {\r\n  width: 20%;\r\n  height: 50%;\r\n  border: none;\r\n  border-radius: 20px;\r\n  margin-bottom: 10px;\r\n  font-size: 24px;\r\n  color: #1e88e5;\r\n  background-color: #fff;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;\r\n}\r\n\r\n.calculator-button:hover {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.calculator-button:active {\r\n  background-color: #e6e6e6;\r\n  transform: scale(0.95);\r\n}\r\n\r\n.calculator-button:focus {\r\n  outline: none;\r\n  box-shadow: 0 0 3px #1e88e5;\r\n}\r\n\r\n.clear {\r\n  width: 145px;\r\n}\r\n","",{version:3,sources:["webpack://./src/components/calculator.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,wCAAwC;EACxC,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,eAAe;EACf,yEAAyE;AAC3E;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,YAAY;AACd",sourcesContent:[".calculator-container {\r\n  display: inline-block;\r\n  border: none;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  overflow: hidden;\r\n}\r\n\r\n.calculator-display {\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n}\r\n\r\n.calculator-display input {\r\n  width: 100%;\r\n  height: 50px;\r\n  border: none;\r\n  font-size: 24px;\r\n  text-align: right;\r\n}\r\n\r\n.calculator-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.calculator-button {\r\n  width: 20%;\r\n  height: 50%;\r\n  border: none;\r\n  border-radius: 20px;\r\n  margin-bottom: 10px;\r\n  font-size: 24px;\r\n  color: #1e88e5;\r\n  background-color: #fff;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;\r\n}\r\n\r\n.calculator-button:hover {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.calculator-button:active {\r\n  background-color: #e6e6e6;\r\n  transform: scale(0.95);\r\n}\r\n\r\n.calculator-button:focus {\r\n  outline: none;\r\n  box-shadow: 0 0 3px #1e88e5;\r\n}\r\n\r\n.clear {\r\n  width: 145px;\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/calculator.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_calculator_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/calculator.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_calculator_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_calculator_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_calculator_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_calculator_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);