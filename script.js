const slideshows = document.querySelectorAll('.slideshow');
const icons = document.querySelectorAll('.icon');
let currentSlide = 0;

function showSlide(index) {
    icons.forEach((icon, i) => {
        if (i === index) {
            icon.style.display = 'block';
        } else {
            icon.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % icons.length;
    showSlide(currentSlide);
}

// Automatically advance the slideshow every 3 seconds (adjust as needed)
setInterval(nextSlide, 2000);

slideshows.forEach(slideshow => {
    // Ensure all slideshows are initially hidden
    slideshow.style.display = 'block';
    showSlide(currentSlide);
});
document.querySelectorAll('.bar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetClass = this.getAttribute('data-target');
        const targetSection = document.querySelector('.' + targetClass);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
