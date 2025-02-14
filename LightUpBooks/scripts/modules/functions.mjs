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

export { section }