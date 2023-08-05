"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TodoDetailsCard.js":
/*!***************************************!*\
  !*** ./components/TodoDetailsCard.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TodoDetailsCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoDetailsCard.module.css */ \"./components/TodoDetailsCard.module.css\");\n/* harmony import */ var _TodoDetailsCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TodoDetailsCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n // Import your styles\nvar TodoDetailsCard = function(param) {\n    var todo = param.todo, onCancel = param.onCancel, onSave = param.onSave, onNotesChange = param.onNotesChange;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_TodoDetailsCard_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"details-card\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Edit Details \\uD83C\\uDF19\\u2728\\uD83D\\uDCAB\"\n            }, void 0, false, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoDetailsCard.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Created at:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoDetailsCard.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    todo.createdAt.toLocaleString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoDetailsCard.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Due date:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoDetailsCard.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    todo.dueDate ? todo.dueDate.toLocaleDateString() : \"Not set\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoDetailsCard.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TodoDetailsCard_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"edit-notes\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    className: (_TodoDetailsCard_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"notes-input\"]),\n                    value: todo.notes,\n                    placeholder: \"Add notes...\",\n                    maxLength: \"1000\",\n                    onChange: function(e) {\n                        return onNotesChange(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoDetailsCard.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoDetailsCard.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TodoDetailsCard_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"edit-actions\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_TodoDetailsCard_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"save-button\"]),\n                        onClick: onSave,\n                        children: \"Save\"\n                    }, void 0, false, {\n                        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoDetailsCard.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_TodoDetailsCard_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"cancel-button\"]),\n                        onClick: onCancel,\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoDetailsCard.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoDetailsCard.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoDetailsCard.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = TodoDetailsCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoDetailsCard);\nvar _c;\n$RefreshReg$(_c, \"TodoDetailsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9EZXRhaWxzQ2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTBCO0FBQ3dCLENBQUMscUJBQXFCO0FBRXhFLElBQU1FLGVBQWUsR0FBRyxnQkFBK0M7UUFBNUNDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLGFBQWEsU0FBYkEsYUFBYTtJQUM5RCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVQLG9GQUFzQjs7MEJBQ3BDLDhEQUFDUSxJQUFFOzBCQUFDLDZDQUFnQjs7Ozs7cUJBQUs7MEJBQ3pCLDhEQUFDQyxHQUFDOztrQ0FDQSw4REFBQ0MsUUFBTTtrQ0FBQyxhQUFXOzs7Ozs2QkFBUztvQkFBQSxHQUFDO29CQUFDUixJQUFJLENBQUNTLFNBQVMsQ0FBQ0MsY0FBYyxFQUFFOzs7Ozs7cUJBQzNEOzBCQUNKLDhEQUFDSCxHQUFDOztrQ0FDQSw4REFBQ0MsUUFBTTtrQ0FBQyxXQUFTOzs7Ozs2QkFBUztvQkFBQyxHQUFHO29CQUM3QlIsSUFBSSxDQUFDVyxPQUFPLEdBQUdYLElBQUksQ0FBQ1csT0FBTyxDQUFDQyxrQkFBa0IsRUFBRSxHQUFHLFNBQVM7Ozs7OztxQkFDM0Q7MEJBQ0osOERBQUNSLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVAsa0ZBQW9COzBCQUNsQyw0RUFBQ2UsVUFBUTtvQkFDUFIsU0FBUyxFQUFFUCxtRkFBcUI7b0JBQ2hDZ0IsS0FBSyxFQUFFZCxJQUFJLENBQUNlLEtBQUs7b0JBQ2pCQyxXQUFXLEVBQUMsY0FBYztvQkFDMUJDLFNBQVMsRUFBQyxNQUFNO29CQUNoQkMsUUFBUSxFQUFFLFNBQUNDLENBQUM7K0JBQUtoQixhQUFhLENBQUNnQixDQUFDLENBQUNDLE1BQU0sQ0FBQ04sS0FBSyxDQUFDO3FCQUFBOzs7Ozt5QkFDOUM7Ozs7O3FCQUNFOzBCQUNOLDhEQUFDVixLQUFHO2dCQUFDQyxTQUFTLEVBQUVQLG9GQUFzQjs7a0NBQ3BDLDhEQUFDdUIsUUFBTTt3QkFBQ2hCLFNBQVMsRUFBRVAsbUZBQXFCO3dCQUFFd0IsT0FBTyxFQUFFcEIsTUFBTTtrQ0FBRSxNQUUzRDs7Ozs7NkJBQVM7a0NBQ1QsOERBQUNtQixRQUFNO3dCQUFDaEIsU0FBUyxFQUFFUCxxRkFBdUI7d0JBQUV3QixPQUFPLEVBQUVyQixRQUFRO2tDQUFFLFFBRS9EOzs7Ozs2QkFBUzs7Ozs7O3FCQUNMOzs7Ozs7YUFDRixDQUNOO0NBQ0g7QUE5QktGLEtBQUFBLGVBQWU7QUFnQ3JCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvRGV0YWlsc0NhcmQuanM/YzU3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RvZG9EZXRhaWxzQ2FyZC5tb2R1bGUuY3NzJzsgLy8gSW1wb3J0IHlvdXIgc3R5bGVzXG5cbmNvbnN0IFRvZG9EZXRhaWxzQ2FyZCA9ICh7IHRvZG8sIG9uQ2FuY2VsLCBvblNhdmUsIG9uTm90ZXNDaGFuZ2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2RldGFpbHMtY2FyZCddfT5cbiAgICAgIDxoMz5FZGl0IERldGFpbHMg8J+MmeKcqPCfkqs8L2gzPlxuICAgICAgPHA+XG4gICAgICAgIDxzdHJvbmc+Q3JlYXRlZCBhdDo8L3N0cm9uZz4ge3RvZG8uY3JlYXRlZEF0LnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPHN0cm9uZz5EdWUgZGF0ZTo8L3N0cm9uZz57JyAnfVxuICAgICAgICB7dG9kby5kdWVEYXRlID8gdG9kby5kdWVEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpIDogJ05vdCBzZXQnfVxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZWRpdC1ub3RlcyddfT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ25vdGVzLWlucHV0J119XG4gICAgICAgICAgdmFsdWU9e3RvZG8ubm90ZXN9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgbm90ZXMuLi5cIlxuICAgICAgICAgIG1heExlbmd0aD1cIjEwMDBcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25Ob3Rlc0NoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2VkaXQtYWN0aW9ucyddfT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1snc2F2ZS1idXR0b24nXX0gb25DbGljaz17b25TYXZlfT5cbiAgICAgICAgICBTYXZlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzWydjYW5jZWwtYnV0dG9uJ119IG9uQ2xpY2s9e29uQ2FuY2VsfT5cbiAgICAgICAgICBDYW5jZWxcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9EZXRhaWxzQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIlRvZG9EZXRhaWxzQ2FyZCIsInRvZG8iLCJvbkNhbmNlbCIsIm9uU2F2ZSIsIm9uTm90ZXNDaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJzdHJvbmciLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZVN0cmluZyIsImR1ZURhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0ZXh0YXJlYSIsInZhbHVlIiwibm90ZXMiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TodoDetailsCard.js\n");

/***/ })

});