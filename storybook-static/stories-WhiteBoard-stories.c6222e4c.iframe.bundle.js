/*! For license information please see stories-WhiteBoard-stories.c6222e4c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkwidgetsy=self.webpackChunkwidgetsy||[]).push([[347],{"./src/stories/WhiteBoard.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>WhiteBoard_stories});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),arrToStr=__webpack_require__("./src/utils/arrToStr.js"),ThemeSelector=__webpack_require__("./src/utils/ThemeSelector.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),whiteboard=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/whiteboard.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(whiteboard.Z,options);whiteboard.Z&&whiteboard.Z.locals&&whiteboard.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Whiteboard=_ref=>{let{backgroundColor,theme,primaryFont,rotation,primaryColor}=_ref;const[color,setColor]=(0,react.useState)("#000000"),[isDrawing,setIsDrawing]=(0,react.useState)(!1),[colorString,setColorString]=(0,react.useState)(""),[undoStack,setUndoStack]=(0,react.useState)([]),[ctx,setCtx]=(0,react.useState)(null),[canvas,setCanvas]=(0,react.useState)(null),canvasRef=(0,react.useRef)();return(0,react.useEffect)((()=>{0!==theme?(0,ThemeSelector.F)(theme,rotation,setColorString):backgroundColor?(0,arrToStr.o)(backgroundColor,rotation,setColorString):setColorString("linear-gradient(transparent)")}),[theme,rotation,backgroundColor]),(0,react.useEffect)((()=>{const Canvas=canvasRef.current,Ctx=Canvas.getContext("2d",{willReadFrequently:!0});setCtx(Ctx),setCanvas(Canvas)}),[]),(0,jsx_runtime.jsxs)("div",{className:"whiteboard-container",style:{backgroundImage:colorString},children:[(0,jsx_runtime.jsxs)("div",{className:"whiteboard-toolbar",children:[(0,jsx_runtime.jsx)("input",{type:"color",value:color,onChange:event=>{setColor(event.target.value)}}),(0,jsx_runtime.jsx)("button",{onClick:()=>{setColor("#ffffff")},style:{color:primaryFont,backgroundColor:primaryColor},children:"Eraser"}),(0,jsx_runtime.jsx)("button",{onClick:()=>{undoStack.length>1&&ctx&&(setUndoStack(undoStack.slice(0,-1)),ctx.putImageData(undoStack[undoStack.length-2],0,0))},style:{color:primaryFont,backgroundColor:primaryColor},children:"Undo"}),(0,jsx_runtime.jsx)("button",{onClick:()=>{ctx&&(ctx.clearRect(0,0,canvas.width,canvas.height),setUndoStack([ctx.getImageData(0,0,canvas.width,canvas.height)]))},style:{color:primaryFont,backgroundColor:primaryColor},children:"Clear"})]}),(0,jsx_runtime.jsx)("canvas",{ref:canvasRef,className:"whiteboard-canvas",onMouseDown:event=>{const canvasBounds=canvas.getBoundingClientRect(),offsetX=event.clientX-canvasBounds.left,offsetY=event.clientY-canvasBounds.top;ctx&&(ctx.strokeStyle=color,ctx.lineWidth=5,ctx.lineCap="round",ctx.lineJoin="round",ctx.beginPath(),ctx.moveTo(offsetX,offsetY),setUndoStack([...undoStack,ctx.getImageData(0,0,canvas.width,canvas.height)]),setIsDrawing(!0))},onMouseMove:event=>{if(isDrawing){const{offsetX,offsetY}=event.nativeEvent;ctx&&(ctx.lineTo(offsetX,offsetY),ctx.stroke())}},onMouseUp:()=>{setIsDrawing(!1)}})]})};Whiteboard.displayName="Whiteboard",Whiteboard.propTypes={backgroundColor:prop_types_default().array,theme:prop_types_default().oneOf([0,1,2,3,4]),primaryFont:prop_types_default().string,rotation:prop_types_default().number,primaryColor:prop_types_default().string},Whiteboard.defaultProps={backgroundColor:void 0,primaryFont:"#333",theme:0,rotation:90,primaryColor:"#000"},Whiteboard.__docgenInfo={description:"",methods:[],displayName:"Whiteboard",props:{backgroundColor:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"array"},required:!1},primaryFont:{defaultValue:{value:'"#333"',computed:!1},description:"",type:{name:"string"},required:!1},theme:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"enum",value:[{value:"0",computed:!1},{value:"1",computed:!1},{value:"2",computed:!1},{value:"3",computed:!1},{value:"4",computed:!1}]},required:!1},rotation:{defaultValue:{value:"90",computed:!1},description:"",type:{name:"number"},required:!1},primaryColor:{defaultValue:{value:'"#000"',computed:!1},description:"",type:{name:"string"},required:!1}}};const WhiteBoard_stories={title:"Example/Whiteboard",component:Whiteboard},Template=args=>(0,jsx_runtime.jsx)(Whiteboard,{...args});Template.displayName="Template";const Default=Template.bind({}),Primary={args:{backgroundColor:[{color:"#ffffff",stop:0,stopPx:0},{color:"#757ff3",stop:50,stopPx:348.2624816894531},{color:"#000000",stop:100,stopPx:800}],primaryFont:"#ccc",theme:0,primaryColor:"#757ff3",rotation:90}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Whiteboard {...args} />",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    backgroundColor: [{\n      color: "#ffffff",\n      stop: 0,\n      stopPx: 0\n    }, {\n      color: "#757ff3",\n      stop: 50,\n      stopPx: 348.2624816894531\n    }, {\n      color: "#000000",\n      stop: 100,\n      stopPx: 800\n    }],\n    primaryFont: "#ccc",\n    theme: 0,\n    primaryColor: "#757ff3",\n    rotation: 90\n  }\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary"]},"./src/utils/ThemeSelector.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>themeSelector});const themeSelector=(theme,rotation,setColorString)=>{switch(theme){case 1:setColorString(`linear-gradient(${rotation}deg, rgba(166,255,203,1) 0%, rgba(18,216,250,1) 50%, rgba(31,162,255,1) 100%)`);break;case 2:setColorString(`linear-gradient(${rotation}deg, rgba(0,57,115,1) 0%, rgba(229,229,190,1) 100%)`);break;case 3:setColorString(`linear-gradient(${rotation}deg, rgba(72,85,99,1) 0%, rgba(41,50,60,1) 100%)`);break;case 4:setColorString(`linear-gradient(${rotation}deg, rgba(136,21,191,1) 0%, rgba(170,7,107,1) 50%, rgba(237,9,64,1) 100%)`)}}},"./src/utils/arrToStr.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>arrToStr});const arrToStr=(backgroundColor,rotation,setColorString)=>{let colorStr="";backgroundColor.forEach((color=>{colorStr+=`${color.color} ${color.stop}%, `})),setColorString(`linear-gradient(${rotation}deg, ${colorStr.substring(0,colorStr.length-2)})`)}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/whiteboard.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.whiteboard-container {\r\n  \r\n  display: inline-block;\r\n  border: none;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  overflow: hidden;\r\n}\r\n\r\n.whiteboard-toolbar {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.whiteboard-toolbar input[type="color"],\r\n.whiteboard-toolbar button {\r\n  margin-right: 10px;\r\n  padding: 0px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.whiteboard-toolbar button {\r\n  background-color: #ffffff;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\r\n  cursor: pointer;\r\n}\r\n\r\n.whiteboard-canvas {\r\n  background-color: #ffffff;\r\n  border: 1px solid #cccccc;\r\n  cursor: crosshair;\r\n  width: 90%;\r\n  height: 80%;\r\n  margin-left: 5%;\r\n}\r\n',"",{version:3,sources:["webpack://./src/components/whiteboard.css"],names:[],mappings:"AAAA;;EAEE,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,wCAAwC;EACxC,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,kBAAkB;EAClB,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,eAAe;AACjB",sourcesContent:['.whiteboard-container {\r\n  \r\n  display: inline-block;\r\n  border: none;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  overflow: hidden;\r\n}\r\n\r\n.whiteboard-toolbar {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.whiteboard-toolbar input[type="color"],\r\n.whiteboard-toolbar button {\r\n  margin-right: 10px;\r\n  padding: 0px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.whiteboard-toolbar button {\r\n  background-color: #ffffff;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\r\n  cursor: pointer;\r\n}\r\n\r\n.whiteboard-canvas {\r\n  background-color: #ffffff;\r\n  border: 1px solid #cccccc;\r\n  cursor: crosshair;\r\n  width: 90%;\r\n  height: 80%;\r\n  margin-left: 5%;\r\n}\r\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);