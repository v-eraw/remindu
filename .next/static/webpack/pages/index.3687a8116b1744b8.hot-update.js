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

/***/ "./components/TodoList.js":
/*!********************************!*\
  !*** ./components/TodoList.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem */ \"./components/TodoItem.js\");\n/* harmony import */ var _TodoList_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoList.module.css */ \"./components/TodoList.module.css\");\n/* harmony import */ var _TodoList_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TodoList_module_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n // Import the TodoItem component\n // Import your styles\nvar _s = $RefreshSig$();\nvar TodoList = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            text: \"Complete assignment\",\n            priority: \"high\",\n            completed: false,\n            createdAt: new Date(\"2023-08-01\"),\n            dueDate: null,\n            notes: \"\"\n        }\n    ]), todos = ref[0], setTodos = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), newTodoText = ref1[0], setNewTodoText = ref1[1];\n    var handleAddTodo = function() {\n        if (newTodoText.trim() !== \"\") {\n            var newTodo = {\n                id: todos.length + 1,\n                text: newTodoText,\n                priority: \"none\",\n                completed: false,\n                createdAt: new Date(),\n                dueDate: null,\n                notes: \"\"\n            };\n            setTodos(_toConsumableArray(todos).concat([\n                newTodo\n            ]));\n            setNewTodoText(\"\");\n        }\n    };\n    // Sort the todos array by priority (high > medium > low > none) and due date\n    var sortedTodos = todos.slice().sort(function(a, b) {\n        var priorityOrder = [\n            \"high\",\n            \"medium\",\n            \"low\",\n            \"none\"\n        ];\n        var priorityComparison = priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);\n        if (priorityComparison !== 0) {\n            return priorityComparison;\n        }\n        if (a.dueDate && b.dueDate) {\n            return a.dueDate - b.dueDate;\n        } else if (a.dueDate) {\n            return -1;\n        } else if (b.dueDate) {\n            return 1;\n        } else {\n            return 0;\n        }\n    });\n    var handleDeleteTodo = function(id) {\n        var updatedTodos = todos.filter(function(todo) {\n            return todo.id !== id;\n        });\n        setTodos(updatedTodos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_TodoList_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"todo-list\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"todo-list-title\",\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoList.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TodoList_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"add-todo-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: newTodoText,\n                        onChange: function(e) {\n                            return setNewTodoText(e.target.value);\n                        },\n                        placeholder: \"Enter a new todo...\",\n                        className: (_TodoList_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"add-todo-input\"])\n                    }, void 0, false, {\n                        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoList.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_TodoList_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"add-todo-button\"]),\n                        onClick: handleAddTodo,\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoList.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoList.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this),\n            sortedTodos.map(function(todo) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TodoItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    todo: todo,\n                    onDelete: handleDeleteTodo\n                }, todo.id, false, {\n                    fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoList.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoList.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodoList, \"axedICaYKX+WX7CqNSiVhRtpxfY=\");\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFFL0IsMEVBQW1COzswQkFDakMsOERBQUM4QixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsaUJBQWlCOzBCQUFDLFdBQVM7Ozs7O3FCQUFNOzBCQUNoRCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFFL0IsbUZBQTRCOztrQ0FDMUMsOERBQUNnQyxPQUFLO3dCQUNKQyxJQUFJLEVBQUMsTUFBTTt3QkFDWEMsS0FBSyxFQUFFdEIsV0FBVzt3QkFDbEJ1QixRQUFRLEVBQUUsU0FBQ0MsQ0FBQzttQ0FBS3ZCLGNBQWMsQ0FBQ3VCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7eUJBQUE7d0JBQy9DSSxXQUFXLEVBQUMscUJBQXFCO3dCQUNqQ1AsU0FBUyxFQUFFL0IsK0VBQXdCOzs7Ozs2QkFDbkM7a0NBQ0YsOERBQUN1QyxRQUFNO3dCQUFDUixTQUFTLEVBQUUvQixnRkFBeUI7d0JBQUV3QyxPQUFPLEVBQUUxQixhQUFhO2tDQUFFLFVBRXRFOzs7Ozs2QkFBUzs7Ozs7O3FCQUNMO1lBQ0xJLFdBQVcsQ0FBQ3VCLEdBQUcsQ0FBQyxTQUFDWixJQUFJO3FDQUNwQiw4REFBQzlCLGlEQUFRO29CQUFlOEIsSUFBSSxFQUFFQSxJQUFJO29CQUFFYSxRQUFRLEVBQUVoQixnQkFBZ0I7bUJBQS9DRyxJQUFJLENBQUMzQixFQUFFOzs7OzBCQUE0QzthQUNuRSxDQUFDOzs7Ozs7YUFDRSxDQUNOO0NBQ0g7R0E5RUtELFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWdGZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9kb0xpc3QuanM/OTA2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi9Ub2RvSXRlbSc7IC8vIEltcG9ydCB0aGUgVG9kb0l0ZW0gY29tcG9uZW50XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVG9kb0xpc3QubW9kdWxlLmNzcyc7IC8vIEltcG9ydCB5b3VyIHN0eWxlc1xuXG5jb25zdCBUb2RvTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0ZXh0OiAnQ29tcGxldGUgYXNzaWdubWVudCcsXG4gICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoJzIwMjMtMDgtMDEnKSxcbiAgICAgIGR1ZURhdGU6IG51bGwsXG4gICAgICBub3RlczogJycsXG4gICAgfSxcbiAgICAvLyAuLi4gYWRkIG1vcmUgdG9kbyBpdGVtc1xuICBdKTtcblxuICBjb25zdCBbbmV3VG9kb1RleHQsIHNldE5ld1RvZG9UZXh0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVBZGRUb2RvID0gKCkgPT4ge1xuICAgIGlmIChuZXdUb2RvVGV4dC50cmltKCkgIT09ICcnKSB7XG4gICAgICBjb25zdCBuZXdUb2RvID0ge1xuICAgICAgICBpZDogdG9kb3MubGVuZ3RoICsgMSxcbiAgICAgICAgdGV4dDogbmV3VG9kb1RleHQsXG4gICAgICAgIHByaW9yaXR5OiAnbm9uZScsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgICAgZHVlRGF0ZTogbnVsbCxcbiAgICAgICAgbm90ZXM6ICcnLFxuICAgICAgfTtcbiAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgbmV3VG9kb10pO1xuICAgICAgc2V0TmV3VG9kb1RleHQoJycpO1xuICAgIH1cbiAgfTtcblxuICAvLyBTb3J0IHRoZSB0b2RvcyBhcnJheSBieSBwcmlvcml0eSAoaGlnaCA+IG1lZGl1bSA+IGxvdyA+IG5vbmUpIGFuZCBkdWUgZGF0ZVxuICBjb25zdCBzb3J0ZWRUb2RvcyA9IHRvZG9zLnNsaWNlKCkuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IHByaW9yaXR5T3JkZXIgPSBbJ2hpZ2gnLCAnbWVkaXVtJywgJ2xvdycsICdub25lJ107XG4gICAgY29uc3QgcHJpb3JpdHlDb21wYXJpc29uID1cbiAgICAgIHByaW9yaXR5T3JkZXIuaW5kZXhPZihhLnByaW9yaXR5KSAtIHByaW9yaXR5T3JkZXIuaW5kZXhPZihiLnByaW9yaXR5KTtcblxuICAgIGlmIChwcmlvcml0eUNvbXBhcmlzb24gIT09IDApIHtcbiAgICAgIHJldHVybiBwcmlvcml0eUNvbXBhcmlzb247XG4gICAgfVxuXG4gICAgaWYgKGEuZHVlRGF0ZSAmJiBiLmR1ZURhdGUpIHtcbiAgICAgIHJldHVybiBhLmR1ZURhdGUgLSBiLmR1ZURhdGU7XG4gICAgfSBlbHNlIGlmIChhLmR1ZURhdGUpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYgKGIuZHVlRGF0ZSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlVG9kbyA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpO1xuICAgIHNldFRvZG9zKHVwZGF0ZWRUb2Rvcyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0b2RvLWxpc3QnXX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC10aXRsZVwiPlRvZG8gTGlzdDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYWRkLXRvZG8tY29udGFpbmVyJ119PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e25ld1RvZG9UZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VG9kb1RleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBuZXcgdG9kby4uLlwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2FkZC10b2RvLWlucHV0J119XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXNbJ2FkZC10b2RvLWJ1dHRvbiddfSBvbkNsaWNrPXtoYW5kbGVBZGRUb2RvfT5cbiAgICAgICAgICBBZGQgVG9kb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAge3NvcnRlZFRvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICA8VG9kb0l0ZW0ga2V5PXt0b2RvLmlkfSB0b2RvPXt0b2RvfSBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlVG9kb30gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvZG9JdGVtIiwic3R5bGVzIiwiVG9kb0xpc3QiLCJpZCIsInRleHQiLCJwcmlvcml0eSIsImNvbXBsZXRlZCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJkdWVEYXRlIiwibm90ZXMiLCJ0b2RvcyIsInNldFRvZG9zIiwibmV3VG9kb1RleHQiLCJzZXROZXdUb2RvVGV4dCIsImhhbmRsZUFkZFRvZG8iLCJ0cmltIiwibmV3VG9kbyIsImxlbmd0aCIsInNvcnRlZFRvZG9zIiwic2xpY2UiLCJzb3J0IiwiYSIsImIiLCJwcmlvcml0eU9yZGVyIiwicHJpb3JpdHlDb21wYXJpc29uIiwiaW5kZXhPZiIsImhhbmRsZURlbGV0ZVRvZG8iLCJ1cGRhdGVkVG9kb3MiLCJmaWx0ZXIiLCJ0b2RvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJvbkRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TodoList.js\n");

/***/ })

});