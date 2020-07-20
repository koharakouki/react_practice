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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Counter.js":
/*!*******************************!*\
  !*** ./components/Counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Counter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/koharakouki/Desktop/react_practice/re-next/components/Counter.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nclass Counter extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"msgStyle\", {\n      fontSize: \"16pt\",\n      backgroundColor: \"#eef\",\n      padding: \"5px\"\n    });\n\n    this.state = {\n      counter: 0,\n      msg: 'counter: 0'\n    };\n    this.doAction = this.doAction.bind(this);\n  }\n\n  doAction(e) {\n    this.setState(state => {\n      const num = state.counter + 1;\n      return {\n        counter: num,\n        msg: 'counter: ' + num\n      };\n    });\n  }\n\n  render() {\n    return __jsx(\"p\", {\n      onClick: this.doAction,\n      style: this.msgStyle,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 10\n      }\n    }, this.state.msg);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvdW50ZXIuanM/Yjc4NSJdLCJuYW1lcyI6WyJDb3VudGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsInN0YXRlIiwiY291bnRlciIsIm1zZyIsImRvQWN0aW9uIiwiYmluZCIsImUiLCJzZXRTdGF0ZSIsIm51bSIsInJlbmRlciIsIm1zZ1N0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVlLE1BQU1BLE9BQU4sU0FBc0JDLCtDQUF0QixDQUFnQztBQU85Q0MsYUFBVyxDQUFDQyxLQUFELEVBQU87QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsc0NBTlA7QUFDVkMsY0FBUSxFQUFFLE1BREE7QUFFVkMscUJBQWUsRUFBRSxNQUZQO0FBR1ZDLGFBQU8sRUFBRTtBQUhDLEtBTU87O0FBRWpCLFNBQUtDLEtBQUwsR0FBYTtBQUNaQyxhQUFPLEVBQUUsQ0FERztBQUVaQyxTQUFHLEVBQUU7QUFGTyxLQUFiO0FBSUEsU0FBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQTs7QUFFREQsVUFBUSxDQUFDRSxDQUFELEVBQUc7QUFDVixTQUFLQyxRQUFMLENBQWVOLEtBQUQsSUFBUztBQUN0QixZQUFNTyxHQUFHLEdBQUdQLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixDQUE1QjtBQUNBLGFBQVE7QUFDUEEsZUFBTyxFQUFFTSxHQURGO0FBRVBMLFdBQUcsRUFBRSxjQUFjSztBQUZaLE9BQVI7QUFJQSxLQU5EO0FBT0E7O0FBRURDLFFBQU0sR0FBRTtBQUNQLFdBQU87QUFBRyxhQUFPLEVBQUUsS0FBS0wsUUFBakI7QUFBMkIsV0FBSyxFQUFFLEtBQUtNLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSixLQUFLVCxLQUFMLENBQVdFLEdBRFAsQ0FBUDtBQUdBOztBQTlCNkMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvdW50ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0bXNnU3R5bGUgPSB7XG5cdFx0Zm9udFNpemU6IFwiMTZwdFwiLFxuXHRcdGJhY2tncm91bmRDb2xvcjogXCIjZWVmXCIsXG5cdFx0cGFkZGluZzogXCI1cHhcIlxuXHR9XG5cblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y291bnRlcjogMCxcblx0XHRcdG1zZzogJ2NvdW50ZXI6IDAnLFxuXHRcdH1cblx0XHR0aGlzLmRvQWN0aW9uID0gdGhpcy5kb0FjdGlvbi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0ZG9BY3Rpb24oZSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSgoc3RhdGUpPT57XG5cdFx0XHRjb25zdCBudW0gPSBzdGF0ZS5jb3VudGVyICsgMTtcblx0XHRcdHJldHVybiAoe1xuXHRcdFx0XHRjb3VudGVyOiBudW0sXG5cdFx0XHRcdG1zZzogJ2NvdW50ZXI6ICcgKyBudW1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIDxwIG9uQ2xpY2s9e3RoaXMuZG9BY3Rpb259IHN0eWxlPXt0aGlzLm1zZ1N0eWxlfT5cblx0XHQgIHt0aGlzLnN0YXRlLm1zZ31cblx0XHQ8L3A+O1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Counter.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Counter */ \"./components/Counter.js\");\n/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/Style */ \"./static/Style.js\");\nvar _jsxFileName = \"/Users/koharakouki/Desktop/react_practice/re-next/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 21\n  }\n}, _static_Style__WEBPACK_IMPORTED_MODULE_2__[\"default\"], __jsx(\"h1\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }\n}, \"Next.js\"), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }\n}, \"Welcome to next.js!\"), __jsx(\"hr\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }\n}), __jsx(_components_Counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 3\n  }\n})));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxxRUFBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ2pCQSxxREFEaUIsRUFFbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZrQixFQUdsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhrQixFQUlsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSmtCLEVBS2xCLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUxrQixDQUFwQiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJztcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdGF0aWMvU3R5bGUnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PjxkaXY+XG4gIHtzdHlsZX1cbiAgPGgxPk5leHQuanM8L2gxPlxuICA8cD5XZWxjb21lIHRvIG5leHQuanMhPC9wPlxuICA8aHIgLz5cbiAgPENvdW50ZXIgLz5cbjwvZGl2PiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/koharakouki/Desktop/react_practice/re-next/static/Style.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n/* harmony default export */ __webpack_exports__[\"default\"] = (__jsx(\"style\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 16\n  }\n}, `\n  body {\n    margin:10px;\n    padding:5px;\n    color:#669;\n  }\n  header {\n    font-size:64pt;\n    font-weight:bold;\n    text-align:right;\n    letter-spacing:-8px;\n    color:#ddddff;\n    margin:-32px 5px;\n  }\n  footer {\n    color:#99c;\n    font-size:12pt;\n    text-align:right;\n    border-bottom:1px solid #99c;\n    margin:50px 0px 10px 0px;\n    position: relative;\n    bottom: 10px;\n    right: 10px;\n    left: 10px;\n  }\n  h1 {\n    font-size:22pt;\n    font-weight:bold;\n    text-align:left;\n    letter-spacing:0px;\n    color:#77a;\n    margin:-50px 0px 50px 0px;\n  }\n  p {\n      margin:0px;\n      color:#669;\n      font-size:16pt;\n  }\n`));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvU3R5bGUuanM/NzFhMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQVQsQ0FBZiIsImZpbGUiOiIuL3N0YXRpYy9TdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IDxzdHlsZT57YFxuICBib2R5IHtcbiAgICBtYXJnaW46MTBweDtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBjb2xvcjojNjY5O1xuICB9XG4gIGhlYWRlciB7XG4gICAgZm9udC1zaXplOjY0cHQ7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xuICAgIGxldHRlci1zcGFjaW5nOi04cHg7XG4gICAgY29sb3I6I2RkZGRmZjtcbiAgICBtYXJnaW46LTMycHggNXB4O1xuICB9XG4gIGZvb3RlciB7XG4gICAgY29sb3I6Izk5YztcbiAgICBmb250LXNpemU6MTJwdDtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM5OWM7XG4gICAgbWFyZ2luOjUwcHggMHB4IDEwcHggMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuICBoMSB7XG4gICAgZm9udC1zaXplOjIycHQ7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6MHB4O1xuICAgIGNvbG9yOiM3N2E7XG4gICAgbWFyZ2luOi01MHB4IDBweCA1MHB4IDBweDtcbiAgfVxuICBwIHtcbiAgICAgIG1hcmdpbjowcHg7XG4gICAgICBjb2xvcjojNjY5O1xuICAgICAgZm9udC1zaXplOjE2cHQ7XG4gIH1cbmB9PC9zdHlsZT47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/Style.js\n");

/***/ }),

/***/ 4:
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