const popupBtns = document.querySelectorAll(".open__popup");
const popupBtn = document.querySelectorAll(".open__popup-2");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");
const popups = document.querySelectorAll(".popup");
const popupss = document.querySelectorAll(".popup.form");
const popupBoxes = document.querySelectorAll(".popup__box");
const closeButtons = document.querySelectorAll(".popup__btn, .close__btn");
const closeButton = document.querySelectorAll(".close__btn");
const popupBtnn = document.querySelectorAll(".popup__btn-2");

let unlock = true;

const timeout = 300;

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

  for (let index = 0; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.style.paddingRight = lockPaddingValue;
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");
  body.style.overflow = "hidden"; // Добавляем стиль overflow: hidden

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = "";
      }
    }

    body.style.paddingRight = "";
    body.classList.remove("lock");
    body.style.overflow = ""; // Удаляем стиль overflow: hidden
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

popupBtnn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    popups.forEach(function (popup) {
      popup.classList.add("active");
      popup.classList.remove("ass");
    });
    popupBoxes.forEach(function (box) {
      box.classList.add("active");
      box.classList.remove("ass");
    });
    popups.forEach(function (popup) {
      popup.classList.remove("open");
    });
    popupBoxes.forEach(function (box) {
      box.classList.remove("open");
    });
  });
});

popupBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    popups.forEach(function (popup) {
      popup.classList.add("active");
    });
    popupBoxes.forEach(function (box) {
      box.classList.add("active");
    });
    bodyLock();
  });
});

popupBtn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    popupss.forEach(function (popup) {
      popup.classList.add("open");
    });
    popupBoxes.forEach(function (box) {
      box.classList.add("open");
    });
    bodyLock();
  });
});

closeButton.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    popups.forEach(function (popup) {
      popup.classList.remove("open");
    });
    popupBoxes.forEach(function (box) {
      box.classList.remove("open");
    });
    bodyUnlock();
  });
});

