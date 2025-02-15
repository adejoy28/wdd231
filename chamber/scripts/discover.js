// Import the funPlaces module
import { funPlaces } from "../scripts/modules/funPlace.mjs";

// Select the div where the places will be displayed
const div = document.querySelector('#funPlaces');

// Fetch and display fun places
funPlaces.then(data => {
    data.places.forEach(place => {
        // Create a section for each place
        const section = `
        <section class="place-cards">
            <h2 class="place-title">${place.name}</h2>
            <p class="place-description">${place.description}</p>
            <figure class="place-image">
                <img src="${place.photo_url}" alt="${place.name}" width="300" height="200" loading="lazy">
            </figure>
            <address class="place-address">${place.address}</address>
            <button id="button" class="place-btn">Learn More</button>
        </section>
        `;
        // Append the section to the div
        div.innerHTML += section;
    });
});

