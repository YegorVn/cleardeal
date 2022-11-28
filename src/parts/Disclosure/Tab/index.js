import "./index.css";
import { useState } from "react";
export const Index = ({ className, tab }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div
      className={`tab ${
        className + " " + (opened ? "tab_opened" : "tab_closed")
      }`}
    >
      <div className="tab__cover d-flex align-items-lg-center background-white border-r-40 ">
        <div className="tab__header text-xxxl bold">{tab.header}</div>
        <div
          className={`btn-show ml-auto mt-2 mt-xl-0 ${
            opened ? "btn-show_closed" : "btn-show_shown"
          }`}
          onClick={() => setOpened(!opened)}
        >
          <div
            className={
              "btn-show__icon " +
              (opened ? "btn-show__icon_shown" : "btn-show__icon_closed")
            }
          ></div>
        </div>
      </div>
      <div
        className={`tab__text text-m background-white ${
          opened ? "tab__text_opened" : "tab__text_closed"
        }`}
      >
        {tab.text}
      </div>
    </div>
  );
};
