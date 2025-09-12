let mainMenu = $("nav > ul > li");
let subMenu = mainMenu.find("ul");

mainMenu
  .mouseover(function () {
    subMenu.stop().slideDown();
  })
  .mouseout(function () {
    subMenu.stop().slideUp();
  });

let slideContainer = $(".container");
let slide = slideContainer.find(".slide");
let slideCount = slide.length;
let currentIdx = 0;

function autoSlide() {
  setInterval(function () {
    let nextIdx = (currentIdx + 1) % slideCount;
    slideContainer.animate({ marginTop: -300 * nextIdx + "px" });
    currentIdx = nextIdx;
  }, 3000);
}
autoSlide();

let tabMenu = $(".tabmenu li");
let tabContent = $(".tabcontent >div");

tabMenu.click(function (e) {
  e.preventDefault();
  tabMenu.removeClass("active");
  $(this).addClass("active");

  let target = $(this).find("a").attr("href");
  tabContent.removeClass("active");
  $(target).addClass("active");
});

let popupLinks = $("#notice li:first");
let popup = $("#popup");
let popupCloseBtn = popup.find(".close");

popupLinks.click(function (e) {
  e.preventDefault();
  popup.addClass("active");
});
popupCloseBtn.click(function () {
  popup.removeClass("active");
});
