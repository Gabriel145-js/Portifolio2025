export default function modalContatos() {
    const modalContainer = document.querySelector('.modal-contatos-container');
    const modalTrigger = document.querySelector('.modal-contatos');
    const closeModalButton = document.querySelector('.fechar-modal');

    // Abre o modal ao clicar no link "Contatos"
    modalTrigger.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o comportamento padrão do link
        modalContainer.classList.add('modal-ativo');
    });

    // Fecha o modal ao clicar no botão "X"
    closeModalButton.addEventListener('click', () => {
        modalContainer.classList.remove('modal-ativo');
    });

    // Fecha o modal ao clicar fora dele
    modalContainer.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
            modalContainer.classList.remove('modal-ativo');
        }
    });
}