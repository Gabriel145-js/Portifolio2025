/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js modules/animacaoEntrada.js":
/*!*******************************************!*\
  !*** ./src/js modules/animacaoEntrada.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ animacaoEntrada)
/* harmony export */ });
function animacaoEntrada() {
  function ativarAnimacaoAoScroll(seletor) {
    var elementos = document.querySelectorAll(seletor);
    function verificarVisibilidade() {
      elementos.forEach(function (el) {
        if (el.classList.contains('ativo')) return;
        var rect = el.getBoundingClientRect();
        var alturaElemento = rect.height;
        var alturaViewport = window.innerHeight;
        var parteVisivel = Math.min(rect.bottom, alturaViewport) - Math.max(rect.top, 0);
        var porcentagemVisivel = parteVisivel / alturaElemento;
        if (porcentagemVisivel >= 0.2) {
          el.classList.add('ativo');
        } else {
          el.classList.remove('ativo');
        }
      });
    }
    window.addEventListener('scroll', verificarVisibilidade);
    verificarVisibilidade();
  }
  ativarAnimacaoAoScroll('.animar-lado');
  function ativarAnimacaoAoScrollEsquerdo(seletor) {
    var elementos = document.querySelectorAll(seletor);
    function verificarVisibilidade() {
      elementos.forEach(function (el) {
        if (el.classList.contains('ativo-esquerdo')) return;
        var rect = el.getBoundingClientRect();
        var alturaElemento = rect.height;
        var alturaViewport = window.innerHeight;
        var parteVisivel = Math.min(rect.bottom, alturaViewport) - Math.max(rect.top, 0);
        var porcentagemVisivel = parteVisivel / alturaElemento;
        if (porcentagemVisivel >= 0.2) {
          el.classList.add('ativo-esquerdo');
        } else {
          el.classList.remove('ativo-esquerdo');
        }
      });
    }
    window.addEventListener('scroll', verificarVisibilidade);
    verificarVisibilidade();
  }
  ativarAnimacaoAoScrollEsquerdo('.animar-lado-esquerdo');
}

/***/ }),

/***/ "./src/js modules/backgroudnavbar.js":
/*!*******************************************!*\
  !*** ./src/js modules/backgroudnavbar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ backgroudNavbar)
/* harmony export */ });
function backgroudNavbar() {
  var navbar = document.querySelector('.container-navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });
}

/***/ }),

/***/ "./src/js modules/bordaNavbar.js":
/*!***************************************!*\
  !*** ./src/js modules/bordaNavbar.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bordaNavbar)
/* harmony export */ });
function bordaNavbar() {
  document.querySelectorAll('.link-navbar').forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      link.classList.remove('retirar-borda');
      link.classList.add('borda-ativa');
    });
    link.addEventListener('mouseleave', function () {
      link.classList.remove('borda-ativa');
      link.classList.add('retirar-borda');
    });
  });
}

/***/ }),

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
    var splashes = ['./imgs/svgs/splashsvg/splash.svg', './imgs/svgs/splashsvg/splashAmarelo.svg', './imgs/svgs/splashsvg/splashAzul.svg', './imgs/svgs/splashsvg/splashRoxo.svg'];
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

  // Evento de clique para alternar o modo
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
  var index = 0; // Índice da palavra atual
  var charIndex = 0; // Índice do caractere atual
  var isDeleting = false; // Indica se está apagando o texto

  function digitar() {
    var palavraAtual = adjetivos[index]; // Palavra atual do array
    var textoVisivel = palavraAtual.slice(0, charIndex); // Texto visível no momento

    escrita.textContent = textoVisivel; // Atualiza o texto na tela

    if (!isDeleting) {
      // Se estiver digitando
      if (charIndex < palavraAtual.length) {
        charIndex++; // Avança para o próximo caractere
      } else {
        // Quando a palavra estiver completamente digitada
        isDeleting = true; // Começa a apagar
        setTimeout(digitar, 1000); // Aguarda 0.5s antes de apagar
        return;
      }
    } else {
      // Se estiver apagando
      if (charIndex > 0) {
        charIndex--; // Remove um caractere
      } else {
        isDeleting = false; // Volta a digitar
        index = (index + 1) % adjetivos.length; // Avança para a próxima palavra
      }
    }

    // Define o tempo entre cada caractere (mais lento ao apagar)
    var delay = isDeleting ? 50 : 150;
    setTimeout(digitar, delay);
  }
  digitar();
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

