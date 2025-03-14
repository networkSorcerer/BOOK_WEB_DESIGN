let mainMenu = $(".main_menu >li");

mainMenu
  .mouseover(function () {
    $(this).find("ul").stop().slideDown();
  })
  .mouseout(function () {
    $(this).find("ul").stop().slideUp();
  });

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
let tabContent = $(".tabcontent > div");
tabMenu.click(function () {
  let target = $(this).find("a").attr("href");
  tabContent.removeClass("active");
  $(target).addClass("active");
});

let popupLink = $("#notice li:first");
let popup = $("#popup");
let popupCloseBtn = $("#popup .close");

popupLink.click(function (e) {
  e.preventDefault;
  popup.addClass("active");
});
popupCloseBtn.click(function () {
  popup.removeClass("active");
});
