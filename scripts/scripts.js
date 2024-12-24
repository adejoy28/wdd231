const menuButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    // alert('Menu button clicked!');
    navMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
});