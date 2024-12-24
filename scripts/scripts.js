const menuButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    // alert('Menu button clicked!');
    navMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
});




const today = new Date();
const currentYear = document.getElementById("Year");

// Display the current year in the footer section
currentYear.innerHTML = today.getFullYear();

// Display last modified date
const lastModifiedDate = document.getElementById("lastModified");

// Display the current year in the footer section
lastModifiedDate.innerHTML = document.lastModified;



