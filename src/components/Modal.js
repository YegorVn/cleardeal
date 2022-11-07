import React from "react";
import { useState, useEffect } from "react";
import manHand from "../assets/images/getService/manHand.svg";
export const Modal = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (ev.clientX < 10 || ev.clientY < 10) setShow(true);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const onClose = () => {
    setShow(false);
  };

  return (
    <div className={"modal d-flex " + (modal ? "modal_shown" : "modal_closed")}>
      <div className="modal__content background-grey col-lg-7 border-r-50 m-auto px-5">
        <div className="modal__offer col-6 mt-auto mb-auto">
          <div className="text-xl bolder">
            Поможем решить и ваш вопрос с недвижимостью
          </div>
          <div className="modal__buttons mt-5">
            <button className="btn border-r-50 pt-3 pb-3 px-5 text-xs bold">
              Бесплатная консультация
            </button>
            <button
              className="btn border-r-50 px-5 pt-3 pb-3 mt-4 text-xs bold"
              onClick={onClose}
            >
              Нет, спасибо
            </button>
          </div>
        </div>
        <img className="ml-auto modal__img" src={manHand} />
      </div>
    </div>
  );
};
