let mainMenu = $("nav > ul > li ");
let subMenu = mainMenu.find("ul");
let header = $("header");

mainMenu
  .mouseover(function () {
    header.addClass("active");
    subMenu.stop().slideDown();
  })
  .mouseout(function () {
    header.removeClass("active");
    subMenu.stop().slideUp();
  });

let slideContainer = $(".container");
let slide = slideContainer.find(".slide");
let slideCount = slide.length;
let currentIdx = 0;

function autoSlide() {
  setInterval(function () {
    nextIdx = (currentIdx + 1) % slideCount;
    slideContainer.animate({ marginLeft: -1200 * nextIdx + "px" });
    currentIdx = nextIdx;
  }, 3000);
}

autoSlide();

let popupLink = $(".notice li:first");
let popup = $("#popup");
let popupCloseBtn = popup.find(".close");

popupLink.click(function (e) {
  e.preventDefault();
  popup.addClass("active");
});

popupCloseBtn.click(function () {
  popup.removeClass("active");
});
