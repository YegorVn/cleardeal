import "./index.css";

import { useState, useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
export const Index = ({ elements, className, changeHandler }) => {
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState(elements[0]);
  const ref = useRef();

  const handleSelect = (el) => {
    setActive(el);
    changeHandler(el);
  };

  useOnClickOutside(ref, () => setShown(false));

  return (
    <div ref={ref} className={`select  ${className}`}>
      <div
        className={`select__content ${
          (shown && "select__content_shown") || "select__content_hidden"
        } `}
      >
        <div className="select__active" onClick={() => setShown(!shown)}>
          {active.text}
        </div>
        <div
          className={`select__els ${
            (shown && "select__els_shown") || "select__els_hidden"
          }`}
        >
          {elements
            .filter((el) => JSON.stringify(el) !== JSON.stringify(active))
            .map((el, index) => {
              return (
                <div className="select__el" onClick={() => handleSelect(el)} key={index}>
                  {el.text}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
