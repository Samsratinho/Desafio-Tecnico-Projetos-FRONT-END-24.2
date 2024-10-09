
/* Listener para mover o seletor para a página ativa
 * toda vez que a página mudar */
window.addEventListener('DOMContentLoaded', (event) => {
    // Registra o nome da página atual
    const currentPage = window.location.pathname.split('/').pop();
    // Seleciona todos os links da navbar
    const links = document.querySelectorAll('.nav-links a');

    // Verifica qual dos links está ativo
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            // Adiciona a classe 'active' ao link atual
            link.classList.add('active');
        }
    });
    
    // Seleciona o seletor
    const selector = document.querySelector('.nav-parent .selector');
    // Seleciona o link ativo
    const activeLink = document.querySelector('.nav-parent a.active');

    // Essas constantes armazenam a posição do link, do seletor e da div pai
    const linkRect = activeLink.getBoundingClientRect();
    const selectorRect = selector.getBoundingClientRect();
    const divRect = document.querySelector('.nav-parent').getBoundingClientRect();

    // Calcula a posição x para o seletor
    const xPos = Math.floor(linkRect.left - divRect.left - (selectorRect.width / 2) + (linkRect.width / 2));
    // Muda a posição do seletor
    selector.style.left = xPos + 'px';


    console.log("Active page: " + currentPage);
});