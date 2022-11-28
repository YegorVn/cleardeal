import "./index.css";

import { useState, useRef, useContext } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { Context } from "../../../Context";
export const Index = ({ items, className}) => {
  const [context, setContext] = useContext(Context);
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState(items[0]);
  const ref = useRef();

  const handleSelect = (el) => {
    console.log(context)
    setActive(el);
    setShown(false)
    setContext({...context, city: el.val})
  };

  useOnClickOutside(ref, () => setShown(false));

  return (
    <div ref={ref} className={`select  ${className}`}>
      <div
        className={`select__content ${
          (shown && "select__content_shown") || "select__content_hidden"
        } `}
      >
        <div
          className={`select__active ${
            (shown && "select__active_shown") || "select__active_hidden"
          }`}
          onClick={() => setShown(!shown)}
        >
          {active.text}
        </div>
        <div
          className={`select__els ${
            (shown && "select__els_shown") || "select__els_hidden"
          }`}
        >
          {items
            .filter((el) => JSON.stringify(el) !== JSON.stringify(active))
            .map((el, index) => {
              return (
                <div
                  className="select__el"
                  onClick={() => handleSelect(el)}
                  key={index}
                >
                  {el.text}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
