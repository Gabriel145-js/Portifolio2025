export default function lampada() {
    const containerBtn = document.querySelector('.btn-container');
    const luz = document.querySelector('.brilho-luz');
    const body = document.body;

    let ligar = true; 

    if (body.classList.contains('modo-claro')) {
        luz.style.display = 'none'; 
        ligar = false;
    } else {
        luz.style.display = 'flex'; 
        ligar = true;
    }

    containerBtn.addEventListener('click', () => {
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