const slideshow = document.querySelector('.slideshow');

const slidesContainer = slideshow.querySelector('.slides-container');

const slides = slidesContainer.querySelectorAll('.slide');

const prevButton = slideshow.querySelector('.prev');

const nextButton = slideshow.querySelector('.next');

let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

showSlide(currentSlideIndex);

prevButton.addEventListener('click', () => {

    currentSlideIndex--;

    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
});

nextButton.addEventListener('click', () => {
    currentSlideIndex++;
    if (currentSlideIndex > slides.length - 1) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
});

// Add smooth scrolling animation when clicking on the "Contact" link

const contactLink = document.querySelector('nav ul li:nth-child(3) a');
contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

