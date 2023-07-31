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

$(".table-mobile__inner").slick({
  responsive: [
    {
      breakpoint: 9048,
      settings: "unslick",
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
      },
    },
  ],
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

  function select() {
    $(".select__header").click(selectToggle);
    $(".select__item").click(selectChoose);
  }

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

  $(".header__burger").click(function () {
    $(this).toggleClass("disabled");
    $(".header__burger-body").toggleClass("active");
    $(".main").toggleClass("menu-open");
    $(".footer").toggleClass("menu-open");
    $(".header__inner").toggleClass("menu"); // Добавление класса "menu" к .header__inner
    $(".wrapper").toggleClass("menu-open"); // Добавление класса "menu" к .header__inner
  });

  $(".header__burger-acordeon").click(function () {
    const index = $(".header__burger-acordeon").index(this);
    $(this).toggleClass("open");
    $(".header__burger-img-arrow").eq(index).toggleClass("open");
  });

  select();
});

$(".partners__inner").slick({
  responsive: [
    {
      breakpoint: 9048,
      settings: "unslick",
    },
    {
      breakpoint: 710,
      settings: {
        infinite: true,
        centerMode: true,
        variableWidth: true,
        mobileFirst: true,
        mobileMaxWidth: 710,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 200, // Увеличьте значение для более длительной задержки между слайдами
        speed: 2000, // Увеличьте значение для более плавной анимации
        easing: "linear", // Попробуйте другие функции анимации, например "easeInOutCubic", "easeInOutQuart", etc.
        pauseOnHover: false,
      },
    },
  ],
});

$(".partners__inner-2").slick({
  responsive: [
    {
      breakpoint: 9048,
      settings: "unslick",
    },
    {
      breakpoint: 710,
      settings: {
        infinite: true,
        centerMode: true,
        variableWidth: true,
        mobileFirst: true,
        mobileMaxWidth: 710,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 200, // Увеличьте значение для более длительной задержки между слайдами
        speed: 2000, // Увеличьте значение для более плавной анимации
        easing: "linear", // Попробуйте другие функции анимации, например "easeInOutCubic", "easeInOutQuart", etc.
        pauseOnHover: false,
        rtl: true,
      },
    },
  ],
});

var input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "ua",
});
var input = document.querySelector("#phone-2");
window.intlTelInput(input, {
  initialCountry: "ua",
});
var top = document.querySelector("#phone-3");
window.intlTelInput(top, {
  initialCountry: "ua",
});
var top = document.querySelector("#phone-4");
window.intlTelInput(top, {
  initialCountry: "ua",
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
  threshold: [0.5],
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

    $("body,html").animate({ scrollTop: top }, 1000);
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




// // Обрабатываем событие скролла
// window.addEventListener('scroll', handleScroll);
//
// // PARALAX TOP SECTION
//
//
// window.onload = function () {
//   const paralax = document.querySelector('.paralax');
//
//   if(paralax) {
//     const icons = document.querySelector('.icons-paralax');
//     const phone = document.querySelector('.phone-top');
//
//     const forIcons = 40;
//     const forPhone = 20;
//
//     const speed =0.05;
//
//     let positionX = 0, positionY = 0;
//     let coordXprocent = 0, coordYprocent = 0;
//
//     function setMouseParallaxStyle() {
//       const distX = coordXprocent - positionY;
//       const distY = coordYprocent - positionY;
//
//       positionX = positionX + (distX * spped);
//       positionY = positionY + (distY * speed);
//
//       icons.style.cssText = `transform: translate(${positionX / forIcons}%,${positionY / forIcons}%);`
//       phone.style.cssText = `transform: translate(${positionX / forPhone}%,${positionY / forPhone}%);`
//     }
//     setMouseParallaxStyle();
//
//     paralax.addEventListener("mousemove", function (e) {
//       const paralaxWidth = paralax.offsetWidth;
//       const paralaxHeight = paralax.offsetHeight;
//
//       const cordX = e.pageX - paralaxWidth;
//       const cordY = e.pageY - paralaxHeight;
//
//       cordXprocent = cordX / paralaxWidth * 100;
//       cordYprocent = cordY / paralaxHeight * 100;
//     })
//
//     let thresholdSets = [];
//     for (let i =0; i <= 1.0 i += 0.005) {
//       thresholdSets.push(i)''
//     }
//     const callback = function (entries, observer) {
//       const scrollTopProcent = window.pageYOffset / paralax.offsetHeight * 100;
//       setParalaxItemsStyle(scrollTopProcent);
//     }
//     const observer = new IntersectionObserver(callback, {
//       threshold: thresholdSets
//     })
//
//     observer.observe(document.querySelector('.content'));
//
//     function setParallaxItemsStyle(scrollTopProcent){
//       icons.style.cssText = `transform: translate(0% - ${scrollTopProcent / 9}%);`
//       phone.style.cssText = `transform: translate(0% - ${scrollTopProcent / 6}%);`
//     }
//
//
//   }
//
// }














