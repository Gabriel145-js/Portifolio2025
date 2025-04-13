export default function clickSplash() {
    document.addEventListener('click', (e) => {
        const container = document.querySelector('.click-container');

        const splashes = [
            '/src/imgs/svgs/splashsvg/splash.svg',
            '/src/imgs/svgs/splashsvg/splashAmarelo.svg',
            '/src/imgs/svgs/splashsvg/splashAzul.svg',
            '/src/imgs/svgs/splashsvg/splashRoxo.svg',
      
        ];

        const randomSplash = splashes[Math.floor(Math.random() * splashes.length)];

        const splash = document.createElement('div');
        splash.classList.add('splash');
        splash.style.left = `${e.clientX - 25}px`; 
        splash.style.top = `${e.clientY - 25}px`;

        splash.innerHTML = `<img src="${randomSplash}" alt="splash" style="width: 50px; height: 50px;">`;


        container.appendChild(splash);

        setTimeout(() => {
            splash.remove();
        }, 1000);
    });
}