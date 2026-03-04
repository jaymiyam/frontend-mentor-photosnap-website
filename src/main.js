// import scss
import './scss/main.scss';

// mobile nav interactions
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.querySelector('.mobile-navigation__wrapper');
const overlay = document.querySelector('.overlay');

mobileNavToggle.addEventListener('click', () => {
  mobileNav.toggleAttribute('data-mobile-show');
  overlay.toggleAttribute('hidden');
  mobileNav.hasAttribute('data-mobile-show')
    ? mobileNavToggle.setAttribute('aria-expanded', 'true')
    : mobileNavToggle.setAttribute('aria-expanded', 'false');
});
