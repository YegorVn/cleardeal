import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
export const PhoneForm = ({ className }) => {
  const [phone, setPhone] = useState("");
  const [wrong, setWrong] = useState(false);
  const [completed, setCompleted] = useState(false);

  const changeHandler = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    if (phone.match(/^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{1,10}$/))
      setWrong(false);
    else if (phone === "") setWrong(false);
    else setWrong(true);
    if (
      phone.length === 17 &&
      phone.match(/^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{1,10}$/) &&
      !wrong
    )
      setCompleted(true);
    else setCompleted(false);
  }, [phone, wrong, completed]);

  const handlePhoneRequest = () => {
    alert(phone);
  };

  return (
    <div className={"phone-form " + className}>
      <div className="phone-form__content d-flex flex-column justify-content-between flex-xl-row">
        <InputMask
          onChange={changeHandler}
          mask="+7(999) 999 99 99"
          placeholder="+7(909) 000 00 00"
          value={phone}
          className={
            "input input_phone text-l col-12 col-xl-5 pb-3 pt-3 pl-4 pr-5 phone-form__input " +
            ((wrong && "input_wrong") || (completed && "input_not_wrong"))
          }
        />
        <button
          className="btn btn_contact text-l mt-5 mt-xl-0 btn_call"
          onClick={() => handlePhoneRequest(phone)}
          disabled={!completed}
        >
          Позвоните мне
        </button>
        <button
          className="btn btn_contact text-l mt-3 mt-xl-0"
          onClick={() => handlePhoneRequest(phone)}
          disabled={!completed}
        >
          Напишите в WhatsApp
        </button>
      </div>
      <div className="phone-form__background"></div>
    </div>
  );
};
