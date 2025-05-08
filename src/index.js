import './sass/styles.sass';
import btnModoEscuro from './js modules/darkmode';  
import lampada from './js modules/lampada';
import clickSplash from './js modules/clickSplash';
import eventoScroll from './js modules/eventoscrol';
import escritasAnimation from './js modules/escritas';

document.addEventListener('DOMContentLoaded', () => {
btnModoEscuro()

if (window.location.pathname === '/') {
    import('./js modules/lampada').then((module) => {
        const lampada = module.default;
        lampada();
        escritasAnimation()
    })};
clickSplash()
eventoScroll()


})
