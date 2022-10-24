import React, { useState, useEffect } from "react";
import { Bubble } from "./Bubble";
import wifi from "../../assets/icons/wifi.svg";
import battery from "../../assets/icons/battery.svg";
import circles from "../../assets/icons/circles.svg";
import mail from "../../assets/icons/mail.svg";
export const Chat = ({ className, bubbles }) => {
  return (
    <div className={"chat background-grey border-r-20 " + className}>
      <div className="chat__header d-flex">
        <img src={circles} className="" />
        <img src={wifi} className="ml-2" />
        <img src={mail} className="ml-2" />
        <img src={battery} className="ml-auto" />
      </div>
      <div className="chat__dialog pb-5">
        {bubbles.map((bubble, index) => {
          return (
            <React.Fragment key={index}>
              {(bubble.val === "right" && (
                <Bubble
                  className="bubble_right_small text-xxxs pl-0 pr-0 ml-auto mt-4 col-9"
                  text={bubble.text}
                  elClassName="pl-3 pt-3 pb-3 pr-3 border-r-20 background-blue color-white"
                  bubbleWrite={true}
                  animDelay={index + 1}
                  animDuration={index}
                />
              )) ||
                (bubble.val === "left" && (
                  <Bubble
                    className="bubble_left_small text-xxxs pl-0 pr-0 bold mt-4 col-9"
                    text={bubble.text}
                    elClassName="pl-3 pt-3 pr-3 pb-3 border-r-20 background-white"
                    bubbleWrite={true}
                    animDelay={index + 1}
                    animDuration={index}
                  />
                ))}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
