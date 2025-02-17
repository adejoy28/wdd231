const section = (eachBook) => {
    `
        <section class="card">
        <h3>${eachBook.title}</h3>
        <figure>
            <img src="https://covers.openlibrary.org/b/olid/${eachBook.cover_edition_key}-M.jpg" alt="Book Cover" loading="lazy" width="200"
                height="300">
            <figcaption>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, et quas.
            </figcaption>
        </figure>

        <p>Arthur: ${eachBook.author_name[0]}</p>
        <a href="https://openlibrary.org/${eachBook.key}" target="_blank" class="btn">Learn more</a>
    </section>
                `;
}

const sectionForHome = (data) => {
    let section = `<section id="book" class="card">
        <figure class="book">`;

    if (data.cover_edition_key) {
        section += `<img src="https://covers.openlibrary.org/b/olid/${data.cover_edition_key}-M.jpg" alt="${data.title}" loading="lazy" width="200" title="${data.title}">`
    } else {
        section += `<img src="https://placehold.co/200x310?text=${data.title}" alt="${data.title}" loading="lazy" width="200"  title="${data.title}">`

    }
    section += `
                    <a href="https://openlibrary.org/${data.key}" target="_blank" class="btn">Learn
                        more</a>
            </figure>
        </section>`;

    return section;
}



const SearchUrl = (searchText) => `https://openlibrary.org/subjects/${searchText}.json?published_in=1600-2010`;



const fetchAPIForHome = async (SearchUrl, divBookList, limit) => {
    // let SearchUrl = `https://openlibrary.org/search.json?q=${searchText}&limit=10`;

    // Run the function in a try-catch block
    try {
        const response = await fetch(SearchUrl);
        const data = await response.json();
        let dataDocs = data.works;//.docs;
        console.log(dataDocs);
        let bookCard = "";

        let count = 0;
        limit = limit || 4
        for (let i = 0; i < limit; i++) {
            const item = dataDocs[i];
            divBookList.innerHTML += sectionForHome(item);
        }
        // dataDocs.forEach(item => {
        //     while (item.cover_edition_key && !count >= 4) {
        //         break;
        //     }
        //     console.log(item.key)
        // });


        // console.log(data.docs);
        return bookCard;

    } catch (error) {
        console.log("Error message: " + error);
    }
}

export { sectionForHome, SearchUrl, fetchAPIForHome }