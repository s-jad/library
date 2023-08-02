import { myLibrary, populateBookGrid } from "./book-container.js";

const searchBar = document.getElementById('searchbar');
const bookGrid = document.getElementById('book-grid');
const books = Array.from(bookGrid.querySelectorAll('book-card'));

function findMatches(wordToMatch, library) {
    return library.filter((books) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return books.title.match(regex);
    });
};

function displayMatches() {
    let matches = findMatches(this.value, myLibrary);

    const currentBookGrid = document.getElementById('book-grid');
    const currentlyDisplayedBooks = currentBookGrid.querySelectorAll('.book-card');

    currentlyDisplayedBooks.forEach((displayedBook) => {
        const bookTitle = displayedBook.querySelector('.book-title').innerText;
        const match = matches.some((match) => match.title === bookTitle)

        if (!match) {
            bookGrid.removeChild(displayedBook);
        }
    });

    if (matches.length === 0 || searchBar.value === "") {
        populateBookGrid(myLibrary);
    }
}

searchBar.addEventListener('change', displayMatches);
searchBar.addEventListener('keyup', displayMatches);
