// Smooth scroll for navigation links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
