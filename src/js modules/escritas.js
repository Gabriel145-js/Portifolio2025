export default function escritasAnimation() {
    const escrita = document.querySelector('.alternar-escrita');
    const adjetivos = ['Front-end', 'Web', 'Criativo', 'Comunicativo', 'Flexível'];

    let index = 0; // Índice da palavra atual
    let charIndex = 0; // Índice do caractere atual
    let isDeleting = false; // Indica se está apagando o texto

    function digitar() {
        const palavraAtual = adjetivos[index]; // Palavra atual do array
        const textoVisivel = palavraAtual.slice(0, charIndex); // Texto visível no momento

        escrita.textContent = textoVisivel; // Atualiza o texto na tela

        if (!isDeleting) {
            // Se estiver digitando
            if (charIndex < palavraAtual.length) {
                charIndex++; // Avança para o próximo caractere
            } else {
                // Quando a palavra estiver completamente digitada
                isDeleting = true; // Começa a apagar
                setTimeout(digitar, 1000); // Aguarda 0.5s antes de apagar
                return;
            }
        } else {
            // Se estiver apagando
            if (charIndex > 0) {
                charIndex--; // Remove um caractere
            } else {
                
                isDeleting = false; // Volta a digitar
                index = (index + 1) % adjetivos.length; // Avança para a próxima palavra
            }
        }

        // Define o tempo entre cada caractere (mais lento ao apagar)
        const delay = isDeleting ? 50 : 150;
        setTimeout(digitar, delay);
    }

    digitar(); 
}