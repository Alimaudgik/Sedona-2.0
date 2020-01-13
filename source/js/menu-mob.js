var Menu = document.querySelector('.main-nav__list');
var MenuClose = document.querySelector('.main-nav__close');
var MenuOpen = document.querySelector('.main-nav__open');
var MenuItem = document.querySelector('.main-nav__item')

if (Menu.classList.contains('menu-on')) {
  MenuClose.classList.add('close__on') 
} else {
  MenuClose.classList.remove('close__on')
};


MenuOpen.addEventListener('click', function () {
  if (Menu.classList.contains('menu-off')) {
    Menu.classList.remove('menu-off');
    Menu.classList.add('menu-on');
    MenuClose.classList.remove('close__off');
    MenuClose.classList.add('close__on');
  } else {
    Menu.classList.remove('menu-on');
    Menu.classList.add('menu-off');
    MenuClose.classList.remove('close__on');
    MenuClose.classList.add('close__off');
  };
});

MenuClose.addEventListener('click', function() {
  if (MenuClose.classList.contains('close__on')) {
    MenuClose.classList.remove('close__on');
    Menu.classList.remove('menu-on');
    MenuClose.classList.add('close__off');
    Menu.classList.add('menu-off')
  }
});




