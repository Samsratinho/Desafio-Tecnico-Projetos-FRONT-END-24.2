
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
    
    if (currentPage === 'home.html') {
        selector.style.left = 40 + 'px';
    }
    else if (currentPage === 'videos.html') {
        selector.style.left = 120 + 'px';
    }
    else if (currentPage === 'forum.html') {
        selector.style.left = 205 + 'px';
    }
    else if (currentPage === 'pais_e_profs.html') {
        selector.style.left = 310 + 'px';
    }


    console.log("Active page: " + currentPage);
});