export default function lampada() {

const lampada = document.querySelector('.lampada')
const tela = document.querySelector('.tela')

let ligar = false 

tela.addEventListener('click', () => {
    if(ligar){
    lampada.style.display = 'flex'
    }
    else {
        lampada.style.display = 'none'
    }

    ligar = !ligar
})

}