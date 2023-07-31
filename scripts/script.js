const thumbnail = document.querySelector('.js-thumbnail'),
    desktopScreen = window.matchMedia('(min-width: 90em)'),
    navList = document.querySelector('.js-navlist'),
    burgerButton = document.querySelector('.js-burger-btn'),
    closeButton = document.querySelector('.js-close-btn');

if(desktopScreen.matches){
  thumbnail.innerHTML = `<img src="./assets/images/image-web-3-desktop.jpg" alt="thumbnail">`;
}else{
  thumbnail.innerHTML = `<img src="./assets/images/image-web-3-mobile.jpg" alt="thumbnail">`
}

burgerButton.addEventListener('click', ()=>{
  document.querySelector('.hamburger-wrapper').classList.remove('burger-display');
  document.body.style.overflowY = 'hidden';
});
closeButton.addEventListener('click', ()=>{
  document.querySelector('.hamburger-wrapper').classList.add('burger-display');
  document.body.style.overflowY = 'visible';
});
