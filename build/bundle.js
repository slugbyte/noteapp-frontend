/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n// webpack assets\n\n__webpack_require__(1);\n__webpack_require__(2);\n\n// npm modules\nvar angular = __webpack_require__(6);\n\n// angular module\nangular.module('noteApp', []);\n\n// angular services\n__webpack_require__(8);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/entry.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/entry.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__.p + \"index.html\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/file-loader?name=[name].[ext]!./app/html/index.html\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/html/index.html?./~/file-loader?name=%5Bname%5D.%5Bext%5D");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/scss/base.scss\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/scss/base.scss?");

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(7);\nmodule.exports = angular;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/angular/index.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/angular/index.js?");

/***/ },
/* 7 */
/***/ function(module, exports) {


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n// webpack assets\n\n__webpack_require__(9);\n\nvar angular = __webpack_require__(6);\n\nangular.module('noteApp').directive('appMain', function () {\n  return {\n    restrict: 'E',\n    replace: true,\n    template: __webpack_require__(11),\n    controller: [MainController],\n    controllerAs: 'mainCtrl',\n    bindToController: true,\n    scope: {}\n  };\n});\n\nfunction MainController() {\n  this.apiURL = (\"http://localhost:3000\");\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/main/index.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/main/index.js?");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/main/main.scss\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/main/main.scss?");

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	eval("module.exports = \"<main class=\\\"app-main\\\">\\n  <p> {{mainCtrl.apiURL}} </p>\\n</main>\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/main/main.html\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/main/main.html?");

/***/ }
/******/ ]);