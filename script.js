document.addEventListener("DOMContentLoaded", function() {
    // Example: Form submission handler
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        // Simple validation (you can expand this)
        if (name && email && message) {
            alert(`Thank you, ${name}. Your message has been received!`);
            // Here you can add AJAX to send the data to a server if needed.
            form.reset(); // Clear the form
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Example: Adding interactivity to cards (Optional)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            alert('Card clicked: ' + this.querySelector('.card-title').innerText);
        });
    });
});
