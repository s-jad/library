import { updateProgressBar } from './progressbar.js';

export let myLibrary = [];
const bookGrid = document.getElementById('book-grid');

function Book(title, author, description, pages, pagesRead) {
    this.title = title,
        this.author = author,
        this.description = description,
        this.pages = pages,
        this.pagesRead = pagesRead
}

function generateBookPlaceholders() {
    const bookA = new Book(
        "1984",
        "George Orwell",
        "A man loses his identity while living under a repressive regime. In a story based on George Orwell's classic novel, Winston Smith (John Hurt) is a government employee whose job involves the rewriting of history in a manner that casts his fictional country's leaders in a charitable light. His trysts with Julia (Suzanna Hamilton) provide his only measure of enjoyment, but lawmakers frown on the relationship -- and in this closely monitored society, there is no escape from Big Brother.",
        328,
        210,
    );

    myLibrary.push(bookA);

    const bookB = new Book(
        "Lord of the Rings",
        "J. R. R. Tolkein",
        "The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.",
        1178,
        567,
    );

    myLibrary.push(bookB);

    const bookC = new Book(
        "The Catcher in the Rye",
        "J. D. Salinger",
        "The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world. He ends up exhausted and emotionally unstable.",
        234,
        10,
    );

    myLibrary.push(bookC);

    const bookD = new Book(
        "The Great Gatsby",
        "F. Scott Fitzgerald",
        "The Great Gatsby, Third novel by American author F. Scott Fitzgerald, published in 1925. Set in Jazz Age New York, it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
        208,
        46,
    );

    myLibrary.push(bookD);

    const bookE = new Book(
        "The Lion, the Witch and the Wardrobe",
        "C. S. Lewis",
        "During the World War II bombings of London, four English siblings are sent to a country house where they will be safe. One day Lucy finds a wardrobe that transports her to a magical world called Narnia. After coming back, she soon returns to Narnia with her brothers, Peter and Edmund, and her sister, Susan. There they join the magical lion, Aslan, in the fight against the evil White Witch, Jadis.",
        208,
        189,
    );

    myLibrary.push(bookE);

    const bookF = new Book(
        "Lord of the Flies",
        "William Golding",
        "William Golding's 1954 novel 'Lord of the Flies' tells the story of a group of young boys who find themselves alone on a deserted island. They develop rules and a system of organization, but without any adults to serve as a civilizing impulse, the children eventually become violent and brutal.",
        224,
        224,
    );

    myLibrary.push(bookF);
}

// Just to make it look like its already in use
generateBookPlaceholders();

function addBookToLibrary(title, author, description, pages, pagesRead) {
    const newBook = new Book(
        title,
        author,
        description,
        pages,
        pagesRead,
    );

    myLibrary.push(newBook);
};

function removeBookFromLibrary(title, author) {
    const bookIndex = myLibrary.findIndex(book => {
        book.title === title && book.author === author
    });

    // If findIndex can't find the book it returns -1
    if (!bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
    }
}

export function populateBookGrid(library) {
    const bookTitles = Array.from(document.querySelectorAll('.book-title'));

    library.forEach(book => {
        // If the Book it not currently present on the document
        if (!bookTitles.some((bookTitle) => bookTitle.innerText === book.title)) {

            // Generate new book card
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');

            // Fill new book card with values
            bookCard.innerHTML = `
                <h3 class="book-title collapsed">${book.title}</h3>
                <h4 class="author">${book.author}</h4>
                <p class="book-description collapsed">${book.description}</p>
                <p>Pages: <strong class="number-of-pages">${book.pages}</strong></p>
                <input placeholder="Number of pages read" type="number" class="input-pages-read">
                <p>Pages read: <strong class="pages-read">${book.pagesRead}</strong></p>
                <div class="card-actions-grid">
                <div class="progress-bar"></div>
                <div class="progress-bar-bg"></div>
                <div class="delete-book-button"></div>
                </div>
                `;


            // Append the finished book card to the grid
            bookGrid.appendChild(bookCard);

            // Update the progress bar to the correct width
            const progressBar = bookCard.querySelector('.progress-bar');
            updateProgressBar(progressBar);

            // Add event listener to the new input-pages-read
            const numberPagesReadInput = bookCard.querySelector('input');
            numberPagesReadInput.addEventListener('keypress', function(e) {
                if (e.key === "Enter") {
                    // Find the associated pagesRead and progress bar and update them 
                    const currentCard = numberPagesReadInput.parentNode;
                    const currentPagesRead = currentCard.querySelector('.pages-read');
                    currentPagesRead.innerText = numberPagesReadInput.value;
                    const progressBar = currentCard.querySelector('.progress-bar');
                    updateProgressBar(progressBar);
                }
            });
        }

    });
}

// ADD BOOK MODAL 

const addBookBtn = document.getElementById('add-book-button');
const addBookModal = document.getElementById('add-book-modal');
const addBookModalGrid = document.getElementById('add-book-modal-grid');
const confirmAddBookBtn = document.getElementById('confirm-add-book-button');
const cancelAddBookBtn = document.getElementById('cancel-add-book-button');

// Open the add-book-modal
addBookBtn.addEventListener("click", function() {
    addBookModal.classList.add('active');
    addBookModalGrid.classList.remove('fade');
});

