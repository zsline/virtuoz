window.onload = function () {
  const elem = document.querySelector('.grid');
  const iso = new Isotope(elem, {
    // options
    itemSelector: '.grid-item',
    layoutMode: 'masonry'
  });


};

  // ========== MENU =================
  const openBtn = document.querySelector('.header__btn--open');
  const closeBtn = document.querySelector('.header__btn--close');
  const navMenu = document.querySelector('.header__nav');

  openBtn.addEventListener('click', () => {
    navMenu.classList.add('open');
  });
  closeBtn.addEventListener('click', () =>{
    navMenu.classList.remove('open');
  });