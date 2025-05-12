export default function bordaNavbar () { 
    document.querySelectorAll('.link-navbar').forEach(link=> {
    link.addEventListener('mouseenter',() => {
        link.classList.remove('retirar-borda')
        link.classList.add('borda-ativa')
    })

     link.addEventListener('mouseleave',() => {
        link.classList.remove('borda-ativa')
        link.classList.add('retirar-borda')
    })
})
} 