document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-card");
  let currentCarousel = Math.floor(Math.random() * carousels.length * 1);
  let nextCarousel =
    currentCarousel < carousels.length - 1 ? currentCarousel + 1 : 0;
  let prevCarousel =
    currentCarousel > 0 ? currentCarousel - 1 : carousels.length - 1;

  const updateIndexes = (goToNum) => {
    currentCarousel = carousels[goToNum];
    nextCarousel =
      currentCarousel < carousels.length - 1 ? currentCarousel + 1 : 0;
    prevCarousel =
      currentCarousel > 0 ? currentCarousel - 1 : carousels.length - 1;
  };

  const goToNext = () =>
    nextCarousel < carousels.length - 1
      ? updateIndexes(currentCarousel + 1)
      : updateIndexes(0);

  const gotToPrev = () =>
    nextCarousel > 0
      ? updateIndexes(currentCarousel - 1)
      : updateIndexes(carousels.length - 1);
});
