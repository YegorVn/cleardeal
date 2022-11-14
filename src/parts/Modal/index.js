import "./index.css";

import React from "react";
import { useState, useEffect } from "react";
import { Button } from "../../components1/pieces";
import manHand from "../../assets/images/modal/manHand.svg";
import vk from "../../assets/images/modal/vk.svg";
import wa from "../../assets/images/modal/wa.svg";
import tg from "../../assets/images/modal/tg.svg";
import { PhoneInput } from "../../components1/parts";

export const Index = () => {
  const [visited, setVisited] = useState(false);
  const [show, setShow] = useState(true);
  const [stage, setStage] = useState("");
  const [completed, setCompleted] = useState(true);
  const [gotText, setGotText] = useState("");
  useEffect(() => {
    if (!visited) {
      const updateMousePosition = (ev) => {
        if (ev.clientX < 10 || ev.clientY < 10) {
          setShow(true);
        }
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
    if (stage === "phone") setCompleted(false);
  }, [visited, stage]);

  const onClose = () => {
    setVisited(true);
    setShow(false);
  };

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

  const completedHanlder = (val) => {
    setCompleted(val);
  };

  const stageHandler = () => {
    if (stage === "") setStage("phone");
    else if (stage === "phone") {
      setStage("got");
      if (true) setGotText("Готово! Свяжемся с вами в течение 5 минут.");
      else if (false)
        setGotText(
          "Сейчас мы не работаем, свяжемся с вами завтра с 9:00 до 20:00."
        );
    }
  };

  return (
    <div className={"modal d-flex " + (show ? "modal_shown" : "modal_closed")}>
      <div className="modal__content background-grey col-11 col-sm-10 col-md-10 col-lg-10 col-xl-8 border-r-50 m-auto px-5 d-flex">
        <div className="modal__offer px-0 d-flex col-lg-7 flex-column">
          <div className="text-xl modal-title bolder px-0">
            {(stage === "phone" && <>Оставить заявку</>) ||
              (stage === "got" && <>Спасибо!</>) ||
              (stage === "" && (
                <>
                  <div>Поможем решить</div>
                  <div>и ваш вопрос</div>
                  <div>с недвижимостью</div>
                </>
              ))}
          </div>
          {stage === "phone" && (
            <div className="text-xs mt-3">
              Мы используем файлы cookie и аналогичные технологии, чтобы делать
              сайт удобнее для вас
            </div>
          )}
          {stage === "phone" && (
            <PhoneInput className=" mt-5" completedHanlder={completedHanlder} />
          )}
          {stage === "got" && (
            <div className="text-xl bolder mt-5">{gotText}</div>
          )}
          {stage === "got" && <SocialMedia className="mt-4 mt-lg-auto" />}
          {stage === "got" && (
            <Button
              variant="white"
              className="d-block d-sm-none mt-4"
              onClick={() => setShow(false)}
            >
              Вернуться на главную
            </Button>
          )}
          <div
            className={`modal__buttons mt-5 mt-lg-auto ${
              stage === "phone"
                ? "d-flex flex-column flex-lg-row modal__buttons_phone_stage"
                : stage === "got"
                ? "d-none"
                : "d-flex flex-column"
            }`}
          >
            <Button
              className="text-xs bold col-lg-8"
              variant="blue"
              onClick={stageHandler}
              disabled={completed ? false : true}
            >
              {stage === "phone" ? "Позвоните мне" : "Бесплатная консультация"}
            </Button>
            <Button
              className={`text-xs bold col-lg-6 mt-3 ${
                stage === "phone" ? "ml-lg-3 mt-lg-0" : ""
              }`}
              variant="white"
              onClick={onClose}
              disabled={completed ? false : true}
            >
              {stage === "phone" ? "Напишите в WhatsApp" : "Нет, спасибо"}
            </Button>
          </div>
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
