import React, { useState } from "react";
import { CardSlider } from "./pieces/CardSlider";
export const Slider = ({ content, cards, className }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const changeHandler = (val) => {
    if (val === "next" && currentIdx < content.length - 1)
      setCurrentIdx((currentIdx) => (currentIdx += 1));
    if (val === "previous" && currentIdx > 0)
      setCurrentIdx((currentIdx) => (currentIdx -= 1));
    console.log(currentIdx);
  };

  return (
    <div className={"slider px-0 " + className}>
      <div className="slider__body  d-flex flex-column justify-content-between px-0 flex-xl-row mt-2">
        <CardSlider
          className="slider__card-slider"
          changeHandler={changeHandler}
          currentIdx={currentIdx}
          cards={cards}
        />
        <div className="slider__block mx-auto mx-xl-0 mt-xl-3 mt-5 ">
          {content.map((block, index) => {
            return (
              <React.Fragment key={index}>
                {currentIdx === index && (
                  <div className="slider__text ">
                    <div className="text-xl bold ">{block.header}</div>
                    <div className="text-l mt-5 text-left col-11 pl-0">
                      {block.annotation}
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
