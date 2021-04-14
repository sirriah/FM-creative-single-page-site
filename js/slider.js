const slides = document.getElementsByClassName('slider__image');
const slideHeadline = document.getElementsByClassName('slide__headline');
let currentSlide = 0;
let previousSlide = 0;

function stepSlide(step){
    previousSlide = currentSlide;
    currentSlide = (currentSlide + step) % slides.length;

    slides[previousSlide].classList.add('invisible');
    slideHeadline[previousSlide].classList.add('invisible');

    slides[currentSlide].classList.remove('invisible');
    slideHeadline[currentSlide].classList.remove('invisible');
}

