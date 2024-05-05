import React from "react";
import { useIndex } from "./Providers/IndexProvider";
export const CarouselCard = ({ slide: { id, content, name } }) => {
  const { currentIndex, prevIndex, nextIndex } = useIndex();

  const checkWhichClass = () => {
    switch (id) {
      case currentIndex:
        return "active";
      case prevIndex:
        return "prev";
      case nextIndex:
        return "next";
      default:
        return "";
    }
  };
  return (
    <>
      <div className={`carousel-card ${checkWhichClass}`}>
        {content}
        <div className="name">{name}</div>
      </div>
    </>
  );
};
