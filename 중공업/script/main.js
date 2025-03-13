let mainMenu = $(".main_menu > li");

mainMenu
  .mouseover(function () {
    $(this).find("ul").stop().slideDown();
  })
  .mouseout(function () {
    $(this).find("ul").stop().slideUp();
  });

// let slideContainer = $(".slide_container");
// let slide = slideContainer.find(".slide");
// let slideCount = slide.length;
// let currentIdx = 0;

// slide.eq(currentIdx).fadeIn();
// setInterval(showNextSlide, 3000);
// function showNextSlide() {
//   let nextIdx = (currentIdx + 1) % slideCount;
//   slide.eq(currentIdx).fadeOut();
//   slide.eq(nextIdx).fadeIn();
//   currentIdx = nextIdx;
// }

let slideContainer = $(".slide_container");
let slide = slideContainer.find(".slide");
let slideCount = slide.length;
let currentIdx = 0;

slide.eq(currentIdx).fadeIn();
setInterval(ShowNextSlide, 3000);

function ShowNextSlide() {
  let nextIdx = (currentIdx + 1) % slideCount;
  slide.eq(currentIdx).fadeOut();
  slide.eq(nextIdx).fadeIn();
  currentIdx = nextIdx;
}

let tabMenu = $(".tabmenu li");
let tabContent = $(".tabcontent > div ");

tabMenu.click(function (e) {
  e.preventDefault();
  tabMenu.removeClass("active");
  $(this).addClass("active");

  let target = $(this).find("a").attr("href"); // href안에 있는 #gallery를 통해서 gallery id를 추적함
  tabContent.removeClass("active");
  $(target).addClass("active");
});
