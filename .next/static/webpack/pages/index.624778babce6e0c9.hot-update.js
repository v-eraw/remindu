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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* TodoItem.module.css */\\n.TodoItem_todo-item__37Y3K {\\n  display: flex;\\n  justify-content: center;\\n  background-color: white;\\n  border-radius: 5px;\\n  padding: 5px;\\n  margin: 10px 0;\\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\\n}\\n\\n.TodoItem_completed__p8lBh {\\n  text-decoration: line-through;\\n}\\n\\n.TodoItem_todo-check__K2_hk {\\n  margin-right: 10px;\\n}\\n\\n.TodoItem_todo-text__uIcOl {\\n  flex: 1 1;\\n  flex-direction: column;\\n  font-size: 18px;\\n  font-weight: bold;\\n  font-family: 'Caveat';\\n  color: #333;\\n  word-break: break-word; \\n  box-shadow: none;\\n}\\n\\n.TodoItem_todo-priority-container__PADna {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.TodoItem_todo-priority-marker__cKux2 {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n}\\n\\n.TodoItem_priority-dropdown__L48ET {\\n  border: none;\\n  padding: 5px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n  text-decoration: none; \\n}\\n\\n.TodoItem_priority-dropdown__L48ET:hover {\\n  background-color: #ffffff;\\n}\\n\\n.TodoItem_delete-button__1o_vc {\\n  background-color: #ff7675;\\n  border: none;\\n  color: white;\\n  padding: 5px 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n}\\n\\n.TodoItem_delete-button__1o_vc:hover{\\n  background-color: #ff6b6a;\\n}\\n\\n/* TodoItem.module.css */\\n.TodoItem_todo-item__37Y3K.TodoItem_flashing__XuGMh {\\n  -webkit-animation: TodoItem_flash__xfGpL 0.5s ease-in-out, TodoItem_fade-out__HvqtI 0.5s ease-in-out;\\n          animation: TodoItem_flash__xfGpL 0.5s ease-in-out, TodoItem_fade-out__HvqtI 0.5s ease-in-out;\\n}\\n\\n@-webkit-keyframes TodoItem_flash__xfGpL {\\n  0%, 100% {\\n    background-color: transparent;\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@keyframes TodoItem_flash__xfGpL {\\n  0%, 100% {\\n    background-color: transparent;\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@-webkit-keyframes TodoItem_fade-out__HvqtI {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n@keyframes TodoItem_fade-out__HvqtI {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n\\n.TodoItem_details-button__JHhPC {\\n  background-color: #00162c; /* Dark blue color */\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease, transform 0.3s ease;\\n  position: relative;\\n}\\n\\n.TodoItem_details-button__JHhPC:hover {\\n  background-color: #1a242f; /* Darker blue color on hover */\\n  transform: scale(1.05); /* Slight scale-up on hover */\\n}\\n\\n/* Styling for the eye icons */\\n.TodoItem_eye-icon__MiSje {\\n  margin: auto;\\n  color: #ecf0f1a3; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.TodoItem_eye-icon-closed__U1C3U {\\n  margin: auto;\\n  color: #ffffff; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.TodoItem_details-button__JHhPC:hover .TodoItem_eye-icon__MiSje {\\n  color: white; /* Light gray color on hover */\\n}\\n\\n/* Styling for the scale animation */\\n.TodoItem_details-button__JHhPC:hover .TodoItem_eye-icon__MiSje {\\n  transform: scale(1.1); /* Slightly larger size on hover */\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/TodoItem.module.css\"],\"names\":[],\"mappings\":\"AAAA,wBAAwB;AACxB;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,0CAA0C;AAC5C;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,SAAO;EACP,sBAAsB;EACtB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,WAAW;EACX,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,wBAAwB;AACxB;EACE,oGAA4D;UAA5D,4FAA4D;AAC9D;;AAEA;EACE;IACE,6BAAyB;IAAzB,yBAAyB,EAAE,8BAA8B;EAC3D;EACA;IACE,yBAAyB,EAAE,sBAAsB;EACnD;AACF;;AAPA;EACE;IACE,6BAAyB;IAAzB,yBAAyB,EAAE,8BAA8B;EAC3D;EACA;IACE,yBAAyB,EAAE,sBAAsB;EACnD;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAPA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;;AAGA;EACE,yBAAyB,EAAE,oBAAoB;EAC/C,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,2DAA2D;EAC3D,kBAAkB;AACpB;;AAEA;EACE,yBAAyB,EAAE,+BAA+B;EAC1D,sBAAsB,EAAE,6BAA6B;AACvD;;AAEA,8BAA8B;AAC9B;EACE,YAAY;EACZ,gBAAgB,EAAE,iCAAiC;EACnD,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,cAAc,EAAE,iCAAiC;EACjD,2BAA2B;AAC7B;;AAEA;EACE,YAAY,EAAE,8BAA8B;AAC9C;;AAEA,oCAAoC;AACpC;EACE,qBAAqB,EAAE,kCAAkC;AAC3D\",\"sourcesContent\":[\"/* TodoItem.module.css */\\n.todo-item {\\n  display: flex;\\n  justify-content: center;\\n  background-color: white;\\n  border-radius: 5px;\\n  padding: 5px;\\n  margin: 10px 0;\\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n}\\n\\n.todo-check {\\n  margin-right: 10px;\\n}\\n\\n.todo-text {\\n  flex: 1;\\n  flex-direction: column;\\n  font-size: 18px;\\n  font-weight: bold;\\n  font-family: 'Caveat';\\n  color: #333;\\n  word-break: break-word; \\n  box-shadow: none;\\n}\\n\\n.todo-priority-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.todo-priority-marker {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n}\\n\\n.priority-dropdown {\\n  border: none;\\n  padding: 5px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n  text-decoration: none; \\n}\\n\\n.priority-dropdown:hover {\\n  background-color: #ffffff;\\n}\\n\\n.delete-button {\\n  background-color: #ff7675;\\n  border: none;\\n  color: white;\\n  padding: 5px 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n}\\n\\n.delete-button:hover{\\n  background-color: #ff6b6a;\\n}\\n\\n/* TodoItem.module.css */\\n.todo-item.flashing {\\n  animation: flash 0.5s ease-in-out, fade-out 0.5s ease-in-out;\\n}\\n\\n@keyframes flash {\\n  0%, 100% {\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@keyframes fade-out {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n\\n.details-button {\\n  background-color: #00162c; /* Dark blue color */\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease, transform 0.3s ease;\\n  position: relative;\\n}\\n\\n.details-button:hover {\\n  background-color: #1a242f; /* Darker blue color on hover */\\n  transform: scale(1.05); /* Slight scale-up on hover */\\n}\\n\\n/* Styling for the eye icons */\\n.eye-icon {\\n  margin: auto;\\n  color: #ecf0f1a3; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.eye-icon-closed {\\n  margin: auto;\\n  color: #ffffff; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.details-button:hover .eye-icon {\\n  color: white; /* Light gray color on hover */\\n}\\n\\n/* Styling for the scale animation */\\n.details-button:hover .eye-icon {\\n  transform: scale(1.1); /* Slightly larger size on hover */\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"todo-item\": \"TodoItem_todo-item__37Y3K\",\n\t\"completed\": \"TodoItem_completed__p8lBh\",\n\t\"todo-check\": \"TodoItem_todo-check__K2_hk\",\n\t\"todo-text\": \"TodoItem_todo-text__uIcOl\",\n\t\"todo-priority-container\": \"TodoItem_todo-priority-container__PADna\",\n\t\"todo-priority-marker\": \"TodoItem_todo-priority-marker__cKux2\",\n\t\"priority-dropdown\": \"TodoItem_priority-dropdown__L48ET\",\n\t\"delete-button\": \"TodoItem_delete-button__1o_vc\",\n\t\"flashing\": \"TodoItem_flashing__XuGMh\",\n\t\"flash\": \"TodoItem_flash__xfGpL\",\n\t\"fade-out\": \"TodoItem_fade-out__HvqtI\",\n\t\"details-button\": \"TodoItem_details-button__JHhPC\",\n\t\"eye-icon\": \"TodoItem_eye-icon__MiSje\",\n\t\"eye-icon-closed\": \"TodoItem_eye-icon-closed__U1C3U\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vY29tcG9uZW50cy9Ub2RvSXRlbS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSxpR0FBaUcsa0JBQWtCLDRCQUE0Qiw0QkFBNEIsdUJBQXVCLGlCQUFpQixtQkFBbUIsK0NBQStDLEdBQUcsZ0NBQWdDLGtDQUFrQyxHQUFHLGlDQUFpQyx1QkFBdUIsR0FBRyxnQ0FBZ0MsY0FBYywyQkFBMkIsb0JBQW9CLHNCQUFzQiwwQkFBMEIsZ0JBQWdCLDRCQUE0QixxQkFBcUIsR0FBRyw4Q0FBOEMsa0JBQWtCLHdCQUF3QixHQUFHLDJDQUEyQyxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsR0FBRyx3Q0FBd0MsaUJBQWlCLGlCQUFpQix1QkFBdUIsb0JBQW9CLG9CQUFvQixzQ0FBc0MsMkJBQTJCLEdBQUcsOENBQThDLDhCQUE4QixHQUFHLG9DQUFvQyw4QkFBOEIsaUJBQWlCLGlCQUFpQixzQkFBc0IsdUJBQXVCLG9CQUFvQixvQkFBb0Isc0NBQXNDLEdBQUcseUNBQXlDLDhCQUE4QixHQUFHLG9GQUFvRix5R0FBeUcseUdBQXlHLEdBQUcsOENBQThDLGNBQWMsb0NBQW9DLGlDQUFpQyxvQ0FBb0MsU0FBUyxpQ0FBaUMsNEJBQTRCLEdBQUcsc0NBQXNDLGNBQWMsb0NBQW9DLGlDQUFpQyxvQ0FBb0MsU0FBUyxpQ0FBaUMsNEJBQTRCLEdBQUcsaURBQWlELFVBQVUsaUJBQWlCLEtB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X0UvLi9jb21wb25lbnRzL1RvZG9JdGVtLm1vZHVsZS5jc3M/NTgxYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVG9kb0l0ZW0ubW9kdWxlLmNzcyAqL1xcbi5Ub2RvSXRlbV90b2RvLWl0ZW1fXzM3WTNLIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5Ub2RvSXRlbV9jb21wbGV0ZWRfX3A4bEJoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby1jaGVja19fSzJfaGsge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uVG9kb0l0ZW1fdG9kby10ZXh0X191SWNPbCB7XFxuICBmbGV4OiAxIDE7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LWZhbWlseTogJ0NhdmVhdCc7XFxuICBjb2xvcjogIzMzMztcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7IFxcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLlRvZG9JdGVtX3RvZG8tcHJpb3JpdHktY29udGFpbmVyX19QQURuYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLlRvZG9JdGVtX3RvZG8tcHJpb3JpdHktbWFya2VyX19jS3V4MiB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLlRvZG9JdGVtX3ByaW9yaXR5LWRyb3Bkb3duX19MNDhFVCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG4uVG9kb0l0ZW1fcHJpb3JpdHktZHJvcGRvd25fX0w0OEVUOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5Ub2RvSXRlbV9kZWxldGUtYnV0dG9uX18xb192YyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3Njc1O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcblxcbi5Ub2RvSXRlbV9kZWxldGUtYnV0dG9uX18xb192Yzpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZiNmE7XFxufVxcblxcbi8qIFRvZG9JdGVtLm1vZHVsZS5jc3MgKi9cXG4uVG9kb0l0ZW1fdG9kby1pdGVtX18zN1kzSy5Ub2RvSXRlbV9mbGFzaGluZ19fWHVHTWgge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IFRvZG9JdGVtX2ZsYXNoX194ZkdwTCAwLjVzIGVhc2UtaW4tb3V0LCBUb2RvSXRlbV9mYWRlLW91dF9fSHZxdEkgMC41cyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBUb2RvSXRlbV9mbGFzaF9feGZHcEwgMC41cyBlYXNlLWluLW91dCwgVG9kb0l0ZW1fZmFkZS1vdXRfX0h2cXRJIDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBUb2RvSXRlbV9mbGFzaF9feGZHcEwge1xcbiAgMCUsIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDsgLyogT3JpZ2luYWwgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzY3NTsgLyogRmxhc2ggY29sb3IgKHJlZCkgKi9cXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBUb2RvSXRlbV9mbGFzaF9feGZHcEwge1xcbiAgMCUsIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDsgLyogT3JpZ2luYWwgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzY3NTsgLyogRmxhc2ggY29sb3IgKHJlZCkgKi9cXG4gIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIFRvZG9JdGVtX2ZhZGUtb3V0X19IdnF0SSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBUb2RvSXRlbV9mYWRlLW91dF9fSHZxdEkge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcblxcbi5Ub2RvSXRlbV9kZXRhaWxzLWJ1dHRvbl9fSkhoUEMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTYyYzsgLyogRGFyayBibHVlIGNvbG9yICovXFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uVG9kb0l0ZW1fZGV0YWlscy1idXR0b25fX0pIaFBDOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTI0MmY7IC8qIERhcmtlciBibHVlIGNvbG9yIG9uIGhvdmVyICovXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBTbGlnaHQgc2NhbGUtdXAgb24gaG92ZXIgKi9cXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIGV5ZSBpY29ucyAqL1xcbi5Ub2RvSXRlbV9leWUtaWNvbl9fTWlTamUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6ICNlY2YwZjFhMzsgLyogV2hpdGUgY29sb3IgZm9yIHRoZSBleWUgaWNvbiAqL1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4uVG9kb0l0ZW1fZXllLWljb24tY2xvc2VkX19VMUMzVSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBjb2xvcjogI2ZmZmZmZjsgLyogV2hpdGUgY29sb3IgZm9yIHRoZSBleWUgaWNvbiAqL1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4uVG9kb0l0ZW1fZGV0YWlscy1idXR0b25fX0pIaFBDOmhvdmVyIC5Ub2RvSXRlbV9leWUtaWNvbl9fTWlTamUge1xcbiAgY29sb3I6IHdoaXRlOyAvKiBMaWdodCBncmF5IGNvbG9yIG9uIGhvdmVyICovXFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHRoZSBzY2FsZSBhbmltYXRpb24gKi9cXG4uVG9kb0l0ZW1fZGV0YWlscy1idXR0b25fX0pIaFBDOmhvdmVyIC5Ub2RvSXRlbV9leWUtaWNvbl9fTWlTamUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBTbGlnaHRseSBsYXJnZXIgc2l6ZSBvbiBob3ZlciAqL1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9Ub2RvSXRlbS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQU87RUFDUCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxvR0FBNEQ7VUFBNUQsNEZBQTREO0FBQzlEOztBQUVBO0VBQ0U7SUFDRSw2QkFBeUI7SUFBekIseUJBQXlCLEVBQUUsOEJBQThCO0VBQzNEO0VBQ0E7SUFDRSx5QkFBeUIsRUFBRSxzQkFBc0I7RUFDbkQ7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsNkJBQXlCO0lBQXpCLHlCQUF5QixFQUFFLDhCQUE4QjtFQUMzRDtFQUNBO0lBQ0UseUJBQXlCLEVBQUUsc0JBQXNCO0VBQ25EO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7OztBQUdBO0VBQ0UseUJBQXlCLEVBQUUsb0JBQW9CO0VBQy9DLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkRBQTJEO0VBQzNELGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLCtCQUErQjtFQUMxRCxzQkFBc0IsRUFBRSw2QkFBNkI7QUFDdkQ7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFFLGlDQUFpQztFQUNuRCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYyxFQUFFLGlDQUFpQztFQUNqRCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZLEVBQUUsOEJBQThCO0FBQzlDOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLHFCQUFxQixFQUFFLGtDQUFrQztBQUMzRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUb2RvSXRlbS5tb2R1bGUuY3NzICovXFxuLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kby1jaGVjayB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50b2RvLXRleHQge1xcbiAgZmxleDogMTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcXG4gIGNvbG9yOiAjMzMzO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDsgXFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLXByaW9yaXR5LW1hcmtlciB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnByaW9yaXR5LWRyb3Bkb3duIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXFxufVxcblxcbi5wcmlvcml0eS1kcm9wZG93bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3Njc1O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmI2YTtcXG59XFxuXFxuLyogVG9kb0l0ZW0ubW9kdWxlLmNzcyAqL1xcbi50b2RvLWl0ZW0uZmxhc2hpbmcge1xcbiAgYW5pbWF0aW9uOiBmbGFzaCAwLjVzIGVhc2UtaW4tb3V0LCBmYWRlLW91dCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsYXNoIHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDsgLyogT3JpZ2luYWwgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzY3NTsgLyogRmxhc2ggY29sb3IgKHJlZCkgKi9cXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuXFxuLmRldGFpbHMtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDE2MmM7IC8qIERhcmsgYmx1ZSBjb2xvciAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTI0MmY7IC8qIERhcmtlciBibHVlIGNvbG9yIG9uIGhvdmVyICovXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBTbGlnaHQgc2NhbGUtdXAgb24gaG92ZXIgKi9cXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIGV5ZSBpY29ucyAqL1xcbi5leWUtaWNvbiB7XFxuICBtYXJnaW46IGF1dG87XFxuICBjb2xvcjogI2VjZjBmMWEzOyAvKiBXaGl0ZSBjb2xvciBmb3IgdGhlIGV5ZSBpY29uICovXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5leWUtaWNvbi1jbG9zZWQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6ICNmZmZmZmY7IC8qIFdoaXRlIGNvbG9yIGZvciB0aGUgZXllIGljb24gKi9cXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9uOmhvdmVyIC5leWUtaWNvbiB7XFxuICBjb2xvcjogd2hpdGU7IC8qIExpZ2h0IGdyYXkgY29sb3Igb24gaG92ZXIgKi9cXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIHNjYWxlIGFuaW1hdGlvbiAqL1xcbi5kZXRhaWxzLWJ1dHRvbjpob3ZlciAuZXllLWljb24ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBTbGlnaHRseSBsYXJnZXIgc2l6ZSBvbiBob3ZlciAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0b2RvLWl0ZW1cIjogXCJUb2RvSXRlbV90b2RvLWl0ZW1fXzM3WTNLXCIsXG5cdFwiY29tcGxldGVkXCI6IFwiVG9kb0l0ZW1fY29tcGxldGVkX19wOGxCaFwiLFxuXHRcInRvZG8tY2hlY2tcIjogXCJUb2RvSXRlbV90b2RvLWNoZWNrX19LMl9oa1wiLFxuXHRcInRvZG8tdGV4dFwiOiBcIlRvZG9JdGVtX3RvZG8tdGV4dF9fdUljT2xcIixcblx0XCJ0b2RvLXByaW9yaXR5LWNvbnRhaW5lclwiOiBcIlRvZG9JdGVtX3RvZG8tcHJpb3JpdHktY29udGFpbmVyX19QQURuYVwiLFxuXHRcInRvZG8tcHJpb3JpdHktbWFya2VyXCI6IFwiVG9kb0l0ZW1fdG9kby1wcmlvcml0eS1tYXJrZXJfX2NLdXgyXCIsXG5cdFwicHJpb3JpdHktZHJvcGRvd25cIjogXCJUb2RvSXRlbV9wcmlvcml0eS1kcm9wZG93bl9fTDQ4RVRcIixcblx0XCJkZWxldGUtYnV0dG9uXCI6IFwiVG9kb0l0ZW1fZGVsZXRlLWJ1dHRvbl9fMW9fdmNcIixcblx0XCJmbGFzaGluZ1wiOiBcIlRvZG9JdGVtX2ZsYXNoaW5nX19YdUdNaFwiLFxuXHRcImZsYXNoXCI6IFwiVG9kb0l0ZW1fZmxhc2hfX3hmR3BMXCIsXG5cdFwiZmFkZS1vdXRcIjogXCJUb2RvSXRlbV9mYWRlLW91dF9fSHZxdElcIixcblx0XCJkZXRhaWxzLWJ1dHRvblwiOiBcIlRvZG9JdGVtX2RldGFpbHMtYnV0dG9uX19KSGhQQ1wiLFxuXHRcImV5ZS1pY29uXCI6IFwiVG9kb0l0ZW1fZXllLWljb25fX01pU2plXCIsXG5cdFwiZXllLWljb24tY2xvc2VkXCI6IFwiVG9kb0l0ZW1fZXllLWljb24tY2xvc2VkX19VMUMzVVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/TodoItem.module.css\n");

/***/ })

});