// reviews.js

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://review-x.up.railway.app/reviews')
        .then(response => response.json())
        .then(data => {
            const reviewsContainer = document.getElementById('reviewsContainer');
            data.forEach(review => {
                const reviewItem = document.createElement('div');
                reviewItem.className = 'review-item';
                reviewItem.innerHTML = `
                    <h3>${review.name}</h3>
                    <p>${review.review}</p>
                `;
                reviewsContainer.appendChild(reviewItem);
            });
        })
        .catch(error => {
            console.error('Error fetching reviews:', error);
        });
});
