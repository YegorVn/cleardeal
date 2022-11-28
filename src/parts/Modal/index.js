import "./index.css";

import React, { memo, useContext, useMemo } from "react";
import { useState, useEffect } from "react";
import manHand from "../../assets/images/modal/manHand.svg";
// import { PhoneInput } from "../../components1/parts";
import { Button } from "../../components1/pieces";
import { Context } from "../../Context";
import { Index as SocialMedia } from "./";
import vk from "../../assets/images/modal/vk.svg";
import wa from "../../assets/images/modal/wa.svg";
import tg from "../../assets/images/modal/tg.svg";

export const Index = () => {
  const [context, setContext] = useContext(Context);
  const [visited, setVisited] = useState(false);
  const [gotText, setGotText] = useState("");

  const checkDoesWeWork = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    if (hours * 60 + minutes >= 540 && hours * 60 + minutes <= 1180)
      return true;
    return false;
  };

  useEffect(() => {
    if (checkDoesWeWork())
      setGotText("Готово! Свяжемся с вами в течение 5 минут.");
    if (!checkDoesWeWork())
      setGotText(
        "Готово! Сейчас мы не работаем, свяжемся с вами с 9:00 до 20:00."
      );
  });

  useEffect(() => {
    if (!visited) {
      const updateMousePosition = (ev) => {
        if (ev.clientX < 10 || ev.clientY < 10) {
          setContext({ ...context, modal: true });
          setVisited(true);
        }
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, [visited]);

  const onClose = () => {
    setVisited(true);
    setContext({ ...context, modal: false });
  };

  const stageHandler = () => {
    if (context.modalStage === "")
      setContext({ ...context, modalStage: "phone" });
    else if (context.modalStage === "phone") {
      setContext({ ...context, modalStage: "got" });
    }
  };

  const ModalContent = memo(({ context, gotText, onClose, stageHandler }) => {
    return (
      <div
        className={`modal__content background-grey  border-r-50 m-auto d-flex ${
          context.modal ? "modal__content_shown" : "modal__content_closed"
        }`}
      >
        <div className="modal__offer px-0 d-flex flex-column">
          {(context.modalStage === "" && (
            <>
              <div className="text-xxxl modal-title bolder px-0">
                Поможем решить<br></br>и ваш вопрос<br></br>с недвижимостью
              </div>
            </>
          )) ||
            (context.modalStage === "phone" && (
              <>
                <div className="text-xxxl modal-title bolder px-0">
                  Оставить заявку
                </div>
              </>
            )) ||
            (context.modalStage === "got" && (
              <>
                <div className="text-xl bolder col-xl-7">{gotText}</div>
                <div className="mt-4">
                  <div className="text-s ml-md-3 mb-lg-4">
                    Посмотрите наши соцсети
                  </div>
                  <div className={`social-media d-flex`}>
                    <a>
                      <img src={vk} width={93} />
                    </a>
                    <a className="ml-3">
                      <img src={wa} width={93} />
                    </a>
                    <a href="https://t.me/a_kolotii" className="ml-3">
                      <img src={tg} width={93} />
                    </a>
                  </div>
                </div>
                <Button
                  variant="white"
                  className="d-block text-m d-sm-none mt-4"
                  onClick={onClose}
                >
                  Вернуться на главную
                </Button>
              </>
            ))}
          <div
            className={`modal__buttons  ${
              context.modalStage === "phone"
                ? "d-flex flex-column flex-lg-row modal__buttons_phone_stage mt-4"
                : context.modalStage === "got"
                ? "d-none"
                : "d-flex flex-column mt-lg-auto mt-5"
            }`}
          >
            <Button
              onClick={stageHandler}
              className="text-m bold"
              variant="blue"
              disabled={false}
            >
              {context.modalStage === "phone"
                ? "Позвоните мне"
                : "Бесплатная консультация"}
            </Button>
            <Button
              className={`text-m bold mt-3 ${
                context.modalStage === "phone" ? "ml-lg-3 mt-lg-0" : ""
              }`}
              variant="white"
              onClick={onClose}
              disabled={false}
            >
              {context.modalStage === "phone" ? (
                <>
                  <span className="d-block d-lg-none">Написать в WhatsApp</span>
                  <span className="d-none d-lg-block">Напишите в WhatsApp</span>
                </>
              ) : (
                "Нет, спасибо"
              )}
            </Button>
          </div>
        </div>
        <img
          src={manHand}
          className="modal__img ml-auto mr-5 d-none d-lg-block mt-auto"
        />
        <button
          className="btn_close d-none d-md-block"
          onClick={onClose}
        ></button>
      </div>
    );
  });

  return (
    <div
      className={`modal d-flex ${
        context.modal ? "modal_shown" : "modal_closed"
      }`}
    >
      <ModalContent
        context={context}
        onClose={onClose}
        stageHandler={stageHandler}
        gotText={gotText}
      />
    </div>
  );
};
