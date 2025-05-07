export default function escritasAnimation() {
    const escrita = document.querySelector('.alternar-escrita');
    const adjetivos = ['Front-end', 'Web', 'Criativo', 'Comunicativo', 'Flexível'];

    let index = 0;

    
    function atualizarTexto() {
        
        escrita.innerHTML = ` ${adjetivos[index]}`; 
        index = (index + 1) % adjetivos.length; 
    }

    
    setInterval(atualizarTexto, 2000);


    atualizarTexto();
}