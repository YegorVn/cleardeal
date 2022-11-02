import { useEffect, useState, useRef } from "react";
export const CardSlider = ({ changeHandler, className, currentIdx, cards }) => {
  const [person, setPerson] = useState({});
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [scrollOffset, setScrollOffset] = useState(getWindowDimensions());

  useEffect(() => {
    setPerson({
      avatar: cards[currentIdx].avatar,
      name: cards[currentIdx].name,
      region: cards[currentIdx].region,
    });

    function handleResize() {
      setScrollOffset(getWindowDimensions().width);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIdx]);

  const horSlider = useRef(null);

  const scrollLeft = () => {
    for (let i = 0; i < scrollOffset - 45; i++) {
      setTimeout(() => {
        horSlider.current.scrollLeft += 1;
      }, i);
    }
  };

  const scrollRight = () => {
    for (let i = 0; i < scrollOffset - 45; i++) {
      setTimeout(() => {
        horSlider.current.scrollLeft -= 1;
      }, i);
    }
  };

  return (
    <div className="card-slider">
      <div className="card-slider__header p-5 d-flex align-items-center position-absolute">
        <button
          className="btn-slide btn-slide-left"
          onClick={() => {
            changeHandler("previous");
          }}
        ></button>
        <div className="card-slider__person mx-auto ml-2 d-flex flex-column align-items-center flex-lg-row">
          <img
            src={person.avatar}
            className="card-slider__avatar border-r-100per"
          />
          <div className="card-slider__person-data pl-lg-3 bold">
            <div className="card-slider__name text-xl mx-auto mx-lg-0">
              {person.name}
            </div>
            <div className="card-slider__region mt-1 text-m mx-auto mx-lg-0">
              {person.region}
            </div>
          </div>
        </div>
        <button
          className="btn-slide btn-slide-right ml-lg-auto"
          onClick={() => {
            changeHandler("next");
          }}
        ></button>
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
                <div className="card-slider__left-card left-card d-flex justify-content-end flex-column">
                  <div className="card-slider__text mt-5 pt-3 text-l mb-3">
                    {cards[currentIdx].text}
                  </div>
                  <div className="left-card__background background-white border-r-20"></div>
                </div>
                <div className="card-slider__main-card main-card border-r-20 p-3 p-lg-5 background-white border-r-20 ">
                  <div className="main-card__content">
                    <div className="card-slider__text text-l">{card.text}</div>
                  </div>
                </div>
                <div className="card-slider__right-card d-none right-card d-lg-flex justify-content-end flex-column">
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
    </div>
  );
};
