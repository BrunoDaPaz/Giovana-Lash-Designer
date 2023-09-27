const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const imagemClicavel = document.getElementById('logo');

openMenu.addEventListener('click', () => {
    menu.style.display = 'flex';
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    openMenu.style.display = 'none';
    setTimeout(() => {
        menu.style.opacity = '1';
        menu.style.right = '0';
    }, 10);
});

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0';
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    setTimeout(() => {
        menu.removeAttribute('style');
        openMenu.removeAttribute('style');
    }, 200);
});

imagemClicavel.addEventListener('click', function() {
    window.location.href = 'https://api.whatsapp.com/message/QLVVFV3RGK33K1?autoload=1&app_absent=0';
});