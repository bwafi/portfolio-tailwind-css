// scroll function
const header = document.querySelector('header');
const backToTop = document.querySelector('#back-to-top');

window.addEventListener('scroll', () => {
  //navbar fixed
  if (window.scrollY > 1) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
  //back to top
  if (window.scrollY > 200) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});

// Humberger
const humburger = document.querySelector('#humburger');
const navMenu = document.querySelector('#nav-menu');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('humburger-active');
  navMenu.classList.toggle('hidden');
});

// click menu Humburger
window.addEventListener('click', e => {
  if (e.target != humburger && e.target != navMenu) {
    humburger.classList.remove('humburger-active');
    navMenu.classList.add('hidden');
  }
});

// dakrk mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindah posis toggle sesuai mode

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
