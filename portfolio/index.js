const hamburger = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header-nav');
hamburger.addEventListener('click', function() {
  this.classList.toggle('is-active');
  headerNav.classList.toggle('nav-open');
});

headerNav.addEventListener('click', function(event) {
    if (event.target.classList.contains('nav-link')) {
      hamburger.classList.remove('is-active');
      headerNav.classList.remove('nav-open');
    }
  });

