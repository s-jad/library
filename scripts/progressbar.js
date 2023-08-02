// PROGRESS BAR
const progressBars = document.getElementsByClassName('progress-bar');
const inputPagesRead = document.getElementsByClassName('input-pages-read');

export function updateProgressBar(bar, index, array) {
    const currentCard = bar.parentNode.parentNode;
    const pagesRead = parseInt(currentCard.querySelector('.pages-read').innerText);
    const numberOfPages = parseInt(currentCard.querySelector('.number-of-pages').innerText);

    let percentageRead = (pagesRead / numberOfPages) * 100;

    // Check if the pagesRead makes sense, stop overflow if not
    if (percentageRead > 100) {
        percentageRead = 100;
    }

    // Progress bar turns green when full
    if (percentageRead === 100) {
        bar.classList.add('full');
    } else {
        bar.classList.remove('full');
    }

    // Calculate the fraction of the background to fill with the progress bar
    bar.style.width = `${percentageRead}%`;
};

// Initial progress bar update
Array.from(progressBars).forEach(updateProgressBar);

// Update progress bar on new input to inputPagesRead
Array.from(inputPagesRead).forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === "Enter") {
            // Find the associated pagesRead and progress bar and update them 
            const currentCard = input.parentNode;
            const currentPagesRead = currentCard.querySelector('.pages-read');
            currentPagesRead.innerText = input.value;
            const progressBar = currentCard.querySelector('.progress-bar');
            updateProgressBar(progressBar);

            // Clear the input value
            input.value = "";
        }
    });
});

