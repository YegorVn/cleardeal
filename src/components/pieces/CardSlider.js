import { useEffect, useState, useRef } from "react";
export const CardSlider = ({ changeHandler, className, currentIdx, cards }) => {
  const [person, setPerson] = useState({});
  const [dir, setDir] = useState("");
  // function getWindowDimensions() {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   return {
  //     width,
  //     height,
  //   };
  // }
  // const [scrollOffset, setScrollOffset] = useState(getWindowDimensions());

  useEffect(() => {
    setPerson({
      avatar: cards[currentIdx].avatar,
      name: cards[currentIdx].name,
      region: cards[currentIdx].region,
    });

    // function handleResize() {
    //   setScrollOffset(getWindowDimensions().width);
    // }

    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, [currentIdx]);

  // const horSlider = useRef(null);

  // const scrollLeft = () => {
  //   for (let i = 0; i < scrollOffset - 45; i++) {
  //     setTimeout(() => {
  //       horSlider.current.scrollLeft += 1;
  //     }, i);
  //   }
  // };

  // const scrollRight = () => {
  //   for (let i = 0; i < scrollOffset - 45; i++) {
  //     setTimeout(() => {
  //       horSlider.current.scrollLeft -= 1;
  //     }, i);
  //   }
  // };

  const handleSlide = (dir) => {
    changeHandler(dir);
    setDir(dir);
  };

  return (
    <div className={`card-slider ${className}`}>
      <div className="card-slider__header mt-5 px-3 px-sm-5 d-flex align-items-start align-items-md-center position-absolute">
        <button
          className="btn-slide btn-slide-left"
          onClick={() => {
            handleSlide("previous");
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
            handleSlide("next");
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
                <div className="card-slider__main-card main-card border-r-20 px-3 pb-5 p-sm-5 background-white border-r-20 d-flex">
                  <div className="card-slider__text text-l">
                    {cards[currentIdx].text}
                  </div>
                </div>
                <div
                  className={`card-slider__right-card right-card p-3 p-lg-5 ${
                    dir === "next"
                      ? "card-slider__right-card_next"
                      : "card-slider__right-card_previous"
                  }`}
                >
                  <div className="card-slider__person col-7 mx-auto ml-2 d-flex flex-column align-items-center flex-lg-row">
                    <img
                      src={
                        cards[currentIdx - 1]
                          ? cards[currentIdx - 1].avatar
                          : cards[currentIdx].avatar
                      }
                      className="card-slider__avatar border-r-100per"
                    />
                    <div className="card-slider__person-data pl-lg-3 bold">
                      <div className="card-slider__name text-xl mx-auto mx-lg-0">
                        {cards[currentIdx - 1]
                          ? cards[currentIdx - 1].name
                          : cards[currentIdx].name}
                      </div>
                      <div className="card-slider__region mt-1 text-m mx-auto mx-lg-0">
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
