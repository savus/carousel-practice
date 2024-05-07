import React, { useState } from "react";
import "../css/image-slider.css";

type TImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: TImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function goToNext() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      else return index + 1;
    });
  }

  function goToPrevious() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      else return index - 1;
    });
  }
  return (
    <div className="react-image-slider-container">
      <div className="image-slider-body">
        <div className="sliders">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt=""
              className="image-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <button className="image-slider-btn left-button" onClick={goToPrevious}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="image-slider-btn right-button" onClick={goToNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <div className="slider-index-buttons">
          {imageUrls.map((_, index) => {
            return (
              <button
                key={index}
                className="img-slider-dot"
                onClick={() => setImageIndex(index)}
              >
                {index === imageIndex ? (
                  <i className="fa-solid fa-circle-dot"></i>
                ) : (
                  <i className="fa-solid fa-circle"></i>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
