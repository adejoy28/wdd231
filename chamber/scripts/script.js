const hamBtn = document.querySelector('#hamburger-btn');
const nav = document.querySelector('#animate-me');

hamBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
});

const url = "./data/members.json";


// fetch(url, {})
//     .then(response => {
//         console.log(response.json())
//     })
//     .then(data => {
//         console.log(data.members)
//     })
//     .catch(error => {
//         console.log(error);
//     })

const getMembersData = async (url) => {
    const members = await fetch(url);
    const data = await members.json();

    // console.table(data.members);

    await displayMembersData(data.members);
}

getMembersData(url);

const cards = document.querySelector("#cards");

const displayMembersData = async (data) => {

    data.forEach(item => {
        // createSection(item);
        cards.innerHTML += createSection(item);
    });

    console.log(cards);
}


const createSection = (item) => {
    const section = `<section class="card" id="card">
    <span class="name">${item.name}</p></span>
    <img src="${item.icon}" alt="${item.name}">
    <span class="addr"><p>${item.address}</p></span>
    <span class="phone"><p>${item.phone}</p></span>
    <span class="website"><a href="${item.website}">${item.website}</a></span>
    </section>`;
    return section;
}
/*
const createSection = (item) => {
   const section = document.createElement("section");
   let img = document.createElement("img");
   let name = document.createElement("p");
   let addr = document.createElement("p");
   let phone = document.createElement("p");
   let website = document.createElement("a");

   section.setAttribute("class", "card");
   section.setAttribute("id", "card");
   // console.table(item)
   img.src = item.icon;
   img.alt = item.name;
   img.class = "members-logo";

   name.textContent = item.name;
   name.setAttribute("class", "name");
   phone.textContent = item.phone;
   phone.setAttribute("class", "phone");
   website.textContent = item.website;
   website.href = item.website;
   website.setAttribute("class", "website");
   addr.textContent = item.address;
   addr.setAttribute("class", "addr");

   section.appendChild(name);
   section.appendChild(img);
   section.appendChild(addr);
   section.appendChild(phone);
   section.appendChild(website);

   cards.appendChild(section);
}
*/

const gridBtn = document.querySelector("#grid-btn");
const listBtn = document.querySelector("#list-btn");
// const sectionX = document.querySelector("#card");

// console.log(sectionX);
gridBtn.addEventListener('click', () => {
    cards.classList.remove('list');
    cards.classList.add('grid');
})
listBtn.addEventListener('click', () => {
    cards.classList.remove('grid');
    cards.classList.add('list');
    // alert('clicked list');
})