// Toggle navigation menu on mobile
document.getElementById('navToggle').addEventListener('click', function () {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
});

// Back to top button functionality
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal functionality
const contactBtn = document.getElementById('contactUsBtn');
const contactModal = document.getElementById('contactModal');
const closeBtn = document.querySelector('#contactModal .close');

contactBtn.addEventListener('click', function () {
    contactModal.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    contactModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === contactModal) {
        contactModal.style.display = 'none';
    }
});
