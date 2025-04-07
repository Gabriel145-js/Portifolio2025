export default function btnModoEscuro() {

const containerBtn = document.querySelector('.btn-container');
const btnDark = document.querySelector('.btn-dark');
const icon = document.querySelector('.fa-moon');
let body = document.body

let mover = false;

containerBtn.addEventListener('click', () => {

    if (mover) {
        btnDark.style.transform = 'translate(0px)';
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        icon.style.transform = 'rotate(0deg)'; 
        body.classList.remove('modo-claro')
        
    } else {
        btnDark.style.transform = 'translate(30px)';
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.style.transform = 'rotate(180deg)'; 
        body.classList.add('modo-claro')
    }

    mover = !mover;
});
}