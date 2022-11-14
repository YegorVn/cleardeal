import "./index.css";

import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { Button } from "../../pieces";
export const Index = ({ className, completedHanlder }) => {
  const SERVICE_ID = "service_rg2jv0f";
  const TEMPLATE_ID = "template_j0drd82";
  const USER_ID = "J22glPQWeeMMxXhqa";
  const [phone, setPhone] = useState({ user_phone: "" });
  const [wrong, setWrong] = useState(false);

  const changeHandler = (e) => {
    setPhone({ user_phone: e.target.value });
    console.log(phone);
  };

  useEffect(() => {
    if (
      phone.user_phone.match(
        /^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{1,10}$/
      )
    )
      setWrong(false);
    else if (phone.user_phone === "") setWrong(false);
    else setWrong(true);
    if (
      phone.user_phone.length === 17 &&
      phone.user_phone.match(
        /^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{1,10}$/
      ) &&
      !wrong
    )
      completedHanlder(true);
    else completedHanlder(false);
  }, [phone, wrong]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
    //   (result) => {
    //     console.log(result.text);
    //     Swal.fire({
    //       icon: "success",
    //       title: "Message Sent Successfully",
    //     });
    //   },
    //   (error) => {
    //     console.log(error.text);
    //     Swal.fire({
    //       icon: "error",
    //       title: "Ooops, something went wrong",
    //       text: error.text,
    //     });
    //   }
    // );
    e.target.reset();
  };

  return (
    <InputMask
      onChange={changeHandler}
      mask="+7(999) 999 99 99"
      placeholder="+7(909) 000 00 00"
      name="phone"
      value={phone.user_phone}
      className={`input input_phone text-l pb-3 pt-3 pl-4 pr-5 phone-form__input ${className} ${
        wrong && "input_wrong"
      }`}
    />
  );
};
