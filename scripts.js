// JavaScript to handle form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Create a new FormData object from the form
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Send the form data to the server using fetch
        fetch('https://gox-production-e708.up.railway.app/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Your message has been sent successfully!');
            // Optionally clear the form here
            form.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
        });
    });

    // JavaScript for dynamic navbar based on scroll behavior
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// script.js

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // User is scrolling down, hide the navbar
            navbar.style.top = "-80px"; // Adjust based on navbar height
        } else {
            // User is scrolling up, show the navbar
            navbar.style.top = "0";
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});
