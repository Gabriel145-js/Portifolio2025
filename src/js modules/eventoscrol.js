export default function eventoScroll () {

window.addEventListener('scroll', () => {
    const sobreMim = document.querySelector('.container-sobre')
    const posicaoSobre = sobreMim.getBoundingClientRect().top
    const alturaTela = window.innerHeight

    if(posicaoSobre < alturaTela - 150){
        sobreMim.classList.add('ativo')
    }

})
}