let scroll = 0, openMenu = false, rid = 0;
const header = document.querySelector('.header');
const footer = document.querySelector('.footer')

window.addEventListener('DOMContentLoaded', () => {
  const headerHTML = `
  <div class="header-box box">

        <div class="header-block">

            <div class="header-content">

                <a href="#" class="header-logo" title="Перейти на главную страницу" aria-label="index page">

                    <img src="./img/logo/Logotype.svg" alt="Logo">
    
                </a>
    
                <nav class="header-nav">
    
                    <ul class="header-list">
                
                        <li><a href="./index.html" class="header-link" aria-label="Home">
                                <div class="header-link__box">
                                    <span>Главная</span>
                                </div>
                            </a>
                        </li>
                
                        <li>
                            <a href="./materials.html" class="header-link" aria-label="function">
                                <div class="header-link__box"><span>Функционал</span></div>
                            </a>
                        </li>
                
                        <li>
                            <a href="./contact.html" class="header-link" aria-label="Contact">
                                <div class="header-link__box"><span>Контакты</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="./feed.html" class="header-link" aria-label="Feed">
                                <div class="header-link__box"><span>Отзывы</span></div>
                            </a>
                        </li>
                
                        <li>
                            <a href="./openings.html" class="header-link" aria-label="Home">
                                <div class="header-link__box"><span>Вакансии</span></div>
                            </a>
                        </li>
                
                    </ul>
                
                    <div class="header-mobile">
                        <button class="header-mobile__btn">Узнать больше</button>
                    </div>
                
                </nav>

                <div class="header-button">

                    <a href="#" aria-label="telegram" class="header-telegram" title="Перейти в телеграм">
                        <img src="./img/icon/yellow-telegram.svg" alt="telegram">
                    </a>

                    <button class="block-btn header-btn">
                        Узнать больше
                    </button>

                </div>

                <div class="header-burger">
                    <div class="header-line"></div>
                </div>

            </div>

        </div>

        <nav class="header-mobile__nav">
    
            <ul class="header-list">

                <li><a href="#" class="header-link" aria-label="Home">Главная</a></li>

                <li><a href="#" class="header-link" aria-label="About">О нас</a></li>

                <li><a href="#" class="header-link" aria-label="function">Функционал</a></li>

                <li><a href="#" class="header-link" aria-label="Contact">Контакты</a></li>

                <li><a href="#" class="header-link" aria-label="Feed">Отзывы</a></li>

                <li><a href="#" class="header-link" aria-label="Home">Вакансии</a></li>

            </ul>

            <div class="header-mobile">
                <button class="header-mobile__btn">Узнать больше</button>
            </div>

        </nav>

    </div>

  <div class="header-back"></div>`;
  const footerHTML = `<div class="footer-box box">

    <div class="footer-content">

        <div class="footer-top">

            <!-- ССЫЛКИ -->

            <div class="footer-left">

                <h2 class="footer-title block-title">
                    Остались вопросы?
                    <br>
                    Свяжитесь с нами!
                </h2>

                <div class="footer-items">

                    <div class="footer-contact" itemscope itemtype="http://schema.org/Organization">

                        <div class="footer-item">

                            <div class="footer-icon">
                                <img src="./img/footer/tel.svg" alt="telephone">
                            </div>

                            <div class="footer-item__info">
                                <p class="footer-item__title" itemprop="name">Номер телефона</p>
                                <a href="tel:+7(383)225-3-225" title="Телефон" aria-label="telephone" class="footer-item__link" itemprop="telephone">+7 (383) 225-3-225</a>
                            </div>

                        </div>

                        <div class="footer-item">

                            <div class="footer-icon">
                                <img src="./img/footer/mail.svg" alt="email">
                            </div>

                            <div class="footer-item__info">
                                <p class="footer-item__title" itemprop="name">Email</p>
                                <a href="mailto: info@honeycorn.ru" title="Email" aria-label="email" class="footer-item__link" itemprop="email">info@honeycorn.ru</a>
                            </div>

                        </div>

                    </div>

                    <div class="footer-location" itemscope itemtype="http://schema.org/Organization">

                        <div class="footer-item">

                            <div class="footer-icon">
                                <img src="./img/footer/location.svg" alt="location">
                            </div>

                            <div class="footer-item__info">
                                <p class="footer-item__title" itemprop="name">Адрес</p>
                                <a itemprop="address" href="tel: +7 (383) 225-3-225" title="Адрес" aria-label="adress" class="footer-item__link">
                                    <span itemprop="addressLocality">Новосибирск</span>,
                                    <span itemprop="streetAddress">Авиастроителей 39б</span>
                                </a>
                            </div>

                        </div>

                    </div>

                    <div class="footer-soc">

                        <a href="#" title="Перейти в телеграм" aria-label="telegram" class="footer-icon">
                            <img src="./img/footer/telegram.svg" alt="telegram">
                        </a>

                        <a href="#" title="Перейти в Дзен" aria-label="dzen" class="footer-icon">
                            <img src="./img/footer/dzen.svg" alt="dzen">
                        </a>

                    </div>

                </div>

            </div>

            <!-- ФОРМА -->

            <div class="footer-right">

                <form action="" class="form">

                    <div class="form__person">

                        <div class="form__input">
                            <p class="form__title">Ваше имя</p>
                            <input type="text" name="firstname" title="Введите имя" aria-label="name" placeholder="начните вводить" required>
                        </div>

                        <div class="form__input">
                            <p class="form__title">Email</p>
                            <input type="email" name="email" title="Введите вашу почту" aria-label="email" placeholder="начните вводить" required>
                        </div>

                    </div>

                    <div class="form__message">

                        <p class="form__title">Сообщение</p>
                        <textarea name="message" title="Введите сообщение" id="" cols="30" rows="10" placeholder="начните вводить"></textarea>

                    </div>

                    <div class="form__submit">

                        <div class="form__policy">
                            <p>Нажимая отправить, вы соглашаетесь <a href="#" aria-label="policy" title="Ознакомиться с политикой обработки персональных данных">с политикой обработки персональных данных</a></p>
                        </div>

                        <div class="form__button">

                            <button class="form__btn block-btn">

                                <img src="./img/icon/security-icon-yellow.svg" alt="security-icon-yellow">

                                <p>Получить защиту</p>

                            </button>

                        </div>

                    </div>

                </form>

            </div>

        </div>

        <div class="footer-bottom">

            <div class="footer-ip">
                <a href="#" title="Перейти на главную страницу" class="footer-logo" aria-label="index page">
                    <img src="./img/logo/Logotype.svg" alt="logo">
                </a>
                <p class="footer-text">
                    © 2023 - ИП Иванова Иван Иванович 
                    <br>
                    ИНН: 6351651616513
                </p>
            </div>

            <div class="footer-reestr reestr-2">

                <p class="footer-reestr__text">
                    Honey Corn в едином 
                    <br>
                    реестре отечественного ПО
                </p>

                <div class="footer-reestr__logo">
                    <img src="./img/footer/минцифры 1.svg" alt="logo-min">
                </div>

            </div>

        </div>

    </div>

    <div class="footer-content__mobile">

        <p class="footer-text">
            © 2023 - ИП Иванова Иван Иванович 
            <br>
            ИНН: 6351651616513
        </p>

        <p class="footer-create reestr-3">

            Создание сайта <a href="#" title="Контакты создателя сайта" aria-label="contact of the website creator">New Way</a>

        </p>

    </div>

  </div>

  <div class="footer-mobile">
    <img src="./img/footer/mobile-img.png" alt="mobile">
  </div>`;
  contentDraw(headerHTML, header)
  contentDraw(footerHTML, footer)

  const functionImg = document.querySelector('.function-img__box img');
  const bannerImg = document.querySelector('.banner-layer img');

  const headerBurger = document.querySelector('.header-burger');
  const headerNav = document.querySelector('.header-mobile__nav');
  const headerBack = document.querySelector('.header-back');

  const opport = document.querySelector('.opport-swiper');
  const opportWrapper = document.querySelector('.opport-wrapper');
  const arrOpportSlide = document.querySelectorAll('.opport-item');
  const opportSwipe =  document.querySelector('.opport-swiper.swiper');

  img(functionImg, './img/function/Group 229.png', './img/function/mobile.png')
  img(bannerImg, './img/banner/Group.png', './img/banner/mobile-banner.png')
  swipe(opport, opportWrapper, arrOpportSlide, opportSwipe);

  window.onscroll = onScroll;
  window.addEventListener('resize', () => {
    img(functionImg, './img/function/Group 229.png', './img/function/mobile.png');
    img(bannerImg, './img/banner/Group.png', './img/banner/mobile-banner.png');
    swipe(opport, opportWrapper, arrOpportSlide, opportSwipe);
  })
  window.addEventListener('click', (e) => {
    if(e.target.closest('.header-burger')) {
      openMenu = !openMenu;
      menuLogic(openMenu, headerNav, headerBurger, headerBack);
    }
  })

  if(document.querySelector('.swiper')) {
    new Swiper('.function-swiper', {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
          nextEl: '.function-next',
          prevEl: '.function-prev'
      },
      breakpoints: {
        1000: {
          slidesPerView: 4
        },
        800: {
          slidesPerView: 3
        },
        580: {
          slidesPerView: 2
        },
        0: {
          slidesPerView: 1
        }
      }
    })

    new Swiper('.banner-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      fadeEffect: { crossFade: true },
      virtualTranslate: true,
      effect: 'fade',
      speed: 2000,
      autoplay: {
        delay: 10000,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.banner-pagination',
        clickable: true,
        renderBullet: function(index, className) {
          let names = [];

          document.querySelectorAll('.banner-slide').forEach(i => names.push(i.getAttribute('data-slide-name')))

          return "<span class="+className+"><p>" + names[index] + "</p></span>";
        }
      }
    })
  }
  
})