closeButtons.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    popups.forEach(function (popup) {
      popup.classList.remove("active");
      popup.classList.add("ass");
    });
    popupBoxes.forEach(function (box) {
      box.classList.remove("active");
      box.classList.add("ass");
    });
    bodyUnlock();
  });
});








  $(document).ready(function () {
    function selectToggle() {
      $(this).parent().toggleClass("active");
    }

    function selectChoose() {
      const text = $(this).text();
      const select = $(this).closest(".select");
      const curentText = select.find(".select__curent");
      curentText.text(text);
      select.removeClass("active");
    }

    function initSelect() {
      $(".select__header").click(selectToggle);
      $(".select__item").click(selectChoose);
    }


    function toggleAcordeon(index) {
      $(".header__burger-acordeon").eq(index).toggleClass("open");
      $(".header__burger-img-arrow").eq(index).toggleClass("open");
    }


    $(".header__burger-acordeon").click(function () {
      const index = $(".header__burger-acordeon").index(this);
      toggleAcordeon(index);
    });

    initSelect();
  });









  const typeTextElement = document.getElementById('typeText');
  if (typeTextElement) {
    const typed = new Typed('#typeText', {
      strings: [
        '<span>для автоматизації та зростання бізнесу</span>',
        '<span>для збільшення продажів</span>',
        '<span>для ефективної комунікації з клієнтами</span>'
      ],
      typeSpeed: 30,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
    });
  }

  $(".partners__inner").slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 950,
        settings: {
          centerMode: true,
          arrows: false,
          initialSlide: 1,
          speed: 3000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: 'linear',
          infinite: true,
          swipeToSlide: true,
          slidesToShow: 4,
          centerPadding: '0'
        }
      },
      {
        breakpoint: 820,
        settings: {
          centerMode: true,
          arrows: false,
          initialSlide: 1,
          speed: 3000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: 'linear',
          infinite: true,
          swipeToSlide: true,
          slidesToShow: 3,
          centerPadding: '0'
        }
      },
      {
        breakpoint: 580,
        settings: {
          centerMode: true,
          arrows: false,
          initialSlide: 1,
          speed: 3000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: 'linear',
          infinite: true,
          swipeToSlide: true,
          slidesToShow: 2,
          centerPadding: '0'
        }
      }
    ]
  });

  $(".partners__inner-2").slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 950,
        settings: {
          centerMode: true,
          arrows: false,
          initialSlide: 1,
          speed: 3000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: 'linear',
          infinite: true,
          swipeToSlide: true,
          slidesToShow: 4,
          centerPadding: '0',
          rtl: true
        }
      },
      {
        breakpoint: 820,
        settings: {
          centerMode: true,
          arrows: false,
          initialSlide: 1,
          speed: 3000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: 'linear',
          infinite: true,
          swipeToSlide: true,
          slidesToShow: 3,
          centerPadding: '0',
          rtl: true
        }
      },
      {
        breakpoint: 580,
        settings: {
          centerMode: true,
          arrows: false,
          initialSlide: 1,
          speed: 3000,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: 'linear',
          infinite: true,
          swipeToSlide: true,
          slidesToShow: 2,
          centerPadding: '0',
          rtl: true
        }
      }
    ]
  });


  $(document).ready(function () {
    // Функция для скрытия селект боди
    function hideSelectBody() {
      $('.select-body').removeClass('show');
    }

    // Обработчик клика по селекту
    $('.select').on('click', function () {
      $(this).siblings('.select-body').toggleClass('show');
    });

    // Обработчик клика по элементам селект боди
    $('.select-item').on('click', function () {
      const selectedLang = $(this).data('lang');
      $(this).closest('.select-body').siblings('.select').find('.select-img').attr('src', `/images/lang/${selectedLang}.svg`);
      hideSelectBody();
    });

    // Обработчик клика по другим элементам страницы
    $(document).on('click', function (event) {
      const targetElement = $(event.target);
      if (!targetElement.closest('.select').length) {
        hideSelectBody();
      }
    });
  });


  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    initialCountry: "ua",
    dropdownContainer: document.body,
  });
  var input = document.querySelector("#phone-2");
  window.intlTelInput(input, {
    initialCountry: "ua",
    dropdownContainer: document.body,

  });
  var top = document.querySelector("#phone-3");
  window.intlTelInput(top, {
    initialCountry: "ua",
    dropdownContainer: document.body,
  });
  var top = document.querySelector("#phone-4");
  window.intlTelInput(top, {
    initialCountry: "ua",
    dropdownContainer: document.body,
  });

  var element = document.querySelector(".iti__selected-flag");

  element.addEventListener("mouseenter", function () {
    event.stopPropagation();
    element.classList.add("hover-effect");
  });

  element.addEventListener("mouseleave", function () {
    element.classList.remove("hover-effect");
  });

  const Star = document.querySelector(".popup-input");
  const redStar = document.querySelector(".red-star");

  Star.addEventListener("input", function () {
    if (Star.value.trim() !== "") {
      redStar.style.display = "none";
    } else {
      redStar.style.display = "block";
    }
  });

  const Stars = document.querySelector(".input-tel");
  const redStars = document.querySelector(".red-star-2");

  Stars.addEventListener("input", function () {
    if (Stars.value.trim() !== "") {
      redStars.style.display = "none";
    } else {
      redStars.style.display = "block";
    }
  });

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      } else {
        // change.target.classList.remove("element-show");
      }
    });
  }

  let options = {
    threshold: [0.1],
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".element-animation");

  for (let elm of elements) {
    observer.observe(elm);
  }

  $(document).ready(function () {
    $("a.header__link[href='#contact']").on("click", function (event) {
      event.preventDefault();

      var id = $(this).attr("href");
      var top = $(id).offset().top;

      $("body,html").animate({scrollTop: top}, 1000);
    });
  });

  const contact = document.querySelector(".contact__input-name");
  const redStarContact = document.querySelector(".contact__red-star");

  contact.addEventListener("input", function () {
    if (contact.value.trim() !== "") {
      redStarContact.style.display = "none";
    } else {
      redStarContact.style.display = "block";
    }
  });

  const contacts = document.querySelector(".contact__input-tel");
  const redStarContacts = document.querySelector(".contact__red-star-2");

  contacts.addEventListener("input", function () {
    if (contacts.value.trim() !== "") {
      redStarContacts.style.display = "none";
    } else {
      redStarContacts.style.display = "block";
    }
  });

  $(document).ready(function () {
    const $accordeonWrappers = $(".design-acardeon__wrapper");

    // Скрываем текст всех аккордеонов, кроме первого
    $accordeonWrappers
        .not(":first")
        .find(".design-acardeon__text-box")
        .slideUp(0);
    $accordeonWrappers.not(":first").removeClass("active");
    $accordeonWrappers
        .not(":first")
        .find(".design-acardeon__arrow")
        .css("transform", "rotate(0deg)");

    // Делегируем событие клика на обертку аккордеона
    $(".design-acardeon").on("click", ".design-acardeon__button", function () {
      const $wrapper = $(this).parent(); // Обертка аккордеона
      const isOpen = $wrapper.hasClass("active");

      // Если обертка была закрыта, открываем её; иначе, закрываем все аккордеоны
      if (!isOpen) {
        $accordeonWrappers.removeClass("active");
        $accordeonWrappers.find(".design-acardeon__text-box").slideUp(300);
        $accordeonWrappers
            .find(".design-acardeon__arrow")
            .css("transform", "rotate(0deg)");

        $wrapper.addClass("active");
        $wrapper.find(".design-acardeon__text-box").slideDown(300);
        $wrapper
            .find(".design-acardeon__arrow")
            .css("transform", "rotate(180deg)");
      } else {
        $wrapper.removeClass("active");
        $wrapper.find(".design-acardeon__text-box").slideUp(300);
        $wrapper.find(".design-acardeon__arrow").css("transform", "rotate(0deg)");
      }
    });
  });

