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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* TodoItem.module.css */\\n.TodoItem_todo-item__37Y3K {\\n  display: flex;\\n  align-items: center;\\n  background-color: white;\\n  border-radius: 5px;\\n  padding: 10px;\\n  margin: 10px 0;\\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\\n}\\n\\n.TodoItem_completed__p8lBh {\\n  text-decoration: line-through;\\n}\\n\\n.TodoItem_todo-check__K2_hk {\\n  margin-right: 10px;\\n}\\n\\n.TodoItem_todo-text__uIcOl {\\n  flex: 1 1;\\n  font-size: 18px;\\n  font-weight: bold;\\n  color: #333;\\n}\\n\\n.TodoItem_todo-priority-container__PADna {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.TodoItem_todo-priority-marker__cKux2 {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n}\\n\\n.TodoItem_priority-dropdown__L48ET {\\n  border: none;\\n  padding: 5px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n  text-decoration: none; \\n}\\n\\n.TodoItem_priority-dropdown__L48ET:hover {\\n  background-color: #7ed6a5; /* Change to a different color on hover */\\n}\\n\\n.TodoItem_delete-button__1o_vc {\\n  background-color: #ff7675;\\n  border: none;\\n  color: white;\\n  padding: 5px 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n}\\n\\n.TodoItem_delete-button__1o_vc:hover{\\n  background-color: #ff6b6a;\\n}\\n\\n/* TodoItem.module.css */\\n.TodoItem_todo-item__37Y3K.TodoItem_flashing__XuGMh {\\n  -webkit-animation: TodoItem_flash__xfGpL 0.5s ease-in-out, TodoItem_fade-out__HvqtI 0.5s ease-in-out;\\n          animation: TodoItem_flash__xfGpL 0.5s ease-in-out, TodoItem_fade-out__HvqtI 0.5s ease-in-out;\\n}\\n\\n@-webkit-keyframes TodoItem_flash__xfGpL {\\n  0%, 100% {\\n    background-color: transparent;\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@keyframes TodoItem_flash__xfGpL {\\n  0%, 100% {\\n    background-color: transparent;\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@-webkit-keyframes TodoItem_fade-out__HvqtI {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n@keyframes TodoItem_fade-out__HvqtI {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n\\n.TodoItem_details-button__JHhPC {\\n  background-color: #00162c; /* Dark blue color */\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease, transform 0.3s ease;\\n  position: relative;\\n}\\n\\n.TodoItem_details-button__JHhPC:hover {\\n  background-color: #1a242f; /* Darker blue color on hover */\\n  transform: scale(1.05); /* Slight scale-up on hover */\\n}\\n\\n/* Styling for the eye icons */\\n.TodoItem_eye-icon__MiSje {\\n  margin-right: 5px;\\n  color: white; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.TodoItem_details-button__JHhPC:hover .TodoItem_eye-icon__MiSje {\\n  color: #ecf0f1; /* Light gray color on hover */\\n}\\n\\n/* Styling for the cute elements */\\n.TodoItem_cute-elements__dFr82 {\\n  position: absolute;\\n  top: 50%;\\n  right: 10px;\\n  transform: translateY(-50%);\\n}\\n\\n/* Styling for the cute heart element */\\n.TodoItem_cute-heart__sFWvG {\\n  color: #ff6b6b;\\n  font-size: 16px;\\n  opacity: 0.8; /* Slightly reduced opacity for dreamy effect */\\n  transition: opacity 0.3s ease;\\n}\\n\\n.TodoItem_details-button__JHhPC:hover .TodoItem_cute-heart__sFWvG {\\n  opacity: 1; /* Full opacity on hover */\\n  -webkit-animation: TodoItem_blink__y7JTX 1s infinite;\\n          animation: TodoItem_blink__y7JTX 1s infinite;\\n}\\n\\n/* Blink animation */\\n@-webkit-keyframes TodoItem_blink__y7JTX {\\n  0%, 100% {\\n    opacity: 1;\\n  }\\n  50% {\\n    opacity: 0.8; /* Slightly reduced opacity during the blink */\\n  }\\n}\\n@keyframes TodoItem_blink__y7JTX {\\n  0%, 100% {\\n    opacity: 1;\\n  }\\n  50% {\\n    opacity: 0.8; /* Slightly reduced opacity during the blink */\\n  }\\n}\\n\\n/* Styling for the scale animation */\\n.TodoItem_details-button__JHhPC:hover .TodoItem_eye-icon__MiSje {\\n  transform: scale(1.1); /* Slightly larger size on hover */\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/TodoItem.module.css\"],\"names\":[],\"mappings\":\"AAAA,wBAAwB;AACxB;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,0CAA0C;AAC5C;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,SAAO;EACP,eAAe;EACf,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;EACE,yBAAyB,EAAE,yCAAyC;AACtE;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,wBAAwB;AACxB;EACE,oGAA4D;UAA5D,4FAA4D;AAC9D;;AAEA;EACE;IACE,6BAAyB;IAAzB,yBAAyB,EAAE,8BAA8B;EAC3D;EACA;IACE,yBAAyB,EAAE,sBAAsB;EACnD;AACF;;AAPA;EACE;IACE,6BAAyB;IAAzB,yBAAyB,EAAE,8BAA8B;EAC3D;EACA;IACE,yBAAyB,EAAE,sBAAsB;EACnD;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAPA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;;AAGA;EACE,yBAAyB,EAAE,oBAAoB;EAC/C,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,2DAA2D;EAC3D,kBAAkB;AACpB;;AAEA;EACE,yBAAyB,EAAE,+BAA+B;EAC1D,sBAAsB,EAAE,6BAA6B;AACvD;;AAEA,8BAA8B;AAC9B;EACE,iBAAiB;EACjB,YAAY,EAAE,iCAAiC;EAC/C,2BAA2B;AAC7B;;AAEA;EACE,cAAc,EAAE,8BAA8B;AAChD;;AAEA,kCAAkC;AAClC;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,2BAA2B;AAC7B;;AAEA,uCAAuC;AACvC;EACE,cAAc;EACd,eAAe;EACf,YAAY,EAAE,+CAA+C;EAC7D,6BAA6B;AAC/B;;AAEA;EACE,UAAU,EAAE,0BAA0B;EACtC,oDAA4B;UAA5B,4CAA4B;AAC9B;;AAEA,oBAAoB;AACpB;EACE;IACE,UAAU;EACZ;EACA;IACE,YAAY,EAAE,8CAA8C;EAC9D;AACF;AAPA;EACE;IACE,UAAU;EACZ;EACA;IACE,YAAY,EAAE,8CAA8C;EAC9D;AACF;;AAEA,oCAAoC;AACpC;EACE,qBAAqB,EAAE,kCAAkC;AAC3D\",\"sourcesContent\":[\"/* TodoItem.module.css */\\n.todo-item {\\n  display: flex;\\n  align-items: center;\\n  background-color: white;\\n  border-radius: 5px;\\n  padding: 10px;\\n  margin: 10px 0;\\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n}\\n\\n.todo-check {\\n  margin-right: 10px;\\n}\\n\\n.todo-text {\\n  flex: 1;\\n  font-size: 18px;\\n  font-weight: bold;\\n  color: #333;\\n}\\n\\n.todo-priority-container {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.todo-priority-marker {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n}\\n\\n.priority-dropdown {\\n  border: none;\\n  padding: 5px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n  text-decoration: none; \\n}\\n\\n.priority-dropdown:hover {\\n  background-color: #7ed6a5; /* Change to a different color on hover */\\n}\\n\\n.delete-button {\\n  background-color: #ff7675;\\n  border: none;\\n  color: white;\\n  padding: 5px 10px;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 14px;\\n  transition: background-color 0.3s;\\n}\\n\\n.delete-button:hover{\\n  background-color: #ff6b6a;\\n}\\n\\n/* TodoItem.module.css */\\n.todo-item.flashing {\\n  animation: flash 0.5s ease-in-out, fade-out 0.5s ease-in-out;\\n}\\n\\n@keyframes flash {\\n  0%, 100% {\\n    background-color: initial; /* Original background color */\\n  }\\n  50% {\\n    background-color: #ff7675; /* Flash color (red) */\\n  }\\n}\\n\\n@keyframes fade-out {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\\n\\n.details-button {\\n  background-color: #00162c; /* Dark blue color */\\n  color: white;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease, transform 0.3s ease;\\n  position: relative;\\n}\\n\\n.details-button:hover {\\n  background-color: #1a242f; /* Darker blue color on hover */\\n  transform: scale(1.05); /* Slight scale-up on hover */\\n}\\n\\n/* Styling for the eye icons */\\n.eye-icon {\\n  margin-right: 5px;\\n  color: white; /* White color for the eye icon */\\n  transition: color 0.3s ease;\\n}\\n\\n.details-button:hover .eye-icon {\\n  color: #ecf0f1; /* Light gray color on hover */\\n}\\n\\n/* Styling for the cute elements */\\n.cute-elements {\\n  position: absolute;\\n  top: 50%;\\n  right: 10px;\\n  transform: translateY(-50%);\\n}\\n\\n/* Styling for the cute heart element */\\n.cute-heart {\\n  color: #ff6b6b;\\n  font-size: 16px;\\n  opacity: 0.8; /* Slightly reduced opacity for dreamy effect */\\n  transition: opacity 0.3s ease;\\n}\\n\\n.details-button:hover .cute-heart {\\n  opacity: 1; /* Full opacity on hover */\\n  animation: blink 1s infinite;\\n}\\n\\n/* Blink animation */\\n@keyframes blink {\\n  0%, 100% {\\n    opacity: 1;\\n  }\\n  50% {\\n    opacity: 0.8; /* Slightly reduced opacity during the blink */\\n  }\\n}\\n\\n/* Styling for the scale animation */\\n.details-button:hover .eye-icon {\\n  transform: scale(1.1); /* Slightly larger size on hover */\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"todo-item\": \"TodoItem_todo-item__37Y3K\",\n\t\"completed\": \"TodoItem_completed__p8lBh\",\n\t\"todo-check\": \"TodoItem_todo-check__K2_hk\",\n\t\"todo-text\": \"TodoItem_todo-text__uIcOl\",\n\t\"todo-priority-container\": \"TodoItem_todo-priority-container__PADna\",\n\t\"todo-priority-marker\": \"TodoItem_todo-priority-marker__cKux2\",\n\t\"priority-dropdown\": \"TodoItem_priority-dropdown__L48ET\",\n\t\"delete-button\": \"TodoItem_delete-button__1o_vc\",\n\t\"flashing\": \"TodoItem_flashing__XuGMh\",\n\t\"flash\": \"TodoItem_flash__xfGpL\",\n\t\"fade-out\": \"TodoItem_fade-out__HvqtI\",\n\t\"details-button\": \"TodoItem_details-button__JHhPC\",\n\t\"eye-icon\": \"TodoItem_eye-icon__MiSje\",\n\t\"cute-elements\": \"TodoItem_cute-elements__dFr82\",\n\t\"cute-heart\": \"TodoItem_cute-heart__sFWvG\",\n\t\"blink\": \"TodoItem_blink__y7JTX\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vY29tcG9uZW50cy9Ub2RvSXRlbS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSxpR0FBaUcsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLGtCQUFrQixtQkFBbUIsK0NBQStDLEdBQUcsZ0NBQWdDLGtDQUFrQyxHQUFHLGlDQUFpQyx1QkFBdUIsR0FBRyxnQ0FBZ0MsY0FBYyxvQkFBb0Isc0JBQXNCLGdCQUFnQixHQUFHLDhDQUE4QyxrQkFBa0Isd0JBQXdCLEdBQUcsMkNBQTJDLGdCQUFnQixpQkFBaUIsdUJBQXVCLHVCQUF1QixHQUFHLHdDQUF3QyxpQkFBaUIsaUJBQWlCLHVCQUF1QixvQkFBb0Isb0JBQW9CLHNDQUFzQywyQkFBMkIsR0FBRyw4Q0FBOEMsK0JBQStCLDZDQUE2QyxvQ0FBb0MsOEJBQThCLGlCQUFpQixpQkFBaUIsc0JBQXNCLHVCQUF1QixvQkFBb0Isb0JBQW9CLHNDQUFzQyxHQUFHLHlDQUF5Qyw4QkFBOEIsR0FBRyxvRkFBb0YseUdBQXlHLHlHQUF5RyxHQUFHLDhDQUE4QyxjQUFjLG9DQUFvQyxpQ0FBaUMsb0NBQW9DLFNBQVMsaUNBQWlDLDRCQUE0QixHQUFHLHNDQUFzQyxjQUFjLG9DQUFvQyxpQ0FBaUMsb0NBQW9DLFNBQVMsaUNBQWlDLDRCQUE0QixHQUFHLGlEQUFpRCxVQUFVLGlCQUFpQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssR0FBRyx5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R0FBRywyQkFBMkIsK0JBQStCLDREQUE0RCxpQ0FBaUMsZ0RBQWdELHNCQUFzQixrQkFBa0Isa0VBQWtFLEdBQUcscUNBQXFDLG9CQUFvQixrQ0FBa0MseURBQXlELHVCQUF1QixhQUFhLGdCQUFnQixnQ0FBZ0MsR0FBRywyREFBMkQsbUJBQW1CLG9CQUFvQixrQkFBa0Isa0ZBQWtGLEdBQUcsdUNBQXVDLGdCQUFnQiw0REFBNEQsR0FBRyw2Q0FBNkMsY0FBYyxpQkFBaUIsS0FBSyxTQUFTLG9CQUFvQixvREFBb0QsR0FBRyw0RUFBNEUsMkJBQTJCLHNDQUFzQyxxQkFBcUI7QUFDanNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvSXRlbS5tb2R1bGUuY3NzPzU4MWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRvZG9JdGVtLm1vZHVsZS5jc3MgKi9cXG4uVG9kb0l0ZW1fdG9kby1pdGVtX18zN1kzSyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uVG9kb0l0ZW1fY29tcGxldGVkX19wOGxCaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLlRvZG9JdGVtX3RvZG8tY2hlY2tfX0syX2hrIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLlRvZG9JdGVtX3RvZG8tdGV4dF9fdUljT2wge1xcbiAgZmxleDogMSAxO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuLlRvZG9JdGVtX3RvZG8tcHJpb3JpdHktY29udGFpbmVyX19QQURuYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLlRvZG9JdGVtX3RvZG8tcHJpb3JpdHktbWFya2VyX19jS3V4MiB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLlRvZG9JdGVtX3ByaW9yaXR5LWRyb3Bkb3duX19MNDhFVCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxcbn1cXG5cXG4uVG9kb0l0ZW1fcHJpb3JpdHktZHJvcGRvd25fX0w0OEVUOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZWQ2YTU7IC8qIENoYW5nZSB0byBhIGRpZmZlcmVudCBjb2xvciBvbiBob3ZlciAqL1xcbn1cXG5cXG4uVG9kb0l0ZW1fZGVsZXRlLWJ1dHRvbl9fMW9fdmMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzY3NTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG5cXG4uVG9kb0l0ZW1fZGVsZXRlLWJ1dHRvbl9fMW9fdmM6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YjZhO1xcbn1cXG5cXG4vKiBUb2RvSXRlbS5tb2R1bGUuY3NzICovXFxuLlRvZG9JdGVtX3RvZG8taXRlbV9fMzdZM0suVG9kb0l0ZW1fZmxhc2hpbmdfX1h1R01oIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBUb2RvSXRlbV9mbGFzaF9feGZHcEwgMC41cyBlYXNlLWluLW91dCwgVG9kb0l0ZW1fZmFkZS1vdXRfX0h2cXRJIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgIGFuaW1hdGlvbjogVG9kb0l0ZW1fZmxhc2hfX3hmR3BMIDAuNXMgZWFzZS1pbi1vdXQsIFRvZG9JdGVtX2ZhZGUtb3V0X19IdnF0SSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgVG9kb0l0ZW1fZmxhc2hfX3hmR3BMIHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7IC8qIE9yaWdpbmFsIGJhY2tncm91bmQgY29sb3IgKi9cXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc2NzU7IC8qIEZsYXNoIGNvbG9yIChyZWQpICovXFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgVG9kb0l0ZW1fZmxhc2hfX3hmR3BMIHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7IC8qIE9yaWdpbmFsIGJhY2tncm91bmQgY29sb3IgKi9cXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc2NzU7IC8qIEZsYXNoIGNvbG9yIChyZWQpICovXFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBUb2RvSXRlbV9mYWRlLW91dF9fSHZxdEkge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgVG9kb0l0ZW1fZmFkZS1vdXRfX0h2cXRJIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5cXG4uVG9kb0l0ZW1fZGV0YWlscy1idXR0b25fX0pIaFBDIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDE2MmM7IC8qIERhcmsgYmx1ZSBjb2xvciAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLlRvZG9JdGVtX2RldGFpbHMtYnV0dG9uX19KSGhQQzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWEyNDJmOyAvKiBEYXJrZXIgYmx1ZSBjb2xvciBvbiBob3ZlciAqL1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogU2xpZ2h0IHNjYWxlLXVwIG9uIGhvdmVyICovXFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHRoZSBleWUgaWNvbnMgKi9cXG4uVG9kb0l0ZW1fZXllLWljb25fX01pU2plIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSBjb2xvciBmb3IgdGhlIGV5ZSBpY29uICovXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5Ub2RvSXRlbV9kZXRhaWxzLWJ1dHRvbl9fSkhoUEM6aG92ZXIgLlRvZG9JdGVtX2V5ZS1pY29uX19NaVNqZSB7XFxuICBjb2xvcjogI2VjZjBmMTsgLyogTGlnaHQgZ3JheSBjb2xvciBvbiBob3ZlciAqL1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgY3V0ZSBlbGVtZW50cyAqL1xcbi5Ub2RvSXRlbV9jdXRlLWVsZW1lbnRzX19kRnI4MiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgY3V0ZSBoZWFydCBlbGVtZW50ICovXFxuLlRvZG9JdGVtX2N1dGUtaGVhcnRfX3NGV3ZHIHtcXG4gIGNvbG9yOiAjZmY2YjZiO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgb3BhY2l0eTogMC44OyAvKiBTbGlnaHRseSByZWR1Y2VkIG9wYWNpdHkgZm9yIGRyZWFteSBlZmZlY3QgKi9cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbn1cXG5cXG4uVG9kb0l0ZW1fZGV0YWlscy1idXR0b25fX0pIaFBDOmhvdmVyIC5Ub2RvSXRlbV9jdXRlLWhlYXJ0X19zRld2RyB7XFxuICBvcGFjaXR5OiAxOyAvKiBGdWxsIG9wYWNpdHkgb24gaG92ZXIgKi9cXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBUb2RvSXRlbV9ibGlua19feTdKVFggMXMgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogVG9kb0l0ZW1fYmxpbmtfX3k3SlRYIDFzIGluZmluaXRlO1xcbn1cXG5cXG4vKiBCbGluayBhbmltYXRpb24gKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgVG9kb0l0ZW1fYmxpbmtfX3k3SlRYIHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuODsgLyogU2xpZ2h0bHkgcmVkdWNlZCBvcGFjaXR5IGR1cmluZyB0aGUgYmxpbmsgKi9cXG4gIH1cXG59XFxuQGtleWZyYW1lcyBUb2RvSXRlbV9ibGlua19feTdKVFgge1xcbiAgMCUsIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC44OyAvKiBTbGlnaHRseSByZWR1Y2VkIG9wYWNpdHkgZHVyaW5nIHRoZSBibGluayAqL1xcbiAgfVxcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciB0aGUgc2NhbGUgYW5pbWF0aW9uICovXFxuLlRvZG9JdGVtX2RldGFpbHMtYnV0dG9uX19KSGhQQzpob3ZlciAuVG9kb0l0ZW1fZXllLWljb25fX01pU2plIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogU2xpZ2h0bHkgbGFyZ2VyIHNpemUgb24gaG92ZXIgKi9cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvVG9kb0l0ZW0ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFPO0VBQ1AsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUseUNBQXlDO0FBQ3RFOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxvR0FBNEQ7VUFBNUQsNEZBQTREO0FBQzlEOztBQUVBO0VBQ0U7SUFDRSw2QkFBeUI7SUFBekIseUJBQXlCLEVBQUUsOEJBQThCO0VBQzNEO0VBQ0E7SUFDRSx5QkFBeUIsRUFBRSxzQkFBc0I7RUFDbkQ7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsNkJBQXlCO0lBQXpCLHlCQUF5QixFQUFFLDhCQUE4QjtFQUMzRDtFQUNBO0lBQ0UseUJBQXlCLEVBQUUsc0JBQXNCO0VBQ25EO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7OztBQUdBO0VBQ0UseUJBQXlCLEVBQUUsb0JBQW9CO0VBQy9DLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkRBQTJEO0VBQzNELGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLCtCQUErQjtFQUMxRCxzQkFBc0IsRUFBRSw2QkFBNkI7QUFDdkQ7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVksRUFBRSxpQ0FBaUM7RUFDL0MsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYyxFQUFFLDhCQUE4QjtBQUNoRDs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZLEVBQUUsK0NBQStDO0VBQzdELDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVUsRUFBRSwwQkFBMEI7RUFDdEMsb0RBQTRCO1VBQTVCLDRDQUE0QjtBQUM5Qjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWSxFQUFFLDhDQUE4QztFQUM5RDtBQUNGO0FBUEE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWSxFQUFFLDhDQUE4QztFQUM5RDtBQUNGOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLHFCQUFxQixFQUFFLGtDQUFrQztBQUMzRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUb2RvSXRlbS5tb2R1bGUuY3NzICovXFxuLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kby1jaGVjayB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50b2RvLXRleHQge1xcbiAgZmxleDogMTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi50b2RvLXByaW9yaXR5LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHktbWFya2VyIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktZHJvcGRvd24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG59XFxuXFxuLnByaW9yaXR5LWRyb3Bkb3duOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZWQ2YTU7IC8qIENoYW5nZSB0byBhIGRpZmZlcmVudCBjb2xvciBvbiBob3ZlciAqL1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3Njc1O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmI2YTtcXG59XFxuXFxuLyogVG9kb0l0ZW0ubW9kdWxlLmNzcyAqL1xcbi50b2RvLWl0ZW0uZmxhc2hpbmcge1xcbiAgYW5pbWF0aW9uOiBmbGFzaCAwLjVzIGVhc2UtaW4tb3V0LCBmYWRlLW91dCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsYXNoIHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDsgLyogT3JpZ2luYWwgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzY3NTsgLyogRmxhc2ggY29sb3IgKHJlZCkgKi9cXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLW91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuXFxuLmRldGFpbHMtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDE2MmM7IC8qIERhcmsgYmx1ZSBjb2xvciAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRldGFpbHMtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTI0MmY7IC8qIERhcmtlciBibHVlIGNvbG9yIG9uIGhvdmVyICovXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyAvKiBTbGlnaHQgc2NhbGUtdXAgb24gaG92ZXIgKi9cXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIGV5ZSBpY29ucyAqL1xcbi5leWUtaWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTsgLyogV2hpdGUgY29sb3IgZm9yIHRoZSBleWUgaWNvbiAqL1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4uZGV0YWlscy1idXR0b246aG92ZXIgLmV5ZS1pY29uIHtcXG4gIGNvbG9yOiAjZWNmMGYxOyAvKiBMaWdodCBncmF5IGNvbG9yIG9uIGhvdmVyICovXFxufVxcblxcbi8qIFN0eWxpbmcgZm9yIHRoZSBjdXRlIGVsZW1lbnRzICovXFxuLmN1dGUtZWxlbWVudHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIGN1dGUgaGVhcnQgZWxlbWVudCAqL1xcbi5jdXRlLWhlYXJ0IHtcXG4gIGNvbG9yOiAjZmY2YjZiO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgb3BhY2l0eTogMC44OyAvKiBTbGlnaHRseSByZWR1Y2VkIG9wYWNpdHkgZm9yIGRyZWFteSBlZmZlY3QgKi9cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbn1cXG5cXG4uZGV0YWlscy1idXR0b246aG92ZXIgLmN1dGUtaGVhcnQge1xcbiAgb3BhY2l0eTogMTsgLyogRnVsbCBvcGFjaXR5IG9uIGhvdmVyICovXFxuICBhbmltYXRpb246IGJsaW5rIDFzIGluZmluaXRlO1xcbn1cXG5cXG4vKiBCbGluayBhbmltYXRpb24gKi9cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuODsgLyogU2xpZ2h0bHkgcmVkdWNlZCBvcGFjaXR5IGR1cmluZyB0aGUgYmxpbmsgKi9cXG4gIH1cXG59XFxuXFxuLyogU3R5bGluZyBmb3IgdGhlIHNjYWxlIGFuaW1hdGlvbiAqL1xcbi5kZXRhaWxzLWJ1dHRvbjpob3ZlciAuZXllLWljb24ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBTbGlnaHRseSBsYXJnZXIgc2l6ZSBvbiBob3ZlciAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0b2RvLWl0ZW1cIjogXCJUb2RvSXRlbV90b2RvLWl0ZW1fXzM3WTNLXCIsXG5cdFwiY29tcGxldGVkXCI6IFwiVG9kb0l0ZW1fY29tcGxldGVkX19wOGxCaFwiLFxuXHRcInRvZG8tY2hlY2tcIjogXCJUb2RvSXRlbV90b2RvLWNoZWNrX19LMl9oa1wiLFxuXHRcInRvZG8tdGV4dFwiOiBcIlRvZG9JdGVtX3RvZG8tdGV4dF9fdUljT2xcIixcblx0XCJ0b2RvLXByaW9yaXR5LWNvbnRhaW5lclwiOiBcIlRvZG9JdGVtX3RvZG8tcHJpb3JpdHktY29udGFpbmVyX19QQURuYVwiLFxuXHRcInRvZG8tcHJpb3JpdHktbWFya2VyXCI6IFwiVG9kb0l0ZW1fdG9kby1wcmlvcml0eS1tYXJrZXJfX2NLdXgyXCIsXG5cdFwicHJpb3JpdHktZHJvcGRvd25cIjogXCJUb2RvSXRlbV9wcmlvcml0eS1kcm9wZG93bl9fTDQ4RVRcIixcblx0XCJkZWxldGUtYnV0dG9uXCI6IFwiVG9kb0l0ZW1fZGVsZXRlLWJ1dHRvbl9fMW9fdmNcIixcblx0XCJmbGFzaGluZ1wiOiBcIlRvZG9JdGVtX2ZsYXNoaW5nX19YdUdNaFwiLFxuXHRcImZsYXNoXCI6IFwiVG9kb0l0ZW1fZmxhc2hfX3hmR3BMXCIsXG5cdFwiZmFkZS1vdXRcIjogXCJUb2RvSXRlbV9mYWRlLW91dF9fSHZxdElcIixcblx0XCJkZXRhaWxzLWJ1dHRvblwiOiBcIlRvZG9JdGVtX2RldGFpbHMtYnV0dG9uX19KSGhQQ1wiLFxuXHRcImV5ZS1pY29uXCI6IFwiVG9kb0l0ZW1fZXllLWljb25fX01pU2plXCIsXG5cdFwiY3V0ZS1lbGVtZW50c1wiOiBcIlRvZG9JdGVtX2N1dGUtZWxlbWVudHNfX2RGcjgyXCIsXG5cdFwiY3V0ZS1oZWFydFwiOiBcIlRvZG9JdGVtX2N1dGUtaGVhcnRfX3NGV3ZHXCIsXG5cdFwiYmxpbmtcIjogXCJUb2RvSXRlbV9ibGlua19feTdKVFhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/TodoItem.module.css\n");

/***/ })

});