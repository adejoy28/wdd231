import { fetchAPIForHome } from "./modules/functions.mjs";

const SearchUrl = "https://openlibrary.org/trending/daily.json"
const BySubjects = "";

// Select the book list
const bookList = document.querySelector("#book-list");

fetchAPIForHome(SearchUrl, bookList, 40);