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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	function webpackEmptyContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackEmptyContext.keys = function() { return []; };
	webpackEmptyContext.resolve = webpackEmptyContext;
	module.exports = webpackEmptyContext;
	webpackEmptyContext.id = 0;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var a = './a';

	// console.log(require.resolve(a));

	// As long as module `a` is set as an entry point, Webpack refuses to generate a
	// mapping from path to internal module ID (AKA context in Webpack parlance) for
	// module `a` in the bundle.
	fetch(__webpack_require__.p + 'a.js').then(function () {
	  // Uncommenting this line will result in a build error
	  // console.log(require.resolve('./a'));

	  // Same as Webpack 1's bad case, Webpack 2 is refuses to generate a mapping
	  // from path to internal module ID
	  console.log(/*require.resolve*/(!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
	});


/***/ }
/******/ ]);