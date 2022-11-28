import "./index.css";

import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
export const PhoneInput = ({ className, submit }) => {
  const [phone, setPhone] = useState({ user_phone: "" });
  const [wrong, setWrong] = useState(false);

  const changeHandler = (e) => {
    setPhone({ user_phone: e.target.value });
  };

  const handleSubmit = (e) => {
    const SERVICE_ID = "service_rg2jv0f";
    const TEMPLATE_ID = "template_j0drd82";
    const USER_ID = "J22glPQWeeMMxXhqa";
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  const [mask, setMask] = useState("+7(999) 999 99 99");

  const beforeMaskedValueChange = (newState) => {
    let { value } = newState;
    let selection = newState.selection;
    let cursorPosition = selection ? selection.start : null;

    console.log(value, phone.user_phone)

    if (!phone.user_phone.startsWith("+7") && value.length < 8) {
      if (cursorPosition === value.length) {
        selection = { start: cursorPosition, end: cursorPosition };
      }
      value = value.slice(0, -2);
    } 

    return {
      value,
      selection,
    };
  };

  return (
    <InputMask
      onChange={changeHandler}
      mask={mask}
      maskChar={null}
      placeholder="+7(909) 000 00 00"
      name="phone"
      value={phone.user_phone}
      className={`input input_phone text-l pb-3 pt-3 pl-4 pr-5 phone-form__input ${className} ${
        wrong && "input_wrong"
      }`}
      beforeMaskedValueChange={beforeMaskedValueChange}
    />
  );
};
