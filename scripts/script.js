const nav_icon = document.querySelector('.mobile_nav');
const dropdown = document.querySelector('.dropdown');

function toggleMenu() {
  dropdown.classList.add('dropdown-enter');
  setTimeout(() => dropdown.classList.contains('dropdown-enter') && dropdown.classList.add('dropdown-enter-active'), 150);
}

function toggleMenuOff() {
  if(dropdown.classList.contains('dropdown-enter-active')) {
    dropdown.classList.remove('dropdown-enter', 'dropdown-enter-active');
  }
}

nav_icon.addEventListener('click', toggleMenu);
window.addEventListener('click', toggleMenuOff);

var thanks = document.querySelector('#thankyou_message');

function showThanks() {
  thanks.style.add('display:block');
}
