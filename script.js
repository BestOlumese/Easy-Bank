const menuSmall = document.getElementById('menu-sm');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

openMenu.addEventListener('click', () => {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    menuSmall.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
    menuSmall.style.display = 'none';
});