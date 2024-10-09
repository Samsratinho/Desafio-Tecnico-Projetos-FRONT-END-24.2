
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

    // Define a posição do seletor com base na página ativa
    switch(currentPage) {
        case 'home.html':
            selector.style.left = 40 + 'px';
            break;
        case 'videos.html':
            selector.style.left = 120 + 'px';
            break;
        case 'forum.html':
            selector.style.left = 205 + 'px';
            break;
        case 'pais_e_profs.html':
            selector.style.left = 310 + 'px';
            break;
        default:
            selector.style.left = 40 + 'px';
            selector.style.display = 'none';
            break;
    }


    console.log("Active page: " + currentPage);
});