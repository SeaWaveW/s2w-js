/*!
 * 
 *             s2w-js
 *             @description: Library based on raw JavaScript
 *
 *                           基于原生JavaScript的库
 *
 *             @version 1.0.8
 *
 *             @date 2022-10-15 22:45:46
 *
 *             @versions history
 *
 *                 1.0.1               , 1.0.2               , 1.0.3               , 1.0.4               , 1.0.5               , 1.0.6               , 1.0.7               , 1.0.8
 *
 *                 2022-10-15 15:29:04 , 2022-10-15 15:43:59 , 2022-10-15 15:49:27 , 2022-10-15 15:57:47 , 2022-10-15 16:00:44 , 2022-10-15 21:25:21 , 2022-10-15 22:14:22 , 2022-10-15 22:45:46
 *
 *             Released under the MIT License.
 *             hash: 6ca212b659a46087ccf1
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"each\": function() { return /* binding */ each; },\n/* harmony export */   \"isArr\": function() { return /* binding */ isArr; },\n/* harmony export */   \"isBoo\": function() { return /* binding */ isBoo; },\n/* harmony export */   \"isEnum\": function() { return /* binding */ isEnum; },\n/* harmony export */   \"isFun\": function() { return /* binding */ isFun; },\n/* harmony export */   \"isJQ\": function() { return /* binding */ isJQ; },\n/* harmony export */   \"isNull\": function() { return /* binding */ isNull; },\n/* harmony export */   \"isNum\": function() { return /* binding */ isNum; },\n/* harmony export */   \"isObj\": function() { return /* binding */ isObj; },\n/* harmony export */   \"isStr\": function() { return /* binding */ isStr; },\n/* harmony export */   \"isUnd\": function() { return /* binding */ isUnd; },\n/* harmony export */   \"random\": function() { return /* binding */ random; }\n/* harmony export */ });\n/* harmony import */ var _is_isArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is/isArr */ \"./src/is/isArr.ts\");\n/* harmony import */ var _is_isBoo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is/isBoo */ \"./src/is/isBoo.ts\");\n/* harmony import */ var _is_isEnum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is/isEnum */ \"./src/is/isEnum.ts\");\n/* harmony import */ var _is_isFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is/isFun */ \"./src/is/isFun.ts\");\n/* harmony import */ var _is_isJQ__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is/isJQ */ \"./src/is/isJQ.ts\");\n/* harmony import */ var _is_isNull__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is/isNull */ \"./src/is/isNull.ts\");\n/* harmony import */ var _is_isNum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./is/isNum */ \"./src/is/isNum.ts\");\n/* harmony import */ var _is_isObj__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is/isObj */ \"./src/is/isObj.ts\");\n/* harmony import */ var _is_isStr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./is/isStr */ \"./src/is/isStr.ts\");\n/* harmony import */ var _is_isUnd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./is/isUnd */ \"./src/is/isUnd.ts\");\n/* harmony import */ var _utils_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/each */ \"./src/utils/each.ts\");\n/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/random */ \"./src/utils/random.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar isArr = _is_isArr__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\nvar isBoo = _is_isBoo__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\nvar isEnum = _is_isEnum__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\nvar isFun = _is_isFun__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\nvar isJQ = _is_isJQ__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\r\nvar isNull = _is_isNull__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\r\nvar isNum = _is_isNum__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\r\nvar isObj = _is_isObj__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\r\nvar isStr = _is_isStr__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\r\nvar isUnd = _is_isUnd__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\r\nvar each = _utils_each__WEBPACK_IMPORTED_MODULE_10__[\"default\"];\r\nvar random = _utils_random__WEBPACK_IMPORTED_MODULE_11__[\"default\"];\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    isArr: isArr,\r\n    isBoo: isBoo,\r\n    isEnum: isEnum,\r\n    isFun: isFun,\r\n    isJQ: isJQ,\r\n    isNull: isNull,\r\n    isNum: isNum,\r\n    isObj: isObj,\r\n    isStr: isStr,\r\n    isUnd: isUnd,\r\n    each: each,\r\n    random: random\r\n});\r\n\n\n//# sourceURL=webpack://s2w/./src/index.ts?");

