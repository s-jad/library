// PROGRESS BAR
const progressBars = document.getElementsByClassName('progress-bar');
const inputPagesRead = document.getElementsByClassName('input-pages-read');

function updateProgressBar(bar, index, array) {
    const currentCard = bar.parentNode.parentNode;
    const pagesRead = parseInt(currentCard.getElementsByClassName('pages-read')[0].innerText);
    const numberOfPages = parseInt(currentCard.getElementsByClassName('number-of-pages')[0].innerText);

    const percentageRead = (pagesRead / numberOfPages) * 100;

    // Get the width of the progress bar background
    const progressBarBg = document.getElementsByClassName('progress-bar-bg')[0];
    const rect = progressBarBg.getBoundingClientRect();
    const progressBarBgWidth = rect.width;

    // Calculate the fraction of the background to fill with the progress bar
    bar.style.width = `${(progressBarBgWidth / 100) * percentageRead}px`;
};

// Initial progress bar update
Array.from(progressBars).forEach(updateProgressBar);

// Update progress bar on new input to inputPagesRead
Array.from(inputPagesRead).forEach(input => {
    input.addEventListener('keypress', function(e) {
        // To ensure it functions in legacy browsers
        const key = e.which || e.keyCode;

        // 13 is the key code for Enter
        if (key === 13) {
            // Find the associated pagesRead and progress bar and update them 
            const currentCard = input.parentNode;
            const currentPagesRead = currentCard.querySelector('.pages-read');
            currentPagesRead.innerText = input.value;
            const progressBar = currentCard.querySelector('.progress-bar');
            updateProgressBar(progressBar);
        }
    });
});

