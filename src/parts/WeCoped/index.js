import "./index.css";

import React, { useState } from "react";
import { Index as Slider } from "./Slider/index.js";
export const Index = ({ content, cards, className }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const changeHandler = (val) => {
    if (val === "next")
      if (currentIdx === content.length - 1) {
        setCurrentIdx(0);
      } else {
        setCurrentIdx((currentIdx) => (currentIdx += 1));
      }
    if (val === "previous")
      if (currentIdx === 0) {
        setCurrentIdx(content.length - 1);
      } else {
        setCurrentIdx((currentIdx) => (currentIdx -= 1));
      }
    console.log(currentIdx);
  };

  return (
    <div className="we-coped px-0">
      <div className="we-coped__body d-flex flex-column justify-content-between px-0 flex-xl-row mt-2">
        <Slider
          className="we-coped__card-slider mx-auto mx-xl-0"
          changeHandler={changeHandler}
          currentIdx={currentIdx}
          cards={cards}
        />
        <div className="we-coped__block mt-xl-3 mt-5 pt-sm-3">
          {content.map((block, index) => {
            return (
              <React.Fragment key={index}>
                {currentIdx === index && (
                  <div className="we-coped__text ">
                    <div className="we-coped__title bold ">{block.header}</div>
                    <div className="text-l mt-4 mt-sm-5 text-left col-sm-11 pr-0 pl-0">
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
