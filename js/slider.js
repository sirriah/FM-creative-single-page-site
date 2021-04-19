const slides = document.getElementsByClassName('slider__image');
const slideHeadline = document.getElementsByClassName('slide__headline');
let currentSlide = 0;
let previousSlide = 0;

function stepSlide(step){
    previousSlide = currentSlide;
    currentSlide = (((currentSlide + step) % slides.length) + slides.length) % slides.length;
// test
/*
    slides[previousSlide].classList.remove('fade-in');
    slides[previousSlide].classList.add('fade-out');
    slideHeadline[previousSlide].classList.remove('fade-in');
    slideHeadline[previousSlide].classList.add('fade-out');


    slides[currentSlide].classList.remove('fade-in');
    slides[currentSlide].classList.add('fade-out');
    slideHeadline[currentSlide].classList.remove('fade-in');
    slideHeadline[currentSlide].classList.add('fade-out');
*/

    slides[previousSlide].classList.add('hidden');
    slideHeadline[previousSlide].classList.add('hidden');

    slides[currentSlide].classList.remove('hidden');
    slideHeadline[currentSlide].classList.remove('hidden');
 
}

