import arrowDown from "../assets/icons/arrowDown.svg";
import { useState } from "react";
export const Disclosure = ({ content, className }) => {
  const Tab = ({ className, tab }) => {
    const [opened, setOpened] = useState(false);
    return (
      <div
        className={
          "tab px-0 " + className + " " + (opened ? "tab_opened" : "tab_closed")
        }
      >
        <div
          className={
            "tab__cover d-flex  background-white border-r-50 " + className
          }
        >
          <div className="tab__header text-xl bold col-12 col-md-11 pr-0 pl-0">
            {tab.header}
          </div>
          <div
            className={
              "tab__cross ml-auto d-none d-md-flex " +
              (opened ? "tab__cross_cross" : "tab__cross_check")
            }
            onClick={() => setOpened(!opened)}
          >
            <div className="stick"></div>
            <div className="stick"></div>
          </div>
        </div>
        <div
          className={
            "tab__text text-l background-white " +
            (opened ? "tab__text_opened" : "tab__text_closed")
          }
        >
          {tab.text}
        </div>
      </div>
    );
  };
  return (
    <div className={"disclosure col-12 px-0 " + className}>
        {content.map((tab) => {
          return <Tab tab={tab} className="col-12" />;
        })}
      
    </div>
  );
};
