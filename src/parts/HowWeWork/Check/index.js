import "./index.css";
import zero from "../../../assets/icons/zero.svg";
import barcode from "../../../assets/icons/barcode.svg";
import React from "react";
export const Index = ({items}) => {
  return (
    <div className="check">
      <div className="check__list background-white d-flex flex-column pr-4 pl-5">
        <div className="check__points mt-5 mt-sm-auto">
          {[
            { text: "Оценка квартиры" },
            { text: "Поиск покупателя" },
            { text: "Подготовка договора" },
            { text: <>Аренда и уборка<br></br> офиса в центре города</> },
            { text: <>Кофемашина в офис<br></br> и корпоративное такси</> },
            { text: "Бонус риэлтора" },
          ].map((el, index) => {
            return (
              <React.Fragment key={index}>
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                        .check__point_${index} {
                            animation-delay: ${index + 0.5 + "s"};
                        }
                        .check__circle_${index}::before {
                          animation-delay: ${index + 1 + "s"};
                        }
                        .check__text_${index}::before {
                          animation-delay: ${index + 2 + "s"};
                        }
                        `,
                  }}
                ></style>
                <div
                  className={
                    "check__point d-flex text-xs mt-4 mt-sm-3 align-items-center check__point_" +
                    index
                  }
                >
                  <div className={"check__circle check__circle_" + index}></div>
                  <div className={"check__text check__text_" + index}>
                    {el.text}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="d-flex mb-5 mt-4">
          <img src={barcode} className="barcode" width={110} />
        </div>
      </div>
    </div>
  );
};
