const slides = document.getElementsByClassName('slider__image');
const slideHeadline = document.getElementsByClassName('slide__headline');
let currentSlide = 0;
let previousSlide = 0;

function stepSlide(step){
    previousSlide = currentSlide;
    currentSlide = (((currentSlide + step) % slides.length) + slides.length) % slides.length;

    slides[previousSlide].classList.add('hidden');
    slideHeadline[previousSlide].classList.add('hidden');

    slides[currentSlide].classList.remove('hidden');
    slideHeadline[currentSlide].classList.remove('hidden');
}

