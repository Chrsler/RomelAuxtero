//step 1: get DOM
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".pic-carousel");
let SliderDom = carouselDom.querySelector(".pic-carousel .pic-list");
let thumbnailBorderDom = document.querySelector(".pic-carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".pic-item");
let timeDom = document.querySelector(".pic-carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 1000;
let timeAutoNext = 5000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(
    ".pic-carousel .pic-list .pic-item"
  );
  let thumbnailItemsDom = document.querySelectorAll(
    ".pic-carousel .thumbnail .pic-item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}
