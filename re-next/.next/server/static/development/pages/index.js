module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/koharakouki/Desktop/react_practice/re-next/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nconst h1 = {\n  fontSize: \"72pt\",\n  fontWeight: \"bold\",\n  textAlign: \"right\",\n  letterSpacing: \"-8px\",\n  color: \"#f0f0f0\",\n  margin: \"-40px 0px\"\n};\nconst p = {\n  margin: \"0px\",\n  color: \"#666\",\n  fontSize: \"16pt\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 22\n  }\n}, __jsx(\"h1\", {\n  style: h1,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 3\n  }\n}, \"Next.js\"), __jsx(\"p\", {\n  style: p,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 3\n  }\n}, \"Welcome to next.js\")));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImgxIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwibGV0dGVyU3BhY2luZyIsImNvbG9yIiwibWFyZ2luIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsRUFBRSxHQUFHO0FBQ1ZDLFVBQVEsRUFBRSxNQURBO0FBRVZDLFlBQVUsRUFBRSxNQUZGO0FBR1ZDLFdBQVMsRUFBRSxPQUhEO0FBSVZDLGVBQWEsRUFBRSxNQUpMO0FBS1ZDLE9BQUssRUFBRSxTQUxHO0FBTVZDLFFBQU0sRUFBRTtBQU5FLENBQVg7QUFVQSxNQUFNQyxDQUFDLEdBQUc7QUFDVEQsUUFBTSxFQUFFLEtBREM7QUFFVEQsT0FBSyxFQUFFLE1BRkU7QUFHVEosVUFBUSxFQUFFO0FBSEQsQ0FBVjtBQU1lLHFFQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDbkI7QUFBSSxPQUFLLEVBQUVELEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURtQixFQUVuQjtBQUFHLE9BQUssRUFBRU8sQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZtQixDQUFyQiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaDEgPSB7XG5cdGZvbnRTaXplOiBcIjcycHRcIixcblx0Zm9udFdlaWdodDogXCJib2xkXCIsXG5cdHRleHRBbGlnbjogXCJyaWdodFwiLFxuXHRsZXR0ZXJTcGFjaW5nOiBcIi04cHhcIixcblx0Y29sb3I6IFwiI2YwZjBmMFwiLFxuXHRtYXJnaW46IFwiLTQwcHggMHB4XCJcbn1cblxuXG5jb25zdCBwID0ge1xuXHRtYXJnaW46IFwiMHB4XCIsXG5cdGNvbG9yOiBcIiM2NjZcIixcblx0Zm9udFNpemU6IFwiMTZwdFwiXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IDxkaXY+XG4gIDxoMSBzdHlsZT17aDF9Pk5leHQuanM8L2gxPlxuICA8cCBzdHlsZT17cH0+V2VsY29tZSB0byBuZXh0LmpzPC9wPlxuPC9kaXY+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/koharakouki/Desktop/react_practice/re-next/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });