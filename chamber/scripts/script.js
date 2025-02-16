const hamBtn = document.querySelector('#hamburger-btn');
const nav = document.querySelector('#animate-me');

hamBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    nav.classList.toggle('visibility');
    hamBtn.classList.toggle('open');
});

// Select elements for the welcome modal
const welcomeModal = document.querySelector("#welcomeMessage");
const welcomeMessage = document.querySelector("#message");
const closeWelcomeModal = document.querySelector("#closeModal");

// Event listener for DOM content loaded
window.addEventListener("DOMContentLoaded", () => {
    let message = '';
    const dateTimeToday = Date.now();

    // Check if the user has visited before
    if (localStorage.getItem("dateTimeToday") === null) {
        // First time visit
        message = `Welcome! Let us know if you have any questions.`;
    } else {
        // Returning visit
        const gottenDate = new Date(Number(localStorage.getItem("dateTimeToday")));
        const nowDate = new Date();

        if (gottenDate.getDate() === nowDate.getDate() && gottenDate.getMonth() === nowDate.getMonth()) {
            // alert(nowDate.getMonth())
            message = "Back so soon! Awesome!";
        } else {
            const numberOfDays = calcDays(gottenDate);
            message = `You last visited ${numberOfDays} days ago.`;
        }
    }
    // Display the welcome modal with the message
    displayModal(message);
    localStorage.setItem("dateTimeToday", dateTimeToday);
});

// Function to display the welcome modal
function displayModal(message) {
    welcomeModal.showModal();
    welcomeMessage.textContent = message;
    closeWelcomeModal.addEventListener("click", () => {
        welcomeModal.close();
    });
}

// Function to calculate the number of days between two dates
function calcDays(pastDate) {
    // milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
    const msToDays = 86400000;
    return ((Date.now() - pastDate) / msToDays).toFixed();
}


// WORK LATER ON DYNAMICALLY ADDING ACTIVE TO NAV LINKS

// const navLinks = document.querySelectorAll('li');

// // console.log(navLinks);

// navLinks.forEach(link => {
//     console.log(link.currentTarget);
// })

import { lasModDate } from "./modules/functionsLib.mjs";
// import { lasModDate } from "./modules/getdates.js";
lasModDate();