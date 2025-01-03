const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// fetch(url, {})
//     .then(response => response.json())
//     .then(data => {
//         console.table(data.prophets)

//         // data.forEach(datum =>
//         //     console.log(datum));
//     });


const getProphetData = async (filter = "all") => {
    // const prophets = await fetch(url);
    // const data = await prophets.json();

    let prophets = await jsonFetch(url);
    switch (filter) {
        case "idaho":
            prophets = prophets.filter((prophet) => prophet.birthplace === "Idaho");
            break;
        case "nonus":
            prophets = prophets.filter((prophet) => prophet.birthplace === "England");
            break;
        case "ten":
            prophets = prophets.filter((prophet) => prophet.length >= 15);
            break;
        case "childs":
            prophets = prophets.filter((prophet) => prophet.numofchildren < 5);
            break;
        case "childl":
            prophets = prophets.filter((prophet) => prophet.numofchildren >= 10);
            break;
        case "old":
            prophets = prophets.filter(
                (prophet) => getAgeAtDeathInYears(prophet.birthdate, prophet.death) >= 95
            );
            break;
        default:
            break;
    }

    // console.table(data.prophets)
    displayProphets(prophets);
}

async function jsonFetch(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.prophets;
}


const displayProphets = (prophets) => {
    let cards = document.querySelector("#cards");

    cards.textContent = "";
    prophets.forEach(prophet => {


        const card = document.createElement("section");
        const h2 = document.createElement("h2");

        const fullName = `${prophet.name} ${prophet.lastname}`;
        h2.textContent = fullName;

        const portrait = document.createElement("img");
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${fullName} - ${prophet.order}th Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', 340)
        portrait.setAttribute('height', 440);

        card.appendChild(h2);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}


getProphetData();

// buttons
// this top replaced with the following code
const all = document.querySelector("#all");
const idaho = document.querySelector("#idaho");
const nonus = document.querySelector("#nonus");
const ten = document.querySelector("#ten");
const childs = document.querySelector("#childs");
const childl = document.querySelector("#childl");
const old = document.querySelector("#old");


all.addEventListener("click", () => {
    clearButtonClasses();
    getProphetData("all");
    all.classList.add("active");
});

idaho.addEventListener("click", () => {
    clearButtonClasses();
    getProphetData("idaho");
    idaho.classList.add("active");
});

nonus.addEventListener("click", () => {
    clearButtonClasses();
    getProphetData("nonus");
    nonus.classList.add("active");
});

ten.addEventListener("click", () => {
    clearButtonClasses();
    getProphetData("ten");
    ten.classList.add("active");
});

childs.addEventListener("click", () => {
    clearButtonClasses();
    getProphetData("childs");
    childs.classList.add("active");
});

childl.addEventListener("click", () => {
    clearButtonClasses();
    getProphetData("childl");
    childl.classList.add("active");
});

old.addEventListener("click", () => {
    clearButtonClasses();
    getProphetData("old");
    old.classList.add("active");
});

function getAgeAtDeathInYears(birthdate, deathdate) {
    let birth = new Date(birthdate);
    let death = new Date(deathdate);
    if (deathdate === null) {
        death = new Date();
    }
    return Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
}

function clearButtonClasses() {
    filterbuttons = document.querySelectorAll("button");
    filterbuttons.forEach(button => button.className = "");
}



// const getProphets = async (filter = "all") => {
//     let prophets = await jsonFetch(url);

//     switch (filter) {
//         case "idaho":
//             prophets = prophets.filter((prophet) => prophet.birthplace === "Idaho");
//             break;
//         case "nonus":
//             prophets = prophets.filter((prophet) => prophet.birthplace === "England");
//             break;
//         case "ten":
//             prophets = prophets.filter((prophet) => prophet.length >= 15);
//             break;
//         case "childs":
//             prophets = prophets.filter((prophet) => prophet.numofchildren < 5);
//             break;
//         case "childl":
//             prophets = prophets.filter((prophet) => prophet.numofchildren >= 10);
//             break;
//         case "old":
//             prophets = prophets.filter(
//                 (prophet) => getAgeAtDeathInYears(prophet.birthdate, prophet.death) >= 95
//             );
//             break;
//         default:
//             break;
//     }
