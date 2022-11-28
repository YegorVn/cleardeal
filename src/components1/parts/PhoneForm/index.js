import "./index.css";
import React, { useState, useEffect } from "react";
import { Button } from "../../pieces";
import { PhoneInput } from "../PhoneInput";
import { useContext } from "react";
import { Context } from "../../../Context";
export const Index = ({ className }) => {
  const [context, setContext] = useContext(Context)
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContext({...context, modal: true, modalStage: "got"})
  }
  return (
    <>
      <form className={`phone-form ${className}`}>
        <div className="phone-form__content d-flex flex-column justify-content-between flex-xl-row">
          <PhoneInput className="col-xl-5 text-m" submit={submit} />
          <Button
            className="btn btn_contact text-m mt-5 mt-xl-0"
            variant={"blue"}
            onClick={handleSubmit}
          >
            Позвоните мне
          </Button>
          <Button
            className="btn btn_contact text-m mt-3 mt-xl-0"
            variant={"white"}
          >
            <span className="d-none d-lg-block">Напишите в WhatsApp</span>
            <span className="d-block d-lg-none">Написать в WhatsApp</span>
          </Button>
        </div>
        <div className="phone-form__background"></div>
      </form>
      <div
        className={`accepted-request text-s ${
          true ? "accepted-request_show" : "accepted-request_hidden"
        }`}
      >
        Спасибо! Ваша заявка принята.
      </div>
    </>
  );
};
