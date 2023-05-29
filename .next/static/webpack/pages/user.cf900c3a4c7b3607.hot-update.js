"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user",{

/***/ "./components/User.tsx":
/*!*****************************!*\
  !*** ./components/User.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserComponent\": function() { return /* binding */ UserComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase/authentication */ \"./firebase/authentication.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/notify */ \"./utils/notify.ts\");\n/* harmony import */ var _WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WelcomeMessage */ \"./components/WelcomeMessage.tsx\");\n\n\n\n\n\nfunction UserComponent(param) {\n    let { currentUser  } = param;\n    async function sendEmail() {\n        if (currentUser) {\n            const response = await (0,_firebase_authentication__WEBPACK_IMPORTED_MODULE_1__.verifyUserEmail)(currentUser);\n            if (response) {\n                (0,_utils_notify__WEBPACK_IMPORTED_MODULE_3__.notify)(\"An email has been sent to you\");\n            } else {\n                (0,_utils_notify__WEBPACK_IMPORTED_MODULE_3__.notify)(\"Something went wrong\");\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center px-12 pt-40 gap-y-12\",\n            children: [\n                currentUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    name: currentUser.displayName || \"\"\n                }, void 0, false, {\n                    fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full p-8 bg-gray-200 rounded-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"mb-4 text-xl font-bold\",\n                            children: \"Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-2 gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-4 bg-white rounded-lg shadow-md\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"mb-2 text-lg font-medium\",\n                                            children: \"Quote of the Day\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600\",\n                                            children: \"“If you don’t really have a dream, you can't really push yourself; you don't really know what the target is.” ― Mahendra Singh Dhoni\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg\",\n                                            children: \"View Details\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-4 bg-white rounded-lg shadow-md\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"mb-2 text-lg font-medium\",\n                                            children: \"Thank You for Visiting \"\n                                        }, void 0, false, {\n                                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600\",\n                                            children: \"This Website is built using NextJS and Firebase\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: display,\n                                            className: \"px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg\",\n                                            children: \"View Details\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-4 bg-white rounded-lg shadow-md\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"mb-2 text-lg font-medium\",\n                                            children: \"Fancy Feature 3\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600\",\n                                            children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg\",\n                                            children: \"View Details\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-4 bg-white rounded-lg shadow-md\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"mb-2 text-lg font-medium\",\n                                            children: \"Fancy Feature 4\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600\",\n                                            children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg\",\n                                            children: \"View Details\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                currentUser && currentUser.emailVerified && !(0,_firebase_authentication__WEBPACK_IMPORTED_MODULE_1__.verifyIfUserIsEnrolled)(currentUser) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"w-full text-center underline hover:text-black\",\n                    href: \"/mfa\",\n                    children: \"Activate multifactor authentication\"\n                }, void 0, false, {\n                    fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this),\n                currentUser && !currentUser.emailVerified && !(0,_firebase_authentication__WEBPACK_IMPORTED_MODULE_1__.verifyIfUserIsEnrolled)(currentUser) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: sendEmail,\n                    className: \"w-full text-center underline hover:text-black\",\n                    children: \"Verify your email\"\n                }, void 0, false, {\n                    fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: _firebase_authentication__WEBPACK_IMPORTED_MODULE_1__.logout,\n                    className: \"flex items-center justify-center px-6 bg-black rounded-xl h-11\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"relative text-base font-light text-white\",\n                        children: \"Disconnect\"\n                    }, void 0, false, {\n                        fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/retr0/drives/files/College/Project/MFA - MP/components/User.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = UserComponent;\nvar _c;\n$RefreshReg$(_c, \"UserComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0RjtBQUUvRDtBQUNXO0FBQ007QUFNdkMsU0FBU00sY0FBYyxLQUFzQixFQUFFO1FBQXhCLEVBQUVDLFlBQVcsRUFBUyxHQUF0QjtJQUM1QixlQUFlQyxZQUFZO1FBQ3pCLElBQUlELGFBQWE7WUFDZixNQUFNRSxXQUFXLE1BQU1QLHlFQUFlQSxDQUFDSztZQUV2QyxJQUFJRSxVQUFVO2dCQUNaTCxxREFBTUEsQ0FBQztZQUNULE9BQU87Z0JBQ0xBLHFEQUFNQSxDQUFDO1lBQ1QsQ0FBQztRQUNILENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOztnQkFDWkosNkJBQWUsOERBQUNGLHVEQUFjQTtvQkFBQ08sTUFBTUwsWUFBWU0sV0FBVyxJQUFJOzs7Ozs7OEJBR2pFLDhEQUFDSDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUF5Qjs7Ozs7O3NDQUN2Qyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUViLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNJOzRDQUFHSixXQUFVO3NEQUEyQjs7Ozs7O3NEQUN6Qyw4REFBQ0s7NENBQUVMLFdBQVU7c0RBQWdCOzs7Ozs7c0RBQzdCLDhEQUFDTTs0Q0FBT04sV0FBVTtzREFBbUQ7Ozs7Ozs7Ozs7Ozs4Q0FJdkUsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0k7NENBQUdKLFdBQVU7c0RBQTJCOzs7Ozs7c0RBQ3pDLDhEQUFDSzs0Q0FBRUwsV0FBVTtzREFBZ0I7Ozs7OztzREFDN0IsOERBQUNNOzRDQUFPQyxTQUFTQzs0Q0FBU1IsV0FBVTtzREFBbUQ7Ozs7Ozs7Ozs7Ozs4Q0FJekYsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0k7NENBQUdKLFdBQVU7c0RBQTJCOzs7Ozs7c0RBQ3pDLDhEQUFDSzs0Q0FBRUwsV0FBVTtzREFBZ0I7Ozs7OztzREFDN0IsOERBQUNNOzRDQUFPTixXQUFVO3NEQUFtRDs7Ozs7Ozs7Ozs7OzhDQUl2RSw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDSTs0Q0FBR0osV0FBVTtzREFBMkI7Ozs7OztzREFDekMsOERBQUNLOzRDQUFFTCxXQUFVO3NEQUFnQjs7Ozs7O3NEQUM3Qiw4REFBQ007NENBQU9OLFdBQVU7c0RBQW1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBTTFFSixlQUFlQSxZQUFZYSxhQUFhLElBQUksQ0FBQ25CLGdGQUFzQkEsQ0FBQ00sOEJBQ25FLDhEQUFDSixrREFBSUE7b0JBQUNRLFdBQVU7b0JBQWdEVSxNQUFLOzhCQUFPOzs7Ozs7Z0JBSzdFZCxlQUFlLENBQUNBLFlBQVlhLGFBQWEsSUFBSSxDQUFDbkIsZ0ZBQXNCQSxDQUFDTSw4QkFDcEUsOERBQUNVO29CQUFPQyxTQUFTVjtvQkFBV0csV0FBVTs4QkFBZ0Q7Ozs7Ozs4QkFLeEYsOERBQUNNO29CQUFPQyxTQUFTbEIsNERBQU1BO29CQUFFVyxXQUFVOzhCQUNqQyw0RUFBQ1c7d0JBQUtYLFdBQVU7a0NBQTJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JFLENBQUM7S0F2RWVMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlci50c3g/ODViYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2dvdXQsIHZlcmlmeUlmVXNlcklzRW5yb2xsZWQsIHZlcmlmeVVzZXJFbWFpbCB9IGZyb20gXCJAL2ZpcmViYXNlL2F1dGhlbnRpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQGZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tIFwiQC91dGlscy9ub3RpZnlcIjtcclxuaW1wb3J0IFdlbGNvbWVNZXNzYWdlIGZyb20gXCIuL1dlbGNvbWVNZXNzYWdlXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGN1cnJlbnRVc2VyOiBVc2VyIHwgbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyQ29tcG9uZW50KHsgY3VycmVudFVzZXIgfTogUHJvcHMpIHtcclxuICBhc3luYyBmdW5jdGlvbiBzZW5kRW1haWwoKSB7XHJcbiAgICBpZiAoY3VycmVudFVzZXIpIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB2ZXJpZnlVc2VyRW1haWwoY3VycmVudFVzZXIpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgbm90aWZ5KFwiQW4gZW1haWwgaGFzIGJlZW4gc2VudCB0byB5b3VcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm90aWZ5KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGJnLXdoaXRlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtMTIgcHQtNDAgZ2FwLXktMTJcIj5cclxuICAgICAgICB7Y3VycmVudFVzZXIgJiYgPFdlbGNvbWVNZXNzYWdlIG5hbWU9e2N1cnJlbnRVc2VyLmRpc3BsYXlOYW1lIHx8IFwiXCJ9IC8+fVxyXG5cclxuICAgICAgICB7LyogRGFzaGJvYXJkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtOCBiZy1ncmF5LTIwMCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXhsIGZvbnQtYm9sZFwiPkRhc2hib2FyZDwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgey8qIEZhbmN5IEZlYXR1cmUgMSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItMiB0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+UXVvdGUgb2YgdGhlIERheTwvaDQ+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPuKAnElmIHlvdSBkb27igJl0IHJlYWxseSBoYXZlIGEgZHJlYW0sIHlvdSBjYW4ndCByZWFsbHkgcHVzaCB5b3Vyc2VsZjsgeW91IGRvbid0IHJlYWxseSBrbm93IHdoYXQgdGhlIHRhcmdldCBpcy7igJ0g4oCVIE1haGVuZHJhIFNpbmdoIERob25pPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIG10LTQgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLWxnXCI+VmlldyBEZXRhaWxzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIEZhbmN5IEZlYXR1cmUgMiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItMiB0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+VGhhbmsgWW91IGZvciBWaXNpdGluZyA8L2g0PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5UaGlzIFdlYnNpdGUgaXMgYnVpbHQgdXNpbmcgTmV4dEpTIGFuZCBGaXJlYmFzZTwvcD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Rpc3BsYXl9IGNsYXNzTmFtZT1cInB4LTQgcHktMiBtdC00IHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZC1sZ1wiPlZpZXcgRGV0YWlsczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBGYW5jeSBGZWF0dXJlIDMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1sZyBmb250LW1lZGl1bVwiPkZhbmN5IEZlYXR1cmUgMzwvaDQ+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuPC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIG10LTQgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLWxnXCI+VmlldyBEZXRhaWxzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIEZhbmN5IEZlYXR1cmUgNCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItMiB0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+RmFuY3kgRmVhdHVyZSA0PC9oND5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC48L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTIgbXQtNCB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbGdcIj5WaWV3IERldGFpbHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIENvbmRpdGlvbmFsIHJlbmRlcmluZyBiYXNlZCBvbiB1c2VyIHN0YXR1cyAqL31cclxuICAgICAgICB7Y3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIuZW1haWxWZXJpZmllZCAmJiAhdmVyaWZ5SWZVc2VySXNFbnJvbGxlZChjdXJyZW50VXNlcikgJiYgKFxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIHVuZGVybGluZSBob3Zlcjp0ZXh0LWJsYWNrXCIgaHJlZj1cIi9tZmFcIj5cclxuICAgICAgICAgICAgQWN0aXZhdGUgbXVsdGlmYWN0b3IgYXV0aGVudGljYXRpb25cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7Y3VycmVudFVzZXIgJiYgIWN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQgJiYgIXZlcmlmeUlmVXNlcklzRW5yb2xsZWQoY3VycmVudFVzZXIpICYmIChcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZEVtYWlsfSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgdW5kZXJsaW5lIGhvdmVyOnRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgVmVyaWZ5IHlvdXIgZW1haWxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IGJnLWJsYWNrIHJvdW5kZWQteGwgaC0xMVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1iYXNlIGZvbnQtbGlnaHQgdGV4dC13aGl0ZVwiPkRpc2Nvbm5lY3Q8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsibG9nb3V0IiwidmVyaWZ5SWZVc2VySXNFbnJvbGxlZCIsInZlcmlmeVVzZXJFbWFpbCIsIkxpbmsiLCJub3RpZnkiLCJXZWxjb21lTWVzc2FnZSIsIlVzZXJDb21wb25lbnQiLCJjdXJyZW50VXNlciIsInNlbmRFbWFpbCIsInJlc3BvbnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiaDMiLCJoNCIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzcGxheSIsImVtYWlsVmVyaWZpZWQiLCJocmVmIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/User.tsx\n"));

/***/ })

});