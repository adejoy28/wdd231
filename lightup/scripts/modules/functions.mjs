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

        <h3>${data.title}</h3>
        <figure class="book">`;

    if (data.cover_edition_key) {
        section += `<img src="https://covers.openlibrary.org/b/olid/${data.cover_edition_key}-M.jpg" alt="${data.title}" loading="lazy" width="200" title="${data.title}">`
    } else {
        section += `<img src="https://placehold.co/200x310?text=${data.title}" alt="${data.title}" loading="lazy" width="200"  title="${data.title}">`

    }
    section += `
                <a href="https://openlibrary.org/${data.key}" class="btn" id="bookDetailsBtn">Learn
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
        // console.log(dataDocs);
        let bookCard = "";

        let count = 0;
        limit = limit || 4
        for (let i = 0; i < limit; i++) {
            const item = dataDocs[i];
            divBookList.innerHTML += sectionForHome(item);
        }

        // const bookDetailsBtns = divBookList.querySelectorAll("#bookDetailsBtn");
        // bookDetailsBtns.forEach((btn, index) => {
        //     btn.addEventListener("click", () => {
        //         const item = dataDocs[index];
        //         console.log(item.title);

        //         showBookDetailsModal(item.key);
        //     });
        // });


        // const bookDetailsBtn = document.querySelector("#bookDetailsBtn");
        // bookDetailsBtn.addEventListener("click", (e) => {
        //     console.log(e.currentTarget);
        // showBookDetailsModal(item.key);
        // });
        //     while (item.cover_edition_key && !count >= 4) {
        //         break;
        //     }
        //     console.log(item.key)
        // });


        // console.log(data.docs);
        return bookCard;

    } catch (error) {
        // console.log("Error message: " + error);
    }
}

const bookDetailsModal = (book) => {
    return ` 
                         <button id="closeDialog">❌</button>
                    <div id="bookDetails" role="article" aria-label="Book Details">
                    <figure id="bookImage">
                        <img src="https://covers.openlibrary.org/b/olid/OL${book.covers[0]}M-M.jpg" alt="${book.title}" loading="lazy" width="200" title="${book.title}">
                    </figure>
                    <h3 id="bookTitle" aria-label="Book title">${book.title}</h3>
                    <figure id="bookAuthor" aria-label="Author">
                        <img src="https://placehold.co/50x50" alt="">
                        <figcaption class="author-name">${book.author_name ? book.author_name[0] : 'Unknown Author'}</figcaption>
                    </figure>
                    <p id="bookDescription" aria-label="Book description">${book.description.value ? book.description.value : 'No description available.'}</p>
                    <p id="bookPrice" aria-label="Book price"><span>Price:</span>$24.99</p>
                    <p id="bookPages" aria-label="Pages"><span>Pages:</span>${book.number_of_pages ? book.number_of_pages : 'N/A'}</p>
                    <p id="bookLanguages" aria-label="languages"><span>Language:</span>${book.languages ? book.languages.join(', ') : 'N/A'}</p>
                    <p id="bookEdition" aria-label="edition"><span>Edition:</span>${book.edition_name ? book.edition_name : 'N/A'}</p>
    
                    <button id="bookButton" class="btn" aria-label="Borrow this book">Borrow</button>
                </div>     `;
}


const showBookDetailsModal = (bookKey) => {
    console.log(bookKey);

    const bookDetailsDailog = document.querySelector("#bookDetailsModal");

    try {

        const fetchBookDetails = async (bookKey) => {
            const response = await fetch(`https://openlibrary.org${bookKey}.json`);
            const data = await response.json();
            // console.log(data);
            return data;
        }

        fetchBookDetails(bookKey).then((data) => {
            console.log(data);
            bookDetailsDailog.innerHTML = bookDetailsModal(data);
            bookDetailsDailog.showModal();
            const closeModalBtn = bookDetailsDailog.querySelector("#closeDialog");
            if (closeModalBtn) {
                closeModalBtn.addEventListener("click", () => {
                    bookDetailsDailog.close();
                    // bookDetailsDailog.innerHTML = "";
                });
            }
        });


    } catch (error) {
        console.log("Error message: " + error);

    }



    // const modal = document.querySelector("#bookDetailsModal");


    // modal.showModal();
    // const closeModalBtn = document.querySelector("#closeModal");

}
export { sectionForHome, SearchUrl, fetchAPIForHome }