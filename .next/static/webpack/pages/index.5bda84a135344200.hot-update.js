/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/TodoItem.module.css":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/TodoItem.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* TodoItem.module.css */\\n.TodoItem_todo-item__37Y3K {\\n  display: flex;\\n  align-items: center;\\n  background-color: white;\\n  border-radius: 5px;\\n  padding: 5px;\\n  margin: 10px 0;\\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\\n}\\n\\n.TodoItem_completed__p8lBh {\\n  text-decoration: line-through;\\n}\\n\\n.TodoItem_todo-check__K2_hk {\\n  margin-right: 10px;\\n}\\n\\n.TodoItem_todo-text__uIcOl {\\n  flex: 1 1;\\n  font-size: 18px;\\n  font-weight: bold;\\n  color: #333;\\n  max-width: 20vh;\\n  flex-wrap: wrap;\\n}\\n\\n.TodoItem_todo-priority-container__PADna {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.TodoItem_todo-priority-marker__cKux2 {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n}\\n\\n.TodoItem_priority-dropdown__L48ET {\\n  border: none;\\n  padding: 5px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n  text-decoration: none; \\n}\\n\\n.TodoItem_priority-dropdown__L48ET:hover {\\n  background-color: #ffffff;\\n}\\n\\n.TodoItem_delete-button__1o_vc {\\n  background-color: #ff7675;\\n  border: none;\\n  color: white;\\n  padding: 5px 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n}\\n\\n.TodoItem_delete-button__1o_vc:hover{\\n  background-color: #ff6b6a;\\n}\\n\\n/* TodoItem.module.css */\\n.TodoItem_todo-item__37Y3K.TodoItem_flashing__XuGMh {\\n  -webkit-animation: TodoItem_flash__xfGpL 0.5s ease-in-out, TodoItem_fade-out__HvqtI 0.5s ease-in-out;\\n          animation: TodoItem_flash__xfGpL 0.5s ease-in-out, TodoItem_fade-out__HvqtI 0.5s ease-in-out;\\n}\\n\\n@-webkit-keyframes TodoItem_flash__xfGpL {\\n  0%, 100% {\\n    background-color: transparent;\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@keyframes TodoItem_flash__xfGpL {\\n  0%, 100% {\\n    background-color: transparent;\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@-webkit-keyframes TodoItem_fade-out__HvqtI {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n@keyframes TodoItem_fade-out__HvqtI {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n\\n.TodoItem_details-button__JHhPC {\\n  background-color: #00162c; /* Dark blue color */\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease, transform 0.3s ease;\\n  position: relative;\\n}\\n\\n.TodoItem_details-button__JHhPC:hover {\\n  background-color: #1a242f; /* Darker blue color on hover */\\n  transform: scale(1.05); /* Slight scale-up on hover */\\n}\\n\\n/* Styling for the eye icons */\\n.TodoItem_eye-icon__MiSje {\\n  margin: auto;\\n  color: #ecf0f1a3; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.TodoItem_eye-icon-closed__U1C3U {\\n  margin: auto;\\n  color: #ffffff; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.TodoItem_details-button__JHhPC:hover .TodoItem_eye-icon__MiSje {\\n  color: white; /* Light gray color on hover */\\n}\\n\\n/* Styling for the scale animation */\\n.TodoItem_details-button__JHhPC:hover .TodoItem_eye-icon__MiSje {\\n  transform: scale(1.1); /* Slightly larger size on hover */\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/TodoItem.module.css\"],\"names\":[],\"mappings\":\"AAAA,wBAAwB;AACxB;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,0CAA0C;AAC5C;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,SAAO;EACP,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,wBAAwB;AACxB;EACE,oGAA4D;UAA5D,4FAA4D;AAC9D;;AAEA;EACE;IACE,6BAAyB;IAAzB,yBAAyB,EAAE,8BAA8B;EAC3D;EACA;IACE,yBAAyB,EAAE,sBAAsB;EACnD;AACF;;AAPA;EACE;IACE,6BAAyB;IAAzB,yBAAyB,EAAE,8BAA8B;EAC3D;EACA;IACE,yBAAyB,EAAE,sBAAsB;EACnD;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAPA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;;AAGA;EACE,yBAAyB,EAAE,oBAAoB;EAC/C,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,2DAA2D;EAC3D,kBAAkB;AACpB;;AAEA;EACE,yBAAyB,EAAE,+BAA+B;EAC1D,sBAAsB,EAAE,6BAA6B;AACvD;;AAEA,8BAA8B;AAC9B;EACE,YAAY;EACZ,gBAAgB,EAAE,iCAAiC;EACnD,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,cAAc,EAAE,iCAAiC;EACjD,2BAA2B;AAC7B;;AAEA;EACE,YAAY,EAAE,8BAA8B;AAC9C;;AAEA,oCAAoC;AACpC;EACE,qBAAqB,EAAE,kCAAkC;AAC3D\",\"sourcesContent\":[\"/* TodoItem.module.css */\\n.todo-item {\\n  display: flex;\\n  align-items: center;\\n  background-color: white;\\n  border-radius: 5px;\\n  padding: 5px;\\n  margin: 10px 0;\\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n}\\n\\n.todo-check {\\n  margin-right: 10px;\\n}\\n\\n.todo-text {\\n  flex: 1;\\n  font-size: 18px;\\n  font-weight: bold;\\n  color: #333;\\n  max-width: 20vh;\\n  flex-wrap: wrap;\\n}\\n\\n.todo-priority-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.todo-priority-marker {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n}\\n\\n.priority-dropdown {\\n  border: none;\\n  padding: 5px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n  text-decoration: none; \\n}\\n\\n.priority-dropdown:hover {\\n  background-color: #ffffff;\\n}\\n\\n.delete-button {\\n  background-color: #ff7675;\\n  border: none;\\n  color: white;\\n  padding: 5px 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n}\\n\\n.delete-button:hover{\\n  background-color: #ff6b6a;\\n}\\n\\n/* TodoItem.module.css */\\n.todo-item.flashing {\\n  animation: flash 0.5s ease-in-out, fade-out 0.5s ease-in-out;\\n}\\n\\n@keyframes flash {\\n  0%, 100% {\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@keyframes fade-out {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n\\n.details-button {\\n  background-color: #00162c; /* Dark blue color */\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease, transform 0.3s ease;\\n  position: relative;\\n}\\n\\n.details-button:hover {\\n  background-color: #1a242f; /* Darker blue color on hover */\\n  transform: scale(1.05); /* Slight scale-up on hover */\\n}\\n\\n/* Styling for the eye icons */\\n.eye-icon {\\n  margin: auto;\\n  color: #ecf0f1a3; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.eye-icon-closed {\\n  margin: auto;\\n  color: #ffffff; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.details-button:hover .eye-icon {\\n  color: white; /* Light gray color on hover */\\n}\\n\\n/* Styling for the scale animation */\\n.details-button:hover .eye-icon {\\n  transform: scale(1.1); /* Slightly larger size on hover */\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"todo-item\": \"TodoItem_todo-item__37Y3K\",\n\t\"completed\": \"TodoItem_completed__p8lBh\",\n\t\"todo-check\": \"TodoItem_todo-check__K2_hk\",\n\t\"todo-text\": \"TodoItem_todo-text__uIcOl\",\n\t\"todo-priority-container\": \"TodoItem_todo-priority-container__PADna\",\n\t\"todo-priority-marker\": \"TodoItem_todo-priority-marker__cKux2\",\n\t\"priority-dropdown\": \"TodoItem_priority-dropdown__L48ET\",\n\t\"delete-button\": \"TodoItem_delete-button__1o_vc\",\n\t\"flashing\": \"TodoItem_flashing__XuGMh\",\n\t\"flash\": \"TodoItem_flash__xfGpL\",\n\t\"fade-out\": \"TodoItem_fade-out__HvqtI\",\n\t\"details-button\": \"TodoItem_details-button__JHhPC\",\n\t\"eye-icon\": \"TodoItem_eye-icon__MiSje\",\n\t\"eye-icon-closed\": \"TodoItem_eye-icon-closed__U1C3U\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vY29tcG9uZW50cy9Ub2RvSXRlbS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSxpR0FBaUcsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLGlCQUFpQixtQkFBbUIsK0NBQStDLEdBQUcsZ0NBQWdDLGtDQUFrQyxHQUFHLGlDQUFpQyx1QkFBdUIsR0FBRyxnQ0FBZ0MsY0FBYyxvQkFBb0Isc0JBQXNCLGdCQUFnQixvQkFBb0Isb0JBQW9CLEdBQUcsOENBQThDLGtCQUFrQix3QkFBd0IsR0FBRywyQ0FBMkMsZ0JBQWdCLGlCQUFpQix1QkFBdUIsdUJBQXVCLEdBQUcsd0NBQXdDLGlCQUFpQixpQkFBaUIsdUJBQXVCLG9CQUFvQixvQkFBb0Isc0NBQXNDLDJCQUEyQixHQUFHLDhDQUE4Qyw4QkFBOEIsR0FBRyxvQ0FBb0MsOEJBQThCLGlCQUFpQixpQkFBaUIsc0JBQXNCLHVCQUF1QixvQkFBb0Isb0JBQW9CLHNDQUFzQyxHQUFHLHlDQUF5Qyw4QkFBOEIsR0FBRyxvRkFBb0YseUdBQXlHLHlHQUF5RyxHQUFHLDhDQUE4QyxjQUFjLG9DQUFvQyxpQ0FBaUMsb0NBQW9DLFNBQVMsaUNBQWlDLDRCQUE0QixHQUFHLHNDQUFzQyxjQUFjLG9DQUFvQyxpQ0FBaUMsb0NBQW9DLFNBQVMsaUNBQWlDLDRCQUE0QixHQUFHLGlEQUFpRCxVQUFVLGlCQUFpQixLQUFLLFFBQVEsaUJBQWlC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MWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRvZG9JdGVtLm1vZHVsZS5jc3MgKi9cXG4uVG9kb0l0ZW1fdG9kby1pdGVtX18zN1kzSyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5Ub2RvSXRlbV9jb21wbGV0ZWRfX3A4bEJoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby1jaGVja19fSzJfaGsge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby10ZXh0X191SWNPbCB7XFxuICBmbGV4OiAxIDE7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgbWF4LXdpZHRoOiAyMHZoO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby1wcmlvcml0eS1jb250YWluZXJfX1BBRG5hIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby1wcmlvcml0eS1tYXJrZXJfX2NLdXgyIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uVG9kb0l0ZW1fcHJpb3JpdHktZHJvcGRvd25fX0w0OEVUIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxufVxcblxcbi5Ub2RvSXRlbV9wcmlvcml0eS1kcm9wZG93bl9fTDQ4RVQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLlRvZG9JdGVtX2RlbGV0ZS1idXR0b25fXzFvX3ZjIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc2NzU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLlRvZG9JdGVtX2RlbGV0ZS1idXR0b25fXzFvX3ZjOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmI2YTtcXG59XFxuXFxuLyogVG9kb0l0ZW0ubW9kdWxlLmNzcyAqL1xcbi5Ub2RvSXRlbV90b2RvLWl0ZW1fXzM3WTNLLlRvZG9JdGVtX2ZsYXNoaW5nX19YdUdNaCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogVG9kb0l0ZW1fZmxhc2hfX3hmR3BMIDAuNXMgZWFzZS1pbi1vdXQsIFRvZG9JdGVtX2ZhZGUtb3V0X19IdnF0SSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICBhbmltYXRpb246IFRvZG9JdGVtX2ZsYXNoX194ZkdwTCAwLjVzIGVhc2UtaW4tb3V0LCBUb2RvSXRlbV9mYWRlLW91dF9fSHZxdEkgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIFRvZG9JdGVtX2ZsYXNoX194ZkdwTCB7XFxuICAwJSwgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsOyAvKiBPcmlnaW5hbCBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3Njc1OyAvKiBGbGFzaCBjb2xvciAocmVkKSAqL1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIFRvZG9JdGVtX2ZsYXNoX194ZkdwTCB7XFxuICAwJSwgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsOyAvKiBPcmlnaW5hbCBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3Njc1OyAvKiBGbGFzaCBjb2xvciAocmVkKSAqL1xcbiAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgVG9kb0l0ZW1fZmFkZS1vdXRfX0h2cXRJIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIFRvZG9JdGVtX2ZhZGUtb3V0X19IdnF0SSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuXFxuLlRvZG9JdGVtX2RldGFpbHMtYnV0dG9uX19KSGhQQyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNjJjOyAvKiBEYXJrIGJsdWUgY29sb3IgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5Ub2RvSXRlbV9kZXRhaWxzLWJ1dHRvbl9fSkhoUEM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjQyZjsgLyogRGFya2VyIGJsdWUgY29sb3Igb24gaG92ZXIgKi9cXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IC8qIFNsaWdodCBzY2FsZS11cCBvbiBob3ZlciAqL1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgZXllIGljb25zICovXFxuLlRvZG9JdGVtX2V5ZS1pY29uX19NaVNqZSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBjb2xvcjogI2VjZjBmMWEzOyAvKiBXaGl0ZSBjb2xvciBmb3IgdGhlIGV5ZSBpY29uICovXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5Ub2RvSXRlbV9leWUtaWNvbi1jbG9zZWRfX1UxQzNVIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSBjb2xvciBmb3IgdGhlIGV5ZSBpY29uICovXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5Ub2RvSXRlbV9kZXRhaWxzLWJ1dHRvbl9fSkhoUEM6aG92ZXIgLlRvZG9JdGVtX2V5ZS1pY29uX19NaVNqZSB7XFxuICBjb2xvcjogd2hpdGU7IC8qIExpZ2h0IGdyYXkgY29sb3Igb24gaG92ZXIgKi9cXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIHNjYWxlIGFuaW1hdGlvbiAqL1xcbi5Ub2RvSXRlbV9kZXRhaWxzLWJ1dHRvbl9fSkhoUEM6aG92ZXIgLlRvZG9JdGVtX2V5ZS1pY29uX19NaVNqZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNsaWdodGx5IGxhcmdlciBzaXplIG9uIGhvdmVyICovXFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL1RvZG9JdGVtLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsd0JBQXdCO0FBQ3hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBTztFQUNQLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0Usb0dBQTREO1VBQTVELDRGQUE0RDtBQUM5RDs7QUFFQTtFQUNFO0lBQ0UsNkJBQXlCO0lBQXpCLHlCQUF5QixFQUFFLDhCQUE4QjtFQUMzRDtFQUNBO0lBQ0UseUJBQXlCLEVBQUUsc0JBQXNCO0VBQ25EO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLDZCQUF5QjtJQUF6Qix5QkFBeUIsRUFBRSw4QkFBOEI7RUFDM0Q7RUFDQTtJQUNFLHlCQUF5QixFQUFFLHNCQUFzQjtFQUNuRDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQVBBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOzs7QUFHQTtFQUNFLHlCQUF5QixFQUFFLG9CQUFvQjtFQUMvQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDJEQUEyRDtFQUMzRCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSwrQkFBK0I7RUFDMUQsc0JBQXNCLEVBQUUsNkJBQTZCO0FBQ3ZEOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLFlBQVk7RUFDWixnQkFBZ0IsRUFBRSxpQ0FBaUM7RUFDbkQsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBRSxpQ0FBaUM7RUFDakQsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWSxFQUFFLDhCQUE4QjtBQUM5Qzs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxxQkFBcUIsRUFBRSxrQ0FBa0M7QUFDM0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVG9kb0l0ZW0ubW9kdWxlLmNzcyAqL1xcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kby1jaGVjayB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50b2RvLXRleHQge1xcbiAgZmxleDogMTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7XFxuICBtYXgtd2lkdGg6IDIwdmg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi50b2RvLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHktbWFya2VyIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktZHJvcGRvd24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuLnByaW9yaXR5LWRyb3Bkb3duOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc2NzU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLmRlbGV0ZS1idXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YjZhO1xcbn1cXG5cXG4vKiBUb2RvSXRlbS5tb2R1bGUuY3NzICovXFxuLnRvZG8taXRlbS5mbGFzaGluZyB7XFxuICBhbmltYXRpb246IGZsYXNoIDAuNXMgZWFzZS1pbi1vdXQsIGZhZGUtb3V0IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmxhc2gge1xcbiAgMCUsIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsOyAvKiBPcmlnaW5hbCBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3Njc1OyAvKiBGbGFzaCBjb2xvciAocmVkKSAqL1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5cXG4uZGV0YWlscy1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTYyYzsgLyogRGFyayBibHVlIGNvbG9yICovXFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGV0YWlscy1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjQyZjsgLyogRGFya2VyIGJsdWUgY29sb3Igb24gaG92ZXIgKi9cXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IC8qIFNsaWdodCBzY2FsZS11cCBvbiBob3ZlciAqL1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgZXllIGljb25zICovXFxuLmV5ZS1pY29uIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiAjZWNmMGYxYTM7IC8qIFdoaXRlIGNvbG9yIGZvciB0aGUgZXllIGljb24gKi9cXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLmV5ZS1pY29uLWNsb3NlZCB7XFxuICBtYXJnaW46IGF1dG87XFxuICBjb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgY29sb3IgZm9yIHRoZSBleWUgaWNvbiAqL1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4uZGV0YWlscy1idXR0b246aG92ZXIgLmV5ZS1pY29uIHtcXG4gIGNvbG9yOiB3aGl0ZTsgLyogTGlnaHQgZ3JheSBjb2xvciBvbiBob3ZlciAqL1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgc2NhbGUgYW5pbWF0aW9uICovXFxuLmRldGFpbHMtYnV0dG9uOmhvdmVyIC5leWUtaWNvbiB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNsaWdodGx5IGxhcmdlciBzaXplIG9uIGhvdmVyICovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRvZG8taXRlbVwiOiBcIlRvZG9JdGVtX3RvZG8taXRlbV9fMzdZM0tcIixcblx0XCJjb21wbGV0ZWRcIjogXCJUb2RvSXRlbV9jb21wbGV0ZWRfX3A4bEJoXCIsXG5cdFwidG9kby1jaGVja1wiOiBcIlRvZG9JdGVtX3RvZG8tY2hlY2tfX0syX2hrXCIsXG5cdFwidG9kby10ZXh0XCI6IFwiVG9kb0l0ZW1fdG9kby10ZXh0X191SWNPbFwiLFxuXHRcInRvZG8tcHJpb3JpdHktY29udGFpbmVyXCI6IFwiVG9kb0l0ZW1fdG9kby1wcmlvcml0eS1jb250YWluZXJfX1BBRG5hXCIsXG5cdFwidG9kby1wcmlvcml0eS1tYXJrZXJcIjogXCJUb2RvSXRlbV90b2RvLXByaW9yaXR5LW1hcmtlcl9fY0t1eDJcIixcblx0XCJwcmlvcml0eS1kcm9wZG93blwiOiBcIlRvZG9JdGVtX3ByaW9yaXR5LWRyb3Bkb3duX19MNDhFVFwiLFxuXHRcImRlbGV0ZS1idXR0b25cIjogXCJUb2RvSXRlbV9kZWxldGUtYnV0dG9uX18xb192Y1wiLFxuXHRcImZsYXNoaW5nXCI6IFwiVG9kb0l0ZW1fZmxhc2hpbmdfX1h1R01oXCIsXG5cdFwiZmxhc2hcIjogXCJUb2RvSXRlbV9mbGFzaF9feGZHcExcIixcblx0XCJmYWRlLW91dFwiOiBcIlRvZG9JdGVtX2ZhZGUtb3V0X19IdnF0SVwiLFxuXHRcImRldGFpbHMtYnV0dG9uXCI6IFwiVG9kb0l0ZW1fZGV0YWlscy1idXR0b25fX0pIaFBDXCIsXG5cdFwiZXllLWljb25cIjogXCJUb2RvSXRlbV9leWUtaWNvbl9fTWlTamVcIixcblx0XCJleWUtaWNvbi1jbG9zZWRcIjogXCJUb2RvSXRlbV9leWUtaWNvbi1jbG9zZWRfX1UxQzNVXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/TodoItem.module.css\n");

/***/ })

});