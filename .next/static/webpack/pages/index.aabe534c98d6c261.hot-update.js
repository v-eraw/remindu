/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/TodoDetailsCard.module.css":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/TodoDetailsCard.module.css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* TodoDetailsCard.module.css */\\n.TodoDetailsCard_details-card__HC9km {\\n  width: 100%;\\n  background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent background */\\n  padding: 10px;\\n  transition: max-height 0.3s ease-in-out;\\n  flex-direction: column;\\n  color: white;\\n  border-radius: 5px;\\n}\\n  \\n  @-webkit-keyframes TodoDetailsCard_slide-in__Olc_t {\\n    from {\\n      left: 100%; /* Start from the bottom */\\n    }\\n    to {\\n      bottom: 50%; /* Centered on the screen vertically */\\n    }\\n  }\\n  \\n  @keyframes TodoDetailsCard_slide-in__Olc_t {\\n    from {\\n      left: 100%; /* Start from the bottom */\\n    }\\n    to {\\n      bottom: 50%; /* Centered on the screen vertically */\\n    }\\n  }\\n\\n  \\n  @-webkit-keyframes TodoDetailsCard_fade-in__BkQFB {\\n    from {\\n      opacity: 0;\\n    }\\n    to {\\n      opacity: 1;\\n    }\\n  }\\n\\n  \\n  @keyframes TodoDetailsCard_fade-in__BkQFB {\\n    from {\\n      opacity: 0;\\n    }\\n    to {\\n      opacity: 1;\\n    }\\n  }\\n\\n  /* TodoItem.module.css */\\n.TodoDetailsCard_todo-item__T8E0a {\\n    /* ... */\\n    position: relative;\\n  }\\n\\n  .TodoDetailsCard_button-container__490ZS {\\n    display: flex;\\n    justify-content: space-between;\\n    margin-top: 10px;\\n  }\\n\\n  .TodoDetailsCard_edit-button___4J_W,\\n  .TodoDetailsCard_save-button__V_6ET,\\n  .TodoDetailsCard_cancel-button__e5Km3 {\\n    padding: 6px 12px;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n    font-weight: bold;\\n  }\\n\\n  .TodoDetailsCard_edit-button___4J_W {\\n    background-color: #3498db;\\n    color: white;\\n  }\\n\\n  .TodoDetailsCard_save-button__V_6ET {\\n    background-color: #27ae60;\\n    color: white;\\n    margin-right: 10px;\\n  }\\n\\n  .TodoDetailsCard_cancel-button__e5Km3 {\\n    background-color: #e74c3c;\\n    color: white;\\n  }\\n\\n  .TodoDetailsCard_notes-input__1eESJ {\\n    width: 100%; /* Stretch to fill the width */\\n    padding: 10px;\\n    font-size: 16px;\\n    border: 2px solid #3498db; /* Border color */\\n    border-radius: 5px;\\n    resize: vertical; /* Allow vertical resizing */\\n    background-color: #FFFF99; /* Light background color */\\n    transition: border-color 0.3s ease-in-out; /* Add transition for border color */\\n    overflow: hidden; /* Hide overflowing text */\\n    white-space: nowrap; /* Prevent text from wrapping */\\n    border-right: 2px solid black; /* Create a cursor effect */\\n    font-family: monospace; /* Use a monospace font for a typewriter look */\\n    font-size: 18px; /* Set font size */\\n    -webkit-animation: TodoDetailsCard_typing__DTB8_ 3s steps(40) infinite;\\n            animation: TodoDetailsCard_typing__DTB8_ 3s steps(40) infinite;\\n  }\\n  \\n  .TodoDetailsCard_notes-input__1eESJ:focus {\\n    outline: none;\\n    border-color: #27ae60; /* Change border color on focus */\\n  }\\n\\n  .TodoDetailsCard_typewriter__p8vRo {\\n    overflow: hidden; /* Hide overflowing text */\\n    white-space: nowrap; /* Prevent text from wrapping */\\n    border-right: 2px solid black; /* Create a cursor effect */\\n    font-family: monospace; /* Use a monospace font for a typewriter look */\\n    font-size: 18px; /* Set font size */\\n    -webkit-animation: TodoDetailsCard_typing__DTB8_ 3s steps(40) infinite;\\n            animation: TodoDetailsCard_typing__DTB8_ 3s steps(40) infinite;\\n  }\\n  \\n  @-webkit-keyframes TodoDetailsCard_typing__DTB8_ {\\n    from {\\n      width: 0; /* Start with no width (hidden) */\\n    }\\n    to {\\n      width: 100%; /* Complete width (fully visible) */\\n    }\\n  }\\n  \\n  @keyframes TodoDetailsCard_typing__DTB8_ {\\n    from {\\n      width: 0; /* Start with no width (hidden) */\\n    }\\n    to {\\n      width: 100%; /* Complete width (fully visible) */\\n    }\\n  }\\n  \\n  .TodoDetailsCard_cursor__xDv6J {\\n    display: inline-block;\\n    vertical-align: middle;\\n    -webkit-animation: TodoDetailsCard_blink__Nun6n 0.7s infinite;\\n            animation: TodoDetailsCard_blink__Nun6n 0.7s infinite;\\n  }\\n  \\n  @-webkit-keyframes TodoDetailsCard_blink__Nun6n {\\n    0%, 100% {\\n      opacity: 1; /* Visible */\\n    }\\n    50% {\\n      opacity: 0; /* Invisible */\\n    }\\n  }\\n  \\n  @keyframes TodoDetailsCard_blink__Nun6n {\\n    0%, 100% {\\n      opacity: 1; /* Visible */\\n    }\\n    50% {\\n      opacity: 0; /* Invisible */\\n    }\\n  }\\n  \\n  \", \"\",{\"version\":3,\"sources\":[\"webpack://components/TodoDetailsCard.module.css\"],\"names\":[],\"mappings\":\"AAAA,+BAA+B;AAC/B;EACE,WAAW;EACX,oCAAoC,EAAE,gCAAgC;EACtE,aAAa;EACb,uCAAuC;EACvC,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;AACpB;;EAEE;IACE;MACE,UAAU,EAAE,0BAA0B;IACxC;IACA;MACE,WAAW,EAAE,sCAAsC;IACrD;EACF;;EAPA;IACE;MACE,UAAU,EAAE,0BAA0B;IACxC;IACA;MACE,WAAW,EAAE,sCAAsC;IACrD;EACF;;;EAGA;IACE;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;EACF;;;EAPA;IACE;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;EACF;;EAEA,wBAAwB;AAC1B;IACI,QAAQ;IACR,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;EAClB;;EAEA;;;IAGE,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,yBAAyB;IACzB,YAAY;EACd;;EAEA;IACE,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,yBAAyB;IACzB,YAAY;EACd;;EAEA;IACE,WAAW,EAAE,8BAA8B;IAC3C,aAAa;IACb,eAAe;IACf,yBAAyB,EAAE,iBAAiB;IAC5C,kBAAkB;IAClB,gBAAgB,EAAE,4BAA4B;IAC9C,yBAAyB,EAAE,2BAA2B;IACtD,yCAAyC,EAAE,oCAAoC;IAC/E,gBAAgB,EAAE,0BAA0B;IAC5C,mBAAmB,EAAE,+BAA+B;IACpD,6BAA6B,EAAE,2BAA2B;IAC1D,sBAAsB,EAAE,+CAA+C;IACvE,eAAe,EAAE,kBAAkB;IACnC,sEAAuC;YAAvC,8DAAuC;EACzC;;EAEA;IACE,aAAa;IACb,qBAAqB,EAAE,iCAAiC;EAC1D;;EAEA;IACE,gBAAgB,EAAE,0BAA0B;IAC5C,mBAAmB,EAAE,+BAA+B;IACpD,6BAA6B,EAAE,2BAA2B;IAC1D,sBAAsB,EAAE,+CAA+C;IACvE,eAAe,EAAE,kBAAkB;IACnC,sEAAuC;YAAvC,8DAAuC;EACzC;;EAEA;IACE;MACE,QAAQ,EAAE,iCAAiC;IAC7C;IACA;MACE,WAAW,EAAE,mCAAmC;IAClD;EACF;;EAPA;IACE;MACE,QAAQ,EAAE,iCAAiC;IAC7C;IACA;MACE,WAAW,EAAE,mCAAmC;IAClD;EACF;;EAEA;IACE,qBAAqB;IACrB,sBAAsB;IACtB,6DAA8B;YAA9B,qDAA8B;EAChC;;EAEA;IACE;MACE,UAAU,EAAE,YAAY;IAC1B;IACA;MACE,UAAU,EAAE,cAAc;IAC5B;EACF;;EAPA;IACE;MACE,UAAU,EAAE,YAAY;IAC1B;IACA;MACE,UAAU,EAAE,cAAc;IAC5B;EACF\",\"sourcesContent\":[\"/* TodoDetailsCard.module.css */\\n.details-card {\\n  width: 100%;\\n  background-color: rgba(0, 0, 0, 0.9); /* Semi-transparent background */\\n  padding: 10px;\\n  transition: max-height 0.3s ease-in-out;\\n  flex-direction: column;\\n  color: white;\\n  border-radius: 5px;\\n}\\n  \\n  @keyframes slide-in {\\n    from {\\n      left: 100%; /* Start from the bottom */\\n    }\\n    to {\\n      bottom: 50%; /* Centered on the screen vertically */\\n    }\\n  }\\n\\n  \\n  @keyframes fade-in {\\n    from {\\n      opacity: 0;\\n    }\\n    to {\\n      opacity: 1;\\n    }\\n  }\\n\\n  /* TodoItem.module.css */\\n.todo-item {\\n    /* ... */\\n    position: relative;\\n  }\\n\\n  .button-container {\\n    display: flex;\\n    justify-content: space-between;\\n    margin-top: 10px;\\n  }\\n\\n  .edit-button,\\n  .save-button,\\n  .cancel-button {\\n    padding: 6px 12px;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n    font-weight: bold;\\n  }\\n\\n  .edit-button {\\n    background-color: #3498db;\\n    color: white;\\n  }\\n\\n  .save-button {\\n    background-color: #27ae60;\\n    color: white;\\n    margin-right: 10px;\\n  }\\n\\n  .cancel-button {\\n    background-color: #e74c3c;\\n    color: white;\\n  }\\n\\n  .notes-input {\\n    width: 100%; /* Stretch to fill the width */\\n    padding: 10px;\\n    font-size: 16px;\\n    border: 2px solid #3498db; /* Border color */\\n    border-radius: 5px;\\n    resize: vertical; /* Allow vertical resizing */\\n    background-color: #FFFF99; /* Light background color */\\n    transition: border-color 0.3s ease-in-out; /* Add transition for border color */\\n    overflow: hidden; /* Hide overflowing text */\\n    white-space: nowrap; /* Prevent text from wrapping */\\n    border-right: 2px solid black; /* Create a cursor effect */\\n    font-family: monospace; /* Use a monospace font for a typewriter look */\\n    font-size: 18px; /* Set font size */\\n    animation: typing 3s steps(40) infinite;\\n  }\\n  \\n  .notes-input:focus {\\n    outline: none;\\n    border-color: #27ae60; /* Change border color on focus */\\n  }\\n\\n  .typewriter {\\n    overflow: hidden; /* Hide overflowing text */\\n    white-space: nowrap; /* Prevent text from wrapping */\\n    border-right: 2px solid black; /* Create a cursor effect */\\n    font-family: monospace; /* Use a monospace font for a typewriter look */\\n    font-size: 18px; /* Set font size */\\n    animation: typing 3s steps(40) infinite;\\n  }\\n  \\n  @keyframes typing {\\n    from {\\n      width: 0; /* Start with no width (hidden) */\\n    }\\n    to {\\n      width: 100%; /* Complete width (fully visible) */\\n    }\\n  }\\n  \\n  .cursor {\\n    display: inline-block;\\n    vertical-align: middle;\\n    animation: blink 0.7s infinite;\\n  }\\n  \\n  @keyframes blink {\\n    0%, 100% {\\n      opacity: 1; /* Visible */\\n    }\\n    50% {\\n      opacity: 0; /* Invisible */\\n    }\\n  }\\n  \\n  \"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"details-card\": \"TodoDetailsCard_details-card__HC9km\",\n\t\"todo-item\": \"TodoDetailsCard_todo-item__T8E0a\",\n\t\"button-container\": \"TodoDetailsCard_button-container__490ZS\",\n\t\"edit-button\": \"TodoDetailsCard_edit-button___4J_W\",\n\t\"save-button\": \"TodoDetailsCard_save-button__V_6ET\",\n\t\"cancel-button\": \"TodoDetailsCard_cancel-button__e5Km3\",\n\t\"notes-input\": \"TodoDetailsCard_notes-input__1eESJ\",\n\t\"typing\": \"TodoDetailsCard_typing__DTB8_\",\n\t\"typewriter\": \"TodoDetailsCard_typewriter__p8vRo\",\n\t\"cursor\": \"TodoDetailsCard_cursor__xDv6J\",\n\t\"blink\": \"TodoDetailsCard_blink__Nun6n\",\n\t\"slide-in\": \"TodoDetailsCard_slide-in__Olc_t\",\n\t\"fade-in\": \"TodoDetailsCard_fade-in__BkQFB\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vY29tcG9uZW50cy9Ub2RvRGV0YWlsc0NhcmQubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0Esa0hBQWtILGdCQUFnQiwwQ0FBMEMsbURBQW1ELDRDQUE0QywyQkFBMkIsaUJBQWlCLHVCQUF1QixHQUFHLDREQUE0RCxZQUFZLG9CQUFvQixrQ0FBa0MsVUFBVSxxQkFBcUIsOENBQThDLEtBQUssb0RBQW9ELFlBQVksb0JBQW9CLGtDQUFrQyxVQUFVLHFCQUFxQiw4Q0FBOEMsS0FBSyw2REFBNkQsWUFBWSxtQkFBbUIsT0FBTyxVQUFVLG1CQUFtQixPQUFPLEtBQUsscURBQXFELFlBQVksbUJBQW1CLE9BQU8sVUFBVSxtQkFBbUIsT0FBTyxLQUFLLG9FQUFvRSx3Q0FBd0MsS0FBSyxnREFBZ0Qsb0JBQW9CLHFDQUFxQyx1QkFBdUIsS0FBSyw2SEFBNkgsd0JBQXdCLG1CQUFtQix5QkFBeUIsc0JBQXNCLHdCQUF3QixLQUFLLDJDQUEyQyxnQ0FBZ0MsbUJBQW1CLEtBQUssMkNBQTJDLGdDQUFnQyxtQkFBbUIseUJBQXlCLEtBQUssNkNBQTZDLGdDQUFnQyxtQkFBbUIsS0FBSywyQ0FBMkMsbUJBQW1CLG1EQUFtRCxzQkFBc0IsaUNBQWlDLDJDQUEyQyx3QkFBd0IsOERBQThELDZFQUE2RSw2REFBNkQsc0RBQXNELHFFQUFxRSwwREFBMEQsdUVBQXVFLGdHQUFnRyw2RUFBNkUsS0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvRGV0YWlsc0NhcmQubW9kdWxlLmNzcz82MDljIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUb2RvRGV0YWlsc0NhcmQubW9kdWxlLmNzcyAqL1xcbi5Ub2RvRGV0YWlsc0NhcmRfZGV0YWlscy1jYXJkX19IQzlrbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTsgLyogU2VtaS10cmFuc3BhcmVudCBiYWNrZ3JvdW5kICovXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBUb2RvRGV0YWlsc0NhcmRfc2xpZGUtaW5fX09sY190IHtcXG4gICAgZnJvbSB7XFxuICAgICAgbGVmdDogMTAwJTsgLyogU3RhcnQgZnJvbSB0aGUgYm90dG9tICovXFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIGJvdHRvbTogNTAlOyAvKiBDZW50ZXJlZCBvbiB0aGUgc2NyZWVuIHZlcnRpY2FsbHkgKi9cXG4gICAgfVxcbiAgfVxcbiAgXFxuICBAa2V5ZnJhbWVzIFRvZG9EZXRhaWxzQ2FyZF9zbGlkZS1pbl9fT2xjX3Qge1xcbiAgICBmcm9tIHtcXG4gICAgICBsZWZ0OiAxMDAlOyAvKiBTdGFydCBmcm9tIHRoZSBib3R0b20gKi9cXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgYm90dG9tOiA1MCU7IC8qIENlbnRlcmVkIG9uIHRoZSBzY3JlZW4gdmVydGljYWxseSAqL1xcbiAgICB9XFxuICB9XFxuXFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBUb2RvRGV0YWlsc0NhcmRfZmFkZS1pbl9fQmtRRkIge1xcbiAgICBmcm9tIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICBcXG4gIEBrZXlmcmFtZXMgVG9kb0RldGFpbHNDYXJkX2ZhZGUtaW5fX0JrUUZCIHtcXG4gICAgZnJvbSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLyogVG9kb0l0ZW0ubW9kdWxlLmNzcyAqL1xcbi5Ub2RvRGV0YWlsc0NhcmRfdG9kby1pdGVtX19UOEUwYSB7XFxuICAgIC8qIC4uLiAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICAuVG9kb0RldGFpbHNDYXJkX2J1dHRvbi1jb250YWluZXJfXzQ5MFpTIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgfVxcblxcbiAgLlRvZG9EZXRhaWxzQ2FyZF9lZGl0LWJ1dHRvbl9fXzRKX1csXFxuICAuVG9kb0RldGFpbHNDYXJkX3NhdmUtYnV0dG9uX19WXzZFVCxcXG4gIC5Ub2RvRGV0YWlsc0NhcmRfY2FuY2VsLWJ1dHRvbl9fZTVLbTMge1xcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAuVG9kb0RldGFpbHNDYXJkX2VkaXQtYnV0dG9uX19fNEpfVyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5Ub2RvRGV0YWlsc0NhcmRfc2F2ZS1idXR0b25fX1ZfNkVUIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3YWU2MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuXFxuICAuVG9kb0RldGFpbHNDYXJkX2NhbmNlbC1idXR0b25fX2U1S20zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLlRvZG9EZXRhaWxzQ2FyZF9ub3Rlcy1pbnB1dF9fMWVFU0oge1xcbiAgICB3aWR0aDogMTAwJTsgLyogU3RyZXRjaCB0byBmaWxsIHRoZSB3aWR0aCAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNDk4ZGI7IC8qIEJvcmRlciBjb2xvciAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHJlc2l6ZTogdmVydGljYWw7IC8qIEFsbG93IHZlcnRpY2FsIHJlc2l6aW5nICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGOTk7IC8qIExpZ2h0IGJhY2tncm91bmQgY29sb3IgKi9cXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7IC8qIEFkZCB0cmFuc2l0aW9uIGZvciBib3JkZXIgY29sb3IgKi9cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogSGlkZSBvdmVyZmxvd2luZyB0ZXh0ICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIFByZXZlbnQgdGV4dCBmcm9tIHdyYXBwaW5nICovXFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrOyAvKiBDcmVhdGUgYSBjdXJzb3IgZWZmZWN0ICovXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IC8qIFVzZSBhIG1vbm9zcGFjZSBmb250IGZvciBhIHR5cGV3cml0ZXIgbG9vayAqL1xcbiAgICBmb250LXNpemU6IDE4cHg7IC8qIFNldCBmb250IHNpemUgKi9cXG4gICAgLXdlYmtpdC1hbmltYXRpb246IFRvZG9EZXRhaWxzQ2FyZF90eXBpbmdfX0RUQjhfIDNzIHN0ZXBzKDQwKSBpbmZpbml0ZTtcXG4gICAgICAgICAgICBhbmltYXRpb246IFRvZG9EZXRhaWxzQ2FyZF90eXBpbmdfX0RUQjhfIDNzIHN0ZXBzKDQwKSBpbmZpbml0ZTtcXG4gIH1cXG4gIFxcbiAgLlRvZG9EZXRhaWxzQ2FyZF9ub3Rlcy1pbnB1dF9fMWVFU0o6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6ICMyN2FlNjA7IC8qIENoYW5nZSBib3JkZXIgY29sb3Igb24gZm9jdXMgKi9cXG4gIH1cXG5cXG4gIC5Ub2RvRGV0YWlsc0NhcmRfdHlwZXdyaXRlcl9fcDh2Um8ge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBIaWRlIG92ZXJmbG93aW5nIHRleHQgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogUHJldmVudCB0ZXh0IGZyb20gd3JhcHBpbmcgKi9cXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7IC8qIENyZWF0ZSBhIGN1cnNvciBlZmZlY3QgKi9cXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgLyogVXNlIGEgbW9ub3NwYWNlIGZvbnQgZm9yIGEgdHlwZXdyaXRlciBsb29rICovXFxuICAgIGZvbnQtc2l6ZTogMThweDsgLyogU2V0IGZvbnQgc2l6ZSAqL1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogVG9kb0RldGFpbHNDYXJkX3R5cGluZ19fRFRCOF8gM3Mgc3RlcHMoNDApIGluZmluaXRlO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogVG9kb0RldGFpbHNDYXJkX3R5cGluZ19fRFRCOF8gM3Mgc3RlcHMoNDApIGluZmluaXRlO1xcbiAgfVxcbiAgXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgVG9kb0RldGFpbHNDYXJkX3R5cGluZ19fRFRCOF8ge1xcbiAgICBmcm9tIHtcXG4gICAgICB3aWR0aDogMDsgLyogU3RhcnQgd2l0aCBubyB3aWR0aCAoaGlkZGVuKSAqL1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICB3aWR0aDogMTAwJTsgLyogQ29tcGxldGUgd2lkdGggKGZ1bGx5IHZpc2libGUpICovXFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBUb2RvRGV0YWlsc0NhcmRfdHlwaW5nX19EVEI4XyB7XFxuICAgIGZyb20ge1xcbiAgICAgIHdpZHRoOiAwOyAvKiBTdGFydCB3aXRoIG5vIHdpZHRoIChoaWRkZW4pICovXFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIHdpZHRoOiAxMDAlOyAvKiBDb21wbGV0ZSB3aWR0aCAoZnVsbHkgdmlzaWJsZSkgKi9cXG4gICAgfVxcbiAgfVxcbiAgXFxuICAuVG9kb0RldGFpbHNDYXJkX2N1cnNvcl9feER2Nkoge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBUb2RvRGV0YWlsc0NhcmRfYmxpbmtfX051bjZuIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBUb2RvRGV0YWlsc0NhcmRfYmxpbmtfX051bjZuIDAuN3MgaW5maW5pdGU7XFxuICB9XFxuICBcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBUb2RvRGV0YWlsc0NhcmRfYmxpbmtfX051bjZuIHtcXG4gICAgMCUsIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7IC8qIFZpc2libGUgKi9cXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgIG9wYWNpdHk6IDA7IC8qIEludmlzaWJsZSAqL1xcbiAgICB9XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgVG9kb0RldGFpbHNDYXJkX2JsaW5rX19OdW42biB7XFxuICAgIDAlLCAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxOyAvKiBWaXNpYmxlICovXFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICBvcGFjaXR5OiAwOyAvKiBJbnZpc2libGUgKi9cXG4gICAgfVxcbiAgfVxcbiAgXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9Ub2RvRGV0YWlsc0NhcmQubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwrQkFBK0I7QUFDL0I7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DLEVBQUUsZ0NBQWdDO0VBQ3RFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0VBRUU7SUFDRTtNQUNFLFVBQVUsRUFBRSwwQkFBMEI7SUFDeEM7SUFDQTtNQUNFLFdBQVcsRUFBRSxzQ0FBc0M7SUFDckQ7RUFDRjs7RUFQQTtJQUNFO01BQ0UsVUFBVSxFQUFFLDBCQUEwQjtJQUN4QztJQUNBO01BQ0UsV0FBVyxFQUFFLHNDQUFzQztJQUNyRDtFQUNGOzs7RUFHQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7O0VBUEE7SUFDRTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtJQUNaO0VBQ0Y7O0VBRUEsd0JBQXdCO0FBQzFCO0lBQ0ksUUFBUTtJQUNSLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0VBQ2xCOztFQUVBOzs7SUFHRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVcsRUFBRSw4QkFBOEI7SUFDM0MsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUIsRUFBRSxpQkFBaUI7SUFDNUMsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFLDRCQUE0QjtJQUM5Qyx5QkFBeUIsRUFBRSwyQkFBMkI7SUFDdEQseUNBQXlDLEVBQUUsb0NBQW9DO0lBQy9FLGdCQUFnQixFQUFFLDBCQUEwQjtJQUM1QyxtQkFBbUIsRUFBRSwrQkFBK0I7SUFDcEQsNkJBQTZCLEVBQUUsMkJBQTJCO0lBQzFELHNCQUFzQixFQUFFLCtDQUErQztJQUN2RSxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLHNFQUF1QztZQUF2Qyw4REFBdUM7RUFDekM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IscUJBQXFCLEVBQUUsaUNBQWlDO0VBQzFEOztFQUVBO0lBQ0UsZ0JBQWdCLEVBQUUsMEJBQTBCO0lBQzVDLG1CQUFtQixFQUFFLCtCQUErQjtJQUNwRCw2QkFBNkIsRUFBRSwyQkFBMkI7SUFDMUQsc0JBQXNCLEVBQUUsK0NBQStDO0lBQ3ZFLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsc0VBQXVDO1lBQXZDLDhEQUF1QztFQUN6Qzs7RUFFQTtJQUNFO01BQ0UsUUFBUSxFQUFFLGlDQUFpQztJQUM3QztJQUNBO01BQ0UsV0FBVyxFQUFFLG1DQUFtQztJQUNsRDtFQUNGOztFQVBBO0lBQ0U7TUFDRSxRQUFRLEVBQUUsaUNBQWlDO0lBQzdDO0lBQ0E7TUFDRSxXQUFXLEVBQUUsbUNBQW1DO0lBQ2xEO0VBQ0Y7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDZEQUE4QjtZQUE5QixxREFBOEI7RUFDaEM7O0VBRUE7SUFDRTtNQUNFLFVBQVUsRUFBRSxZQUFZO0lBQzFCO0lBQ0E7TUFDRSxVQUFVLEVBQUUsY0FBYztJQUM1QjtFQUNGOztFQVBBO0lBQ0U7TUFDRSxVQUFVLEVBQUUsWUFBWTtJQUMxQjtJQUNBO01BQ0UsVUFBVSxFQUFFLGNBQWM7SUFDNUI7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUb2RvRGV0YWlsc0NhcmQubW9kdWxlLmNzcyAqL1xcbi5kZXRhaWxzLWNhcmQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7IC8qIFNlbWktdHJhbnNwYXJlbnQgYmFja2dyb3VuZCAqL1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLWluLW91dDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbiAgXFxuICBAa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgbGVmdDogMTAwJTsgLyogU3RhcnQgZnJvbSB0aGUgYm90dG9tICovXFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgIGJvdHRvbTogNTAlOyAvKiBDZW50ZXJlZCBvbiB0aGUgc2NyZWVuIHZlcnRpY2FsbHkgKi9cXG4gICAgfVxcbiAgfVxcblxcbiAgXFxuICBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxuXFxuICAvKiBUb2RvSXRlbS5tb2R1bGUuY3NzICovXFxuLnRvZG8taXRlbSB7XFxuICAgIC8qIC4uLiAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICAuYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gIH1cXG5cXG4gIC5lZGl0LWJ1dHRvbixcXG4gIC5zYXZlLWJ1dHRvbixcXG4gIC5jYW5jZWwtYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNnB4IDEycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgLmVkaXQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLnNhdmUtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3YWU2MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuXFxuICAuY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5ub3Rlcy1pbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBTdHJldGNoIHRvIGZpbGwgdGhlIHdpZHRoICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM0OThkYjsgLyogQm9yZGVyIGNvbG9yICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDsgLyogQWxsb3cgdmVydGljYWwgcmVzaXppbmcgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkY5OTsgLyogTGlnaHQgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDsgLyogQWRkIHRyYW5zaXRpb24gZm9yIGJvcmRlciBjb2xvciAqL1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBIaWRlIG92ZXJmbG93aW5nIHRleHQgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogUHJldmVudCB0ZXh0IGZyb20gd3JhcHBpbmcgKi9cXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7IC8qIENyZWF0ZSBhIGN1cnNvciBlZmZlY3QgKi9cXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgLyogVXNlIGEgbW9ub3NwYWNlIGZvbnQgZm9yIGEgdHlwZXdyaXRlciBsb29rICovXFxuICAgIGZvbnQtc2l6ZTogMThweDsgLyogU2V0IGZvbnQgc2l6ZSAqL1xcbiAgICBhbmltYXRpb246IHR5cGluZyAzcyBzdGVwcyg0MCkgaW5maW5pdGU7XFxuICB9XFxuICBcXG4gIC5ub3Rlcy1pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1jb2xvcjogIzI3YWU2MDsgLyogQ2hhbmdlIGJvcmRlciBjb2xvciBvbiBmb2N1cyAqL1xcbiAgfVxcblxcbiAgLnR5cGV3cml0ZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBIaWRlIG92ZXJmbG93aW5nIHRleHQgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogUHJldmVudCB0ZXh0IGZyb20gd3JhcHBpbmcgKi9cXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7IC8qIENyZWF0ZSBhIGN1cnNvciBlZmZlY3QgKi9cXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgLyogVXNlIGEgbW9ub3NwYWNlIGZvbnQgZm9yIGEgdHlwZXdyaXRlciBsb29rICovXFxuICAgIGZvbnQtc2l6ZTogMThweDsgLyogU2V0IGZvbnQgc2l6ZSAqL1xcbiAgICBhbmltYXRpb246IHR5cGluZyAzcyBzdGVwcyg0MCkgaW5maW5pdGU7XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgdHlwaW5nIHtcXG4gICAgZnJvbSB7XFxuICAgICAgd2lkdGg6IDA7IC8qIFN0YXJ0IHdpdGggbm8gd2lkdGggKGhpZGRlbikgKi9cXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgd2lkdGg6IDEwMCU7IC8qIENvbXBsZXRlIHdpZHRoIChmdWxseSB2aXNpYmxlKSAqL1xcbiAgICB9XFxuICB9XFxuICBcXG4gIC5jdXJzb3Ige1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyBibGluayB7XFxuICAgIDAlLCAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxOyAvKiBWaXNpYmxlICovXFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICBvcGFjaXR5OiAwOyAvKiBJbnZpc2libGUgKi9cXG4gICAgfVxcbiAgfVxcbiAgXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJkZXRhaWxzLWNhcmRcIjogXCJUb2RvRGV0YWlsc0NhcmRfZGV0YWlscy1jYXJkX19IQzlrbVwiLFxuXHRcInRvZG8taXRlbVwiOiBcIlRvZG9EZXRhaWxzQ2FyZF90b2RvLWl0ZW1fX1Q4RTBhXCIsXG5cdFwiYnV0dG9uLWNvbnRhaW5lclwiOiBcIlRvZG9EZXRhaWxzQ2FyZF9idXR0b24tY29udGFpbmVyX180OTBaU1wiLFxuXHRcImVkaXQtYnV0dG9uXCI6IFwiVG9kb0RldGFpbHNDYXJkX2VkaXQtYnV0dG9uX19fNEpfV1wiLFxuXHRcInNhdmUtYnV0dG9uXCI6IFwiVG9kb0RldGFpbHNDYXJkX3NhdmUtYnV0dG9uX19WXzZFVFwiLFxuXHRcImNhbmNlbC1idXR0b25cIjogXCJUb2RvRGV0YWlsc0NhcmRfY2FuY2VsLWJ1dHRvbl9fZTVLbTNcIixcblx0XCJub3Rlcy1pbnB1dFwiOiBcIlRvZG9EZXRhaWxzQ2FyZF9ub3Rlcy1pbnB1dF9fMWVFU0pcIixcblx0XCJ0eXBpbmdcIjogXCJUb2RvRGV0YWlsc0NhcmRfdHlwaW5nX19EVEI4X1wiLFxuXHRcInR5cGV3cml0ZXJcIjogXCJUb2RvRGV0YWlsc0NhcmRfdHlwZXdyaXRlcl9fcDh2Um9cIixcblx0XCJjdXJzb3JcIjogXCJUb2RvRGV0YWlsc0NhcmRfY3Vyc29yX194RHY2SlwiLFxuXHRcImJsaW5rXCI6IFwiVG9kb0RldGFpbHNDYXJkX2JsaW5rX19OdW42blwiLFxuXHRcInNsaWRlLWluXCI6IFwiVG9kb0RldGFpbHNDYXJkX3NsaWRlLWluX19PbGNfdFwiLFxuXHRcImZhZGUtaW5cIjogXCJUb2RvRGV0YWlsc0NhcmRfZmFkZS1pbl9fQmtRRkJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./components/TodoDetailsCard.module.css\n");

/***/ })

});