import React, { useEffect, useState } from "react";
import { HwwVidget } from "./pieces/HwwVidget";

export const HowWeWork = ({ className, chat, content }) => {
  const [current, setCurrent] = useState(content[0].val);
  const [stop, setStop] = useState(false);
  useEffect(() => {
    let i = 0;
    let timer1 = setInterval(() => {
      if (i + 1 > content.length) i = 0;
      else {
        console.log(i);
        setCurrent(content[i].val);
        i = i + 1;
      }
    }, 6000);
    if (stop) clearInterval(timer1);
    return () => {
      clearInterval(timer1);
    };
  }, [stop]);

  const changeHandler = (e) => {
    setCurrent(e.target.value);
    setStop(true);
    console.log(e.target.value);
  };

  const Switch = ({ buttons, changeHandler, className, current }) => {
    return (
      <>
        <div
          className={
            "switch d-none d-md-flex mx-auto flex-lg-row flex-column justify-content-center align-items-center " +
            className
          }
        >
          {buttons.map((btn) => {
            return (
              <button
                key={btn.val}
                onClick={changeHandler}
                value={btn.val}
                className={
                  "btn switch__btn pt-2 pb-2 px-0 text-l mt-3 mt-lg-0 " +
                  (current == btn.val && "btn_active switch__btn_active")
                }
              >
                <svg className="switch__svg">
                  <defs>
                    <linearGradient
                      id="linear"
                      x1="50"
                      y1="50"
                      x2="800"
                      y2="200"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#577BFA" />
                      <stop
                        offset="0.3"
                        stopColor="#E5EBEE"
                        stop-opacity="1"
                      />
                    </linearGradient>
                  </defs>
                  <rect className="switch__rect" />
                </svg>
                {btn.text}
              </button>
            );
          })}
        </div>
        <div
          className={
            "switch-small d-flex justify-content-between align-items-center d-md-none " +
            className
          }
        >
          {buttons.map((btn, index) => {
            return (
              <button
                key={btn.val}
                onClick={changeHandler}
                value={btn.val}
                className={
                  "btn switch-small__btn text-l mt-lg-0 d-flex align-items-center justify-content-center " +
                  ((current == btn.val &&
                    "btn_active switch-small__btn_active border-r-30 px-1") ||
                    "switch-small__btn_inactive border-r-100per")
                }
              >
                {(current == btn.val && btn.text) || index + 1}
              </button>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className={"how-we-work " + className}>
      <Switch
        buttons={[
          { text: "Человеческое общение", val: "communicate" },
          { text: "Честная цена", val: "communicate1" },
          { text: "Ясная сделка", val: "communicate2" },
        ]}
        changeHandler={changeHandler}
        current={current}
      />
      <div className="how-we-work__body d-flex flex-column flex-lg-row mt-4 mt-sm-5 pt-lg-5">
        <div className="mx-auto mx-lg-0 col-lg-5 col-xl-6 pt-0 pr-xl-4 pl-0">
          <HwwVidget
            current={current}
            className="col-xl-11 px-0"
            bubbles={chat}
          />
        </div>
        <div className="col-lg-7 px-0 mt-5 mt-lg-0 ">
          <div className="col-lg-12 px-0">
            {content.map((block) => {
              return (
                <>
                  {
                    <div className="how-we-work__block" key={block.val}>
                      {block.val === current && (
                        <div className="text-xl bold pr-sm-4 pr-xl-0 how-we-work__header">
                          {block.header}
                        </div>
                      )}
                      {block.val === current && (
                        <div className="text-l mt-4 mt-sm-5 text-left pl-0 pr-0 pr-sm-5">
                          {block.annotation}
                        </div>
                      )}
                    </div>
                  }
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
