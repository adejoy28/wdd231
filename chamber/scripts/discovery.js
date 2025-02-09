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
            <button type="button" id="button" class="btn">Learn More</button>
        </section>
`;
        div.innerHTML += section;
    });
});