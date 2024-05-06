import React, { useState } from "react";
import "../css/image-slider.css";

type TImageSliderProps = {
  imageUrls: string[];
};

function ImageSlider({ imageUrls }: TImageSliderProps) {
  const [sliderIndex, setSliderIndex] = useState(0);

  function showNextImage() {
    setSliderIndex(sliderIndex === 0 ? imageUrls.length - 1 : sliderIndex - 1);
  }

  function showPreviousImage() {
    setSliderIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      else return index + 1;
    });
  }

  return (
    <div className="image-slider-container">
      <div className="image-slider">
        <img src={imageUrls[sliderIndex]} alt="" className="image-slider-img" />
        <button
          onClick={showPreviousImage}
          className="image-slider-btn button-left"
          style={{ left: 0 }}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          onClick={showNextImage}
          className="image-slider-btn button-right"
          style={{ right: 0 }}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
