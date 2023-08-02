// PROGRESS BAR
const progressBars = document.getElementsByClassName('progress-bar');
const inputPagesRead = document.getElementsByClassName('input-pages-read');
//
// Get the width of the progress bar background
const progressBarBg = document.getElementsByClassName('progress-bar-bg')[0];
const rect = progressBarBg.getBoundingClientRect();
const progressBarBgWidth = rect.width;

export function updateProgressBar(bar, index, array) {
    const currentCard = bar.parentNode.parentNode;
    const pagesRead = parseInt(currentCard.getElementsByClassName('pages-read')[0].innerText);
    const numberOfPages = parseInt(currentCard.getElementsByClassName('number-of-pages')[0].innerText);

    let percentageRead = (pagesRead / numberOfPages) * 100;

    // Check if the pagesRead makes sense
    if (percentageRead > 100) {
        percentageRead = 100;
    }


    // Get the width of the progress bar background
    const progressBarBg = document.getElementsByClassName('progress-bar-bg')[0];
    const rect = progressBarBg.getBoundingClientRect();
    const progressBarBgWidth = rect.width;

    if (percentageRead === 100) {
        bar.classList.add('full');
    } else {
        bar.classList.remove('full');
    }

    // Calculate the fraction of the background to fill with the progress bar
    bar.style.width = `${(progressBarBgWidth / 100) * percentageRead}px`;
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
        }
    });
});

