import React from "react";
import { useIndex } from "./Providers/IndexProvider";
import { CarouselCard } from "./CarouselCard";
export const CarouselComponent = () => {
  const { slides, currentIndex, prevIndex, nextIndex } = useIndex();
  return (
    <>
      <div className="react-carousel-container">
        {slides.map((slide) => (
          <CarouselCard slide={slide} />
        ))}
      </div>
      <div className="btn-group">
        <button className="left-arrow">Left</button>
        <button className="right-arrow">Right</button>
      </div>
    </>
  );
};
