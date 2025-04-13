export default function btnModoEscuro() {
    const containerBtn = document.querySelector('.btn-container');
    const btnDark = document.querySelector('.btn-dark');
    const icon = document.querySelector('.fa-moon');
    const modoEscuro = document.querySelector('.modo-escuro');
    const modoClaro = document.querySelector('.modo-claro');
    
    let mover = false;

  
    btnDark.style.transform = 'translate(0px)';
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    icon.style.transform = 'rotate(0deg)';
    modoEscuro.style.display = 'block';
    modoClaro.style.display = 'none';

    containerBtn.addEventListener('click', () => {
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