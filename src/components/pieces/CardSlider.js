import { useEffect, useState } from "react";
export const CardSlider = ({ changeHandler, className, currentIdx, cards }) => {
  const [person, setPerson] = useState({});

  useEffect(() => {
    setPerson({
      avatar: cards[currentIdx].avatar,
      name: cards[currentIdx].name,
      region: cards[currentIdx].region,
    });
  }, [currentIdx]);

  return (
    <>
      {cards.map((card, index) => {
        return (
          <>
            {currentIdx === index && (
              <div
                className={
                  "card-slider d-none d-lg-flex align-items-center px-4 mx-auto mx-xl-0 " +
                  className
                }
              >
                <div className="card-slider__left-card left-card d-flex justify-content-end flex-column">
                  <div className="card-slider__text mt-5 pt-3 text-l mb-3">
                    {cards[currentIdx].text}
                  </div>
                  <div className="left-card__background background-white border-r-20"></div>
                </div>
                <div className="card-slider__main-card main-card border-r-20 p-5 background-white border-r-20 ">
                  <div className="card-slider__header d-flex align-items-center">
                    <button
                      className="btn-slide btn-slide-left"
                      onClick={() => {
                        changeHandler("previous");
                      }}
                    ></button>
                    <div className="card-slider__person ml-2 d-flex">
                      <img
                        src={person.avatar}
                        className="card-slider__avatar border-r-100per"
                      />
                      <div className="card-slider__person-data pl-3  bold">
                        <div className="card-slider__name text-xl">
                          {person.name}
                        </div>
                        <div className="card-slider__region mt-1 text-m">
                          {person.region}
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn-slide btn-slide-right ml-auto"
                      onClick={() => {
                        changeHandler("next");
                      }}
                    ></button>
                  </div>

                  <div className="main-card__content">
                    <div className="card-slider__text mt-5 pt-3 text-l mb-3">
                      {card.text}
                    </div>
                  </div>
                </div>
                <div className="card-slider__right-card right-card d-flex justify-content-end flex-column">
                  {Array.from({ length: 6 }, (_, i) => i + 1).map((str) => {
                    return (
                      <div
                        key={str}
                        className="string border-r-50 mb-2 background-white"
                      ></div>
                    );
                  })}
                  <div className="right-card__background background-white border-r-20"></div>
                </div>
              </div>
            )}
          </>
        );
      })}
      <div className={"card-slider-small d-block d-lg-none"}>
        <div className="kek">
          {cards.map((card) => {
            return (
              <div className="card-slider-small__card px-4 pt-4 pb-4 d-flex flex-column">
                <div className="card-slider-small__person d-flex align-items-center">
                  <img
                    src={person.avatar}
                    className="card-slider__avatar border-r-100per"
                  />
                  <div className="card-slider-small__person-data pl-3 bold">
                    <div className="card-slider-small__name">{person.name}</div>
                    <div className="card-slider-small__region mt-1">
                      {person.region}
                    </div>
                  </div>
                </div>
                <div className="card-slider-small__text mt-auto mb-auto">
                  {card.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
