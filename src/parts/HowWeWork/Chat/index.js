import "./index.css";
import React, { useState, useEffect } from "react";
import { Index as Bubble } from "../../../components1/pieces/Bubble";
import wifi from "../../../assets/icons/wifi.svg";
import battery from "../../../assets/icons/battery.svg";
import circles from "../../../assets/icons/circles.svg";
import mail from "../../../assets/icons/mail.svg";

export const Index = ({ className, bubbles }) => {
  return (
    <div className="pt-4 px-3 px-sm-5 pb-sm-5">
      <div className="chat__header d-flex">
        <img src={circles} className="" />
        <img src={wifi} className="ml-2" />
        <img src={mail} className="ml-2" />
        <img src={battery} className="ml-auto" />
      </div>
      <div className="d-block d-sm-none">
        <Bubble
          className="bubble_right_small text-xxxs pl-0 pr-0 ml-auto mt-4 col-9 border-r-20"
          text={bubbles[1].text}
          bodyClassName="pl-3 pt-3 pb-3 pr-3 border-r-20"
          animation={{
            duration: 1,
            delay: 1,
          }}
        />
      </div>
      <div className="chat__dialog pb-5 d-none d-sm-block">
        {bubbles.map((bubble, index) => {
          return (
            <Bubble
              key={index}
              className={`${
                (bubble.val === "right" && "bubble_right_small") ||
                (bubble.val === "left" && "bubble_left_small")
              } text-xxxs pl-0 pr-0 mt-4 col-9`}
              text={bubble.text}
              bodyClassName="pl-3 pt-3 pb-3 pr-3 border-r-20"
              animation={{
                duration: index + 1,
                delay: index * 0.5,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
