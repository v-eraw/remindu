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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* TodoItem.module.css */\\n.TodoItem_todo-item__37Y3K {\\n  display: flex;\\n  align-items: center;\\n  background-color: white;\\n  border-radius: 5px;\\n  padding: 5px;\\n  margin: 10px 0;\\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\\n  flex: 1 1; /* Allow the item to expand */\\n  max-width: 100%; /* Allow the item to wrap down */\\n}\\n\\n.TodoItem_completed__p8lBh {\\n  text-decoration: line-through;\\n}\\n\\n.TodoItem_todo-check__K2_hk {\\n  margin-right: 10px;\\n}\\n\\n.TodoItem_todo-text__uIcOl {\\n  flex: 1 1;\\n  font-size: 18px;\\n  font-weight: bold;\\n  color: #333;\\n}\\n\\n.TodoItem_todo-priority-container__PADna {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.TodoItem_todo-priority-marker__cKux2 {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n}\\n\\n.TodoItem_priority-dropdown__L48ET {\\n  border: none;\\n  padding: 5px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n  text-decoration: none; \\n}\\n\\n.TodoItem_priority-dropdown__L48ET:hover {\\n  background-color: #ffffff;\\n}\\n\\n.TodoItem_delete-button__1o_vc {\\n  background-color: #ff7675;\\n  border: none;\\n  color: white;\\n  padding: 5px 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n}\\n\\n.TodoItem_delete-button__1o_vc:hover{\\n  background-color: #ff6b6a;\\n}\\n\\n/* TodoItem.module.css */\\n.TodoItem_todo-item__37Y3K.TodoItem_flashing__XuGMh {\\n  -webkit-animation: TodoItem_flash__xfGpL 0.5s ease-in-out, TodoItem_fade-out__HvqtI 0.5s ease-in-out;\\n          animation: TodoItem_flash__xfGpL 0.5s ease-in-out, TodoItem_fade-out__HvqtI 0.5s ease-in-out;\\n}\\n\\n@-webkit-keyframes TodoItem_flash__xfGpL {\\n  0%, 100% {\\n    background-color: transparent;\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@keyframes TodoItem_flash__xfGpL {\\n  0%, 100% {\\n    background-color: transparent;\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@-webkit-keyframes TodoItem_fade-out__HvqtI {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n@keyframes TodoItem_fade-out__HvqtI {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n\\n.TodoItem_details-button__JHhPC {\\n  background-color: #00162c; /* Dark blue color */\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease, transform 0.3s ease;\\n  position: relative;\\n}\\n\\n.TodoItem_details-button__JHhPC:hover {\\n  background-color: #1a242f; /* Darker blue color on hover */\\n  transform: scale(1.05); /* Slight scale-up on hover */\\n}\\n\\n/* Styling for the eye icons */\\n.TodoItem_eye-icon__MiSje {\\n  margin: auto;\\n  color: #ecf0f1a3; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.TodoItem_eye-icon-closed__U1C3U {\\n  margin: auto;\\n  color: #ffffff; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.TodoItem_details-button__JHhPC:hover .TodoItem_eye-icon__MiSje {\\n  color: white; /* Light gray color on hover */\\n}\\n\\n/* Styling for the scale animation */\\n.TodoItem_details-button__JHhPC:hover .TodoItem_eye-icon__MiSje {\\n  transform: scale(1.1); /* Slightly larger size on hover */\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/TodoItem.module.css\"],\"names\":[],\"mappings\":\"AAAA,wBAAwB;AACxB;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,0CAA0C;EAC1C,SAAO,EAAE,6BAA6B;EACtC,eAAe,EAAE,gCAAgC;AACnD;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,SAAO;EACP,eAAe;EACf,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,wBAAwB;AACxB;EACE,oGAA4D;UAA5D,4FAA4D;AAC9D;;AAEA;EACE;IACE,6BAAyB;IAAzB,yBAAyB,EAAE,8BAA8B;EAC3D;EACA;IACE,yBAAyB,EAAE,sBAAsB;EACnD;AACF;;AAPA;EACE;IACE,6BAAyB;IAAzB,yBAAyB,EAAE,8BAA8B;EAC3D;EACA;IACE,yBAAyB,EAAE,sBAAsB;EACnD;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAPA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;;AAGA;EACE,yBAAyB,EAAE,oBAAoB;EAC/C,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,2DAA2D;EAC3D,kBAAkB;AACpB;;AAEA;EACE,yBAAyB,EAAE,+BAA+B;EAC1D,sBAAsB,EAAE,6BAA6B;AACvD;;AAEA,8BAA8B;AAC9B;EACE,YAAY;EACZ,gBAAgB,EAAE,iCAAiC;EACnD,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,cAAc,EAAE,iCAAiC;EACjD,2BAA2B;AAC7B;;AAEA;EACE,YAAY,EAAE,8BAA8B;AAC9C;;AAEA,oCAAoC;AACpC;EACE,qBAAqB,EAAE,kCAAkC;AAC3D\",\"sourcesContent\":[\"/* TodoItem.module.css */\\n.todo-item {\\n  display: flex;\\n  align-items: center;\\n  background-color: white;\\n  border-radius: 5px;\\n  padding: 5px;\\n  margin: 10px 0;\\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\\n  flex: 1; /* Allow the item to expand */\\n  max-width: 100%; /* Allow the item to wrap down */\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n}\\n\\n.todo-check {\\n  margin-right: 10px;\\n}\\n\\n.todo-text {\\n  flex: 1;\\n  font-size: 18px;\\n  font-weight: bold;\\n  color: #333;\\n}\\n\\n.todo-priority-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.todo-priority-marker {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n}\\n\\n.priority-dropdown {\\n  border: none;\\n  padding: 5px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n  text-decoration: none; \\n}\\n\\n.priority-dropdown:hover {\\n  background-color: #ffffff;\\n}\\n\\n.delete-button {\\n  background-color: #ff7675;\\n  border: none;\\n  color: white;\\n  padding: 5px 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n}\\n\\n.delete-button:hover{\\n  background-color: #ff6b6a;\\n}\\n\\n/* TodoItem.module.css */\\n.todo-item.flashing {\\n  animation: flash 0.5s ease-in-out, fade-out 0.5s ease-in-out;\\n}\\n\\n@keyframes flash {\\n  0%, 100% {\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@keyframes fade-out {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n\\n.details-button {\\n  background-color: #00162c; /* Dark blue color */\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease, transform 0.3s ease;\\n  position: relative;\\n}\\n\\n.details-button:hover {\\n  background-color: #1a242f; /* Darker blue color on hover */\\n  transform: scale(1.05); /* Slight scale-up on hover */\\n}\\n\\n/* Styling for the eye icons */\\n.eye-icon {\\n  margin: auto;\\n  color: #ecf0f1a3; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.eye-icon-closed {\\n  margin: auto;\\n  color: #ffffff; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.details-button:hover .eye-icon {\\n  color: white; /* Light gray color on hover */\\n}\\n\\n/* Styling for the scale animation */\\n.details-button:hover .eye-icon {\\n  transform: scale(1.1); /* Slightly larger size on hover */\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"todo-item\": \"TodoItem_todo-item__37Y3K\",\n\t\"completed\": \"TodoItem_completed__p8lBh\",\n\t\"todo-check\": \"TodoItem_todo-check__K2_hk\",\n\t\"todo-text\": \"TodoItem_todo-text__uIcOl\",\n\t\"todo-priority-container\": \"TodoItem_todo-priority-container__PADna\",\n\t\"todo-priority-marker\": \"TodoItem_todo-priority-marker__cKux2\",\n\t\"priority-dropdown\": \"TodoItem_priority-dropdown__L48ET\",\n\t\"delete-button\": \"TodoItem_delete-button__1o_vc\",\n\t\"flashing\": \"TodoItem_flashing__XuGMh\",\n\t\"flash\": \"TodoItem_flash__xfGpL\",\n\t\"fade-out\": \"TodoItem_fade-out__HvqtI\",\n\t\"details-button\": \"TodoItem_details-button__JHhPC\",\n\t\"eye-icon\": \"TodoItem_eye-icon__MiSje\",\n\t\"eye-icon-closed\": \"TodoItem_eye-icon-closed__U1C3U\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vY29tcG9uZW50cy9Ub2RvSXRlbS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSxpR0FBaUcsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLGlCQUFpQixtQkFBbUIsK0NBQStDLGVBQWUsbURBQW1ELG9DQUFvQyxnQ0FBZ0Msa0NBQWtDLEdBQUcsaUNBQWlDLHVCQUF1QixHQUFHLGdDQUFnQyxjQUFjLG9CQUFvQixzQkFBc0IsZ0JBQWdCLEdBQUcsOENBQThDLGtCQUFrQix3QkFBd0IsR0FBRywyQ0FBMkMsZ0JBQWdCLGlCQUFpQix1QkFBdUIsdUJBQXVCLEdBQUcsd0NBQXdDLGlCQUFpQixpQkFBaUIsdUJBQXVCLG9CQUFvQixvQkFBb0Isc0NBQXNDLDJCQUEyQixHQUFHLDhDQUE4Qyw4QkFBOEIsR0FBRyxvQ0FBb0MsOEJBQThCLGlCQUFpQixpQkFBaUIsc0JBQXNCLHVCQUF1QixvQkFBb0Isb0JBQW9CLHNDQUFzQyxHQUFHLHlDQUF5Qyw4QkFBOEIsR0FBRyxvRkFBb0YseUdBQXlHLHlHQUF5RyxHQUFHLDhDQUE4QyxjQUFjLG9DQUFvQyxpQ0FBaUMsb0NBQW9DLFNBQVMsaUNBQWlDLDRCQUE0QixHQUFHLHNDQUFzQyxjQUFjLG9DQUFvQyxpQ0FBaUMsb0NBQW9DLFNBQVMsaUNBQWlDLDRCQUE0QixHQUFHLGlEQUFpRCxVQUFVLGlCQUFpQixLQUFLLFFBQVEsaUJBQWlC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cz81ODFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUb2RvSXRlbS5tb2R1bGUuY3NzICovXFxuLlRvZG9JdGVtX3RvZG8taXRlbV9fMzdZM0sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZmxleDogMSAxOyAvKiBBbGxvdyB0aGUgaXRlbSB0byBleHBhbmQgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogQWxsb3cgdGhlIGl0ZW0gdG8gd3JhcCBkb3duICovXFxufVxcblxcbi5Ub2RvSXRlbV9jb21wbGV0ZWRfX3A4bEJoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby1jaGVja19fSzJfaGsge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby10ZXh0X191SWNPbCB7XFxuICBmbGV4OiAxIDE7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby1wcmlvcml0eS1jb250YWluZXJfX1BBRG5hIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby1wcmlvcml0eS1tYXJrZXJfX2NLdXgyIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uVG9kb0l0ZW1fcHJpb3JpdHktZHJvcGRvd25fX0w0OEVUIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxufVxcblxcbi5Ub2RvSXRlbV9wcmlvcml0eS1kcm9wZG93bl9fTDQ4RVQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLlRvZG9JdGVtX2RlbGV0ZS1idXR0b25fXzFvX3ZjIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc2NzU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLlRvZG9JdGVtX2RlbGV0ZS1idXR0b25fXzFvX3ZjOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmI2YTtcXG59XFxuXFxuLyogVG9kb0l0ZW0ubW9kdWxlLmNzcyAqL1xcbi5Ub2RvSXRlbV90b2RvLWl0ZW1fXzM3WTNLLlRvZG9JdGVtX2ZsYXNoaW5nX19YdUdNaCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogVG9kb0l0ZW1fZmxhc2hfX3hmR3BMIDAuNXMgZWFzZS1pbi1vdXQsIFRvZG9JdGVtX2ZhZGUtb3V0X19IdnF0SSAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICBhbmltYXRpb246IFRvZG9JdGVtX2ZsYXNoX194ZkdwTCAwLjVzIGVhc2UtaW4tb3V0LCBUb2RvSXRlbV9mYWRlLW91dF9fSHZxdEkgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIFRvZG9JdGVtX2ZsYXNoX194ZkdwTCB7XFxuICAwJSwgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsOyAvKiBPcmlnaW5hbCBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3Njc1OyAvKiBGbGFzaCBjb2xvciAocmVkKSAqL1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIFRvZG9JdGVtX2ZsYXNoX194ZkdwTCB7XFxuICAwJSwgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsOyAvKiBPcmlnaW5hbCBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3Njc1OyAvKiBGbGFzaCBjb2xvciAocmVkKSAqL1xcbiAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgVG9kb0l0ZW1fZmFkZS1vdXRfX0h2cXRJIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIFRvZG9JdGVtX2ZhZGUtb3V0X19IdnF0SSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuXFxuLlRvZG9JdGVtX2RldGFpbHMtYnV0dG9uX19KSGhQQyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNjJjOyAvKiBEYXJrIGJsdWUgY29sb3IgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5Ub2RvSXRlbV9kZXRhaWxzLWJ1dHRvbl9fSkhoUEM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjQyZjsgLyogRGFya2VyIGJsdWUgY29sb3Igb24gaG92ZXIgKi9cXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IC8qIFNsaWdodCBzY2FsZS11cCBvbiBob3ZlciAqL1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgZXllIGljb25zICovXFxuLlRvZG9JdGVtX2V5ZS1pY29uX19NaVNqZSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBjb2xvcjogI2VjZjBmMWEzOyAvKiBXaGl0ZSBjb2xvciBmb3IgdGhlIGV5ZSBpY29uICovXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5Ub2RvSXRlbV9leWUtaWNvbi1jbG9zZWRfX1UxQzNVIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSBjb2xvciBmb3IgdGhlIGV5ZSBpY29uICovXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5Ub2RvSXRlbV9kZXRhaWxzLWJ1dHRvbl9fSkhoUEM6aG92ZXIgLlRvZG9JdGVtX2V5ZS1pY29uX19NaVNqZSB7XFxuICBjb2xvcjogd2hpdGU7IC8qIExpZ2h0IGdyYXkgY29sb3Igb24gaG92ZXIgKi9cXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIHNjYWxlIGFuaW1hdGlvbiAqL1xcbi5Ub2RvSXRlbV9kZXRhaWxzLWJ1dHRvbl9fSkhoUEM6aG92ZXIgLlRvZG9JdGVtX2V5ZS1pY29uX19NaVNqZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIFNsaWdodGx5IGxhcmdlciBzaXplIG9uIGhvdmVyICovXFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL1RvZG9JdGVtLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsd0JBQXdCO0FBQ3hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsMENBQTBDO0VBQzFDLFNBQU8sRUFBRSw2QkFBNkI7RUFDdEMsZUFBZSxFQUFFLGdDQUFnQztBQUNuRDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQU87RUFDUCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLG9HQUE0RDtVQUE1RCw0RkFBNEQ7QUFDOUQ7O0FBRUE7RUFDRTtJQUNFLDZCQUF5QjtJQUF6Qix5QkFBeUIsRUFBRSw4QkFBOEI7RUFDM0Q7RUFDQTtJQUNFLHlCQUF5QixFQUFFLHNCQUFzQjtFQUNuRDtBQUNGOztBQVBBO0VBQ0U7SUFDRSw2QkFBeUI7SUFBekIseUJBQXlCLEVBQUUsOEJBQThCO0VBQzNEO0VBQ0E7SUFDRSx5QkFBeUIsRUFBRSxzQkFBc0I7RUFDbkQ7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7O0FBR0E7RUFDRSx5QkFBeUIsRUFBRSxvQkFBb0I7RUFDL0MsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyREFBMkQ7RUFDM0Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsK0JBQStCO0VBQzFELHNCQUFzQixFQUFFLDZCQUE2QjtBQUN2RDs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUUsaUNBQWlDO0VBQ25ELDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjLEVBQUUsaUNBQWlDO0VBQ2pELDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVksRUFBRSw4QkFBOEI7QUFDOUM7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UscUJBQXFCLEVBQUUsa0NBQWtDO0FBQzNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRvZG9JdGVtLm1vZHVsZS5jc3MgKi9cXG4udG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGZsZXg6IDE7IC8qIEFsbG93IHRoZSBpdGVtIHRvIGV4cGFuZCAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiBBbGxvdyB0aGUgaXRlbSB0byB3cmFwIGRvd24gKi9cXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8tY2hlY2sge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udG9kby10ZXh0IHtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLXByaW9yaXR5LW1hcmtlciB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnByaW9yaXR5LWRyb3Bkb3duIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxufVxcblxcbi5wcmlvcml0eS1kcm9wZG93bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3Njc1O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmI2YTtcXG59XFxuXFxuLyogVG9kb0l0ZW0ubW9kdWxlLmNzcyAqL1xcbi50b2RvLWl0ZW0uZmxhc2hpbmcge1xcbiAgYW5pbWF0aW9uOiBmbGFzaCAwLjVzIGVhc2UtaW4tb3V0LCBmYWRlLW91dCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsYXNoIHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDsgLyogT3JpZ2luYWwgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzY3NTsgLyogRmxhc2ggY29sb3IgKHJlZCkgKi9cXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuXFxuLmRldGFpbHMtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDE2MmM7IC8qIERhcmsgYmx1ZSBjb2xvciAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTI0MmY7IC8qIERhcmtlciBibHVlIGNvbG9yIG9uIGhvdmVyICovXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBTbGlnaHQgc2NhbGUtdXAgb24gaG92ZXIgKi9cXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIGV5ZSBpY29ucyAqL1xcbi5leWUtaWNvbiB7XFxuICBtYXJnaW46IGF1dG87XFxuICBjb2xvcjogI2VjZjBmMWEzOyAvKiBXaGl0ZSBjb2xvciBmb3IgdGhlIGV5ZSBpY29uICovXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5leWUtaWNvbi1jbG9zZWQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIGNvbG9yIGZvciB0aGUgZXllIGljb24gKi9cXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9uOmhvdmVyIC5leWUtaWNvbiB7XFxuICBjb2xvcjogd2hpdGU7IC8qIExpZ2h0IGdyYXkgY29sb3Igb24gaG92ZXIgKi9cXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIHNjYWxlIGFuaW1hdGlvbiAqL1xcbi5kZXRhaWxzLWJ1dHRvbjpob3ZlciAuZXllLWljb24ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBTbGlnaHRseSBsYXJnZXIgc2l6ZSBvbiBob3ZlciAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0b2RvLWl0ZW1cIjogXCJUb2RvSXRlbV90b2RvLWl0ZW1fXzM3WTNLXCIsXG5cdFwiY29tcGxldGVkXCI6IFwiVG9kb0l0ZW1fY29tcGxldGVkX19wOGxCaFwiLFxuXHRcInRvZG8tY2hlY2tcIjogXCJUb2RvSXRlbV90b2RvLWNoZWNrX19LMl9oa1wiLFxuXHRcInRvZG8tdGV4dFwiOiBcIlRvZG9JdGVtX3RvZG8tdGV4dF9fdUljT2xcIixcblx0XCJ0b2RvLXByaW9yaXR5LWNvbnRhaW5lclwiOiBcIlRvZG9JdGVtX3RvZG8tcHJpb3JpdHktY29udGFpbmVyX19QQURuYVwiLFxuXHRcInRvZG8tcHJpb3JpdHktbWFya2VyXCI6IFwiVG9kb0l0ZW1fdG9kby1wcmlvcml0eS1tYXJrZXJfX2NLdXgyXCIsXG5cdFwicHJpb3JpdHktZHJvcGRvd25cIjogXCJUb2RvSXRlbV9wcmlvcml0eS1kcm9wZG93bl9fTDQ4RVRcIixcblx0XCJkZWxldGUtYnV0dG9uXCI6IFwiVG9kb0l0ZW1fZGVsZXRlLWJ1dHRvbl9fMW9fdmNcIixcblx0XCJmbGFzaGluZ1wiOiBcIlRvZG9JdGVtX2ZsYXNoaW5nX19YdUdNaFwiLFxuXHRcImZsYXNoXCI6IFwiVG9kb0l0ZW1fZmxhc2hfX3hmR3BMXCIsXG5cdFwiZmFkZS1vdXRcIjogXCJUb2RvSXRlbV9mYWRlLW91dF9fSHZxdElcIixcblx0XCJkZXRhaWxzLWJ1dHRvblwiOiBcIlRvZG9JdGVtX2RldGFpbHMtYnV0dG9uX19KSGhQQ1wiLFxuXHRcImV5ZS1pY29uXCI6IFwiVG9kb0l0ZW1fZXllLWljb25fX01pU2plXCIsXG5cdFwiZXllLWljb24tY2xvc2VkXCI6IFwiVG9kb0l0ZW1fZXllLWljb24tY2xvc2VkX19VMUMzVVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/TodoItem.module.css\n");

/***/ })

});