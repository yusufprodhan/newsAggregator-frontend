"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signin/page",{

/***/ "(app-pages-browser)/./app/signin/page.js":
/*!****************************!*\
  !*** ./app/signin/page.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ \"(app-pages-browser)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/checkbox */ \"(app-pages-browser)/./node_modules/antd/lib/checkbox/index.js\");\n/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ \"(app-pages-browser)/./node_modules/antd/lib/form/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ \"(app-pages-browser)/./node_modules/antd/lib/input/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction Page() {\n    const onFinish = (values)=>{\n        console.log(\"Success:\", values);\n    };\n    const onFinishFailed = (errorInfo)=>{\n        console.log(\"Failed:\", errorInfo);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/macmini4/Sites/news/newsAggregator-frontend/app/signin/page.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-items-center items-center my-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    name: \"basic\",\n                    className: \"w-full\",\n                    onFinish: onFinish,\n                    onFinishFailed: onFinishFailed,\n                    autoComplete: \"off\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Item, {\n                            label: \"Username\",\n                            name: \"username\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: \"Please input your username!\"\n                                }\n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/macmini4/Sites/news/newsAggregator-frontend/app/signin/page.js\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/macmini4/Sites/news/newsAggregator-frontend/app/signin/page.js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Item, {\n                            label: \"Password\",\n                            name: \"password\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: \"Please input your password!\"\n                                }\n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Password, {}, void 0, false, {\n                                fileName: \"/Users/macmini4/Sites/news/newsAggregator-frontend/app/signin/page.js\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/macmini4/Sites/news/newsAggregator-frontend/app/signin/page.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Item, {\n                            name: \"remember\",\n                            valuePropName: \"checked\",\n                            wrapperCol: {\n                                offset: 8,\n                                span: 16\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                children: \"Remember me\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macmini4/Sites/news/newsAggregator-frontend/app/signin/page.js\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/macmini4/Sites/news/newsAggregator-frontend/app/signin/page.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Item, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                className: \"bg-black hover:bg-teal-700 focus:bg-teal-700\",\n                                type: \"primary\",\n                                htmlType: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macmini4/Sites/news/newsAggregator-frontend/app/signin/page.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/macmini4/Sites/news/newsAggregator-frontend/app/signin/page.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macmini4/Sites/news/newsAggregator-frontend/app/signin/page.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macmini4/Sites/news/newsAggregator-frontend/app/signin/page.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macmini4/Sites/news/newsAggregator-frontend/app/signin/page.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zaWduaW4vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNxRDtBQUFBO0FBQUE7QUFBQTtBQUN0QyxTQUFTSTtJQUNwQixNQUFNQyxXQUFXLENBQUNDO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRjtJQUM1QjtJQUNBLE1BQU1HLGlCQUFpQixDQUFDQztRQUNwQkgsUUFBUUMsR0FBRyxDQUFDLFdBQVdFO0lBQzNCO0lBQ0EscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDs7Ozs7MEJBQ0QsOERBQUNBO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDVixxREFBSUE7b0JBQ0RXLE1BQUs7b0JBQ0xELFdBQVU7b0JBQ1ZQLFVBQVVBO29CQUNWSSxnQkFBZ0JBO29CQUNoQkssY0FBYTs7c0NBRWIsOERBQUNaLHFEQUFJQSxDQUFDYSxJQUFJOzRCQUNOQyxPQUFNOzRCQUNOSCxNQUFLOzRCQUNMSSxPQUFPO2dDQUNIO29DQUNJQyxVQUFVO29DQUNWQyxTQUFTO2dDQUNiOzZCQUNIO3NDQUVELDRFQUFDaEIsc0RBQUtBOzs7Ozs7Ozs7O3NDQUdWLDhEQUFDRCxxREFBSUEsQ0FBQ2EsSUFBSTs0QkFDTkMsT0FBTTs0QkFDTkgsTUFBSzs0QkFDTEksT0FBTztnQ0FDSDtvQ0FDSUMsVUFBVTtvQ0FDVkMsU0FBUztnQ0FDYjs2QkFDSDtzQ0FFRCw0RUFBQ2hCLHNEQUFLQSxDQUFDaUIsUUFBUTs7Ozs7Ozs7OztzQ0FHbkIsOERBQUNsQixxREFBSUEsQ0FBQ2EsSUFBSTs0QkFDTkYsTUFBSzs0QkFDTFEsZUFBYzs0QkFDZEMsWUFBWTtnQ0FDUkMsUUFBUTtnQ0FDUkMsTUFBTTs0QkFDVjtzQ0FFQSw0RUFBQ3ZCLHlEQUFRQTswQ0FBQzs7Ozs7Ozs7Ozs7c0NBR2QsOERBQUNDLHFEQUFJQSxDQUFDYSxJQUFJO3NDQUNOLDRFQUFDZix3REFBTUE7Z0NBQUNZLFdBQVU7Z0NBQStDYSxNQUFLO2dDQUFVQyxVQUFTOzBDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFIO0tBaEV3QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zaWduaW4vcGFnZS5qcz9mN2NmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDaGVja2JveCwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIHZhbHVlcyk7XG4gICAgfTtcbiAgICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IChlcnJvckluZm8pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZDonLCBlcnJvckluZm8pO1xuICAgIH07XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgc206Z3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTMgcHQtMVwiPlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1pdGVtcy1jZW50ZXIgaXRlbXMtY2VudGVyIG15LTEwXCI+XG4gICAgICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwnXG4gICAgICAgICAgICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cbiAgICAgICAgICAgICAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgdXNlcm5hbWUhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHBhc3N3b3JkIScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVtZW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlckNvbD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuOiAxNixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveD5SZW1lbWJlciBtZTwvQ2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibGFjayBob3ZlcjpiZy10ZWFsLTcwMCBmb2N1czpiZy10ZWFsLTcwMFwiIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNoZWNrYm94IiwiRm9ybSIsIklucHV0IiwiUGFnZSIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsIm9uRmluaXNoRmFpbGVkIiwiZXJyb3JJbmZvIiwiZGl2IiwiY2xhc3NOYW1lIiwibmFtZSIsImF1dG9Db21wbGV0ZSIsIkl0ZW0iLCJsYWJlbCIsInJ1bGVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiUGFzc3dvcmQiLCJ2YWx1ZVByb3BOYW1lIiwid3JhcHBlckNvbCIsIm9mZnNldCIsInNwYW4iLCJ0eXBlIiwiaHRtbFR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/signin/page.js\n"));

/***/ })

});