// Отримуємо усі елементи з класом "cards__card"
  const cardElements = document.querySelectorAll(".cards__card");

// Зберігаємо посилання на активний елемент
  let activeCard = null;

// Функція для відкриття / закриття карточки
  function toggleCard(event) {
    const clickedCard = event.currentTarget;

    if (activeCard === clickedCard) {
      // Натиснута активна карточка, закриваємо її
      clickedCard.classList.remove("active");
      activeCard = null;
    } else {
      // Закриваємо попередню активну карточку, якщо вона є
      if (activeCard) {
        activeCard.classList.remove("active");
      }

      // Відкриваємо нову карточку
      clickedCard.classList.add("active");
      activeCard = clickedCard;
    }
  }

// Додаємо обробник подій для кожної карточки
  cardElements.forEach((card) => {
    card.addEventListener("click", toggleCard);
  });

// Додаємо обробник подій для всього документу
  document.addEventListener("click", function (event) {
    const targetElement = event.target;

    // Перевіряємо, чи користувач натиснув де-небудь, крім карточок
    if (!targetElement.closest(".cards__card")) {
      // Закриваємо активну карточку, якщо вона є
      if (activeCard) {
        activeCard.classList.remove("active");
        activeCard = null;
      }
    }
  });


  const header = document.querySelector('.header');
  let prevScrollPos = window.pageYOffset;
  const defaultOffset = 100; // Задержка перед скрытием хедера после прокрутки

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;

    // Проверяем, скроллится ли вниз или вверх
    if (prevScrollPos > currentScrollPos) {
      // Прокрутка вверх - показываем хедер
      header.classList.remove('header--hidden');
    } else {
      // Прокрутка вниз - скрываем хедер после прокрутки на defaultOffset пикселей
      if (currentScrollPos > defaultOffset) {
        header.classList.add('header--hidden');
      }
    }

    prevScrollPos = currentScrollPos;
  }

// Вызываем функцию handleScroll, чтобы обработать скролл при загрузке страницы
  handleScroll();


//
// Обрабатываем событие скролла
  window.addEventListener('scroll', handleScroll);

//
//
// window.onload = function () {
//   const icons = document.querySelector('.icons-paralax');
//
//   const forIcons = 15;
//   const speed = 0.05;
//
//   let positionX = 0, positionY = 0;
//   let cordXprocent = 0, cordYprocent = 0; // Corrected the variable name here
//
//   function setMouseParallaxStyle() {
//     const distX = cordXprocent - positionX; // Corrected the variable name here
//     const distY = cordYprocent - positionY; // Corrected the variable name here
//
//     positionX = positionX + (distX * speed);
//     positionY = positionY + (distY * speed);
//
//     icons.style.cssText = `transform: translate(${positionX / forIcons}%, ${positionY / forIcons}%);`;
//   }
//
//   setMouseParallaxStyle();
//
//   document.addEventListener("mousemove", function (e) {
//     const documentWidth = document.body.offsetWidth;
//     const documentHeight = document.body.offsetHeight;
//
//     const cordX = e.pageX - documentWidth;
//     const cordY = e.pageY - documentHeight;
//
//     cordXprocent = cordX / documentWidth * 100;
//     cordYprocent = cordY / documentHeight * 100;
//
//     setMouseParallaxStyle();
//   });
// };
//
//





















document.querySelector('.header__burger').addEventListener('click', function() {
  document.querySelector('.header__burger').classList.toggle('disabled');


  if (document.body.classList.contains('menu-open-btn')) {
    document.body.classList.remove('menu-open-btn'); // Удалите класс, чтобы восстановить прокрутку
  } else {
    document.body.classList.add('menu-open-btn'); // Добавьте класс, чтобы ограничить прокрутку
  }

  document.querySelector('.header__burger-body').classList.toggle('menu-open-btn');
});




$(document).ready(function () {
  $(".top__form").submit(function (event) {
    event.preventDefault();
  });
  $(".contact__form").submit(function (event) {
    event.preventDefault();
  });

  $(".top__input").focus(function () {
    $(".top__span").addClass("span-focused");
  });

  $(".top__input").blur(function () {
    $(".top__span").removeClass("span-focused");
  });
})










