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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* TodoItem.module.css */\\n.TodoItem_todo-item__37Y3K {\\n  display: flex;\\n  justify-content: center;\\n  background-color: white;\\n  border-radius: 5px;\\n  padding: 5px;\\n  margin: 10px 0;\\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\\n}\\n\\n.TodoItem_completed__p8lBh {\\n  text-decoration: line-through;\\n}\\n\\n.TodoItem_todo-check__K2_hk {\\n  margin-right: 10px;\\n}\\n\\n.TodoItem_todo-text__uIcOl {\\n  flex: 1 1;\\n  flex-direction: column;\\n  font-size: 18px;\\n  font-weight: bold;\\n  color: #333;\\n  word-break: break-word; \\n  box-shadow: none;\\n  font-family: 'Roboto-Regular';\\n}\\n\\n.TodoItem_todo-priority-container__PADna {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.TodoItem_todo-priority-marker__cKux2 {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n}\\n\\n.TodoItem_priority-dropdown__L48ET {\\n  border: none;\\n  padding: 5px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n  text-decoration: none; \\n}\\n\\n.TodoItem_priority-dropdown__L48ET:hover {\\n  background-color: #ffffff;\\n}\\n\\n.TodoItem_delete-button__1o_vc {\\n  background-color: #ff7675;\\n  border: none;\\n  color: white;\\n  padding: 5px 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n}\\n\\n.TodoItem_delete-button__1o_vc:hover{\\n  background-color: #ff6b6a;\\n}\\n\\n/* TodoItem.module.css */\\n.TodoItem_todo-item__37Y3K.TodoItem_flashing__XuGMh {\\n  -webkit-animation: TodoItem_flash__xfGpL 0.5s ease-in-out, TodoItem_fade-out__HvqtI 0.5s ease-in-out;\\n          animation: TodoItem_flash__xfGpL 0.5s ease-in-out, TodoItem_fade-out__HvqtI 0.5s ease-in-out;\\n}\\n\\n@-webkit-keyframes TodoItem_flash__xfGpL {\\n  0%, 100% {\\n    background-color: transparent;\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@keyframes TodoItem_flash__xfGpL {\\n  0%, 100% {\\n    background-color: transparent;\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@-webkit-keyframes TodoItem_fade-out__HvqtI {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n@keyframes TodoItem_fade-out__HvqtI {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n\\n.TodoItem_details-button__JHhPC {\\n  background-color: #00162c; /* Dark blue color */\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease, transform 0.3s ease;\\n  position: relative;\\n}\\n\\n.TodoItem_details-button__JHhPC:hover {\\n  background-color: #1a242f; /* Darker blue color on hover */\\n  transform: scale(1.05); /* Slight scale-up on hover */\\n}\\n\\n/* Styling for the eye icons */\\n.TodoItem_eye-icon__MiSje {\\n  margin: auto;\\n  color: #ecf0f1a3; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.TodoItem_eye-icon-closed__U1C3U {\\n  margin: auto;\\n  color: #ffffff; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.TodoItem_details-button__JHhPC:hover .TodoItem_eye-icon__MiSje {\\n  color: white; /* Light gray color on hover */\\n}\\n\\n/* Styling for the scale animation */\\n.TodoItem_details-button__JHhPC:hover .TodoItem_eye-icon__MiSje {\\n  transform: scale(1.1); /* Slightly larger size on hover */\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/TodoItem.module.css\"],\"names\":[],\"mappings\":\"AAAA,wBAAwB;AACxB;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,0CAA0C;AAC5C;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,SAAO;EACP,sBAAsB;EACtB,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,sBAAsB;EACtB,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,wBAAwB;AACxB;EACE,oGAA4D;UAA5D,4FAA4D;AAC9D;;AAEA;EACE;IACE,6BAAyB;IAAzB,yBAAyB,EAAE,8BAA8B;EAC3D;EACA;IACE,yBAAyB,EAAE,sBAAsB;EACnD;AACF;;AAPA;EACE;IACE,6BAAyB;IAAzB,yBAAyB,EAAE,8BAA8B;EAC3D;EACA;IACE,yBAAyB,EAAE,sBAAsB;EACnD;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAPA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;;AAGA;EACE,yBAAyB,EAAE,oBAAoB;EAC/C,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,2DAA2D;EAC3D,kBAAkB;AACpB;;AAEA;EACE,yBAAyB,EAAE,+BAA+B;EAC1D,sBAAsB,EAAE,6BAA6B;AACvD;;AAEA,8BAA8B;AAC9B;EACE,YAAY;EACZ,gBAAgB,EAAE,iCAAiC;EACnD,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,cAAc,EAAE,iCAAiC;EACjD,2BAA2B;AAC7B;;AAEA;EACE,YAAY,EAAE,8BAA8B;AAC9C;;AAEA,oCAAoC;AACpC;EACE,qBAAqB,EAAE,kCAAkC;AAC3D\",\"sourcesContent\":[\"/* TodoItem.module.css */\\n.todo-item {\\n  display: flex;\\n  justify-content: center;\\n  background-color: white;\\n  border-radius: 5px;\\n  padding: 5px;\\n  margin: 10px 0;\\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n}\\n\\n.todo-check {\\n  margin-right: 10px;\\n}\\n\\n.todo-text {\\n  flex: 1;\\n  flex-direction: column;\\n  font-size: 18px;\\n  font-weight: bold;\\n  color: #333;\\n  word-break: break-word; \\n  box-shadow: none;\\n  font-family: 'Roboto-Regular';\\n}\\n\\n.todo-priority-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.todo-priority-marker {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n}\\n\\n.priority-dropdown {\\n  border: none;\\n  padding: 5px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n  text-decoration: none; \\n}\\n\\n.priority-dropdown:hover {\\n  background-color: #ffffff;\\n}\\n\\n.delete-button {\\n  background-color: #ff7675;\\n  border: none;\\n  color: white;\\n  padding: 5px 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n}\\n\\n.delete-button:hover{\\n  background-color: #ff6b6a;\\n}\\n\\n/* TodoItem.module.css */\\n.todo-item.flashing {\\n  animation: flash 0.5s ease-in-out, fade-out 0.5s ease-in-out;\\n}\\n\\n@keyframes flash {\\n  0%, 100% {\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@keyframes fade-out {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n\\n.details-button {\\n  background-color: #00162c; /* Dark blue color */\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease, transform 0.3s ease;\\n  position: relative;\\n}\\n\\n.details-button:hover {\\n  background-color: #1a242f; /* Darker blue color on hover */\\n  transform: scale(1.05); /* Slight scale-up on hover */\\n}\\n\\n/* Styling for the eye icons */\\n.eye-icon {\\n  margin: auto;\\n  color: #ecf0f1a3; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.eye-icon-closed {\\n  margin: auto;\\n  color: #ffffff; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.details-button:hover .eye-icon {\\n  color: white; /* Light gray color on hover */\\n}\\n\\n/* Styling for the scale animation */\\n.details-button:hover .eye-icon {\\n  transform: scale(1.1); /* Slightly larger size on hover */\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"todo-item\": \"TodoItem_todo-item__37Y3K\",\n\t\"completed\": \"TodoItem_completed__p8lBh\",\n\t\"todo-check\": \"TodoItem_todo-check__K2_hk\",\n\t\"todo-text\": \"TodoItem_todo-text__uIcOl\",\n\t\"todo-priority-container\": \"TodoItem_todo-priority-container__PADna\",\n\t\"todo-priority-marker\": \"TodoItem_todo-priority-marker__cKux2\",\n\t\"priority-dropdown\": \"TodoItem_priority-dropdown__L48ET\",\n\t\"delete-button\": \"TodoItem_delete-button__1o_vc\",\n\t\"flashing\": \"TodoItem_flashing__XuGMh\",\n\t\"flash\": \"TodoItem_flash__xfGpL\",\n\t\"fade-out\": \"TodoItem_fade-out__HvqtI\",\n\t\"details-button\": \"TodoItem_details-button__JHhPC\",\n\t\"eye-icon\": \"TodoItem_eye-icon__MiSje\",\n\t\"eye-icon-closed\": \"TodoItem_eye-icon-closed__U1C3U\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vY29tcG9uZW50cy9Ub2RvSXRlbS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSxpR0FBaUcsa0JBQWtCLDRCQUE0Qiw0QkFBNEIsdUJBQXVCLGlCQUFpQixtQkFBbUIsK0NBQStDLEdBQUcsZ0NBQWdDLGtDQUFrQyxHQUFHLGlDQUFpQyx1QkFBdUIsR0FBRyxnQ0FBZ0MsY0FBYywyQkFBMkIsb0JBQW9CLHNCQUFzQixnQkFBZ0IsNEJBQTRCLHFCQUFxQixrQ0FBa0MsR0FBRyw4Q0FBOEMsa0JBQWtCLHdCQUF3QixHQUFHLDJDQUEyQyxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsR0FBRyx3Q0FBd0MsaUJBQWlCLGlCQUFpQix1QkFBdUIsb0JBQW9CLG9CQUFvQixzQ0FBc0MsMkJBQTJCLEdBQUcsOENBQThDLDhCQUE4QixHQUFHLG9DQUFvQyw4QkFBOEIsaUJBQWlCLGlCQUFpQixzQkFBc0IsdUJBQXVCLG9CQUFvQixvQkFBb0Isc0NBQXNDLEdBQUcseUNBQXlDLDhCQUE4QixHQUFHLG9GQUFvRix5R0FBeUcseUdBQXlHLEdBQUcsOENBQThDLGNBQWMsb0NBQW9DLGlDQUFpQyxvQ0FBb0MsU0FBUyxpQ0FBaUMsNEJBQTRCLEdBQUcsc0NBQXNDLGNBQWMsb0NBQW9DLGlDQUFpQyxvQ0FBb0MsU0FBUyxpQ0FBaUMsNEJBQTRCLEdBQUcsaURBQWlELFVBQVUsaUJBQWlCLEtB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X0UvLi9jb21wb25lbnRzL1RvZG9JdGVtLm1vZHVsZS5jc3M/NTgxYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVG9kb0l0ZW0ubW9kdWxlLmNzcyAqL1xcbi5Ub2RvSXRlbV90b2RvLWl0ZW1fXzM3WTNLIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5Ub2RvSXRlbV9jb21wbGV0ZWRfX3A4bEJoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby1jaGVja19fSzJfaGsge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby10ZXh0X191SWNPbCB7XFxuICBmbGV4OiAxIDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMztcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IFxcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVJlZ3VsYXInO1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby1wcmlvcml0eS1jb250YWluZXJfX1BBRG5hIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby1wcmlvcml0eS1tYXJrZXJfX2NLdXgyIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uVG9kb0l0ZW1fcHJpb3JpdHktZHJvcGRvd25fX0w0OEVUIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxufVxcblxcbi5Ub2RvSXRlbV9wcmlvcml0eS1kcm9wZG93bl9fTDQ4RVQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLlRvZG9JdGVtX2RlbGV0ZS1idXR0b25fXzFvX3ZjIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc2NzU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLlRvZG9JdGVtX2RlbGV0ZS1idXR0b25fXzFvX3ZjOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmI2YTtcXG59XFxuXFxuLyogVG9kb0l0ZW0ubW9kdWxlLmNzcyAqL1xcbi5Ub2RvSXRlbV90b2RvLWl0ZW1fXzM3WTNLLlRvZG9JdGVtX2ZsYXNoaW5nX19YdUdNaCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogVG9kb0l0ZW1fZmxhc2hfX3hmR3BMIDAuNXMgZWFzZS1pbi1vdXQsIFRvZG9JdGVtX2ZhZGUtb3V0X19IdnF0SSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICBhbmltYXRpb246IFRvZG9JdGVtX2ZsYXNoX194ZkdwTCAwLjVzIGVhc2UtaW4tb3V0LCBUb2RvSXRlbV9mYWRlLW91dF9fSHZxdEkgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIFRvZG9JdGVtX2ZsYXNoX194ZkdwTCB7XFxuICAwJSwgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsOyAvKiBPcmlnaW5hbCBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3Njc1OyAvKiBGbGFzaCBjb2xvciAocmVkKSAqL1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIFRvZG9JdGVtX2ZsYXNoX194ZkdwTCB7XFxuICAwJSwgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsOyAvKiBPcmlnaW5hbCBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3Njc1OyAvKiBGbGFzaCBjb2xvciAocmVkKSAqL1xcbiAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgVG9kb0l0ZW1fZmFkZS1vdXRfX0h2cXRJIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIFRvZG9JdGVtX2ZhZGUtb3V0X19IdnF0SSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuXFxuLlRvZG9JdGVtX2RldGFpbHMtYnV0dG9uX19KSGhQQyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNjJjOyAvKiBEYXJrIGJsdWUgY29sb3IgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5Ub2RvSXRlbV9kZXRhaWxzLWJ1dHRvbl9fSkhoUEM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjQyZjsgLyogRGFya2VyIGJsdWUgY29sb3Igb24gaG92ZXIgKi9cXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IC8qIFNsaWdodCBzY2FsZS11cCBvbiBob3ZlciAqL1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgZXllIGljb25zICovXFxuLlRvZG9JdGVtX2V5ZS1pY29uX19NaVNqZSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBjb2xvcjogI2VjZjBmMWEzOyAvKiBXaGl0ZSBjb2xvciBmb3IgdGhlIGV5ZSBpY29uICovXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5Ub2RvSXRlbV9leWUtaWNvbi1jbG9zZWRfX1UxQzNVIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSBjb2xvciBmb3IgdGhlIGV5ZSBpY29uICovXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5Ub2RvSXRlbV9kZXRhaWxzLWJ1dHRvbl9fSkhoUEM6aG92ZXIgLlRvZG9JdGVtX2V5ZS1pY29uX19NaVNqZSB7XFxuICBjb2xvcjogd2hpdGU7IC8qIExpZ2h0IGdyYXkgY29sb3Igb24gaG92ZXIgKi9cXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIHNjYWxlIGFuaW1hdGlvbiAqL1xcbi5Ub2RvSXRlbV9kZXRhaWxzLWJ1dHRvbl9fSkhoUEM6aG92ZXIgLlRvZG9JdGVtX2V5ZS1pY29uX19NaVNqZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNsaWdodGx5IGxhcmdlciBzaXplIG9uIGhvdmVyICovXFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL1RvZG9JdGVtLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsd0JBQXdCO0FBQ3hCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBTztFQUNQLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLG9HQUE0RDtVQUE1RCw0RkFBNEQ7QUFDOUQ7O0FBRUE7RUFDRTtJQUNFLDZCQUF5QjtJQUF6Qix5QkFBeUIsRUFBRSw4QkFBOEI7RUFDM0Q7RUFDQTtJQUNFLHlCQUF5QixFQUFFLHNCQUFzQjtFQUNuRDtBQUNGOztBQVBBO0VBQ0U7SUFDRSw2QkFBeUI7SUFBekIseUJBQXlCLEVBQUUsOEJBQThCO0VBQzNEO0VBQ0E7SUFDRSx5QkFBeUIsRUFBRSxzQkFBc0I7RUFDbkQ7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7O0FBR0E7RUFDRSx5QkFBeUIsRUFBRSxvQkFBb0I7RUFDL0MsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyREFBMkQ7RUFDM0Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsK0JBQStCO0VBQzFELHNCQUFzQixFQUFFLDZCQUE2QjtBQUN2RDs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUUsaUNBQWlDO0VBQ25ELDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjLEVBQUUsaUNBQWlDO0VBQ2pELDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVksRUFBRSw4QkFBOEI7QUFDOUM7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UscUJBQXFCLEVBQUUsa0NBQWtDO0FBQzNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRvZG9JdGVtLm1vZHVsZS5jc3MgKi9cXG4udG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWNoZWNrIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnRvZG8tdGV4dCB7XFxuICBmbGV4OiAxO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyBcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1JvYm90by1SZWd1bGFyJztcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eS1tYXJrZXIge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wcmlvcml0eS1kcm9wZG93biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG4ucHJpb3JpdHktZHJvcGRvd246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzY3NTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZiNmE7XFxufVxcblxcbi8qIFRvZG9JdGVtLm1vZHVsZS5jc3MgKi9cXG4udG9kby1pdGVtLmZsYXNoaW5nIHtcXG4gIGFuaW1hdGlvbjogZmxhc2ggMC41cyBlYXNlLWluLW91dCwgZmFkZS1vdXQgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBmbGFzaCB7XFxuICAwJSwgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7IC8qIE9yaWdpbmFsIGJhY2tncm91bmQgY29sb3IgKi9cXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc2NzU7IC8qIEZsYXNoIGNvbG9yIChyZWQpICovXFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcblxcbi5kZXRhaWxzLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNjJjOyAvKiBEYXJrIGJsdWUgY29sb3IgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kZXRhaWxzLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyNDJmOyAvKiBEYXJrZXIgYmx1ZSBjb2xvciBvbiBob3ZlciAqL1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogU2xpZ2h0IHNjYWxlLXVwIG9uIGhvdmVyICovXFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHRoZSBleWUgaWNvbnMgKi9cXG4uZXllLWljb24ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6ICNlY2YwZjFhMzsgLyogV2hpdGUgY29sb3IgZm9yIHRoZSBleWUgaWNvbiAqL1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4uZXllLWljb24tY2xvc2VkIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSBjb2xvciBmb3IgdGhlIGV5ZSBpY29uICovXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5kZXRhaWxzLWJ1dHRvbjpob3ZlciAuZXllLWljb24ge1xcbiAgY29sb3I6IHdoaXRlOyAvKiBMaWdodCBncmF5IGNvbG9yIG9uIGhvdmVyICovXFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHRoZSBzY2FsZSBhbmltYXRpb24gKi9cXG4uZGV0YWlscy1idXR0b246aG92ZXIgLmV5ZS1pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogU2xpZ2h0bHkgbGFyZ2VyIHNpemUgb24gaG92ZXIgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidG9kby1pdGVtXCI6IFwiVG9kb0l0ZW1fdG9kby1pdGVtX18zN1kzS1wiLFxuXHRcImNvbXBsZXRlZFwiOiBcIlRvZG9JdGVtX2NvbXBsZXRlZF9fcDhsQmhcIixcblx0XCJ0b2RvLWNoZWNrXCI6IFwiVG9kb0l0ZW1fdG9kby1jaGVja19fSzJfaGtcIixcblx0XCJ0b2RvLXRleHRcIjogXCJUb2RvSXRlbV90b2RvLXRleHRfX3VJY09sXCIsXG5cdFwidG9kby1wcmlvcml0eS1jb250YWluZXJcIjogXCJUb2RvSXRlbV90b2RvLXByaW9yaXR5LWNvbnRhaW5lcl9fUEFEbmFcIixcblx0XCJ0b2RvLXByaW9yaXR5LW1hcmtlclwiOiBcIlRvZG9JdGVtX3RvZG8tcHJpb3JpdHktbWFya2VyX19jS3V4MlwiLFxuXHRcInByaW9yaXR5LWRyb3Bkb3duXCI6IFwiVG9kb0l0ZW1fcHJpb3JpdHktZHJvcGRvd25fX0w0OEVUXCIsXG5cdFwiZGVsZXRlLWJ1dHRvblwiOiBcIlRvZG9JdGVtX2RlbGV0ZS1idXR0b25fXzFvX3ZjXCIsXG5cdFwiZmxhc2hpbmdcIjogXCJUb2RvSXRlbV9mbGFzaGluZ19fWHVHTWhcIixcblx0XCJmbGFzaFwiOiBcIlRvZG9JdGVtX2ZsYXNoX194ZkdwTFwiLFxuXHRcImZhZGUtb3V0XCI6IFwiVG9kb0l0ZW1fZmFkZS1vdXRfX0h2cXRJXCIsXG5cdFwiZGV0YWlscy1idXR0b25cIjogXCJUb2RvSXRlbV9kZXRhaWxzLWJ1dHRvbl9fSkhoUENcIixcblx0XCJleWUtaWNvblwiOiBcIlRvZG9JdGVtX2V5ZS1pY29uX19NaVNqZVwiLFxuXHRcImV5ZS1pY29uLWNsb3NlZFwiOiBcIlRvZG9JdGVtX2V5ZS1pY29uLWNsb3NlZF9fVTFDM1VcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/TodoItem.module.css\n");

/***/ })

});