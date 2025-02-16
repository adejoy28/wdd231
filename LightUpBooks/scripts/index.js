import { sectionForHome, fetchAPIForHome } from "./modules/functions.mjs"
{/* <div id="book-list" class="book-container"> */ }
const newBookList = document.querySelector("#new-book-list");
const childrenBookList = document.querySelector("#children-book-list");
const novelBookList = document.querySelector("#novel-book-list");
const scienceBookList = document.querySelector("#science-book-list");

fetchAPIForHome("wealth", newBookList);
fetchAPIForHome("children's_fiction", childrenBookList);
fetchAPIForHome("novel", novelBookList);
fetchAPIForHome("programming", scienceBookList);












































































































































































































// const url = "https://openlibrary.org/search.json?q=children";
// const headers = new Headers({
//     "User-Agent": "MyAppName/1.0 (myemail@example.com)"
// });
// const options = {
//     method: 'GET',
//     headers: headers
// };
// fetch(url)
//     .then(response => response.json())
//     .then(data => showBooks(data))
//     .catch(error => console.error('Error:', error));

// function showBooks(data) {
//     data.docs.forEach(book => {
//         console.log(book);
//         console.log(book.title);
//         console.log(book.author_name[0]);
//     });
//     console.log(data.docs);
// }





















// const url = "./scripts/data/books.json";

// document.addEventListener("DOMContentLoaded", () => {
//     fetch(url)
//         .then(response => response.json())
//         .then(books => displayBooks(books))
//         .catch(error => console.error("Error loading books:", error));
// });


// function displayBooks(books) {
//     let bookContainer = document.getElementById("book-list");

//     books.forEach(book => {
//         let bookCard = document.createElement("div");
//         bookCard.classList.add("book");
//         bookCard.innerHTML = `
//             <img src="${book.image}" alt="${book.title}">
//             <h3>${book.title}</h3>
//             <p>by ${book.author}</p>
//             <p>$${book.price.toFixed(2)}</p>
//             <button onclick="addToCart(${book.id})">Add to Cart</button>
//         `;
//         bookContainer.appendChild(bookCard);
//     });
// }

// function addToCart(bookId) {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(bookId);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert("Book added to cart!");
// }

