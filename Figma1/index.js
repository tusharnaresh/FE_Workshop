const hamburgerIcon = document.querySelector('.hamburger');
const menuItems = document.querySelector('.menu-items');
hamburgerIcon.addEventListener('click',(e)=>{
    e.stopPropagation();
    menuItems.classList.toggle('active');
})


const imgs = document.querySelectorAll('.cards .card');

const slider = document.querySelector('.slider');
const arrowButtons = document.querySelectorAll('[data-index-change]');
let currIndex = 0;
function slide(nextIndex) {
  if (nextIndex < 0 || nextIndex >= imgs.length){
    return;
  }
  slider.style.transform = `translateX(-${(nextIndex / imgs.length) * 100}%)`;
  currIndex = nextIndex;
}
arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const indexChange = +button.getAttribute('data-index-change');
    slide(currIndex + indexChange);
  });
});