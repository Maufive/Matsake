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
    info: '<img src="img/mona.jpeg" class="foto" /> <div class="about"><h3>Mona Johandahl</h3><br /><h4>Ägare</h4><br /><a href="#">mona.johandahl@elon.se</a><br /> 0903488385 </div>'
  },
  lena: {
    info: '<img src="img/lena.jpeg" class="foto" /> <div class="about"><h3>Lena Adolphson</h3><br /><h4>Ägare</h4><br /><a href="#">lena.adolphsson@elon.se</a><br /> 0903488384 </div>'
  },
  lars: {
    info: '<img src="img/lars.jpeg" class="foto" /> <div class="about"><h3>Lars Norrman</h3><br /><h4>Säljare</h4><br /><a href="#">lars.norrman@elon.se</a><br /> 0903488380 </div>'
  },
  markus: {
    info: '<img src="img/markus.jpeg" class="foto" /> <div class="about"><h3>Markus Nygren</h3><br /><h4>Säljare</h4><br /><a href="#">markus.nygren@elon.se</a><br /> 0903488383 </div>'
  },
  nina: {
    info: '<img src="img/nina.jpeg" class="foto" /> <div class="about"><h3>Nina Oskarsson</h3><br /><h4>Säljare</h4><br /><a href="#">umea@elon.se</a><br /> 090124482 </div>'
  },
  marcus: {
    info: '<img src="img/marcus.jpeg" class="foto" /> <div class="about"><h3>Marcus Berggren</h3><br /><h4>Säljare</h4><br /><a href="#">marcus.berggren@elon.se</a><br /> 090124482 </div>'
  },
  maggan: {
    info: '<img src="img/maggan.jpeg" class="foto" /> <div class="about"><h3>Maggan Gustafsson</h3><br /><h4>Säljare</h4><br /><a href="#">umea@elon.se</a><br /> 090124482 </div>'
  },
  nils: {
    info: '<img src="img/nils.jpeg" class="foto" /> <div class="about"><h3>Nils Jakobsson</h3><br /><h4>Installatör</h4><br /><a href="#">umea@elon.se</a><br /> 090124482 </div>'
  }
}

function handleEnter() {
  if(this.getAttribute('name') == 'mona') {
    frame.innerHTML = personal.mona.info;
  } else if(this.getAttribute('name') == 'lena') {
    frame.innerHTML = personal.lena.info;
  } else if(this.getAttribute('name') == 'lars') {
    frame.innerHTML = personal.lars.info;
  } else if(this.getAttribute('name') == 'markus') {
    frame.innerHTML = personal.markus.info;
  } else if(this.getAttribute('name') == 'nina') {
    frame.innerHTML = personal.nina.info;
  } else if(this.getAttribute('name') == 'marcus') {
    frame.innerHTML = personal.marcus.info;
  } else if(this.getAttribute('name') == 'maggan') {
    frame.innerHTML = personal.maggan.info;
  } else if(this.getAttribute('name') == 'nils') {
    frame.innerHTML = personal.nils.info;
  } else {
    frame.innerHTML = 'inte mona';
  }
}

function handleLeave() {

}

employees.forEach(employee => employee.addEventListener('mouseenter', handleEnter));
employees.forEach(employee => employee.addEventListener('mouseleave', handleLeave));
