document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slideItems = document.querySelectorAll(".study");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;

  function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
    updateSlide();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slideItems.length;
    updateSlide();
  });
});
