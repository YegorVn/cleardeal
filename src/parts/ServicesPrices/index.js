import "./index.css";
import { Index as Card } from "./Card";
import { useState, useRef, useEffect } from "react";

export const Index = ({ items, className }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
 

  useEffect(() => {
    horSlider.current.addEventListener('scroll', () => handleScroll(horSlider.current.scrollLeft))
    return () => horSlider.current.removeEventListener('scroll', () => {});
  }, []);

  const horSlider = useRef(null);

  const handleScroll = (offset) => {
    if(offset > 300 && offset < 600) setCurrentIdx(1)
    else if(offset > 600) setCurrentIdx(2)
    else setCurrentIdx(0)
    console.log(currentIdx)
  }

  return (
    <div className={`services ${className}`}>
      <div className="services__cards col-12 px-0 d-sm-flex d-none justify-content-between flex-wrap ">
        {items.map((card, index) => {
          return (
            <Card
              className="col-11 col-sm-9 col-lg-4 col-xl-4 mx-auto mx-lg-0 mt-3 mt-lg-0 pl-4 pr-4 pt-5 pb-5"
              card={card}
              animDuration={0.5}
              key={index}
            />
          );
        })}
      </div>
      <div className="services__cards_small col-12 px-0 d-sm-none d-flex" ref={horSlider}>
        {items.map((card, index) => {
          return (
              <Card
                className={`services__card col-12 col-sm-9 col-lg-4 col-xl-4 mx-lg-0 mt-3 mt-lg-0 pl-4 pr-4 pt-5 pb-5`}
                card={card}
                animDuration={1.25}
                key={index}
              />
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
