const hamburgerIcon = document.querySelector('.hamburger');
const menuItems = document.querySelector('.menu-items');
hamburgerIcon.addEventListener('click',(e)=>{
    e.stopPropagation();
    menuItems.classList.toggle('active');
})