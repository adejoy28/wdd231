import { funPlaces } from "../scripts/modules/funPlace.mjs";
const div = document.querySelector('#funPlaces');

// displayFunPlaces(data.places);




funPlaces.then(data => {
    data.places.forEach(place => {

        // const place = data.places;
        const section = `
        <section class="place-cards">
            <h2 class="place-title">${place.name}</h2>
            <p class="place-description">${place.description}</p>
            <div class="place-image">
                <img src="${place.photo_url}" alt="${place.name}" width="250" height="250" loading="lazy">
            </div>
            <p class="place-address">${place.address}</p>
            <button id="button" class="place-btn">Learn More</button>
        </section>
`;
        div.innerHTML += section;
    });
});




const welcomeModal = document.querySelector("#welcomeMessage");
const welcomeMessage = document.querySelector("#message");
const closeWelcomeModal = document.querySelector("#closeModal");

window.addEventListener("DOMContentLoaded", () => {

    let message = '';
    const dateTimeToday = Date.now();
    if (localStorage.getItem("dateTimeToday") === null) {
        localStorage.setItem("dateTimeToday", dateTimeToday);

        message = `Welcome! Let us know if you have any questions.`;
    } else {
        const gottenDate = new Date(Number(localStorage.getItem("dateTimeToday")));
        const nowDate = new Date;

        if (gottenDate.getDate() == nowDate.getDate()) {
            message = "Back so soon! Awesome!";
        } else {
            const numberOfDays = calcDays(gottenDate);
            message = `You last visited ${numberOfDays} days ago.`
        }
    }
    // displayModal(message);
});


// Display modal
function displayModal(message) {
    welcomeModal.showModal();
    welcomeMessage.textContent = message;
    closeWelcomeModal.addEventListener("click", () => {
        welcomeModal.close();
    });
}

function calcDays(pastDate) {
    // milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
    const msToDays = 86400000;
    return ((Date.now() - pastDate) / msToDays).toFixed();
}