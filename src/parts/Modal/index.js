import "./index.css";

import React from "react";
import { useState, useEffect } from "react";
import {Button} from '../../components1/pieces'

export const Index = () => {
  const [visited, setVisited] = useState(false)
  const [show, setShow] = useState(false);
  useEffect(() => {
    if(!visited){
      const updateMousePosition = (ev) => {
        if(ev.clientX < 10 || ev.clientY < 10){
          setShow(true);
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
    setShow(false);
  };

  return (
    <div className={"modal d-flex " + (show ? "modal_shown" : "modal_closed")}>
      <div className="modal__content background-grey col-lg-6 border-r-50 m-auto px-5">
        <div className="modal__offer col-lg-12 px-0 mt-auto mb-auto">
          <div className="text-xl bolder col-lg-7 px-0">
            Поможем решить и ваш вопрос с недвижимостью
          </div>
          <div className="modal__buttons d-flex mt-5">
            <Button className="text-xs bold" variant="blue">Бесплатная консультация</Button>
            <Button className="ml-5 text-xs bold" variant="white" onClick={onClose}>Нет, спасибо</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

