// slider
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// tabs
const tabsBtn = document.querySelectorAll('.tabs-list__btn');
const tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(el => {
  el.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(el => el.classList.remove('tabs-list__btn--active'));
    e.currentTarget.classList.add('tabs-list__btn--active');

    tabsItem.forEach(el => el.classList.remove('tabs-item--active'));
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// accordion
$( function() {
  $( ".accordion" ).accordion();
} );

  $(".accordion").accordion({
  heightStyle: "content",
  active: 0
  });

// burger
let burger = document.querySelector('.burger')
let menu = document.querySelector('.header__nav-1024')
let navLinks = menu.querySelectorAll('.nav-list__item-link-1024')
let closedMenu = document.querySelector('.closed__nav')

burger.addEventListener('click', () => {
    menu.classList.toggle('header__nav-1024--active');
    document.body.classList.toggle('stop-scroll');
  })

navLinks.forEach((el) => {
    el.addEventListener('click', () => {
        menu.classList.remove('header__nav-1024--active');
        document.body.classList.remove('stop-scroll');
      });
  })

closedMenu.addEventListener('click', function() {
  menu.classList.toggle('header__nav-1024--active');
})

// search
let search = document.querySelector('.header__search')
let field = document.querySelector('.field')
let closedSearch = document.querySelector('.field__closed')

search.addEventListener('click', function() {
  field.classList.toggle('field--active')
})

closedSearch.addEventListener('click', function() {
  field.classList.toggle('field--active')
})


// aria-label
let SwiperPagination1 = document.querySelector("span[aria-label='Go to slide 1']");
SwiperPagination1.ariaLabel = "Перейти к слайду номер 1"

let SwiperPagination2 = document.querySelector("span[aria-label='Go to slide 2']");
SwiperPagination2.ariaLabel = "Перейти к слайду номер 2"

let SwiperPagination3 = document.querySelector("span[aria-label='Go to slide 3']");
SwiperPagination3.ariaLabel = "Перейти к слайду номер 3"
