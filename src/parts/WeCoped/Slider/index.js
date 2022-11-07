import "./index.css";

import { useEffect, useState, useRef } from "react";
export const Index = ({ changeHandler, className, currentIdx, cards }) => {
  const [person, setPerson] = useState({
    avatar: "",
    name: "cards[currentIdx].name",
    region: "cards[currentIdx].region",
  });
  const [dir, setDir] = useState("");

  useEffect(() => {
    setPerson({
      avatar: cards[currentIdx].avatar,
      name: cards[currentIdx].name,
      region: cards[currentIdx].region,
    });
  }, [currentIdx]);

  const handleSlide = (dir) => {
    changeHandler(dir);
    setDir(dir);
  };

  return (
    <div className={`slider ${className}`}>
      <div className="slider__header mt-5 px-4 px-sm-5 d-flex align-items-start align-items-md-center position-absolute">
        <button
          className="btn-slide btn-slide-left"
          onClick={() => {
            handleSlide("previous");
          }}
        >
          <div className="btn-slide__icon"></div>
        </button>
        <div className="slider__person mx-auto ml-2 d-flex flex-column align-items-center flex-lg-row">
          <img src={person.avatar} className="slider__avatar" />
          <div className="slider__person-data pl-lg-3 bold">
            <div className="slider__name text-xl mx-auto mx-lg-0">
              {person.name}
            </div>
            <div className="slider__region mt-1 text-m mx-auto mx-lg-0">
              {person.region}
            </div>
          </div>
        </div>
        <button
          className="btn-slide btn-slide-right ml-lg-auto"
          onClick={() => {
            handleSlide("next");
          }}
        >
          <div className="btn-slide__icon"></div>
        </button>
      </div>

      {cards.map((card, index) => {
        return (
          <>
            {currentIdx === index && (
              <div
                className={
                  "d-lg-flex align-items-center pr-0 mx-auto mx-xl-0 " +
                  className
                }
              >
                <div className="slider__left-card left-card d-flex justify-content-end flex-column">
                  <div className="slider__text mt-5 pt-3 text-l mb-3">
                    {cards[currentIdx].text}
                  </div>
                  <div className="left-card__background"></div>
                </div>
                <div className="slider__main-card main-card px-4 pb-5 p-sm-5 background-white d-flex">
                  <div className="slider__text text-l">
                    {cards[currentIdx].text}
                  </div>
                </div>
                <div className="slider__right-card right-card">
                  <div className="right-card__background"></div>
                </div>
                <div
                  className={`slider__slide-card slide-card p-3 p-lg-5 ${
                    (dir === "next" && "slider__slide-card_next") ||
                    (dir === "previous" && "slider__slide-card_previous")
                  }`}
                >
                  <div className="slider__person col-7 mx-auto ml-2 d-flex flex-column align-items-center flex-lg-row">
                    <img
                      src={
                        cards[currentIdx - 1]
                          ? cards[currentIdx - 1].avatar
                          : cards[currentIdx].avatar
                      }
                      className="slider__avatar"
                    />
                    <div className="slider__person-data pl-lg-3 bold">
                      <div className="slider__name text-xl mx-auto mx-lg-0">
                        {cards[currentIdx - 1]
                          ? cards[currentIdx - 1].name
                          : cards[currentIdx].name}
                      </div>
                      <div className="slider__region mt-1 text-m mx-auto mx-lg-0">
                        {cards[currentIdx - 1]
                          ? cards[currentIdx - 1].region
                          : cards[currentIdx].region}
                      </div>
                    </div>
                  </div>
                  <div className="text-l mt-5">
                    {cards[currentIdx - 1]
                      ? cards[currentIdx - 1].text
                      : cards[currentIdx].text}
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};
