let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

function toggleMenu() {
    menu.classList.toggle('abrir-menu');
    overlay.style.display = menu.classList.contains('abrir-menu') ? 'block' : 'none';
    btnMenu.classList.toggle('esconder-icone');
}

btnMenu.addEventListener('click', toggleMenu);

menu.addEventListener('click', () => {
    toggleMenu();
});

overlay.addEventListener('click', () => {
    toggleMenu();
});

// Adiciona um ouvinte de evento ao redimensionar a janela para desativar o menu mobile em telas maiores
window.addEventListener('resize', () => {
    if (window.innerWidth > 1020) {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none';
        btnMenu.classList.remove('esconder-icone');
    }
});
