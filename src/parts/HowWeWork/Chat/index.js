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
      <div className="chat__dialog_small mt-5 pb-5 d-block d-sm-none">
        {bubbles.map((bubble, index) => {
          return (
            <Bubble
              key={index}
              className={`${
                (bubble.val === "right" && "bubble_right_small") ||
                (bubble.val === "left" && "bubble_left_small")
              } text-xxxs pl-0 pr-0 mt-sm-4 chat__bubble`}
              text={bubble.text}
              bodyClassName="pl-3 pt-3 pb-3 pr-3 border-r-20"
              writedAnimation={{ duration: 0.25, delay: index * 5 }}
              writingAnimation={{ duration: 1, delay: index * 5 }}
              disappearAnimation={{ duration: 0.1, delay: (index + 0.75) * 5 }}
              isBubbleDisappear={true}
            />
          );
        })}
      </div>
      <div className="chat__dialog mt-5 pb-5 d-none d-sm-block">
        {bubbles.map((bubble, index) => {
          return (
            <Bubble
              key={index}
              className={`${
                (bubble.val === "right" && "bubble_right_small") ||
                (bubble.val === "left" && "bubble_left_small")
              } text-xxxs pl-0 pr-0 mt-sm-4 chat__bubble`}
              text={bubble.text}
              bodyClassName="pl-3 pt-3 pb-3 pr-3 border-r-20"
              writedAnimation={{
                duration: 0.5,
                delay: index * 0.25,
                visible: { transform: "translateX(0%)", opacity: 1 },
                hidden: {
                  transform:
                    bubble.val === "left"
                      ? "translateX(-5%)"
                      : "translateX(5%)",
                  opacity: 0
                },
              }}
            />
          );
        })}
        <Bubble
          className={`bubble_right_small text-xxxs pl-0 pr-0 mt-sm-4 chat__bubble`}
          bodyClassName="pl-3 pt-3 pb-3 pr-3 border-r-20"
          text={'bubble.text'}
          writingAnimation={{ duration: 1, delay: 3 * 1.5 }}
          isBubbleEmpty={true}
        />
      </div>
    </div>
  );
};
