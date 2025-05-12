export default function randomImg() {
    const image = document.querySelector('.about-skills img');

    function generateSmoothClipPath() {
       
        const top = `${Math.random() * 10 + 5}%`;
        const right = `${Math.random() * 10 + 5}%`;
        const bottom = `${Math.random() * 10 + 5}%`;
        const left = `${Math.random() * 10 + 5}%`;

        const topLeftRadius = `${Math.random() * 30 + 20}%`;
        const topRightRadius = `${Math.random() * 30 + 20}%`;
        const bottomRightRadius = `${Math.random() * 30 + 20}%`;
        const bottomLeftRadius = `${Math.random() * 30 + 20}%`;

        return `inset(${top} ${right} ${bottom} ${left} round ${topLeftRadius} ${topRightRadius} ${bottomRightRadius} ${bottomLeftRadius})`;
    }

    // Define o formato inicial ao carregar a página
    const initialClipPath = generateSmoothClipPath();
    image.style.clipPath = initialClipPath;
    image.style.webkitClipPath = initialClipPath; // Compatibilidade com navegadores WebKit


    setInterval(() => {
        const newClipPath = generateSmoothClipPath();
        image.style.clipPath = newClipPath;
        image.style.webkitClipPath = newClipPath;
    }, 2000);
}