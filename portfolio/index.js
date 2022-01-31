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


const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioBtnsParent = document.querySelector('.portfolio-buttons');
const portfolioImgs = document.querySelectorAll('.portfolio-img');

function changeImages(event) {
    if(event.target.classList.contains('portfolio-btn')) {
        portfolioImgs.forEach((img, index) => (img.src = `./assets/img/${event.target.dataset.season}/portfolio-img-${index + 1}.jpg`));
        
        portfolioBtns.forEach(button => {
            button.classList.remove('active');
        });   

        event.target.classList.add('active');
    }
}

portfolioBtnsParent.addEventListener('click', changeImages);


function preloadImages() {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    seasons.forEach(season => {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${season}/portfolio-img-${i}.jpg`;
          }
    });
}

preloadImages();






