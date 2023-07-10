// $(".table-mobile__inner").slick({
//   responsive: [
//     {
//       breakpoint: 9048,
//       settings: "unslick",
//     },
//     {
//       breakpoint: 800,
//       settings: {
//         arrows: false,
//         dots: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: false,
//       },
//     },
//   ],
// });

// $(document).ready(function () {
//   $(".top__form").submit(function (event) {
//     event.preventDefault();
//   });
//   $(".contact__form").submit(function (event) {
//     event.preventDefault();
//   });

//   $(".top__input").focus(function () {
//     $(".top__span").addClass("span-focused");
//   });

//   $(".top__input").blur(function () {
//     $(".top__span").removeClass("span-focused");
//   });

//   function select() {
//     $(".select__header").click(selectToggle);
//     $(".select__item").click(selectChoose);
//   }

//   function selectToggle() {
//     $(this).parent().toggleClass("active");
//   }

//   function selectChoose() {
//     const text = $(this).text();
//     const select = $(this).closest(".select");
//     const curentText = select.find(".select__curent");
//     curentText.text(text);
//     select.removeClass("active");
//   }

//   $(".header__burger").click(function () {
//     $(this).toggleClass("disabled");
//     $(".header__burger-body").toggleClass("active");
//     $(".main").toggleClass("menu-open");
//     $(".footer").toggleClass("menu-open");
//     $(".header__inner").toggleClass("menu"); // Добавление класса "menu" к .header__inner
//     $(".wrapper").toggleClass("menu-open"); // Добавление класса "menu" к .header__inner
//   });

//   $(".header__burger-acordeon").click(function () {
//     const index = $(".header__burger-acordeon").index(this);
//     $(this).toggleClass("open");
//     $(".header__burger-img-arrow").eq(index).toggleClass("open");
//   });

//   $(document).ready(function () {
//     $(".top__input").on("input", function () {
//       this.value = this.value.substr(0, 9);
//     });
//   });

//   select();
// });

// $(".partners__inner").slick({
//   responsive: [
//     {
//       breakpoint: 9048,
//       settings: "unslick",
//     },
//     {
//       breakpoint: 710,
//       settings: {
//         infinite: true,
//         centerMode: true,
//         variableWidth: true,
//         mobileFirst: true,
//         mobileMaxWidth: 710,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 200, // Увеличьте значение для более длительной задержки между слайдами
//         speed: 2000, // Увеличьте значение для более плавной анимации
//         easing: "linear", // Попробуйте другие функции анимации, например "easeInOutCubic", "easeInOutQuart", etc.
//         pauseOnHover: false,
//       },
//     },
//   ],
// });

// $(".partners__inner-2").slick({
//   responsive: [
//     {
//       breakpoint: 9048,
//       settings: "unslick",
//     },
//     {
//       breakpoint: 710,
//       settings: {
//         infinite: true,
//         centerMode: true,
//         variableWidth: true,
//         mobileFirst: true,
//         mobileMaxWidth: 710,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 200, // Увеличьте значение для более длительной задержки между слайдами
//         speed: 2000, // Увеличьте значение для более плавной анимации
//         easing: "linear", // Попробуйте другие функции анимации, например "easeInOutCubic", "easeInOutQuart", etc.
//         pauseOnHover: false,
//         rtl: true,
//       },
//     },
//   ],
// });

// const input = document.getElementById("myInput");
// const placeholder = input.getAttribute("placeholder");
// const lastChar = placeholder.charAt(placeholder.length - 1);
// document.querySelector(".last-char").textContent = lastChar;
