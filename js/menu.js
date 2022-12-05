const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('lock');
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) {
      return;
    }
    mobileMenu.classList.remove('active');
    document.body.classList.remove('lock');
  });
}
