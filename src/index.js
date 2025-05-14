import './sass/styles.sass';
import btnModoEscuro from './js modules/darkmode';  
import lampada from './js modules/lampada';
import clickSplash from './js modules/clickSplash';
import escritasAnimation from './js modules/escritas';
import randomImg from './js modules/randomimg';
import bordaNavbar from './js modules/bordaNavbar';
import animacaoEntrada from './js modules/animacaoEntrada';
import backgroudNavbar from './js modules/backgroudnavbar';
import modalContatos from './js modules/modalContatos';

document.addEventListener('DOMContentLoaded', () => {
btnModoEscuro()
lampada()
escritasAnimation()
clickSplash()
randomImg()
bordaNavbar()
animacaoEntrada()
backgroudNavbar()
modalContatos()

})