// Close the add-book-modal
cancelAddBookBtn.addEventListener("click", function() {
    addBookModal.classList.remove('active');
    addBookModalGrid.classList.add('fade');
});

// Add the book to the library
confirmAddBookBtn.addEventListener("click", function() {
    const bookGrid = document.getElementById('book-grid');

    // Generate new book card
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    // Get the values from the inputs
    const bookTitle = document.getElementById('add-book-title').value;
    const bookAuthor = document.getElementById('add-book-author').value;
    const bookDescription = document.getElementById('add-book-description').value;
    const numberPages = document.getElementById('add-number-pages').value;

    // If no value is given for pagesRead then default to 0
    const pagesReadInput = document.getElementById('add-pages-read');
    const pagesRead = pagesReadInput.value !== '' ? pagesReadInput.value : '0';

    // Add the new book to the library
    addBookToLibrary(bookTitle, bookAuthor, bookDescription, numberPages, pagesRead);

    // Fill new book card with values
    bookCard.innerHTML = `
        <h3 class="book-title collapsed">${bookTitle}</h3>
        <h4 class="author">${bookAuthor}</h4>
        <p class="book-description collapsed">${bookDescription}</p>
        <p>Pages: <strong class="number-of-pages">${numberPages}</strong></p>
        <input placeholder="Number of pages read" type="number" class="input-pages-read">
        <p>Pages read: <strong class="pages-read">${pagesRead}</strong></p>
        <div class="card-actions-grid">
            <div class="progress-bar"></div>
            <div class="progress-bar-bg"></div>
            <div class="delete-book-button"></div>
        </div>
    `;

    // Update the progress bar to the correct width
    const progressBar = bookCard.querySelector('.progress-bar');
    updateProgressBar(progressBar);

    // Add event listener to the new input-pages-read
    const numberPagesReadInput = bookCard.querySelector('input');
    numberPagesReadInput.addEventListener('keypress', function(e) {
        if (e.key === "Enter") {
            // Find the associated pagesRead and progress bar and update them 
            const currentCard = numberPagesReadInput.parentNode;
            const currentPagesRead = currentCard.querySelector('.pages-read');
            currentPagesRead.innerText = numberPagesReadInput.value;
            const progressBar = currentCard.querySelector('.progress-bar');
            updateProgressBar(progressBar);
        }
    });

    // Add event listener to the new delete-book-button
    const newDeleteBookBtn = bookCard.querySelector('.delete-book-button');
    newDeleteBookBtn.addEventListener('click', function() {
        // Get the current book to be deleted
        const bookToDelete = btn.parentNode.parentNode;
        currentBookToDelete = bookToDelete;

        // Get the title to ask the user if they are sure they want to delete
        const bookTitle = bookToDelete.querySelector('.book-title').innerText;
        const questionDeletion = document.getElementById('question-deletion');
        questionDeletion.innerText = `Are you sure you want to delete ${bookTitle}?`;

        // Display the delete-book-modal
        deleteBookModal.classList.add('active');
        deleteBookModalGrid.classList.remove('fade');
    });

    // Append the finished book card to the grid
    bookGrid.appendChild(bookCard);

    // Close the modal
    addBookModal.classList.remove('active');
    addBookModalGrid.classList.add('fade');
});

// DELETE BOOK FROM LIBRARY

const deleteBookBtns = document.querySelectorAll('.delete-book-button');
const deleteBookModal = document.getElementById('delete-book-modal');
const deleteBookModalGrid = document.getElementById('delete-book-modal-grid');
const confirmDeleteBookBtn = document.getElementById('confirm-delete-book-button');
const cancelDeleteBookBtn = document.getElementById('cancel-delete-book-button');

let currentBookToDelete;

// Open the delete-book-modal
deleteBookBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Get the current book to be deleted
        const bookToDelete = btn.parentNode.parentNode;
        currentBookToDelete = bookToDelete;

        // Get the title to ask the user if they are sure they want to delete
        const bookTitle = bookToDelete.querySelector('.book-title').innerText;
        const questionDeletion = document.getElementById('question-deletion');
        questionDeletion.innerText = `Are you sure you want to delete ${bookTitle}?`;

        // Display the delete-book-modal
        deleteBookModal.classList.add('active');
        deleteBookModalGrid.classList.remove('fade');
    });
});

// Close the delete-book-modal
cancelDeleteBookBtn.addEventListener("click", function() {
    deleteBookModal.classList.remove('active');
    deleteBookModalGrid.classList.add('fade');
});

// Delete the book from myLibrary and the bookGrid
confirmDeleteBookBtn.addEventListener('click', function() {
    // Get the parent book-card node, title and author for removal
    const bookToDelete = currentBookToDelete;
    const bookTitle = bookToDelete.querySelector('.book-title').innerText;
    const bookAuthor = bookToDelete.querySelector('.author').innerText;

    // Delete the book from myLibrary
    removeBookFromLibrary(bookTitle, bookAuthor);
    console.log(myLibrary);

    // Remove the book from the bookGrid
    bookGrid.removeChild(bookToDelete);

    // Close the delete-book-modal
    deleteBookModal.classList.remove('active');
    deleteBookModalGrid.classList.add('fade');
});


