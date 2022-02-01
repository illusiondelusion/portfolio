const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Retouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'standard': 'Standard',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'premium': 'Premium', 
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'gold': 'Gold',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'phone': 'Phone',
      'message': 'Message',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'standard': 'Стандартная',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'premium': 'Премиум',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'gold': 'Золотая',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'phone': 'Номер телефона',
      'message': 'Сообщение',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }
 

function getTranslate(lang = 'en') {
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(i18nElement => {
        const i18nElementValue = i18Obj[lang][i18nElement.dataset.i18n];
        if (i18nElementValue !== undefined) {
            if (i18nElement.placeholder) {
                i18nElement.placeholder = i18nElementValue;
                i18nElement.textContent = '';
            } else if (i18nElement.value) {
                i18nElement.value = i18nElementValue;
            } else {
                i18nElement.textContent = i18nElementValue;
            }
        }
    
    });

}

const langSwitcher = document.querySelector('.lang-switcher');
const langSwitcherLinks = document.querySelectorAll('.lang');

function changeLang(event) {
    if(event.target.classList.contains('lang')) {
        const lang = event.target.dataset.lang;
        getTranslate(lang);

        langSwitcherLinks.forEach(link => {
            link.classList.remove('active');
        });   

        event.target.classList.add('active');
    }

}

langSwitcher.addEventListener('click', changeLang);


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


function changeTheme() {
    const lightThemeElementsSelectors = ['body', '.header', '.header-nav', '.btn-change', '.btn-change:hover', 'a', 'a:hover', 'h1', 'h2', '.logo', '.logo:hover', '.section-hero', '.btn-fill', '.btn-fill:hover', '.btn-fill:active', '.btn-transparent', '.btn-transparent:hover', '.btn-transparent:active', '.h-line', '.section-title', '.price-item-cost', '.section-contacts', 'input', 'input:focus', '.contacts-form-message', 'textarea:focus', 'input::placeholder', 'textarea::placeholder', '.icon', '.icon:hover', '.line', '.active', '.btn-price'];
    const lightThemeElements = document.querySelectorAll(lightThemeElementsSelectors.join(', '));
    lightThemeElements.forEach(lightThemeElement => {
        lightThemeElement.classList.toggle('light-theme');
    });
}

const changeThemeBtn = document.querySelector('.change-theme');
changeThemeBtn.addEventListener('click', changeTheme);


