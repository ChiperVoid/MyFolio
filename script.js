// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    const nav = document.querySelector('nav div div');
    nav.classList.toggle('hidden');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="mailto:farhanmaulanasyidiq@gmail.com"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
});

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});
