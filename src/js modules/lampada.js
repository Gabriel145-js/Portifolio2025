export default function lampada() {
    const containerBtn = document.querySelector('.btn-container');
    const luz = document.querySelector('.brilho-luz');
    const body = document.body;

    // Função para atualizar o estado da lâmpada e das letras com base no modo
    function atualizarEstado() {
        if (body.classList.contains('modo-claro')) {
            luz.style.display = 'none'; // Desliga a lâmpada no modo claro
            body.style.color = '#000'; // Letras pretas no modo claro
        } else {
            luz.style.display = 'block'; // Liga a lâmpada no modo escuro
            body.style.color = '#fff'; // Letras brancas no modo escuro
        }
    }

    // Atualiza o estado inicial
    atualizarEstado();

    // Evento para alternar o estado ao clicar no botão
    containerBtn.addEventListener('click', () => {
        body.classList.toggle('modo-claro');
        body.classList.toggle('modo-escuro');
        atualizarEstado(); // Atualiza o estado após alternar o modo
    });
}