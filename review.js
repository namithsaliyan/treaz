document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewMessage = document.getElementById('reviewMessage');
    
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Gather form data
        const name = document.getElementById('reviewName').value;
        const review = document.getElementById('reviewText').value;
        const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : '0';

        // Create payload for POST request
        const payload = {
            name: name,
            review: review,
            rating: parseInt(rating, 10)
        };

        // Send POST request to the API
        fetch('https://review-x.up.railway.app/reviews', { // Updated API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                reviewMessage.textContent = 'Thank you for your review!';
                reviewMessage.className = 'review-message success'; // Use success class for styling
                reviewForm.reset(); // Reset form after successful submission
            } else {
                reviewMessage.textContent = 'Failed to submit review. Please try again.';
                reviewMessage.className = 'review-message error'; // Use error class for styling
            }
        })
        .catch(error => {
            console.error('Error submitting review:', error);
            reviewMessage.textContent = 'Error submitting review. Please try again.';
            reviewMessage.className = 'review-message error'; // Use error class for styling
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
