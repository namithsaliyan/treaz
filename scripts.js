document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Your existing JavaScript
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        fetch('https://gox-production-e708.up.railway.app/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            alert(result.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            gallery.scrollTo({
                left: item.offsetLeft - (gallery.clientWidth / 2) + (item.clientWidth / 2),
                behavior: 'smooth'
            });
        });
    });

    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function changeHeaderBackground() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach(link => link.classList.remove('active'));
        if (index >= 0) {
            navLinks[index].classList.add('active');
            const sectionBackground = sections[index].style.backgroundImage || '';
            header.style.background = sectionBackground;
        }
    }

    window.addEventListener('scroll', changeHeaderBackground);
    changeHeaderBackground(); // Call on page load
});
