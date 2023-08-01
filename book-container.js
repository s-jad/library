let bookArr = [];

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

    bookArr.push(bookA);

    const bookB = new Book(
        "Lord of the Rings",
        "J. R. R. Tolkein",
        "The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.",
        1178,
        567,
    );

    bookArr.push(bookB);

    const bookC = new Book(
        "The Catcher in the Rye",
        "J. D. Salinger",
        "The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world. He ends up exhausted and emotionally unstable.",
        234,
        10,
    );

    bookArr.push(bookC);

    const bookD = new Book(
        "The Great Gatsby",
        "F. Scott Fitzgerald",
        "The Great Gatsby, Third novel by American author F. Scott Fitzgerald, published in 1925. Set in Jazz Age New York, it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
        208,
        46,
    );

    bookArr.push(bookD);

    const bookE = new Book(
        "The Lion, the Witch and the Wardrobe",
        "C. S. Lewis",
        "During the World War II bombings of London, four English siblings are sent to a country house where they will be safe. One day Lucy finds a wardrobe that transports her to a magical world called Narnia. After coming back, she soon returns to Narnia with her brothers, Peter and Edmund, and her sister, Susan. There they join the magical lion, Aslan, in the fight against the evil White Witch, Jadis.",
        208,
        189,
    );

    bookArr.push(bookE);

    const bookF = new Book(
        "The Lord of the Flies",
        "William Golding",
        "William Golding's 1954 novel 'Lord of the Flies' tells the story of a group of young boys who find themselves alone on a deserted island. They develop rules and a system of organization, but without any adults to serve as a civilizing impulse, the children eventually become violent and brutal.",
        224,
        224,
    );

    bookArr.push(bookF);
}

// Just to make it look like its already in use
generateBookPlaceholders();

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
    console.log("Added Book!");
});
