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

/***/ "./components/ResponsiveCalendar.js":
/*!******************************************!*\
  !*** ./components/ResponsiveCalendar.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-big-calendar */ \"./node_modules/react-big-calendar/dist/react-big-calendar.esm.js\");\n/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-big-calendar/lib/css/react-big-calendar.css */ \"./node_modules/react-big-calendar/lib/css/react-big-calendar.css\");\n/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Calendar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Calendar.module.css */ \"./components/Calendar.module.css\");\n/* harmony import */ var _Calendar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Calendar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ResponsiveCalendar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date()), selectedDate = ref[0], setSelectedDate = ref[1];\n    var localizer = (0,react_big_calendar__WEBPACK_IMPORTED_MODULE_2__.momentLocalizer)((moment__WEBPACK_IMPORTED_MODULE_4___default()));\n    var handleDateChange = function(date) {\n        setSelectedDate(date);\n    };\n    var events = [\n        {\n            title: \"Event 1\",\n            start: new Date(),\n            end: new Date()\n        }, \n    ];\n    var formats = {\n        dateFormat: \"D\",\n        dayFormat: \"ddd\",\n        dayRangeHeaderFormat: function(param) {\n            var start = param.start, end = param.end;\n            var startDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(start).format(\"MMM D\"); // Custom format for start date\n            var endDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(end).format(\"MMM D\"); // Custom format for end date\n            return \"\".concat(startDate, \" - \").concat(endDate);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"white-bubble\",\n                children: \"remindu\"\n            }, void 0, false, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/ResponsiveCalendar.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Calendar_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_big_calendar__WEBPACK_IMPORTED_MODULE_2__.Calendar, {\n                    className: (_Calendar_module_css__WEBPACK_IMPORTED_MODULE_5___default().calendar),\n                    onChange: handleDateChange,\n                    value: selectedDate,\n                    calendarType: \"US\",\n                    events: events,\n                    localizer: localizer,\n                    formats: formats\n                }, void 0, false, {\n                    fileName: \"/Users/verawang/Desktop/workspace/remindu/components/ResponsiveCalendar.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/verawang/Desktop/workspace/remindu/components/ResponsiveCalendar.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/verawang/Desktop/workspace/remindu/components/ResponsiveCalendar.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(ResponsiveCalendar, \"T4Tmqz5/qFblt6z0Nq5gv5n8TFQ=\");\n_c = ResponsiveCalendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResponsiveCalendar);\nvar _c;\n$RefreshReg$(_c, \"ResponsiveCalendar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc3BvbnNpdmVDYWxlbmRhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDdUI7QUFDSjtBQUNoQjtBQUNGO0FBQ2I7O0FBRTVCLElBQU1NLGtCQUFrQixHQUFHLFdBQU07O0lBQy9CLElBQXdDTCxHQUFvQixHQUFwQkEsK0NBQVEsQ0FBQyxJQUFJTSxJQUFJLEVBQUUsQ0FBQyxFQVI5RCxZQVFxQixHQUFxQk4sR0FBb0IsR0FBekMsRUFSckIsZUFRc0MsR0FBSUEsR0FBb0IsR0FBeEI7SUFDcEMsSUFBTVMsU0FBUyxHQUFHUCxtRUFBZSxDQUFDRSwrQ0FBTSxDQUFDO0lBRXpDLElBQU1NLGdCQUFnQixHQUFHLFNBQUNDLElBQUksRUFBSztRQUNqQ0gsZUFBZSxDQUFDRyxJQUFJLENBQUMsQ0FBQztLQUN2QjtJQUVELElBQU1DLE1BQU0sR0FBRztRQUNiO1lBQ0VDLEtBQUssRUFBRSxTQUFTO1lBQ2hCQyxLQUFLLEVBQUUsSUFBSVIsSUFBSSxFQUFFO1lBQ2pCUyxHQUFHLEVBQUUsSUFBSVQsSUFBSSxFQUFFO1NBQ2hCO0tBQ0Y7SUFFRCxJQUFNVSxPQUFPLEdBQUc7UUFDZEMsVUFBVSxFQUFFLEdBQUc7UUFDZkMsU0FBUyxFQUFFLEtBQUs7UUFDaEJDLG9CQUFvQixFQUFFLGdCQUFvQjtnQkFBakJMLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxHQUFHLFNBQUhBLEdBQUc7WUFDakMsSUFBTUssU0FBUyxHQUFHaEIsNkNBQU0sQ0FBQ1UsS0FBSyxDQUFDLENBQUNPLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSwrQkFBK0I7WUFDaEYsSUFBTUMsT0FBTyxHQUFHbEIsNkNBQU0sQ0FBQ1csR0FBRyxDQUFDLENBQUNNLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSw2QkFBNkI7WUFDMUUsT0FBTyxFQUFDLENBQWlCQyxNQUFPLENBQXRCRixTQUFTLEVBQUMsS0FBRyxDQUFVLFFBQVJFLE9BQU8sQ0FBRSxDQUFDO1NBQ3BDO0tBRUY7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7Z0JBQUNDLFNBQVMsRUFBQyxjQUFjOzBCQUFDLFNBQU87Ozs7O3FCQUFLOzBCQUN6Qyw4REFBQ0YsS0FBRztnQkFBQ0UsU0FBUyxFQUFFdEIsdUVBQWdCOzBCQUM5Qiw0RUFBQ0Ysd0RBQVE7b0JBQ1B3QixTQUFTLEVBQUV0QixzRUFBZTtvQkFDMUJ5QixRQUFRLEVBQUVsQixnQkFBZ0I7b0JBQzFCbUIsS0FBSyxFQUFFdEIsWUFBWTtvQkFDbkJ1QixZQUFZLEVBQUMsSUFBSTtvQkFDakJsQixNQUFNLEVBQUVBLE1BQU07b0JBQ2RILFNBQVMsRUFBRUEsU0FBUztvQkFDcEJPLE9BQU8sRUFBRUEsT0FBTzs7Ozs7eUJBQ2hCOzs7OztxQkFDRTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBM0NLWCxrQkFBa0I7QUFBbEJBLEtBQUFBLGtCQUFrQjtBQTZDeEIsK0RBQWVBLGtCQUFrQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVzcG9uc2l2ZUNhbGVuZGFyLmpzPzQ4ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FsZW5kYXIsIG1vbWVudExvY2FsaXplciB9IGZyb20gJ3JlYWN0LWJpZy1jYWxlbmRhcic7XG5pbXBvcnQgJ3JlYWN0LWJpZy1jYWxlbmRhci9saWIvY3NzL3JlYWN0LWJpZy1jYWxlbmRhci5jc3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhbGVuZGFyLm1vZHVsZS5jc3MnO1xuaW1wb3J0ICcuL1JlYWN0LUJpZy1DYWxlbmRhci5tb2R1bGUuY3NzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY29uc3QgUmVzcG9uc2l2ZUNhbGVuZGFyID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWREYXRlLCBzZXRTZWxlY3RlZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XG4gIGNvbnN0IGxvY2FsaXplciA9IG1vbWVudExvY2FsaXplcihtb21lbnQpO1xuXG4gIGNvbnN0IGhhbmRsZURhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkRGF0ZShkYXRlKTtcbiAgfTtcblxuICBjb25zdCBldmVudHMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdFdmVudCAxJyxcbiAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgpLFxuICAgICAgZW5kOiBuZXcgRGF0ZSgpLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgZm9ybWF0cyA9IHtcbiAgICBkYXRlRm9ybWF0OiAnRCcsIC8vIERheSBvZiB0aGUgbW9udGggKGUuZy4sIDUpXG4gICAgZGF5Rm9ybWF0OiAnZGRkJywgLy8gQWJicmV2aWF0ZWQgZGF5IG5hbWUgKGUuZy4sIE1vbilcbiAgICBkYXlSYW5nZUhlYWRlckZvcm1hdDogKHsgc3RhcnQsIGVuZCB9KSA9PiB7XG4gICAgICBjb25zdCBzdGFydERhdGUgPSBtb21lbnQoc3RhcnQpLmZvcm1hdCgnTU1NIEQnKTsgLy8gQ3VzdG9tIGZvcm1hdCBmb3Igc3RhcnQgZGF0ZVxuICAgICAgY29uc3QgZW5kRGF0ZSA9IG1vbWVudChlbmQpLmZvcm1hdCgnTU1NIEQnKTsgLy8gQ3VzdG9tIGZvcm1hdCBmb3IgZW5kIGRhdGVcbiAgICAgIHJldHVybiBgJHtzdGFydERhdGV9IC0gJHtlbmREYXRlfWA7XG4gICAgfSxcbiAgICAvLyBBZGQgbW9yZSBmb3JtYXQgb3B0aW9ucyBhcyBuZWVkZWRcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwid2hpdGUtYnViYmxlXCI+cmVtaW5kdTwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxDYWxlbmRhclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZERhdGV9XG4gICAgICAgICAgY2FsZW5kYXJUeXBlPVwiVVNcIlxuICAgICAgICAgIGV2ZW50cz17ZXZlbnRzfVxuICAgICAgICAgIGxvY2FsaXplcj17bG9jYWxpemVyfVxuICAgICAgICAgIGZvcm1hdHM9e2Zvcm1hdHN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNpdmVDYWxlbmRhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FsZW5kYXIiLCJtb21lbnRMb2NhbGl6ZXIiLCJzdHlsZXMiLCJtb21lbnQiLCJSZXNwb25zaXZlQ2FsZW5kYXIiLCJEYXRlIiwic2VsZWN0ZWREYXRlIiwic2V0U2VsZWN0ZWREYXRlIiwibG9jYWxpemVyIiwiaGFuZGxlRGF0ZUNoYW5nZSIsImRhdGUiLCJldmVudHMiLCJ0aXRsZSIsInN0YXJ0IiwiZW5kIiwiZm9ybWF0cyIsImRhdGVGb3JtYXQiLCJkYXlGb3JtYXQiLCJkYXlSYW5nZUhlYWRlckZvcm1hdCIsInN0YXJ0RGF0ZSIsImZvcm1hdCIsImVuZERhdGUiLCJkaXYiLCJoMiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImNhbGVuZGFyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImNhbGVuZGFyVHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ResponsiveCalendar.js\n");

/***/ })

});