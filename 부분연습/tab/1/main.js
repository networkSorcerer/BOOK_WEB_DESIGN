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
