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

/***/ "./components/TodoItem.js":
/*!********************************!*\
  !*** ./components/TodoItem.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPriorityColor\": function() { return /* binding */ getPriorityColor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ \"./node_modules/react-confetti/dist/react-confetti.min.js\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _TodoDetailsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoDetailsCard */ \"./components/TodoDetailsCard.js\");\n/* harmony import */ var _TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoItem.module.css */ \"./components/TodoItem.module.css\");\n/* harmony import */ var _TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n // Import the new component\n\nvar _s = $RefreshSig$();\nvar TodoItem = function(param) {\n    var todo = param.todo, onDelete = param.onDelete;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todo.completed), isCompleted = ref[0], setIsCompleted = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), confetti = ref1[0], setConfetti = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showDetails = ref2[0], setShowDetails = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isDetailsOpen = ref3[0], setIsDetailsOpen = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_objectSpread({}, todo)), editedTodo = ref4[0], setEditedTodo = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isFlashing = ref5[0], setIsFlashing = ref5[1];\n    var handleToggle = function() {\n        setIsCompleted(!isCompleted);\n        setConfetti(true);\n        setTimeout(function() {\n            setConfetti(false);\n        }, 4000);\n    };\n    var handleDelete = function() {\n        setIsFlashing(true);\n        setTimeout(function() {\n            onDelete(todo.id);\n        }, 500);\n    };\n    var handleNotesChange = function(value) {\n        setEditedTodo(_objectSpread({}, editedTodo, {\n            notes: value\n        }));\n    };\n    var handleDueDateChange = function(value) {\n        setEditedTodo(_objectSpread({}, editedTodo, {\n            dueDate: value\n        }));\n    };\n    var handleSaveChanges = function() {\n        // Save editedTodo to state or make API call to save changes\n        // For now, we'll just update the todo state with editedTodo\n        setEditedTodo(_objectSpread({}, editedTodo, {\n            dueDate: new Date(editedTodo.dueDate)\n        })); // Convert dueDate to Date object\n        setShowDetails(false);\n    };\n    var handleCancelEdit = function() {\n        setEditedTodo(_objectSpread({}, todo));\n        setShowDetails(false);\n    };\n    var handleToggleDetails = function() {\n        setShowDetails(!isDetailsOpen);\n        setIsDetailsOpen(!isDetailsOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"todo-item\"]), \" \").concat(isCompleted ? (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().completed) : \"\", \" \").concat((_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"todo-item\"]), \" \").concat(isFlashing ? (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().flashing) : \"\"),\n        children: [\n            confetti && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                lineNumber: 61,\n                columnNumber: 20\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"todo-check\"]),\n                checked: isCompleted,\n                onChange: handleToggle\n            }, void 0, false, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"todo-text\"]),\n                children: editedTodo.text\n            }, void 0, false, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"todo-priority-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"todo-priority-marker\"]),\n                        style: {\n                            backgroundColor: getPriorityColor(editedTodo.priority)\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"priority-dropdown\"]),\n                        value: editedTodo.priority,\n                        onChange: function(e) {\n                            return setEditedTodo(_objectSpread({}, editedTodo, {\n                                priority: e.target.value\n                            }));\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"none\",\n                                children: \"None\"\n                            }, void 0, false, {\n                                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"low\",\n                                children: \"Low\"\n                            }, void 0, false, {\n                                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"medium\",\n                                children: \"Medium\"\n                            }, void 0, false, {\n                                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"high\",\n                                children: \"High\"\n                            }, void 0, false, {\n                                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"details-button\"]),\n                        onClick: handleToggleDetails,\n                        children: isDetailsOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaEyeSlash, {\n                                className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"eye-icon\"])\n                            }, void 0, false, {\n                                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaEye, {\n                                className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"eye-icon\"])\n                            }, void 0, false, {\n                                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                                lineNumber: 96,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_TodoItem_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"delete-button\"]),\n                        onClick: handleDelete,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTrash, {}, void 0, false, {\n                            fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this),\n            showDetails && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TodoDetailsCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                todo: editedTodo,\n                onCancel: handleCancelEdit,\n                onSave: handleSaveChanges,\n                onNotesChange: handleNotesChange,\n                onDueDateChange: handleDueDateChange\n            }, void 0, false, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoItem.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodoItem, \"gv3mqXPNEFCPezVU5yWorYo9peU=\");\n_c = TodoItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoItem);\n// priorityColors.js\nvar getPriorityColor = function(priority) {\n    switch(priority){\n        case \"none\":\n            return \"#ffffff\"; // White color for \"None\"\n        case \"low\":\n            return \"#2ecc71\"; // Green color for \"Low\"\n        case \"medium\":\n            return \"#f39c12\"; // Yellow color for \"Medium\"\n        case \"high\":\n            return \"#e74c3c\"; // Red color for \"High\"\n        default:\n            return \"#000000\"; // Default color (black) for unknown priorities\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlQSxRQUFRLEVBQUM7QUFFeEIsb0JBQW9CO0FBQ2IsSUFBTXdDLGdCQUFnQixHQUFHLFNBQUNDLFFBQVEsRUFBSztJQUM1QyxPQUFRQSxRQUFRO1FBQ2QsS0FBSyxNQUFNO1lBQ1QsT0FBTyxTQUFTLENBQUMsQ0FBQyx5QkFBeUI7UUFDN0MsS0FBSyxLQUFLO1lBQ1IsT0FBTyxTQUFTLENBQUMsQ0FBQyx3QkFBd0I7UUFDNUMsS0FBSyxRQUFRO1lBQ1gsT0FBTyxTQUFTLENBQUMsQ0FBQyw0QkFBNEI7UUFDaEQsS0FBSyxNQUFNO1lBQ1QsT0FBTyxTQUFTLENBQUMsQ0FBQyx1QkFBdUI7UUFDM0M7WUFDRSxPQUFPLFNBQVMsQ0FBQyxDQUFDLCtDQUErQztLQUNwRTtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvSXRlbS5qcz9iZGQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25mZXR0aSBmcm9tICdyZWFjdC1jb25mZXR0aSc7XG5pbXBvcnQgeyBGYUV5ZSwgRmFFeWVTbGFzaCwgRmFUcmFzaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCBUb2RvRGV0YWlsc0NhcmQgZnJvbSAnLi9Ub2RvRGV0YWlsc0NhcmQnOyAvLyBJbXBvcnQgdGhlIG5ldyBjb21wb25lbnRcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ub2RvSXRlbS5tb2R1bGUuY3NzJztcblxuY29uc3QgVG9kb0l0ZW0gPSAoeyB0b2RvLCBvbkRlbGV0ZSB9KSA9PiB7XG4gIGNvbnN0IFtpc0NvbXBsZXRlZCwgc2V0SXNDb21wbGV0ZWRdID0gdXNlU3RhdGUodG9kby5jb21wbGV0ZWQpO1xuICBjb25zdCBbY29uZmV0dGksIHNldENvbmZldHRpXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dEZXRhaWxzLCBzZXRTaG93RGV0YWlsc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0RldGFpbHNPcGVuLCBzZXRJc0RldGFpbHNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VkaXRlZFRvZG8sIHNldEVkaXRlZFRvZG9dID0gdXNlU3RhdGUoeyAuLi50b2RvIH0pO1xuICBjb25zdCBbaXNGbGFzaGluZywgc2V0SXNGbGFzaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldElzQ29tcGxldGVkKCFpc0NvbXBsZXRlZCk7XG4gICAgc2V0Q29uZmV0dGkodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRDb25mZXR0aShmYWxzZSk7XG4gICAgfSwgNDAwMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIHNldElzRmxhc2hpbmcodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBvbkRlbGV0ZSh0b2RvLmlkKTtcbiAgICB9LCA1MDApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5vdGVzQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0RWRpdGVkVG9kbyh7IC4uLmVkaXRlZFRvZG8sIG5vdGVzOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEdWVEYXRlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0RWRpdGVkVG9kbyh7IC4uLmVkaXRlZFRvZG8sIGR1ZURhdGU6IHZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmVDaGFuZ2VzID0gKCkgPT4ge1xuICAgIC8vIFNhdmUgZWRpdGVkVG9kbyB0byBzdGF0ZSBvciBtYWtlIEFQSSBjYWxsIHRvIHNhdmUgY2hhbmdlc1xuICAgIC8vIEZvciBub3csIHdlJ2xsIGp1c3QgdXBkYXRlIHRoZSB0b2RvIHN0YXRlIHdpdGggZWRpdGVkVG9kb1xuICAgIHNldEVkaXRlZFRvZG8oeyAuLi5lZGl0ZWRUb2RvLCBkdWVEYXRlOiBuZXcgRGF0ZShlZGl0ZWRUb2RvLmR1ZURhdGUpIH0pOyAvLyBDb252ZXJ0IGR1ZURhdGUgdG8gRGF0ZSBvYmplY3RcbiAgICBzZXRTaG93RGV0YWlscyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsRWRpdCA9ICgpID0+IHtcbiAgICBzZXRFZGl0ZWRUb2RvKHsgLi4udG9kbyB9KTtcbiAgICBzZXRTaG93RGV0YWlscyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlRGV0YWlscyA9ICgpID0+IHtcbiAgICBzZXRTaG93RGV0YWlscyghaXNEZXRhaWxzT3Blbik7XG4gICAgc2V0SXNEZXRhaWxzT3BlbighaXNEZXRhaWxzT3Blbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1sndG9kby1pdGVtJ119ICR7XG4gICAgICAgIGlzQ29tcGxldGVkID8gc3R5bGVzLmNvbXBsZXRlZCA6ICcnXG4gICAgICB9ICR7c3R5bGVzWyd0b2RvLWl0ZW0nXX0gJHtpc0ZsYXNoaW5nID8gc3R5bGVzLmZsYXNoaW5nIDogJyd9YH1cbiAgICA+XG4gICAgICB7Y29uZmV0dGkgJiYgPENvbmZldHRpIC8+fVxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWyd0b2RvLWNoZWNrJ119XG4gICAgICAgIGNoZWNrZWQ9e2lzQ29tcGxldGVkfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlVG9nZ2xlfVxuICAgICAgLz5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzWyd0b2RvLXRleHQnXX0+e2VkaXRlZFRvZG8udGV4dH08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0b2RvLXByaW9yaXR5LWNvbnRhaW5lciddfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWyd0b2RvLXByaW9yaXR5LW1hcmtlciddfVxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogZ2V0UHJpb3JpdHlDb2xvcihlZGl0ZWRUb2RvLnByaW9yaXR5KSB9fVxuICAgICAgICAvPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ3ByaW9yaXR5LWRyb3Bkb3duJ119XG4gICAgICAgICAgdmFsdWU9e2VkaXRlZFRvZG8ucHJpb3JpdHl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgc2V0RWRpdGVkVG9kbyh7IC4uLmVkaXRlZFRvZG8sIHByaW9yaXR5OiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub25lXCI+Tm9uZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2RldGFpbHMtYnV0dG9uJ119XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlRGV0YWlsc31cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0RldGFpbHNPcGVuID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEZhRXllU2xhc2ggY2xhc3NOYW1lPXtzdHlsZXNbJ2V5ZS1pY29uJ119IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEZhRXllIGNsYXNzTmFtZT17c3R5bGVzWydleWUtaWNvbiddfSAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbJ2RlbGV0ZS1idXR0b24nXX0gb25DbGljaz17aGFuZGxlRGVsZXRlfT5cbiAgICAgICAgICA8RmFUcmFzaCAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIERldGFpbHMgY2FyZCAqL31cbiAgICAgIHtzaG93RGV0YWlscyAmJiAoXG4gICAgICAgIDxUb2RvRGV0YWlsc0NhcmRcbiAgICAgICAgICB0b2RvPXtlZGl0ZWRUb2RvfVxuICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWxFZGl0fVxuICAgICAgICAgIG9uU2F2ZT17aGFuZGxlU2F2ZUNoYW5nZXN9XG4gICAgICAgICAgb25Ob3Rlc0NoYW5nZT17aGFuZGxlTm90ZXNDaGFuZ2V9XG4gICAgICAgICAgb25EdWVEYXRlQ2hhbmdlPXtoYW5kbGVEdWVEYXRlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9JdGVtO1xuXG4vLyBwcmlvcml0eUNvbG9ycy5qc1xuZXhwb3J0IGNvbnN0IGdldFByaW9yaXR5Q29sb3IgPSAocHJpb3JpdHkpID0+IHtcbiAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgIGNhc2UgJ25vbmUnOlxuICAgICAgcmV0dXJuICcjZmZmZmZmJzsgLy8gV2hpdGUgY29sb3IgZm9yIFwiTm9uZVwiXG4gICAgY2FzZSAnbG93JzpcbiAgICAgIHJldHVybiAnIzJlY2M3MSc7IC8vIEdyZWVuIGNvbG9yIGZvciBcIkxvd1wiXG4gICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgIHJldHVybiAnI2YzOWMxMic7IC8vIFllbGxvdyBjb2xvciBmb3IgXCJNZWRpdW1cIlxuICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgcmV0dXJuICcjZTc0YzNjJzsgLy8gUmVkIGNvbG9yIGZvciBcIkhpZ2hcIlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyMwMDAwMDAnOyAvLyBEZWZhdWx0IGNvbG9yIChibGFjaykgZm9yIHVua25vd24gcHJpb3JpdGllc1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb25mZXR0aSIsIkZhRXllIiwiRmFFeWVTbGFzaCIsIkZhVHJhc2giLCJUb2RvRGV0YWlsc0NhcmQiLCJzdHlsZXMiLCJUb2RvSXRlbSIsInRvZG8iLCJvbkRlbGV0ZSIsImNvbXBsZXRlZCIsImlzQ29tcGxldGVkIiwic2V0SXNDb21wbGV0ZWQiLCJjb25mZXR0aSIsInNldENvbmZldHRpIiwic2hvd0RldGFpbHMiLCJzZXRTaG93RGV0YWlscyIsImlzRGV0YWlsc09wZW4iLCJzZXRJc0RldGFpbHNPcGVuIiwiZWRpdGVkVG9kbyIsInNldEVkaXRlZFRvZG8iLCJpc0ZsYXNoaW5nIiwic2V0SXNGbGFzaGluZyIsImhhbmRsZVRvZ2dsZSIsInNldFRpbWVvdXQiLCJoYW5kbGVEZWxldGUiLCJpZCIsImhhbmRsZU5vdGVzQ2hhbmdlIiwidmFsdWUiLCJub3RlcyIsImhhbmRsZUR1ZURhdGVDaGFuZ2UiLCJkdWVEYXRlIiwiaGFuZGxlU2F2ZUNoYW5nZXMiLCJEYXRlIiwiaGFuZGxlQ2FuY2VsRWRpdCIsImhhbmRsZVRvZ2dsZURldGFpbHMiLCJkaXYiLCJjbGFzc05hbWUiLCJmbGFzaGluZyIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsInAiLCJ0ZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRQcmlvcml0eUNvbG9yIiwicHJpb3JpdHkiLCJzZWxlY3QiLCJlIiwidGFyZ2V0Iiwib3B0aW9uIiwiYnV0dG9uIiwib25DbGljayIsIm9uQ2FuY2VsIiwib25TYXZlIiwib25Ob3Rlc0NoYW5nZSIsIm9uRHVlRGF0ZUNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TodoItem.js\n");

/***/ })

});