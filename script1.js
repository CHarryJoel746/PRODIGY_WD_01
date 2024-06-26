document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#444'; // Darker background when scrolled
    } else {
        navbar.style.background = '#333'; // Original background
    }
});
