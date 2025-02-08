// const url = "https://openlibrary.org/search.json?q=test";
// const headers = new Headers({
//     "User-Agent": "MyAppName/1.0 (myemail@example.com)"
// });
// const options = {
//     method: 'GET',
//     headers: headers
// };
// fetch(url, options)
//     .then(response => response.json())
//     .then(data => showBooks(data))
//     .catch(error => console.error('Error:', error));

// function showBooks(data) {
//     data.docs.forEach(book => {
//         console.log(book)
//         console.log(book.author_name[0]);
//     });
//     console.log(data.docs);
// }4

const url = "books.json";

document.addEventListener("DOMContentLoaded", () => {
    fetch(url)
        .then(response => response.json())
        .then(books => displayBooks(books))
        .catch(error => console.error("Error loading books:", error));
});


function displayBooks(books) {
    let bookContainer = document.getElementById("book-list");
    
    books.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book");
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>$${book.price.toFixed(2)}</p>
            <button onclick="addToCart(${book.id})">Add to Cart</button>
        `;
        bookContainer.appendChild(bookCard);
    });
}

function addToCart(bookId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(bookId);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Book added to cart!");
}
