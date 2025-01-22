const hamBtn = document.querySelector('#hamburger-btn');
const nav = document.querySelector('#animate-me');

hamBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamBtn.classList.toggle('open');
});


// WORK LATER ON DYNAMICALLY ADDING ACTIVE TO NAV LINKS

// const navLinks = document.querySelectorAll('li');

// // console.log(navLinks);

// navLinks.forEach(link => {
//     console.log(link.currentTarget);
// })

import { lasModDate } from "./modules/getdates.js";
lasModDate();