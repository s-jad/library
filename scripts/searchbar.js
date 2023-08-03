import { books, myLibrary, populateBookGrid } from "./book-container.js";

const searchBar = document.getElementById('searchbar');
const bookGrid = document.getElementById('book-grid');

function findMatches(wordToMatch, library) {
    return library.filter((books) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return books.title.match(regex);
    });
};

function displayMatches() {
    // Get list of book titles that match the regex in input
    const matches = findMatches(this.value, myLibrary);

    const currentlyDisplayedBooks = Array.from(document.querySelectorAll('.book-title'));

    // For each book in the static array of books (unchanged by node removal and appending)
    books.forEach((targetBook) => {
        const bookTitle = targetBook.querySelector('.book-title').innerText;
        const match = matches.some((match) => match.title === bookTitle)

        if (!match && currentlyDisplayedBooks.some((title) => title.innerText === bookTitle)) {
            // If not in matches and currently displayed, then remove from bookGrid
            bookGrid.removeChild(targetBook);
        } else if (match && !currentlyDisplayedBooks.some((title) => title.innerText === bookTitle)) {
            // If in matches and not currently displayed, then append to bookGrid
            bookGrid.appendChild(targetBook);
        }
    });

    // If nothing is in the searchbar input, show all books
    if (matches.length === 0 || searchBar.value === "") {
        populateBookGrid(myLibrary);
    }
}

searchBar.addEventListener('change', displayMatches);
searchBar.addEventListener('keyup', displayMatches);
