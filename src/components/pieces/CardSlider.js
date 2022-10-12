import { useState } from "react";
export const CardSlider = ({ changeHandler, className, currentIdx, card }) => {
  const [kek, setKek] = useState(false);
  const onSlide = ({ dir }) => {
    setKek(true);
  };

  return (
    <div className={"card-slider d-flex align-items-center px-4 " + className}>
      <div className="card-slider__left-card left-card">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((card, index) => {
          return (
            <div
              className={
                "card-slider__left-card-anim d-flex justify-content-end flex-column " +
                (currentIdx === index
                  ? "card-slider__left-card-anim_fadein"
                  : "card-slider__left-card-anim_fadeout")
              }
            >
              {Array.from({ length: 6 }, (_, i) => i + 1).map((str) => {
                return (
                  <div className="string border-r-50 mb-2 background-white"></div>
                );
              })}
              <div className="left-card__background background-white border-r-20"></div>
            </div>
          );
        })}
      </div>
      <div className="card-slider__main-card background-white border-r-20 p-5">
        <div className="card-slider__header d-flex align-items-center justify-content-between">
          <button
            className="btn-slide btn-slide-left"
            onClick={() => {
              changeHandler("previous");
              onSlide("previous");
            }}
          ></button>
          <div className="card-slider__person mx-auto  d-flex">
            <div className="card-slider__avatar border-r-100per"></div>
            <div className="card-slider__person-data pl-3  bold">
              <div className="card-slider__name text-xl">{card.name}</div>
              <div className="card-slider__region mt-1 text-m">
                {card.region}
              </div>
            </div>
          </div>
          <button
            className="btn-slide btn-slide-right"
            onClick={() => {
              changeHandler("next");
              onSlide("next");
            }}
          ></button>
        </div>
        <div className="card-slider__text mt-5 pt-3 text-l mb-3">
          {card.text}
        </div>
      </div>
      <div className="card-slider__right-card right-card">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((card, index) => {
          return (
            <div
              className={
                "card-slider__right-card-anim d-flex justify-content-end flex-column " +
                (currentIdx === index
                  ? "card-slider__right-card-anim_fadein"
                  : "card-slider__right-card-anim_fadeout")
              }
            >
              {Array.from({ length: 6 }, (_, i) => i + 1).map((str) => {
                return (
                  <div className="string border-r-50 mb-2 background-white"></div>
                );
              })}
              <div className="right-card__background background-white border-r-20"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
