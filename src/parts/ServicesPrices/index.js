import "./index.css";
import { Index as Card } from "./Card";
import { useState, useRef, useEffect } from "react";

export const Index = ({ items, className }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [scrollOffset, setScrollOffset] = useState(getWindowDimensions());

  useEffect(() => {
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
    <div className={`services ${className}`}>
      <div className="services__cards col-12 px-0 d-sm-flex d-none justify-content-between flex-wrap ">
        {items.map((card, index) => {
          return (
            <Card
              className="col-11 col-sm-9 col-lg-4 col-xl-4 mx-auto mx-lg-0 mt-3 mt-lg-0 pl-4 pr-4 pt-5 pb-5"
              card={card}
              animDuration={index}
              key={index}
            />
          );
        })}
      </div>
      <div className="services__cards_small col-12 px-0 d-sm-none d-block">
        {items.map((card, index) => {
          return (
            <>
              {currentIdx === index && (
                <Card
                  className="col-12 col-sm-9 col-lg-4 col-xl-4 mx-auto mx-lg-0 mt-3 mt-lg-0 pl-4 pr-4 pt-5 pb-5"
                  card={card}
                  animDuration={index}
                  key={index}
                />
              )}
            </>
          );
        })}
      </div>
      <div className="services__circles justify-content-center mt-5 d-flex col-12 d-block d-sm-none">
          {items.map((el, index) => {
            return (
              <div
                className={
                  "services__circle " +
                  (currentIdx === index
                    ? "services__circle_active"
                    : "services__circle_inactive")
                }
              ></div>
            );
          })}
        </div>
    </div>
  );
};
