const slides = document.getElementsByClassName('slider__image');
const slideHeadline = document.getElementsByClassName('slide__headline');
const sliderSection = document.getElementsByClassName('slider');

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
//slides[currentSlide].classList.remove('animated');
slides[currentSlide].style.zIndex = "2";
slides[previousSlide].classList.add('slide-right');
document.querySelector('.slide-right').addEventListener('animationend', function() {
    slides[previousSlide].classList.remove('slide-right');
    console.log("animace probehla");
    slides[currentSlide].style.zIndex = "3";
    slides[previousSlide].style.zIndex = "1";
    
});
/*
slides[previousSlide].classList.add('hidden');
    slideHeadline[previousSlide].classList.add('hidden');

    slides[currentSlide].classList.remove('hidden');
    slideHeadline[currentSlide].classList.remove('hidden');
*/

/*
    slides[previousSlide].classList.add('hidden');
    slideHeadline[previousSlide].classList.add('hidden');

    slides[currentSlide].classList.remove('hidden');
    slideHeadline[currentSlide].classList.remove('hidden');
 */
}
/*
anime({
    targets: slides[currentSlide]
});
*/
