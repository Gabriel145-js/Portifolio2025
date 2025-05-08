let listenerAdicionado = false;

export default function btnModoEscuro() {
    const containerBtn = document.querySelector('.btn-container');
    const btnDark = document.querySelector('.btn-dark');
    const icon = document.querySelector('.fa-moon') || document.querySelector('.fa-sun');
    const modoEscuro = document.querySelector('.modo-escuro-backgroud');
    const modoClaro = document.querySelector('.modo-claro-backgroud');

    let mover = false;

    // Configuração inicial
    btnDark.style.transform = 'translate(0px)';
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    icon.style.transform = 'rotate(0deg)';
    modoEscuro.style.display = 'block';
    modoClaro.style.display = 'none';
    document.body.classList.add('modo-escuro'); 

    if (!listenerAdicionado) {
        containerBtn.addEventListener('click', () => {
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
