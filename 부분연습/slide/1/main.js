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
