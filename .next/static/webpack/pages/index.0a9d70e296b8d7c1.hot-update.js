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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* TodoItem.module.css */\\n.TodoItem_todo-item__37Y3K {\\n  display: flex;\\n  align-items: center;\\n  background-color: white;\\n  border-radius: 5px;\\n  padding: 5px;\\n  margin: 10px 0;\\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\\n}\\n\\n.TodoItem_completed__p8lBh {\\n  text-decoration: line-through;\\n}\\n\\n.TodoItem_todo-check__K2_hk {\\n  margin-right: 10px;\\n}\\n\\n.TodoItem_todo-text__uIcOl {\\n  flex: 1 1;\\n  font-size: 18px;\\n  font-weight: bold;\\n  color: #333;\\n  max-width: 80ch; /* Allow the item to wrap down */\\n  flex-direction: column; \\n}\\n\\n.TodoItem_todo-priority-container__PADna {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.TodoItem_todo-priority-marker__cKux2 {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n}\\n\\n.TodoItem_priority-dropdown__L48ET {\\n  border: none;\\n  padding: 5px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n  text-decoration: none; \\n}\\n\\n.TodoItem_priority-dropdown__L48ET:hover {\\n  background-color: #ffffff;\\n}\\n\\n.TodoItem_delete-button__1o_vc {\\n  background-color: #ff7675;\\n  border: none;\\n  color: white;\\n  padding: 5px 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n}\\n\\n.TodoItem_delete-button__1o_vc:hover{\\n  background-color: #ff6b6a;\\n}\\n\\n/* TodoItem.module.css */\\n.TodoItem_todo-item__37Y3K.TodoItem_flashing__XuGMh {\\n  -webkit-animation: TodoItem_flash__xfGpL 0.5s ease-in-out, TodoItem_fade-out__HvqtI 0.5s ease-in-out;\\n          animation: TodoItem_flash__xfGpL 0.5s ease-in-out, TodoItem_fade-out__HvqtI 0.5s ease-in-out;\\n}\\n\\n@-webkit-keyframes TodoItem_flash__xfGpL {\\n  0%, 100% {\\n    background-color: transparent;\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@keyframes TodoItem_flash__xfGpL {\\n  0%, 100% {\\n    background-color: transparent;\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@-webkit-keyframes TodoItem_fade-out__HvqtI {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n@keyframes TodoItem_fade-out__HvqtI {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n\\n.TodoItem_details-button__JHhPC {\\n  background-color: #00162c; /* Dark blue color */\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease, transform 0.3s ease;\\n  position: relative;\\n}\\n\\n.TodoItem_details-button__JHhPC:hover {\\n  background-color: #1a242f; /* Darker blue color on hover */\\n  transform: scale(1.05); /* Slight scale-up on hover */\\n}\\n\\n/* Styling for the eye icons */\\n.TodoItem_eye-icon__MiSje {\\n  margin: auto;\\n  color: #ecf0f1a3; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.TodoItem_eye-icon-closed__U1C3U {\\n  margin: auto;\\n  color: #ffffff; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.TodoItem_details-button__JHhPC:hover .TodoItem_eye-icon__MiSje {\\n  color: white; /* Light gray color on hover */\\n}\\n\\n/* Styling for the scale animation */\\n.TodoItem_details-button__JHhPC:hover .TodoItem_eye-icon__MiSje {\\n  transform: scale(1.1); /* Slightly larger size on hover */\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/TodoItem.module.css\"],\"names\":[],\"mappings\":\"AAAA,wBAAwB;AACxB;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,0CAA0C;AAC5C;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,SAAO;EACP,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,eAAe,EAAE,gCAAgC;EACjD,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,wBAAwB;AACxB;EACE,oGAA4D;UAA5D,4FAA4D;AAC9D;;AAEA;EACE;IACE,6BAAyB;IAAzB,yBAAyB,EAAE,8BAA8B;EAC3D;EACA;IACE,yBAAyB,EAAE,sBAAsB;EACnD;AACF;;AAPA;EACE;IACE,6BAAyB;IAAzB,yBAAyB,EAAE,8BAA8B;EAC3D;EACA;IACE,yBAAyB,EAAE,sBAAsB;EACnD;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAPA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;;AAGA;EACE,yBAAyB,EAAE,oBAAoB;EAC/C,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,2DAA2D;EAC3D,kBAAkB;AACpB;;AAEA;EACE,yBAAyB,EAAE,+BAA+B;EAC1D,sBAAsB,EAAE,6BAA6B;AACvD;;AAEA,8BAA8B;AAC9B;EACE,YAAY;EACZ,gBAAgB,EAAE,iCAAiC;EACnD,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,cAAc,EAAE,iCAAiC;EACjD,2BAA2B;AAC7B;;AAEA;EACE,YAAY,EAAE,8BAA8B;AAC9C;;AAEA,oCAAoC;AACpC;EACE,qBAAqB,EAAE,kCAAkC;AAC3D\",\"sourcesContent\":[\"/* TodoItem.module.css */\\n.todo-item {\\n  display: flex;\\n  align-items: center;\\n  background-color: white;\\n  border-radius: 5px;\\n  padding: 5px;\\n  margin: 10px 0;\\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n}\\n\\n.todo-check {\\n  margin-right: 10px;\\n}\\n\\n.todo-text {\\n  flex: 1;\\n  font-size: 18px;\\n  font-weight: bold;\\n  color: #333;\\n  max-width: 80ch; /* Allow the item to wrap down */\\n  flex-direction: column; \\n}\\n\\n.todo-priority-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.todo-priority-marker {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n}\\n\\n.priority-dropdown {\\n  border: none;\\n  padding: 5px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n  text-decoration: none; \\n}\\n\\n.priority-dropdown:hover {\\n  background-color: #ffffff;\\n}\\n\\n.delete-button {\\n  background-color: #ff7675;\\n  border: none;\\n  color: white;\\n  padding: 5px 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n}\\n\\n.delete-button:hover{\\n  background-color: #ff6b6a;\\n}\\n\\n/* TodoItem.module.css */\\n.todo-item.flashing {\\n  animation: flash 0.5s ease-in-out, fade-out 0.5s ease-in-out;\\n}\\n\\n@keyframes flash {\\n  0%, 100% {\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@keyframes fade-out {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n\\n.details-button {\\n  background-color: #00162c; /* Dark blue color */\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease, transform 0.3s ease;\\n  position: relative;\\n}\\n\\n.details-button:hover {\\n  background-color: #1a242f; /* Darker blue color on hover */\\n  transform: scale(1.05); /* Slight scale-up on hover */\\n}\\n\\n/* Styling for the eye icons */\\n.eye-icon {\\n  margin: auto;\\n  color: #ecf0f1a3; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.eye-icon-closed {\\n  margin: auto;\\n  color: #ffffff; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.details-button:hover .eye-icon {\\n  color: white; /* Light gray color on hover */\\n}\\n\\n/* Styling for the scale animation */\\n.details-button:hover .eye-icon {\\n  transform: scale(1.1); /* Slightly larger size on hover */\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"todo-item\": \"TodoItem_todo-item__37Y3K\",\n\t\"completed\": \"TodoItem_completed__p8lBh\",\n\t\"todo-check\": \"TodoItem_todo-check__K2_hk\",\n\t\"todo-text\": \"TodoItem_todo-text__uIcOl\",\n\t\"todo-priority-container\": \"TodoItem_todo-priority-container__PADna\",\n\t\"todo-priority-marker\": \"TodoItem_todo-priority-marker__cKux2\",\n\t\"priority-dropdown\": \"TodoItem_priority-dropdown__L48ET\",\n\t\"delete-button\": \"TodoItem_delete-button__1o_vc\",\n\t\"flashing\": \"TodoItem_flashing__XuGMh\",\n\t\"flash\": \"TodoItem_flash__xfGpL\",\n\t\"fade-out\": \"TodoItem_fade-out__HvqtI\",\n\t\"details-button\": \"TodoItem_details-button__JHhPC\",\n\t\"eye-icon\": \"TodoItem_eye-icon__MiSje\",\n\t\"eye-icon-closed\": \"TodoItem_eye-icon-closed__U1C3U\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vY29tcG9uZW50cy9Ub2RvSXRlbS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSxpR0FBaUcsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLGlCQUFpQixtQkFBbUIsK0NBQStDLEdBQUcsZ0NBQWdDLGtDQUFrQyxHQUFHLGlDQUFpQyx1QkFBdUIsR0FBRyxnQ0FBZ0MsY0FBYyxvQkFBb0Isc0JBQXNCLGdCQUFnQixxQkFBcUIsNkRBQTZELEdBQUcsOENBQThDLGtCQUFrQix3QkFBd0IsR0FBRywyQ0FBMkMsZ0JBQWdCLGlCQUFpQix1QkFBdUIsdUJBQXVCLEdBQUcsd0NBQXdDLGlCQUFpQixpQkFBaUIsdUJBQXVCLG9CQUFvQixvQkFBb0Isc0NBQXNDLDJCQUEyQixHQUFHLDhDQUE4Qyw4QkFBOEIsR0FBRyxvQ0FBb0MsOEJBQThCLGlCQUFpQixpQkFBaUIsc0JBQXNCLHVCQUF1QixvQkFBb0Isb0JBQW9CLHNDQUFzQyxHQUFHLHlDQUF5Qyw4QkFBOEIsR0FBRyxvRkFBb0YseUdBQXlHLHlHQUF5RyxHQUFHLDhDQUE4QyxjQUFjLG9DQUFvQyxpQ0FBaUMsb0NBQW9DLFNBQVMsaUNBQWlDLDRCQUE0QixHQUFHLHNDQUFzQyxjQUFjLG9DQUFvQyxpQ0FBaUMsb0NBQW9DLFNBQVMsaUNBQWlDLDRCQUE0QixHQUFHLGlEQUFpRCxVQUFVLGlCQUFpQixLQUFLLFFBQVEsaUJBQWlC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NTgxYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVG9kb0l0ZW0ubW9kdWxlLmNzcyAqL1xcbi5Ub2RvSXRlbV90b2RvLWl0ZW1fXzM3WTNLIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLlRvZG9JdGVtX2NvbXBsZXRlZF9fcDhsQmgge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5Ub2RvSXRlbV90b2RvLWNoZWNrX19LMl9oayB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5Ub2RvSXRlbV90b2RvLXRleHRfX3VJY09sIHtcXG4gIGZsZXg6IDEgMTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7XFxuICBtYXgtd2lkdGg6IDgwY2g7IC8qIEFsbG93IHRoZSBpdGVtIHRvIHdyYXAgZG93biAqL1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxufVxcblxcbi5Ub2RvSXRlbV90b2RvLXByaW9yaXR5LWNvbnRhaW5lcl9fUEFEbmEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5Ub2RvSXRlbV90b2RvLXByaW9yaXR5LW1hcmtlcl9fY0t1eDIge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5Ub2RvSXRlbV9wcmlvcml0eS1kcm9wZG93bl9fTDQ4RVQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuLlRvZG9JdGVtX3ByaW9yaXR5LWRyb3Bkb3duX19MNDhFVDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uVG9kb0l0ZW1fZGVsZXRlLWJ1dHRvbl9fMW9fdmMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzY3NTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG5cXG4uVG9kb0l0ZW1fZGVsZXRlLWJ1dHRvbl9fMW9fdmM6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YjZhO1xcbn1cXG5cXG4vKiBUb2RvSXRlbS5tb2R1bGUuY3NzICovXFxuLlRvZG9JdGVtX3RvZG8taXRlbV9fMzdZM0suVG9kb0l0ZW1fZmxhc2hpbmdfX1h1R01oIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBUb2RvSXRlbV9mbGFzaF9feGZHcEwgMC41cyBlYXNlLWluLW91dCwgVG9kb0l0ZW1fZmFkZS1vdXRfX0h2cXRJIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgIGFuaW1hdGlvbjogVG9kb0l0ZW1fZmxhc2hfX3hmR3BMIDAuNXMgZWFzZS1pbi1vdXQsIFRvZG9JdGVtX2ZhZGUtb3V0X19IdnF0SSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgVG9kb0l0ZW1fZmxhc2hfX3hmR3BMIHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7IC8qIE9yaWdpbmFsIGJhY2tncm91bmQgY29sb3IgKi9cXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc2NzU7IC8qIEZsYXNoIGNvbG9yIChyZWQpICovXFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgVG9kb0l0ZW1fZmxhc2hfX3hmR3BMIHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7IC8qIE9yaWdpbmFsIGJhY2tncm91bmQgY29sb3IgKi9cXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc2NzU7IC8qIEZsYXNoIGNvbG9yIChyZWQpICovXFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBUb2RvSXRlbV9mYWRlLW91dF9fSHZxdEkge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgVG9kb0l0ZW1fZmFkZS1vdXRfX0h2cXRJIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5cXG4uVG9kb0l0ZW1fZGV0YWlscy1idXR0b25fX0pIaFBDIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDE2MmM7IC8qIERhcmsgYmx1ZSBjb2xvciAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLlRvZG9JdGVtX2RldGFpbHMtYnV0dG9uX19KSGhQQzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyNDJmOyAvKiBEYXJrZXIgYmx1ZSBjb2xvciBvbiBob3ZlciAqL1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogU2xpZ2h0IHNjYWxlLXVwIG9uIGhvdmVyICovXFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHRoZSBleWUgaWNvbnMgKi9cXG4uVG9kb0l0ZW1fZXllLWljb25fX01pU2plIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiAjZWNmMGYxYTM7IC8qIFdoaXRlIGNvbG9yIGZvciB0aGUgZXllIGljb24gKi9cXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLlRvZG9JdGVtX2V5ZS1pY29uLWNsb3NlZF9fVTFDM1Uge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIGNvbG9yIGZvciB0aGUgZXllIGljb24gKi9cXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLlRvZG9JdGVtX2RldGFpbHMtYnV0dG9uX19KSGhQQzpob3ZlciAuVG9kb0l0ZW1fZXllLWljb25fX01pU2plIHtcXG4gIGNvbG9yOiB3aGl0ZTsgLyogTGlnaHQgZ3JheSBjb2xvciBvbiBob3ZlciAqL1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgc2NhbGUgYW5pbWF0aW9uICovXFxuLlRvZG9JdGVtX2RldGFpbHMtYnV0dG9uX19KSGhQQzpob3ZlciAuVG9kb0l0ZW1fZXllLWljb25fX01pU2plIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogU2xpZ2h0bHkgbGFyZ2VyIHNpemUgb24gaG92ZXIgKi9cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvVG9kb0l0ZW0ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7RUFDZCwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFPO0VBQ1AsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZSxFQUFFLGdDQUFnQztFQUNqRCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxvR0FBNEQ7VUFBNUQsNEZBQTREO0FBQzlEOztBQUVBO0VBQ0U7SUFDRSw2QkFBeUI7SUFBekIseUJBQXlCLEVBQUUsOEJBQThCO0VBQzNEO0VBQ0E7SUFDRSx5QkFBeUIsRUFBRSxzQkFBc0I7RUFDbkQ7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsNkJBQXlCO0lBQXpCLHlCQUF5QixFQUFFLDhCQUE4QjtFQUMzRDtFQUNBO0lBQ0UseUJBQXlCLEVBQUUsc0JBQXNCO0VBQ25EO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7OztBQUdBO0VBQ0UseUJBQXlCLEVBQUUsb0JBQW9CO0VBQy9DLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkRBQTJEO0VBQzNELGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLCtCQUErQjtFQUMxRCxzQkFBc0IsRUFBRSw2QkFBNkI7QUFDdkQ7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFFLGlDQUFpQztFQUNuRCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYyxFQUFFLGlDQUFpQztFQUNqRCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZLEVBQUUsOEJBQThCO0FBQzlDOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLHFCQUFxQixFQUFFLGtDQUFrQztBQUMzRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUb2RvSXRlbS5tb2R1bGUuY3NzICovXFxuLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvLWNoZWNrIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnRvZG8tdGV4dCB7XFxuICBmbGV4OiAxO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMztcXG4gIG1heC13aWR0aDogODBjaDsgLyogQWxsb3cgdGhlIGl0ZW0gdG8gd3JhcCBkb3duICovXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eS1tYXJrZXIge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5wcmlvcml0eS1kcm9wZG93biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG4ucHJpb3JpdHktZHJvcGRvd246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzY3NTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZiNmE7XFxufVxcblxcbi8qIFRvZG9JdGVtLm1vZHVsZS5jc3MgKi9cXG4udG9kby1pdGVtLmZsYXNoaW5nIHtcXG4gIGFuaW1hdGlvbjogZmxhc2ggMC41cyBlYXNlLWluLW91dCwgZmFkZS1vdXQgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyBmbGFzaCB7XFxuICAwJSwgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7IC8qIE9yaWdpbmFsIGJhY2tncm91bmQgY29sb3IgKi9cXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc2NzU7IC8qIEZsYXNoIGNvbG9yIChyZWQpICovXFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcblxcbi5kZXRhaWxzLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNjJjOyAvKiBEYXJrIGJsdWUgY29sb3IgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kZXRhaWxzLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyNDJmOyAvKiBEYXJrZXIgYmx1ZSBjb2xvciBvbiBob3ZlciAqL1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogU2xpZ2h0IHNjYWxlLXVwIG9uIGhvdmVyICovXFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHRoZSBleWUgaWNvbnMgKi9cXG4uZXllLWljb24ge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6ICNlY2YwZjFhMzsgLyogV2hpdGUgY29sb3IgZm9yIHRoZSBleWUgaWNvbiAqL1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4uZXllLWljb24tY2xvc2VkIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiAjZmZmZmZmOyAvKiBXaGl0ZSBjb2xvciBmb3IgdGhlIGV5ZSBpY29uICovXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5kZXRhaWxzLWJ1dHRvbjpob3ZlciAuZXllLWljb24ge1xcbiAgY29sb3I6IHdoaXRlOyAvKiBMaWdodCBncmF5IGNvbG9yIG9uIGhvdmVyICovXFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHRoZSBzY2FsZSBhbmltYXRpb24gKi9cXG4uZGV0YWlscy1idXR0b246aG92ZXIgLmV5ZS1pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogU2xpZ2h0bHkgbGFyZ2VyIHNpemUgb24gaG92ZXIgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidG9kby1pdGVtXCI6IFwiVG9kb0l0ZW1fdG9kby1pdGVtX18zN1kzS1wiLFxuXHRcImNvbXBsZXRlZFwiOiBcIlRvZG9JdGVtX2NvbXBsZXRlZF9fcDhsQmhcIixcblx0XCJ0b2RvLWNoZWNrXCI6IFwiVG9kb0l0ZW1fdG9kby1jaGVja19fSzJfaGtcIixcblx0XCJ0b2RvLXRleHRcIjogXCJUb2RvSXRlbV90b2RvLXRleHRfX3VJY09sXCIsXG5cdFwidG9kby1wcmlvcml0eS1jb250YWluZXJcIjogXCJUb2RvSXRlbV90b2RvLXByaW9yaXR5LWNvbnRhaW5lcl9fUEFEbmFcIixcblx0XCJ0b2RvLXByaW9yaXR5LW1hcmtlclwiOiBcIlRvZG9JdGVtX3RvZG8tcHJpb3JpdHktbWFya2VyX19jS3V4MlwiLFxuXHRcInByaW9yaXR5LWRyb3Bkb3duXCI6IFwiVG9kb0l0ZW1fcHJpb3JpdHktZHJvcGRvd25fX0w0OEVUXCIsXG5cdFwiZGVsZXRlLWJ1dHRvblwiOiBcIlRvZG9JdGVtX2RlbGV0ZS1idXR0b25fXzFvX3ZjXCIsXG5cdFwiZmxhc2hpbmdcIjogXCJUb2RvSXRlbV9mbGFzaGluZ19fWHVHTWhcIixcblx0XCJmbGFzaFwiOiBcIlRvZG9JdGVtX2ZsYXNoX194ZkdwTFwiLFxuXHRcImZhZGUtb3V0XCI6IFwiVG9kb0l0ZW1fZmFkZS1vdXRfX0h2cXRJXCIsXG5cdFwiZGV0YWlscy1idXR0b25cIjogXCJUb2RvSXRlbV9kZXRhaWxzLWJ1dHRvbl9fSkhoUENcIixcblx0XCJleWUtaWNvblwiOiBcIlRvZG9JdGVtX2V5ZS1pY29uX19NaVNqZVwiLFxuXHRcImV5ZS1pY29uLWNsb3NlZFwiOiBcIlRvZG9JdGVtX2V5ZS1pY29uLWNsb3NlZF9fVTFDM1VcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/TodoItem.module.css\n");

/***/ })

});