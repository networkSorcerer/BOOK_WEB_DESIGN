let mainMenu = $(".main_menu > li");

mainMenu
  .mouseover(function () {
    $(this).find("ul").stop().slideDown();
  })
  .mouseout(function () {
    $(this).find("ul").stop().slideUp();
  });
