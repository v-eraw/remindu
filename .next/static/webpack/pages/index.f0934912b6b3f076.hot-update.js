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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem */ \"./components/TodoItem.js\");\n/* harmony import */ var _TodoList_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoList.module.css */ \"./components/TodoList.module.css\");\n/* harmony import */ var _TodoList_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TodoList_module_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n // Import the TodoItem component\n // Import your styles\nvar _s = $RefreshSig$();\nvar TodoList = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            text: \"Complete assignment\",\n            priority: \"high\",\n            completed: false,\n            createdAt: new Date(\"2023-08-01\"),\n            dueDate: null,\n            notes: \"\"\n        }\n    ]), todos = ref[0], setTodos = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), newTodoText = ref1[0], setNewTodoText = ref1[1];\n    var handleAddTodo = function() {\n        if (newTodoText.trim() !== \"\") {\n            var newTodo = {\n                id: todos.length + 1,\n                text: newTodoText,\n                priority: \"none\",\n                completed: false,\n                createdAt: new Date(),\n                dueDate: null,\n                notes: \"\"\n            };\n            setTodos(_toConsumableArray(todos).concat([\n                newTodo\n            ]));\n            setNewTodoText(\"\");\n        }\n    };\n    // Sort the todos array by priority (high > medium > low > none) and due date\n    var sortedTodos = todos.slice().sort(function(a, b) {\n        var priorityOrder = [\n            \"high\",\n            \"medium\",\n            \"low\",\n            \"none\"\n        ];\n        var priorityComparison = priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);\n        if (priorityComparison !== 0) {\n            return priorityComparison;\n        }\n        if (a.dueDate && b.dueDate) {\n            return a.dueDate - b.dueDate;\n        } else if (a.dueDate) {\n            return -1;\n        } else if (b.dueDate) {\n            return 1;\n        } else {\n            return 0;\n        }\n    });\n    var handleKeyPress = function(e) {\n        if (e.key === \"Enter\" && newTodoText.trim() !== \"\") {\n            if (newTodoText.trim() !== \"\") {\n                var newTodo = {\n                    id: todos.length + 1,\n                    text: newTodoText,\n                    priority: \"none\",\n                    completed: false,\n                    createdAt: new Date(),\n                    dueDate: null,\n                    notes: \"\"\n                };\n                setTodos(_toConsumableArray(todos).concat([\n                    newTodo\n                ]));\n                setNewTodoText(\"\");\n            }\n        }\n    };\n    var handleDeleteTodo = function(id) {\n        var updatedTodos = todos.filter(function(todo) {\n            return todo.id !== id;\n        });\n        setTodos(updatedTodos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_TodoList_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"todo-list\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"todo-list-title\",\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoList.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TodoList_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"add-todo-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: newTodoText,\n                        onChange: function(e) {\n                            return setNewTodoText(e.target.value);\n                        },\n                        placeholder: \"Enter a new todo...\",\n                        className: (_TodoList_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"add-todo-input\"]),\n                        onKeyPress: handleKeyPress\n                    }, void 0, false, {\n                        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoList.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_TodoList_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"add-todo-button\"]),\n                        onClick: handleAddTodo,\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoList.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoList.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            sortedTodos.map(function(todo) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TodoItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    todo: todo,\n                    onDelete: handleDeleteTodo\n                }, todo.id, false, {\n                    fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoList.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/TodoList.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, _this);\n};\n_s(TodoList, \"axedICaYKX+WX7CqNSiVhRtpxfY=\");\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDZ0IsUUFBTTt3QkFBQ1IsU0FBUyxFQUFFbEMsZ0ZBQXlCO3dCQUFFMkMsT0FBTyxFQUFFN0IsYUFBYTtrQ0FBRSxVQUV0RTs7Ozs7NkJBQVM7Ozs7OztxQkFDTDtZQUNMSSxXQUFXLENBQUMwQixHQUFHLENBQUMsU0FBQ1osSUFBSTtxQ0FDcEIsOERBQUNqQyxpREFBUTtvQkFBZWlDLElBQUksRUFBRUEsSUFBSTtvQkFBRWEsUUFBUSxFQUFFaEIsZ0JBQWdCO21CQUEvQ0csSUFBSSxDQUFDOUIsRUFBRTs7OzswQkFBNEM7YUFDbkUsQ0FBQzs7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBakdLRCxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFtR2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvZG9MaXN0LmpzPzkwNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vVG9kb0l0ZW0nOyAvLyBJbXBvcnQgdGhlIFRvZG9JdGVtIGNvbXBvbmVudFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RvZG9MaXN0Lm1vZHVsZS5jc3MnOyAvLyBJbXBvcnQgeW91ciBzdHlsZXNcblxuY29uc3QgVG9kb0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGV4dDogJ0NvbXBsZXRlIGFzc2lnbm1lbnQnLFxuICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCcyMDIzLTA4LTAxJyksXG4gICAgICBkdWVEYXRlOiBudWxsLFxuICAgICAgbm90ZXM6ICcnLFxuICAgIH0sXG4gICAgLy8gLi4uIGFkZCBtb3JlIHRvZG8gaXRlbXNcbiAgXSk7XG5cbiAgY29uc3QgW25ld1RvZG9UZXh0LCBzZXROZXdUb2RvVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlQWRkVG9kbyA9ICgpID0+IHtcbiAgICBpZiAobmV3VG9kb1RleHQudHJpbSgpICE9PSAnJykge1xuICAgICAgY29uc3QgbmV3VG9kbyA9IHtcbiAgICAgICAgaWQ6IHRvZG9zLmxlbmd0aCArIDEsXG4gICAgICAgIHRleHQ6IG5ld1RvZG9UZXh0LFxuICAgICAgICBwcmlvcml0eTogJ25vbmUnLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIGR1ZURhdGU6IG51bGwsXG4gICAgICAgIG5vdGVzOiAnJyxcbiAgICAgIH07XG4gICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIG5ld1RvZG9dKTtcbiAgICAgIHNldE5ld1RvZG9UZXh0KCcnKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU29ydCB0aGUgdG9kb3MgYXJyYXkgYnkgcHJpb3JpdHkgKGhpZ2ggPiBtZWRpdW0gPiBsb3cgPiBub25lKSBhbmQgZHVlIGRhdGVcbiAgY29uc3Qgc29ydGVkVG9kb3MgPSB0b2Rvcy5zbGljZSgpLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBwcmlvcml0eU9yZGVyID0gWydoaWdoJywgJ21lZGl1bScsICdsb3cnLCAnbm9uZSddO1xuICAgIGNvbnN0IHByaW9yaXR5Q29tcGFyaXNvbiA9XG4gICAgICBwcmlvcml0eU9yZGVyLmluZGV4T2YoYS5wcmlvcml0eSkgLSBwcmlvcml0eU9yZGVyLmluZGV4T2YoYi5wcmlvcml0eSk7XG5cbiAgICBpZiAocHJpb3JpdHlDb21wYXJpc29uICE9PSAwKSB7XG4gICAgICByZXR1cm4gcHJpb3JpdHlDb21wYXJpc29uO1xuICAgIH1cblxuICAgIGlmIChhLmR1ZURhdGUgJiYgYi5kdWVEYXRlKSB7XG4gICAgICByZXR1cm4gYS5kdWVEYXRlIC0gYi5kdWVEYXRlO1xuICAgIH0gZWxzZSBpZiAoYS5kdWVEYXRlKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmIChiLmR1ZURhdGUpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgbmV3VG9kb1RleHQudHJpbSgpICE9PSAnJykge1xuICAgICAgaWYgKG5ld1RvZG9UZXh0LnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IHtcbiAgICAgICAgICBpZDogdG9kb3MubGVuZ3RoICsgMSxcbiAgICAgICAgICB0ZXh0OiBuZXdUb2RvVGV4dCxcbiAgICAgICAgICBwcmlvcml0eTogJ25vbmUnLFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgICAgIGR1ZURhdGU6IG51bGwsXG4gICAgICAgICAgbm90ZXM6ICcnLFxuICAgICAgICB9O1xuICAgICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIG5ld1RvZG9dKTtcbiAgICAgICAgc2V0TmV3VG9kb1RleHQoJycpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVUb2RvID0gKGlkKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCk7XG4gICAgc2V0VG9kb3ModXBkYXRlZFRvZG9zKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RvZG8tbGlzdCddfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LXRpdGxlXCI+VG9kbyBMaXN0PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhZGQtdG9kby1jb250YWluZXInXX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17bmV3VG9kb1RleHR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdUb2RvVGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIG5ldyB0b2RvLi4uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snYWRkLXRvZG8taW5wdXQnXX1cbiAgICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc1snYWRkLXRvZG8tYnV0dG9uJ119IG9uQ2xpY2s9e2hhbmRsZUFkZFRvZG99PlxuICAgICAgICAgIEFkZCBUb2RvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7c29ydGVkVG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgIDxUb2RvSXRlbSBrZXk9e3RvZG8uaWR9IHRvZG89e3RvZG99IG9uRGVsZXRlPXtoYW5kbGVEZWxldGVUb2RvfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVG9kb0l0ZW0iLCJzdHlsZXMiLCJUb2RvTGlzdCIsImlkIiwidGV4dCIsInByaW9yaXR5IiwiY29tcGxldGVkIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImR1ZURhdGUiLCJub3RlcyIsInRvZG9zIiwic2V0VG9kb3MiLCJuZXdUb2RvVGV4dCIsInNldE5ld1RvZG9UZXh0IiwiaGFuZGxlQWRkVG9kbyIsInRyaW0iLCJuZXdUb2RvIiwibGVuZ3RoIiwic29ydGVkVG9kb3MiLCJzbGljZSIsInNvcnQiLCJhIiwiYiIsInByaW9yaXR5T3JkZXIiLCJwcmlvcml0eUNvbXBhcmlzb24iLCJpbmRleE9mIiwiaGFuZGxlS2V5UHJlc3MiLCJlIiwia2V5IiwiaGFuZGxlRGVsZXRlVG9kbyIsInVwZGF0ZWRUb2RvcyIsImZpbHRlciIsInRvZG8iLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbktleVByZXNzIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIm9uRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.js\n");

/***/ })

});