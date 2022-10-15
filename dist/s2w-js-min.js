/*!
 * 
 *             s2w-js
 *             @description: Library based on raw JavaScript
 *
 *                           基于原生JavaScript的库
 *
 *             @version 1.0.5
 *
 *             @date 2022-10-15 16:00:44
 *
 *             @versions history
 *
 *                 1.0.1               , 1.0.2               , 1.0.3               , 1.0.4               , 1.0.5
 *
 *                 2022-10-15 15:29:04 , 2022-10-15 15:43:59 , 2022-10-15 15:49:27 , 2022-10-15 15:57:47 , 2022-10-15 16:00:44
 *
 *             Released under the MIT License.
 *             hash: 5070551be7ad2d57dcee
 *
 */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["s2w"] = factory();
	else
		root["s2w"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$uiTest\": function() { return /* binding */ $uiTest; },\n/* harmony export */   \"isBoo\": function() { return /* binding */ isBoo; }\n/* harmony export */ });\n/* harmony import */ var _ui_uiTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/uiTest */ \"./src/ui/uiTest/index.ts\");\n/* harmony import */ var _utils_isBoo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/isBoo */ \"./src/utils/isBoo.ts\");\n\r\n\r\nvar $uiTest = _ui_uiTest__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\nvar isBoo = _utils_isBoo__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    $uiTest: $uiTest,\r\n    isBoo: isBoo\r\n});\r\n\n\n//# sourceURL=webpack://s2w/./src/index.ts?");

/***/ }),

/***/ "./src/ui/uiTest/index.ts":
/*!********************************!*\
  !*** ./src/ui/uiTest/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () { });\r\n\n\n//# sourceURL=webpack://s2w/./src/ui/uiTest/index.ts?");

/***/ }),

/***/ "./src/utils/isBoo.ts":
/*!****************************!*\
  !*** ./src/utils/isBoo.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () { });\r\n\n\n//# sourceURL=webpack://s2w/./src/utils/isBoo.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});