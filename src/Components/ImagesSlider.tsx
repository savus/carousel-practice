import React, { useState } from "react";
import "../css/image-slider.css";

type TImagesSliderProps = {
  imageUrls: string[];
};

export function ImagesSlider({ imageUrls }: TImagesSliderProps) {
  const [imageIndex, setImageIndex] = useState(1);

  function showPreviousImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      else return index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      else return index + 1;
    });
  }
  return (
    <div className="image-slider-container">
      <div className="image-slider">
        <img src={imageUrls[imageIndex]} alt="" className="image-slider-img" />
        <button
          onClick={showPreviousImage}
          className="next-button image-slider-btn"
          style={{ left: 0 }}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          onClick={showNextImage}
          className="prev-button image-slider-btn"
          style={{ right: 0 }}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
