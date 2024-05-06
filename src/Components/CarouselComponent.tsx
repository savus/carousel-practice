import React, { useState } from "react";
import { CarouselCard } from "./CarouselCard";

export type TSlide = {
  id: number;
  content: string;
  name: string;
};

const slides: TSlide[] = [
  {
    id: 0,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "john",
  },
  {
    id: 1,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "jack",
  },
  {
    id: 2,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "mike",
  },
  {
    id: 3,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "mack",
  },
  {
    id: 4,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "james",
  },
  {
    id: 5,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "jane",
  },
  {
    id: 6,
    content:
      "lorem fweroiej ve woeir enoewr eorijw ngoiewro eworjweior neow rjowejri eowj rojeiweor wejrowiejr",
    name: "sam",
  },
];

export const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * slides.length)
  );
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  const nextIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;

  const goToPrevious = () =>
    currentIndex > 0
      ? setCurrentIndex(currentIndex - 1)
      : setCurrentIndex(slides.length - 1);

  const goToNext = () =>
    currentIndex < slides.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0);

  const indexBasedClass = (index) => {
    switch (index) {
      case prevIndex:
        return "prev";
      case currentIndex:
        return "active";
      case nextIndex:
        return "next";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="react-carousel-container">
        {slides.map((slide, index) => {
          const classToSelect = indexBasedClass(index);
          return (
            <CarouselCard
              slide={slide}
              classname={`carousel-card ${classToSelect}`}
            />
          );
        })}
      </div>
      <div className="react-carousel-btn-group">
        <button className="left-arrow" onClick={goToPrevious}>
          Left
        </button>
        <button className="right-arrow" onClick={goToNext}>
          Right
        </button>
      </div>
    </>
  );
};
