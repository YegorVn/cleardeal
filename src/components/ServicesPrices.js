import { useState, useEffect } from "react";
import {Card} from './pieces/Card'
export const ServicesPrices = ({ items, className }) => {
  

  return (
    <div className={"services " + className}>
      <div className="services__cards col-12 px-0 d-flex justify-content-between flex-wrap ">
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
    </div>
  );
};
