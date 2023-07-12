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
