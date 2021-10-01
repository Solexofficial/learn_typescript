const $menuBtn = document.querySelector('#burger-menu');
const $menu = document.querySelector('#nav-menu');
const $welcomeContent = document.querySelector('#welcome-content');

$menuBtn.addEventListener('click', () => {
  $menu.classList.toggle('active');
  $welcomeContent.classList.toggle('hide');
});
