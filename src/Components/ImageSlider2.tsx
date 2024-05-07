import React from "react";
import { sliderImages } from "../slider-images";
import "../css/image-slider2.css";

export const ImageSlider2 = () => {
  return (
    <div className="image-slider-container">
      <div className="image-slider-body">
        <div className="sliders">
          <img src={sliderImages[0]} alt="" className="image-slider-img" />
          <img src={sliderImages[1]} alt="" className="image-slider-img" />
          <img src={sliderImages[2]} alt="" className="image-slider-img" />
          <img src={sliderImages[3]} alt="" className="image-slider-img" />
          <img src={sliderImages[4]} alt="" className="image-slider-img" />
          <img src={sliderImages[5]} alt="" className="image-slider-img" />
          <img src={sliderImages[6]} alt="" className="image-slider-img" />
        </div>
        <button className="image-slider-btn left-button">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="image-slider-btn right-button">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};