/***/ }),

/***/ "./src/is/isArr.ts":
/*!*************************!*\
  !*** ./src/is/isArr.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 判断值是否为 数组 类型\r\n * @param value\r\n * @returns boolean\r\n */\r\nvar isArr = function (value) {\r\n    return Array.isArray(value);\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (isArr);\r\n\n\n//# sourceURL=webpack://s2w/./src/is/isArr.ts?");

/***/ }),

/***/ "./src/is/isBoo.ts":
/*!*************************!*\
  !*** ./src/is/isBoo.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 判断值是否为 布尔 类型\r\n * @param value\r\n * @returns boolean\r\n */\r\nvar isBoo = function (value) {\r\n    return typeof value === 'boolean';\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (isBoo);\r\n\n\n//# sourceURL=webpack://s2w/./src/is/isBoo.ts?");

/***/ }),

/***/ "./src/is/isEnum.ts":
/*!**************************!*\
  !*** ./src/is/isEnum.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 判断值是否为 偶数\r\n * @param value\r\n * @returns boolean\r\n */\r\nvar isEnum = function (value) {\r\n    return value % 2 === 0;\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (isEnum);\r\n\n\n//# sourceURL=webpack://s2w/./src/is/isEnum.ts?");

/***/ }),

/***/ "./src/is/isFun.ts":
/*!*************************!*\
  !*** ./src/is/isFun.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 判断值是否为 方法 类型\r\n * @param value\r\n * @returns boolean\r\n */\r\nvar isFun = function (value) {\r\n    return typeof value === 'function';\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (isFun);\r\n\n\n//# sourceURL=webpack://s2w/./src/is/isFun.ts?");

/***/ }),

/***/ "./src/is/isJQ.ts":
/*!************************!*\
  !*** ./src/is/isJQ.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 判断值是否为 JQuery 类型\r\n * @param value\r\n * @returns boolean\r\n */\r\nvar isJQ = function (value) {\r\n    return value instanceof jQuery;\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (isJQ);\r\n\n\n//# sourceURL=webpack://s2w/./src/is/isJQ.ts?");

/***/ }),

/***/ "./src/is/isNull.ts":
/*!**************************!*\
  !*** ./src/is/isNull.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 判断值是否为 null 类型\r\n * @param value\r\n * @returns boolean\r\n */\r\nvar isNull = function (value) {\r\n    return value === null;\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (isNull);\r\n\n\n//# sourceURL=webpack://s2w/./src/is/isNull.ts?");

/***/ }),

/***/ "./src/is/isNum.ts":
/*!*************************!*\
  !*** ./src/is/isNum.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 判断值是否为 数字 类型\r\n * @param value\r\n * @returns boolean\r\n */\r\nvar isNum = function (value) {\r\n    return typeof value === 'number';\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (isNum);\r\n\n\n//# sourceURL=webpack://s2w/./src/is/isNum.ts?");

/***/ }),

/***/ "./src/is/isObj.ts":
/*!*************************!*\
  !*** ./src/is/isObj.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 判断值是否为 对象 类型\r\n * @param value\r\n * @returns boolean\r\n */\r\nvar isObj = function (value) {\r\n    return Object.prototype.toString.call(value) === '[object Object]';\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (isObj);\r\n\n\n//# sourceURL=webpack://s2w/./src/is/isObj.ts?");

/***/ }),

/***/ "./src/is/isStr.ts":
/*!*************************!*\
  !*** ./src/is/isStr.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 判断值是否为 字符串 类型\r\n * @param value\r\n * @returns boolean\r\n */\r\nvar isStr = function (value) {\r\n    return typeof value === 'string';\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (isStr);\r\n\n\n//# sourceURL=webpack://s2w/./src/is/isStr.ts?");

/***/ }),

