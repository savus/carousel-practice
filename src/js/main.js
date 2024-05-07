document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(
    ".carousel-container .carousel-card"
  );

  const buttonContainer = document.querySelector(".btn-group");

  let currentIndex = Math.floor(Math.random() * carousels.length);
  let nextIndex = currentIndex < carousels.length - 1 ? currentIndex + 1 : 0;
  let prevIndex = currentIndex > 0 ? currentIndex - 1 : carousels.length - 1;

  const updateCards = () => {
    carousels.forEach((carousel) =>
      carousel.classList.remove("active", "prev", "next")
    );

    carousels[prevIndex].classList.add("prev");
    carousels[currentIndex].classList.add("active");
    carousels[nextIndex].classList.add("next");
  };

  const goToNum = (index) => {
    currentIndex = index;
    nextIndex = currentIndex < carousels.length - 1 ? currentIndex + 1 : 0;
    prevIndex = currentIndex > 0 ? currentIndex - 1 : carousels.length - 1;

    updateCards();
  };

  buttonContainer.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("left-arrow")) {
      currentIndex > 0
        ? goToNum(currentIndex - 1)
        : goToNum(carousels.length - 1);
    } else if (target.classList.contains("right-arrow")) {
      currentIndex < carousels.length - 1
        ? goToNum(currentIndex + 1)
        : goToNum(0);
    }
  });

  updateCards();

  /* carousel */

  let imageIndex = 0;

  const slidersClass = ".image-slider-container .image-slider-img";

  const sliders = document.querySelectorAll(slidersClass);
  console.log(sliders);

  const rightButton = document.querySelector(
    ".image-slider-container .right-button"
  );

  const leftButton = document.querySelector(
    ".image-slider-container .left-button"
  );

  const setActive = (element, selector) => {
    const selectedTarget = document.querySelector(`${selector}.active`);
    if (selectedTarget !== null) selectedTarget.classList.remove("active");
    element.classList.add("active");
  };

  setActive(sliders[imageIndex], slidersClass);

  const goToPreviousImage = () => {
    imageIndex = imageIndex === 0 ? sliders.length - 1 : imageIndex - 1;
    setActive(sliders[imageIndex], slidersClass);
  };

  const goToNextImage = () => {
    imageIndex = imageIndex === sliders.length - 1 ? 0 : imageIndex + 1;
    setActive(sliders[imageIndex], slidersClass);
  };

  rightButton.addEventListener("click", goToNextImage);

  leftButton.addEventListener("click", goToPreviousImage);
});
