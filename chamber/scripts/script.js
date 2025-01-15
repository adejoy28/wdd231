const hamBtn = document.querySelector('#hamburger-btn');
const nav = document.querySelector('#animate-me');

hamBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
});
