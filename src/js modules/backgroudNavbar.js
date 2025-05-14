export default function backgroudNavbar() {
    const navbar = document.querySelector('.container-navbar'); 

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('navbar-scroll'); 
        } else {
            navbar.classList.remove('navbar-scroll'); 
        }
    });
}