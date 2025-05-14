export default function animacaoEntrada() {

    function ativarAnimacaoAoScroll(seletor) {
        const elementos = document.querySelectorAll(seletor);

        function verificarVisibilidade() {
            elementos.forEach(el => {
                if (el.classList.contains('ativo')) return;

                const rect = el.getBoundingClientRect();
                const alturaElemento = rect.height;
                const alturaViewport = window.innerHeight;

                const parteVisivel = Math.min(rect.bottom, alturaViewport) - Math.max(rect.top, 0);

                const porcentagemVisivel = parteVisivel / alturaElemento;

                if (porcentagemVisivel >= 0.2) {
                    el.classList.add('ativo');

                } else {
                    el.classList.remove('ativo');

                }
            });
        }

        window.addEventListener('scroll', verificarVisibilidade);
        verificarVisibilidade();
    }

    ativarAnimacaoAoScroll('.animar-lado');


    
      function ativarAnimacaoAoScrollEsquerdo(seletor) {
        const elementos = document.querySelectorAll(seletor);

        function verificarVisibilidade() {
            elementos.forEach(el => {
                if (el.classList.contains('ativo-esquerdo')) return;

                const rect = el.getBoundingClientRect();
                const alturaElemento = rect.height;
                const alturaViewport = window.innerHeight;

                const parteVisivel = Math.min(rect.bottom, alturaViewport) - Math.max(rect.top, 0);

                const porcentagemVisivel = parteVisivel / alturaElemento;

                if (porcentagemVisivel >= 0.2) {
                    el.classList.add('ativo-esquerdo');

                } else {
                    el.classList.remove('ativo-esquerdo');

                }
            });
        }

        window.addEventListener('scroll', verificarVisibilidade);
        verificarVisibilidade();
    }

    ativarAnimacaoAoScrollEsquerdo('.animar-lado-esquerdo');

}