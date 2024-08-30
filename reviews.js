document.addEventListener('DOMContentLoaded', function() {
    fetch('https://review-x.up.railway.app/reviews')
        .then(response => response.json())
        .then(data => {
            const reviewsContainer = document.getElementById('reviewsContainer');
            data.forEach(review => {
                const reviewItem = document.createElement('div');
                reviewItem.className = 'review-item';
                
                // Create star rating
                const starRating = getStarRating(review.rating);
                
                reviewItem.innerHTML = `
                    <h3>${review.name}</h3>
                    <p>${review.review}</p>
                    <p class="rating">${starRating}</p>
                `;
                
                reviewsContainer.appendChild(reviewItem);
            });
        })
        .catch(error => {
            console.error('Error fetching reviews:', error);
        });
});

// Function to generate star rating HTML
function getStarRating(rating) {
    const fullStars = '<span class="full-star">★</span>'.repeat(Math.floor(rating));
    const emptyStars = '<span class="empty-star">☆</span>'.repeat(5 - Math.floor(rating));
    return fullStars + emptyStars;
}
