/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js modules/darkmode.js":
/*!************************************!*\
  !*** ./src/js modules/darkmode.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ btnModoEscuro)
/* harmony export */ });
function btnModoEscuro() {
  var containerBtn = document.querySelector('.btn-container');
  var btnDark = document.querySelector('.btn-dark');
  var icon = document.querySelector('.fa-moon');
  var body = document.body;
  var mover = false;
  containerBtn.addEventListener('click', function () {
    if (mover) {
      btnDark.style.transform = 'translate(0px)';
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      icon.style.transform = 'rotate(0deg)';
      body.classList.remove('modo-claro');
    } else {
      btnDark.style.transform = 'translate(30px)';
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      icon.style.transform = 'rotate(180deg)';
      body.classList.add('modo-claro');
    }
    mover = !mover;
  });
}

/***/ }),

/***/ "./src/js modules/lampada.js":
/*!***********************************!*\
  !*** ./src/js modules/lampada.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ lampada)
/* harmony export */ });
function lampada() {
  var lampada = document.querySelector('.lampada');
  var tela = document.querySelector('.tela');
  var ligar = false;
  tela.addEventListener('click', function () {
    if (ligar) {
      lampada.style.display = 'flex';
    } else {
      lampada.style.display = 'none';
    }
    ligar = !ligar;
  });
}

/***/ }),

/***/ "./src/sass/styles.sass":
/*!******************************!*\
  !*** ./src/sass/styles.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_styles_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/styles.sass */ "./src/sass/styles.sass");
/* harmony import */ var _js_modules_darkmode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js modules/darkmode */ "./src/js modules/darkmode.js");
/* harmony import */ var _js_modules_lampada__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js modules/lampada */ "./src/js modules/lampada.js");



(0,_js_modules_darkmode__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_js_modules_lampada__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map