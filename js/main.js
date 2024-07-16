window.onload = function () {
  const elem = document.querySelector('.grid');
  const screenWidth = window.innerWidth;
  const gridItems = document.querySelectorAll('.grid-item');
  const gridItemFull = document.querySelectorAll('.grid-item-full');

  if(screenWidth < 992 ){
    gridItemFull.forEach(el => {
      el.classList.remove('grid-item-full');
    });
    gridItems.forEach(el => {
      el.style.position = 'relative';
      el.style.setProperty("top", "0", "important");
      el.style.width = '100%';
      el.style.marginTop = '0';
      el.classList.add('why-item__clip');
    })
  } else {
    const iso = new Isotope(elem, {
    // options
    itemSelector: '.grid-item',
    layoutMode: 'masonry'
  });
  }
  // if(screenWidth < 992 ){
  //   elem.classList.remove('grid');
  //   gridItems.forEach(el => {
  //     el.style.position = 'relative';
  //     el.style.setProperty("top", "0", "important");
  //     el.style.width = '100%';
  //     el.style.marginTop = '0';

  //   });
  // }
  // const iso = new Isotope(elem, {
  //   // options
  //   itemSelector: '.grid-item',
  //   layoutMode: 'masonry'
  // });
  

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