/***/ "./src/js modules/modalContatos.js":
/*!*****************************************!*\
  !*** ./src/js modules/modalContatos.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modalContatos)
/* harmony export */ });
function modalContatos() {
  var modalContainer = document.querySelector('.modal-contatos-container');
  var modalTrigger = document.querySelector('.modal-contatos');
  var closeModalButton = document.querySelector('.fechar-modal');

  // Abre o modal ao clicar no link "Contatos"
  modalTrigger.addEventListener('click', function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    modalContainer.classList.add('modal-ativo');
  });

  // Fecha o modal ao clicar no botão "X"
  closeModalButton.addEventListener('click', function () {
    modalContainer.classList.remove('modal-ativo');
  });

  // Fecha o modal ao clicar fora dele
  modalContainer.addEventListener('click', function (event) {
    if (event.target === modalContainer) {
      modalContainer.classList.remove('modal-ativo');
    }
  });
}

/***/ }),

/***/ "./src/js modules/randomimg.js":
/*!*************************************!*\
  !*** ./src/js modules/randomimg.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ randomImg)
/* harmony export */ });
function randomImg() {
  var image = document.querySelector('.about-skills img');
  function generateSmoothClipPath() {
    var top = "".concat(Math.random() * 10 + 5, "%");
    var right = "".concat(Math.random() * 10 + 5, "%");
    var bottom = "".concat(Math.random() * 10 + 5, "%");
    var left = "".concat(Math.random() * 10 + 5, "%");
    var topLeftRadius = "".concat(Math.random() * 30 + 20, "%");
    var topRightRadius = "".concat(Math.random() * 30 + 20, "%");
    var bottomRightRadius = "".concat(Math.random() * 30 + 20, "%");
    var bottomLeftRadius = "".concat(Math.random() * 30 + 20, "%");
    return "inset(".concat(top, " ").concat(right, " ").concat(bottom, " ").concat(left, " round ").concat(topLeftRadius, " ").concat(topRightRadius, " ").concat(bottomRightRadius, " ").concat(bottomLeftRadius, ")");
  }

  // Define o formato inicial ao carregar a página
  var initialClipPath = generateSmoothClipPath();
  image.style.clipPath = initialClipPath;
  image.style.webkitClipPath = initialClipPath; // Compatibilidade com navegadores WebKit

  setInterval(function () {
    var newClipPath = generateSmoothClipPath();
    image.style.clipPath = newClipPath;
    image.style.webkitClipPath = newClipPath;
  }, 2000);
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
/* harmony import */ var _js_modules_escritas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js modules/escritas */ "./src/js modules/escritas.js");
/* harmony import */ var _js_modules_randomimg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js modules/randomimg */ "./src/js modules/randomimg.js");
/* harmony import */ var _js_modules_bordaNavbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js modules/bordaNavbar */ "./src/js modules/bordaNavbar.js");
/* harmony import */ var _js_modules_animacaoEntrada__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js modules/animacaoEntrada */ "./src/js modules/animacaoEntrada.js");
/* harmony import */ var _js_modules_backgroudnavbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js modules/backgroudnavbar */ "./src/js modules/backgroudnavbar.js");
/* harmony import */ var _js_modules_modalContatos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js modules/modalContatos */ "./src/js modules/modalContatos.js");










document.addEventListener('DOMContentLoaded', function () {
  (0,_js_modules_darkmode__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_js_modules_lampada__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_js_modules_escritas__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_js_modules_clickSplash__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_js_modules_randomimg__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_js_modules_bordaNavbar__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_js_modules_animacaoEntrada__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_js_modules_backgroudnavbar__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_js_modules_modalContatos__WEBPACK_IMPORTED_MODULE_9__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map