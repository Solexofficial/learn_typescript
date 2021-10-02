const $menuBtn = document.querySelector('#burger-menu');
const $menu = document.querySelector('#nav-menu');
const $welcomeContent = document.querySelector('#welcome-content');

$menuBtn.addEventListener('click', () => toggleMenu());

document.querySelectorAll('.navigation-nav__link').forEach(el => el.addEventListener('click', () => toggleMenu()));

document.body.addEventListener('click', e => {
  if (e.target !== $menu) {
    console.log('close');
  }
});

const toggleMenu = () => {
  $menuBtn.classList.toggle('active');
  $menu.classList.toggle('active');
  $welcomeContent.classList.toggle('hide');
};
