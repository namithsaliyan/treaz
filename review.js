document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewMessage = document.getElementById('reviewMessage');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Gather form data
        const name = document.getElementById('reviewName').value;
        const review = document.getElementById('reviewText').value;

        // Create payload for POST request
        const payload = {
            name: name,
            review: review
        };

        // Send POST request to the Go API
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
                reviewMessage.style.color = '#4CAF50';
                reviewForm.reset(); // Reset form after successful submission
            } else {
                reviewMessage.textContent = 'Failed to submit review. Please try again.';
                reviewMessage.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error submitting review:', error);
            reviewMessage.textContent = 'Error submitting review. Please try again.';
            reviewMessage.style.color = 'red';
        });
    });
});
