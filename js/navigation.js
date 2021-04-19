var menu = document.querySelector('.menu');
var menuToggle = document.querySelector('#mobile-navigation');
var hamburgerIcon = document.querySelector('.hamburger-menu');


hamburgerIcon.addEventListener('click', function () {
  if (menu.classList.contains('open')) {
    //menuToggle.classList.remove('hidden');
    menu.classList.remove('open');
    menuToggle.classList.remove('fade-in');
    menuToggle.classList.add('fade-out');
   
  } else {
    menu.classList.add('open');
    menuToggle.classList.remove('fade-out');
    menuToggle.classList.add('fade-in');
    //menuToggle.classList.add('hidden');
    


  }
});
