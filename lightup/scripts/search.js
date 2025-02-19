import { sectionForHome } from "./modules/functions.mjs";
const searchBtb = document.querySelector("#searcghBooks-button");
// console.log(searchAppendable
const output = document.querySelector("#searchOutput");
const searchForm = document.querySelector("#search");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchInput = document.querySelector("#searchBooks");
    const searchValue = searchInput.value;
    const searchAppendable = searchValue.trim(" ").replaceAll(" ", "+");

    fetchAPI(searchAppendable).then(result => {
        output.innerHTML = `<h3 class="search-result-title">Search results for "${searchValue}:"</h3>`;
        output.innerHTML += result;
    });
})



async function fetchAPI(searchText) {
    let SearchUrl = `https://openlibrary.org/search.json?q=${searchText}&limit=20`;

    const response = await fetch(SearchUrl);
    const data = await response.json();

    let bookCard = "";

    if (data.docs.length > 1) {
        for (let bookIndex = 0; bookIndex < 20; bookIndex++) {
            const eachBook = data.docs[bookIndex];
            bookCard += sectionForHome(eachBook);
        }
    } else if (data.docs.length === 1) {
        const section = `
                    <section class="card">
                    <h3>One book</h3>
                    <figure>
                        <img src="https://picsum.photos/200/300" alt="Book Cover" loading="lazy" width="200"
                            height="300">
                        <figcaption>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, et quas.
                        </figcaption>
                    </figure>

                    <p>Arthur: James Cameron</p>
                    
                </section>
            `;
        bookCard += section;
    } else {
        bookCard += "Search not found";
    }

    return bookCard;
}


const section = `
        <section class="card">
        <h3>Book Title</h1>
        <figure>
            <img src="https://picsum.photos/200/300" alt="Book Cover" loading="lazy" width="200"
                height="300">
            <figcaption>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, et quas.
            </figcaption>
        </figure>

        <p>Arthur: James Cameron</p>

        <button>Read more</button>
    </section>
`;