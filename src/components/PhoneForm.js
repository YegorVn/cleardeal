import { useState } from "react";
export const PhoneForm = ({ className }) => {
  const PhoneInput = ({ className, value, changeHandler }) => {
    const [phone, setPhone] = useState("");
    const onChange = (e) => {
      console.log(e.target.value);
      let mask = phone.replace(
        /_/,
        e.target.value.replace(/[^0-9]/g, "").slice(-1)
      );
      setPhone(mask);
    };

    const onKeyPress = (e) => {
      if (e.key === "Backspace") console.log(e);
      console.log(e);
    };

    return (
      <input
        onKeyPress={onKeyPress}
        onChange={onChange}
        onFocus={() => setPhone("+7 (___) ___ __ __")}
        value={phone}
        placeholder="+7 (909) 000 00 00"
        className={"input input_phone text-m " + className}
      />
    );
  };

  const Button = ({ text, className }) => {
    return (
      <button className={"btn btn_contact text-m px-5 pt-3 pb-3 " + className}>
        {text}
      </button>
    );
  };

  return (
    <div className={"phone-form d-flex px-5 pt-5 pb-5 col-12 " + className}>
      <PhoneInput className="col-5" />
      <Button className="ml-auto" text="Позвоните мне" />
      <Button className="ml-5" text="Напишите мне" />
    </div>
  );
};
