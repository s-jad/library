// Initial list of book descriptions on page load
const descriptions = Array.from(document.getElementsByClassName('book-description'));

// When the mouse hovers over the description, show the full 
// description in a modal to the right of the mouse position
descriptions.forEach(description => {
    description.addEventListener('mouseover', function(e) {
        const bookDescription = description.innerText;

        // Create the description modal with the full description text
        const descriptionModal = document.createElement('div');
        descriptionModal.classList.add('description-modal');
        descriptionModal.innerHTML = `
           <p class="description-modal-text">${bookDescription}</p> 
        `;

        // Get the current mouse position
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Fix the modal to the current mouse position
        descriptionModal.style.position = "fixed";
        descriptionModal.style.top = `${mouseY}px`;
        descriptionModal.style.left = `${mouseX}px`;

        document.body.appendChild(descriptionModal);

        // Remove the modal once the mouse leaves the description element
        description.addEventListener('mouseleave', function() {
            descriptionModal.remove();
        });
    });
});
