import { useState, useEffect } from "react";
import { Card } from "./pieces/Card";
export const ServicesPrices = ({ items, className }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

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
                  className="col-11 col-sm-9 col-lg-4 col-xl-4 mx-auto mx-lg-0 mt-3 mt-lg-0 pl-4 pr-4 pt-5 pb-5"
                  card={card}
                  animDuration={index}
                  key={index}
                />
              )}
            </>
          );
        })}
        <div className="services__circles justify-content-center mt-4 d-flex col-12">
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
    </div>
  );
};
