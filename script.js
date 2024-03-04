let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const intervalTime = 2000; // 2 seconds

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

function autoSlide() {
    nextSlide();
}

// Show the first slide when the page loads
showSlide(slideIndex);

// Set interval to change slide every 2 seconds
setInterval(autoSlide, intervalTime);