/***/ "./src/is/isUnd.ts":
/*!*************************!*\
  !*** ./src/is/isUnd.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * 判断值是否为 undefined 类型\r\n * @param value\r\n * @returns boolean\r\n */\r\nvar isUnd = function (value) {\r\n    return typeof value === 'undefined';\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (isUnd);\r\n\n\n//# sourceURL=webpack://s2w/./src/is/isUnd.ts?");

/***/ }),

/***/ "./src/utils/each.ts":
/*!***************************!*\
  !*** ./src/utils/each.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is_isNum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is/isNum */ \"./src/is/isNum.ts\");\n/* harmony import */ var _is_isStr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is/isStr */ \"./src/is/isStr.ts\");\n\r\n\r\n/**\r\n * 数字或者字符串循环方法\r\n * --返回一个对象，对象中包含for方法\r\n * ----for方法的入参为回调函数，每次回调的入参为 值，下标\r\n * 若传入数字，则入参的方法的参数分别为 数字，下标\r\n * 若传入字符串，则入参的方法的参数分别为 值，下标\r\n * @param value\r\n * @returns {\r\n *  for: function ( callBack ) {\r\n *      callBack( value, index )\r\n *  }\r\n * }\r\n */\r\nvar each = function (value) {\r\n    // 定义默认返回\r\n    var forFun = function (callBack) { };\r\n    if ((0,_is_isNum__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value)) {\r\n        forFun = function (callBack) {\r\n            for (var i = 0; i < value; i++) {\r\n                callBack(i + 1, i);\r\n            }\r\n        };\r\n    }\r\n    else if ((0,_is_isStr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value)) {\r\n        forFun = function (callBack) {\r\n            for (var i = 0; i < value.length; i++) {\r\n                callBack(value[i], i);\r\n            }\r\n        };\r\n    }\r\n    return {\r\n        \"for\": forFun\r\n    };\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (each);\r\n\n\n//# sourceURL=webpack://s2w/./src/utils/each.ts?");

/***/ }),

/***/ "./src/utils/random.ts":
/*!*****************************!*\
  !*** ./src/utils/random.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is_isNum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is/isNum */ \"./src/is/isNum.ts\");\n/* harmony import */ var _is_isBoo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is/isBoo */ \"./src/is/isBoo.ts\");\n\r\n\r\nvar random = function (start, end, float) {\r\n    if (float === void 0) { float = true; }\r\n    // 定义起始\r\n    var newStart = (0,_is_isNum__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(start) ? Math.round(start) : 0;\r\n    // 定义结束\r\n    var newEnd = (0,_is_isNum__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(end) ? Math.round(end) : 1;\r\n    // 定义小数点个数: 为最大为16\r\n    var floatSum = (0,_is_isBoo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(float)\r\n        ? float\r\n            ? 16\r\n            : 0\r\n        : (0,_is_isNum__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(float)\r\n            ? float > 16\r\n                ? 16\r\n                : Math.floor(float)\r\n            : 0;\r\n    // 定义返回\r\n    var result = 0;\r\n    // 若不存在小数点\r\n    if (!floatSum) {\r\n        result = Math.floor(Math.random() * (newEnd + 1));\r\n        // 若是小于起始，则重新获取---内部活动为递归\r\n        if (result < newStart) {\r\n            result = random(newStart, newEnd, floatSum);\r\n        }\r\n    }\r\n    // 若存在小数点\r\n    else {\r\n        result = Math.random() * (newEnd + 1);\r\n        // 若是小于起始，则重新获取---内部活动为递归\r\n        if (result < newStart) {\r\n            result = random(newStart, newEnd, floatSum);\r\n        }\r\n        // 设置小数点个数\r\n        if (floatSum) {\r\n            // 按点分割\r\n            var resultList = \"\".concat(result).split('.');\r\n            // 从下标为0开始截取\r\n            resultList[1] = resultList[1].slice(0, floatSum);\r\n            // 再按点拼接 再 转成数字\r\n            result = Number(resultList.join('.'));\r\n        }\r\n    }\r\n    return result;\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (random);\r\n\n\n//# sourceURL=webpack://s2w/./src/utils/random.ts?");

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