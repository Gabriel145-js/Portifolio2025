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
var listenerAdicionado = false;
function btnModoEscuro() {
  var containerBtn = document.querySelector('.btn-container');
  var btnDark = document.querySelector('.btn-dark');
  var icon = document.querySelector('.fa-moon') || document.querySelector('.fa-sun');
  var modoEscuro = document.querySelector('.modo-escuro-backgroud');
  var modoClaro = document.querySelector('.modo-claro-backgroud');
  var mover = false;

  // Configuração inicial
  btnDark.style.transform = 'translate(0px)';
  icon.classList.remove('fa-sun');
  icon.classList.add('fa-moon');
  icon.style.transform = 'rotate(0deg)';
  modoEscuro.style.display = 'block';
  modoClaro.style.display = 'none';
  document.body.classList.add('modo-escuro');
  if (!listenerAdicionado) {
    containerBtn.addEventListener('click', function () {
      if (mover) {
        // Modo claro
        btnDark.style.transform = 'translate(0px)';
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.style.transform = 'rotate(0deg)';
        modoEscuro.style.display = 'block';
        modoClaro.style.display = 'none';
        document.body.classList.remove('modo-escuro');
        document.body.classList.add('modo-claro');
      } else {
        // Modo escuro
        btnDark.style.transform = 'translate(30px)';
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.transform = 'rotate(180deg)';
        modoEscuro.style.display = 'none';
        modoClaro.style.display = 'block';
        document.body.classList.remove('modo-claro');
        document.body.classList.add('modo-escuro');
      }
      mover = !mover;
    });
    listenerAdicionado = true;
  }
}

/***/ }),

/***/ "./src/js modules/escritas.js":
/*!************************************!*\
  !*** ./src/js modules/escritas.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ escritasAnimation)
/* harmony export */ });
function escritasAnimation() {
  var escrita = document.querySelector('.alternar-escrita');
  var adjetivos = ['Front-end', 'Web', 'Criativo', 'Comunicativo', 'Flexível'];
  var index = 0;
  function atualizarTexto() {
    escrita.innerHTML = " ".concat(adjetivos[index]);
    index = (index + 1) % adjetivos.length;
  }
  setInterval(atualizarTexto, 1500);
  atualizarTexto();
}

/***/ }),

/***/ "./src/js modules/eventoscrol.js":
/*!***************************************!*\
  !*** ./src/js modules/eventoscrol.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ eventoScroll)
/* harmony export */ });
function eventoScroll() {
  window.addEventListener('scroll', function () {
    var sobreMim = document.querySelector('.container-sobre');
    var posicaoSobre = sobreMim.getBoundingClientRect().top;
    var alturaTela = window.innerHeight;
    if (posicaoSobre < alturaTela - 150) {
      sobreMim.classList.add('ativo');
    }
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

  // Função para atualizar o estado da lâmpada e das letras com base no modo
  function atualizarEstado() {
    if (body.classList.contains('modo-claro')) {
      luz.style.display = 'none'; // Desliga a lâmpada no modo claro
      body.style.color = '#000'; // Letras pretas no modo claro
    } else {
      luz.style.display = 'block'; // Liga a lâmpada no modo escuro
      body.style.color = '#fff'; // Letras brancas no modo escuro
    }
  }

  // Atualiza o estado inicial
  atualizarEstado();

  // Evento para alternar o estado ao clicar no botão
  containerBtn.addEventListener('click', function () {
    body.classList.toggle('modo-claro');
    body.classList.toggle('modo-escuro');
    atualizarEstado(); // Atualiza o estado após alternar o modo
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
/* harmony import */ var _js_modules_eventoscrol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js modules/eventoscrol */ "./src/js modules/eventoscrol.js");
/* harmony import */ var _js_modules_escritas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js modules/escritas */ "./src/js modules/escritas.js");






document.addEventListener('DOMContentLoaded', function () {
  (0,_js_modules_darkmode__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (window.location.pathname === '/') {
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./js modules/lampada */ "./src/js modules/lampada.js")).then(function (module) {
      var lampada = module["default"];
      lampada();
      (0,_js_modules_escritas__WEBPACK_IMPORTED_MODULE_5__["default"])();
    });
  }
  ;
  (0,_js_modules_clickSplash__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_js_modules_eventoscrol__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map