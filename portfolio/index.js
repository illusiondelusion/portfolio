const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function() {
  this.classList.toggle('is-active');
});

const menuList = document.querySelector('.menu-list')
menuList.addEventListener('click', function(event) {
    if (event.target.classList.contains('nav-link')) {
      hamburger.classList.remove('hamburger.is-active');
      menuList.classList.remove('menu-list.open');
    }
  });

