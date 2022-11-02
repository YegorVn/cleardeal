import React, { useState, useEffect } from "react";
import { Bubble } from "./Bubble";
import wifi from "../../assets/icons/wifi.svg";
import battery from "../../assets/icons/battery.svg";
import circles from "../../assets/icons/circles.svg";
import mail from "../../assets/icons/mail.svg";
import zero from "../../assets/icons/zero.svg";
import barcode from "../../assets/icons/barcode.svg";
import sign1 from "../../assets/images/sign1.svg";
import sign2 from "../../assets/images/sign2.svg";
import plainLogo from "../../assets/images/plainLogo.png";

export const HwwVidget = ({ className, bubbles, current }) => {
  const Chat = () => {
    return (
      <div className="pt-4 px-3 px-sm-5 pb-5">
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

  const Check = () => {
    return (
      <div className="check">
        <div className="check__list background-white d-flex flex-column pr-4 pl-5">
          <div className="check__points mt-auto">
            {[
              { text: "Оценка квартиры" },
              { text: "Поиск покупателя" },
              { text: "Подготовка договора" },
              { text: "Аренда и уборка офиса в центре города" },
              { text: "Кофемашина в офис и корпоративное такси" },
              { text: "Бонус риэлтора" },
            ].map((el, index) => {
              return (
                <React.Fragment key={index}>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
                        .check__point_${index} {
                            animation-delay: ${index + 0.5 + "s"};
                        }
                        .check__circle_${index}::before {
                          animation-delay: ${index + 1 + "s"};
                        }
                        .check__text_${index}::before {
                          animation-delay: ${index + 2 + "s"};
                        }
                        `,
                    }}
                  ></style>
                  <div
                    className={
                      "check__point d-flex text-xs mt-3 align-items-center check__point_" +
                      index
                    }
                  >
                    <div
                      className={"check__circle check__circle_" + index}
                    ></div>
                    <div className={"check__text check__text_" + index}>
                      {el.text}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className="d-flex mb-5 mt-4">
            <img src={zero} />
            <img src={barcode} className="ml-auto" width={110} />
          </div>
        </div>
      </div>
    );
  };

  const Roadmap = () => {
    return (
      <div className="roadmap">
        <div className="roadmap__list background-white border-r-20 px-4 d-flex flex-column ">
          {Array.from({ length: 4 }, (_, i) => i + 1).map((str) => {
            return <div className="roadmap__stroke mt-3" key={str}></div>;
          })}
          <div className="roadmap__stroke w-50 mt-3"></div>
          <div className="d-flex roadmap__signs text-xxs mt-auto mb-auto">
            <div className="roadmap__sign">
              <div className="roadmap__name">Евгения Маркова</div>
              <img className="mt-2" src={sign2} />
            </div>
            <div className="roadmap__sign ml-auto col-6">
              <div className="roadmap__name">Александр Колотий</div>
              <img className="mt-2" src={sign1} />
            </div>
          </div>
        </div>
        <div className="roadmap__main background-white border-r-20 p-4 d-flex flex-column">
          <div className="roadmap__header d-flex align-items-center">
            <img src={plainLogo} />
            <div className="ml-2 text-xs roadmap__title">Договор</div>
          </div>
          <div className="roadmap__steps mt-auto">
            {[
              { text: "Уточнили вашу ситуацию" },
              { text: "Выбрали ипотечные" },
              { text: "Согласовали подходящие" },
              { text: "Уточнили вашу ситуацию" },
              { text: "Выбрали ипотечные" },
            ].map((el, index) => {
              return (
                <>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
                        .roadmap__circle_${index}::after {
                            animation-delay: ${index + 2 + "s"};
                        }
                        .roadmap__circle_${index}::before {
                            animation-delay: ${index + 2 + "s"};
                        }
                        .roadmap__step_${index}::after {
                            animation-delay: ${index + 2 + "s"};
                        }
                        .roadmap__text_${index} {
                            animation-delay: ${index + "s"};
                        }
                        .roadmap__text_${index}::before {
                            animation-delay: ${index + "s"};
                        }
                        .roadmap__text_${index}::after {
                            animation-delay: ${index + 2 + "s"};
                            content: ${"'" + el.text + "'"};
                        }
                        `,
                    }}
                  ></style>
                  <div
                    className={
                      "d-flex align-items-center roadmap__step roadmap__step_" +
                      index
                    }
                  >
                    <div
                      className={"roadmap__circle roadmap__circle_" + index}
                    ></div>
                    <div
                      className={"text-xs roadmap__text roadmap__text_" + index}
                    ></div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={"hwwWidget background-grey border-r-20 " + className}>
      {current === "communicate" && <Chat />}
      {current === "communicate1" && <Check />}
      {current === "communicate2" && <Roadmap />}
    </div>
  );
};