function img(i, pk, mobile)  {
  if(i) screen.width > 900 ? i.setAttribute('src', pk) : i.setAttribute('src', mobile);
}

function onScroll() {
  var top = window.pageYOffset;
  scroll > top ? header.classList.add('stuck') : header.classList.remove('stuck');
  scroll = top;
}

function swipe(opport, opportWrapper, arrOpportSlide, opportSwipe) {
  if(opport) {
    if(!opportSwipe) {
      if(screen.width < 700) {
        opport.classList.add('swiper');
        opportWrapper.classList.add('swiper-wrapper');

        arrOpportSlide.forEach(i => i.classList.add('swiper-slide'))

        const oportPag = document.querySelector('.opport-pagination')

        if(!oportPag) {
          const pag = document.createElement('div');
          pag.classList.add('swiper-pagination', 'opport-pagination')
    
          opport.appendChild(pag);
    
          new Swiper(opport, {
            breakpoints: {
              600: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              0: {
                slidesPerView: 1.4,
                spaceBetween: 20
              }
            },
            pagination: {
              el: '.opport-pagination',
              clickable: true
            }
          })
        }
  
      } else if(screen.width > 700) {
        opport.classList.remove('swiper');
        opportWrapper.classList.remove('swiper-wrapper');
        arrOpportSlide.forEach(i => i.classList.remove('swiper-slide'))
      }
    }
  }
}

function menuLogic(state, nav, burger, back) {
  if(state == true) {
    nav.classList.add('active');
    burger.classList.add('active');
    back.classList.add('active');
    document.body.classList.add('stuck');
  } else {
    nav.classList.remove('active');
    burger.classList.remove('active');
    back.classList.remove('active');
    document.body.classList.remove('stuck');
  }
}

function contentDraw(html, block)  {
  if(block) block.insertAdjacentHTML('beforeend', html)
}