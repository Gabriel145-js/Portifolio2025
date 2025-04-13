/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js modules/clickSplash.js":
/*!***************************************!*\
  !*** ./src/js modules/clickSplash.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clickSplash)
/* harmony export */ });
function clickSplash() {
  document.addEventListener('click', function (e) {
    var container = document.querySelector('.click-container');
    var splashes = ['/src/imgs/svgs/splashsvg/splash.svg', '/src/imgs/svgs/splashsvg/splashAmarelo.svg', '/src/imgs/svgs/splashsvg/splashAzul.svg', '/src/imgs/svgs/splashsvg/splashRoxo.svg'];
    var randomSplash = splashes[Math.floor(Math.random() * splashes.length)];
    var splash = document.createElement('div');
    splash.classList.add('splash');
    splash.style.left = "".concat(e.clientX - 25, "px");
    splash.style.top = "".concat(e.clientY - 25, "px");
    splash.innerHTML = "<img src=\"".concat(randomSplash, "\" alt=\"splash\" style=\"width: 50px; height: 50px;\">");
    container.appendChild(splash);
    setTimeout(function () {
      splash.remove();
    }, 1000);
  });
}

/***/ }),

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
  var modoEscuro = document.querySelector('.modo-escuro');
  var modoClaro = document.querySelector('.modo-claro');
  var mover = false;
  btnDark.style.transform = 'translate(0px)';
  icon.classList.remove('fa-sun');
  icon.classList.add('fa-moon');
  icon.style.transform = 'rotate(0deg)';
  modoEscuro.style.display = 'block';
  modoClaro.style.display = 'none';
  containerBtn.addEventListener('click', function () {
    if (mover) {
      btnDark.style.transform = 'translate(0px)';
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      icon.style.transform = 'rotate(0deg)';
      modoEscuro.style.display = 'block';
      modoClaro.style.display = 'none';
    } else {
      btnDark.style.transform = 'translate(30px)';
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      icon.style.transform = 'rotate(180deg)';
      modoEscuro.style.display = 'none';
      modoClaro.style.display = 'block';
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
  var containerBtn = document.querySelector('.btn-container');
  var luz = document.querySelector('.brilho-luz');
  var body = document.body;
  var ligar = true;
  if (body.classList.contains('modo-claro')) {
    luz.style.display = 'none';
    ligar = false;
  } else {
    luz.style.display = 'flex';
    ligar = true;
  }
  containerBtn.addEventListener('click', function () {
    if (body.classList.contains('modo-claro')) {
      luz.style.display = 'none';
      ligar = false;
    } else {
      if (ligar) {
        luz.style.display = 'none';
      } else {
        luz.style.display = 'flex';
      }
      ligar = !ligar;
    }
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
/* harmony import */ var _js_modules_clickSplash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js modules/clickSplash */ "./src/js modules/clickSplash.js");




(0,_js_modules_darkmode__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_js_modules_lampada__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_js_modules_clickSplash__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map