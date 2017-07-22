const inputBox = document.querySelector('.inputBox');
const contactName = document.querySelector('#name');
const contactEmail = document.querySelector('#email');
const contactTele = document.querySelector('#telefon');
const contactSubj = document.querySelector('.ämne');
const contactSalj = document.querySelector('.säljare');

// Bygg en funktion som tar värderna från dessa variablar och sätt ihop dem till
// en emailfunktion som skickar ett email till den specifika mailen med värderna

function mailDetails() {

};

function sendMail() {

};

const employees = document.querySelectorAll('.employee');
const frame = document.querySelector('.frame');


const personal = {
  mona: {
    info: '<img src="img/mona.jpeg" class="foto"/> <div class="about"> <h3>Mona Johandahl</h3><br /> <h4><i class="fa fa-info-circle"></i> Ägare</h4> <br/> <i class="fa fa-envelope"></i> <a href="#">mona.johandahl@elon.se</a> <br /> <p><i class="fa fa-phone"></i> 0903488385</p> </div>'
  },
  lena: {
    info: '<img src="img/lena.jpeg" class="foto"/> <div class="about"><h3>Lena Adolphson</h3><br /><h4><i class="fa fa-info-circle"></i> Ägare</h4><br /> <i class="fa fa-envelope"></i> <a href="#">lena.adolphsson@elon.se</a><br /> <p><i class="fa fa-phone"></i> 0903488384</p> </div>'
  },
  lars: {
    info: '<img src="img/lars.jpeg" class="foto"/> <div class="about"><h3>Lars Norrman</h3><br /><h4><i class="fa fa-info-circle"></i> Säljare</h4><br /> <i class="fa fa-envelope"></i> <a href="#">lars.norrman@elon.se</a><br /> <p><i class="fa fa-phone"></i> 0903488380</p> </div>'
  },
  markus: {
    info: '<img src="img/markus.jpeg" class="foto"/> <div class="about"><h3>Markus Nygren</h3><br /><h4><i class="fa fa-info-circle"></i> Säljare</h4><br /> <i class="fa fa-envelope"></i> <a href="#">markus.nygren@elon.se</a><br /> <p><i class="fa fa-phone"></i> 0903488383</p> </div>'
  },
  nina: {
    info: '<img src="img/nina.jpeg" class="foto"/> <div class="about"><h3>Nina Oskarsson</h3><br /><h4><i class="fa fa-info-circle"></i> Säljare</h4><br /> <i class="fa fa-envelope"></i> <a href="#">umea@elon.se</a><br /> <p><i class="fa fa-phone"></i> 090124482</p> </div>'
  },
  marcus: {
    info: '<img src="img/marcus.jpeg" class="foto"/> <div class="about"><h3>Marcus Berggren</h3><br /><h4><i class="fa fa-info-circle"></i> Säljare</h4><br /> <i class="fa fa-envelope"></i> <a href="#">marcus.berggren@elon.se</a> <br /> <p><i class="fa fa-phone"></i> 090124482</p> </div>'
  },
  nils: {
    info: '<img src="img/nils.jpeg" class="foto"/> <div class="about"><h3>Nils Jakobsson</h3><br /><h4><i class="fa fa-info-circle"></i> Installatör</h4><br /> <i class="fa fa-envelope"></i> <a href="#">umea@elon.se</a> <br /> <p><i class="fa fa-phone"></i> 090124482</p> </div>'
  }
}

function handleEnter() {
  if(this.getAttribute('name') == 'mona') {
    frame.innerHTML = personal.mona.info;
    frame.classList.add('frame-enter');
    setTimeout(() => frame.classList.contains('frame-enter') && frame.classList.add('frame-enter-active'), 150);

  } else if(this.getAttribute('name') == 'lena') {
    frame.innerHTML = personal.lena.info;
    frame.classList.add('frame-enter');
    setTimeout(() => frame.classList.contains('frame-enter') && frame.classList.add('frame-enter-active'), 150);

  } else if(this.getAttribute('name') == 'lars') {
    frame.innerHTML = personal.lars.info;
    frame.classList.add('frame-enter');
    setTimeout(() => frame.classList.contains('frame-enter') && frame.classList.add('frame-enter-active'), 150);
  } else if(this.getAttribute('name') == 'markus') {
    frame.innerHTML = personal.markus.info;
    frame.classList.add('frame-enter');
    setTimeout(() => frame.classList.contains('frame-enter') && frame.classList.add('frame-enter-active'), 150);
  } else if(this.getAttribute('name') == 'nina') {
    frame.innerHTML = personal.nina.info;
    frame.classList.add('frame-enter');
    setTimeout(() => frame.classList.contains('frame-enter') && frame.classList.add('frame-enter-active'), 150);
  } else if(this.getAttribute('name') == 'marcus') {
    frame.innerHTML = personal.marcus.info;
    frame.classList.add('frame-enter');
    setTimeout(() => frame.classList.contains('frame-enter') && frame.classList.add('frame-enter-active'), 150);
  } else if(this.getAttribute('name') == 'maggan') {
    frame.innerHTML = personal.maggan.info;
    frame.classList.add('frame-enter');
    setTimeout(() => frame.classList.contains('frame-enter') && frame.classList.add('frame-enter-active'), 150);
  } else if(this.getAttribute('name') == 'nils') {
    frame.innerHTML = personal.nils.info;
    frame.classList.add('frame-enter');
    setTimeout(() => frame.classList.contains('frame-enter') && frame.classList.add('frame-enter-active'), 150);
  } else {
    frame.innerHTML = 'inte mona';
  }
}

function handleLeave() {
  frame.innerHTML = '';
  frame.classList.remove('frame-enter', 'frame-enter-active');
}

employees.forEach(employee => employee.addEventListener('mouseenter', handleEnter));
employees.forEach(employee => employee.addEventListener('mouseleave', handleLeave));

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
