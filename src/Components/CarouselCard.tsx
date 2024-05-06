import React from "react";
import { useIndex } from "./Providers/IndexProvider";
import { TSlide } from "./CarouselComponent";
export const CarouselCard = ({
  slide: { id, content, name },
  classname,
}: {
  slide: TSlide;
  classname: string;
}) => {
  return (
    <>
      <div className={classname}>
        {content}
        <div className="name">{name}</div>
      </div>
    </>
  );
};
