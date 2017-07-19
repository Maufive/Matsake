const textbox = document.querySelectorAll('.textbox');

function textboxEnter() {
  this.classList.add('hover-enter');
  setTimeout(() => this.classList.contains('hover-enter') && this.classList.add('hover-active'), 150);
  this.children[1].classList.add('element-display');
  setTimeout(() => this.children[1].classList.contains('element-display') && this.children[1].classList.add('element-display-active'), 150);
}

function textboxLeave() {
  if(this.classList.contains('hover-enter')) {
    this.classList.remove('hover-enter', 'hover-active');
  }
  if(this.children[1].classList.contains('element-display')) {
    this.children[1].classList.remove('element-display', 'element-display-active');
  }
}

textbox.forEach(textbox => textbox.addEventListener('mouseenter', textboxEnter));
textbox.forEach(textbox => textbox.addEventListener('mouseleave', textboxLeave));
