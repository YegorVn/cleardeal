import "./index.css";

import React from "react";
import { useState, useEffect } from "react";
import { Button } from "../../pieces";
import manHand from "../../../assets/images/modal/manHand.svg";
import vk from "../../../assets/images/modal/vk.svg";
import wa from "../../../assets/images/modal/wa.svg";
import tg from "../../../assets/images/modal/tg.svg";
import { PhoneInput } from "./";

export const Index = ({ show, onClose }) => {
  const [gotText, setGotText] = useState("Готово! Свяжемся с вами в течение 5 минут.");

  const SocialMedia = ({ className }) => {
    return (
      <div className={`${className}`}>
        <div className="text-s ml-md-3 mb-lg-4">Посмотрите наши соцсети</div>
        <div className={`social-media d-flex ${className}`}>
          <a>
            <img src={vk} />
          </a>
          <a className="ml-3">
            <img src={wa} />
          </a>
          <a href="https://t.me/a_kolotii" className="ml-3">
            <img src={tg} />
          </a>
        </div>
      </div>
    );
  };

  // const completedHanlder = (val) => {
  //   setCompleted(val);
  // };

  // const stageHandler = () => {
  //   if (stage === "") setStage("phone");
  //   else if (stage === "phone") {
  //     setStage("got");
  //     if (true) setGotText("Готово! Свяжемся с вами в течение 5 минут.");
  //     else if (false)
  //       setGotText(
  //         "Сейчас мы не работаем, свяжемся с вами завтра с 9:00 до 20:00."
  //       );
  //   }
  // };

  return (
    <div className={"request d-flex " + (show ? "request_shown" : "request_closed")}>
      <div className="request__content background-grey col-11 col-sm-10 col-md-10 col-lg-10 col-xl-8 border-r-50 m-auto px-5 d-flex">
        <div className="request__offer px-0 d-flex col-lg-7 flex-column">
          <div className="text-xl bolder">{gotText}</div>
          <SocialMedia className="mt-4 mt-lg-auto" />
          <Button
            variant="white"
            className="d-block d-sm-none mt-4"
            onClick={onClose}
          >
            Вернуться на главную
          </Button>
        </div>
        <img src={manHand} className="ml-auto d-none d-lg-block" />
        <button
          className="btn_close d-none d-md-block"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};
