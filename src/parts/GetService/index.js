import "./index.css";

import manHand from "../../assets/images/getService/manHand.svg";
import handShake from "../../assets/images/getService/handShake.svg";
import arrowDown from "../../assets/images/getService/arrowDown.svg";
import { Index as Circle } from "./Circle";
export const Index = ({ items }) => {
  return (
    <div className="service">
      {items.map((point, index) => {
        return (
          <div
            className={`point d-flex flex-column flex-lg-row align-items-center align-items-lg-start ${
              (point.val === "right" && "point__right") ||
              (point.val === "left" && "point__left")
            }`}
          >
            <Circle num={index + 1} />
            <div className="point__text">
              <div className="point__header bold text-xxxl text-center text-lg-left">
                {point.header}
              </div>
              <div className="point__annotation text-m text-left text-center text-lg-left">
                {point.annotation}
              </div>
            </div>
          </div>
        );
      })}
    </div>
    // <div className="service d-flex flex-column">
    //   <div className="service__block service__block_first d-flex flex-wrap">
    //     <div className="service__point d-lg-flex col-lg-7 col-xl-7 px-0">
    //       <Circle num={1} className="mx-auto mx-lg-0" />
    //       <div className="service__text px-0 pl-lg-5 mx-auto mx-lg-0 mt-3 mt-lg-0">
    //         <div className="service__title mt-4 mt-md-0 text-xl bold text-center text-lg-left">
    //           Оставьте заявку
    //         </div>
    //         <div className="service__annotation text-l text-left mt-4 pr-lg-5 text-center text-lg-left">
    //           Свяжемся с вами в течение<br className="d-none d-xl-block"></br> 5
    //           минут и бесплатно<br className="d-none d-xl-block"></br>{" "}
    //           проконсультируем.
    //         </div>
    //       </div>
    //     </div>
    //     <img
    //       src={manHand}
    //       className="service__img man-hand d-none d-lg-block"
    //     />
    //     <div className="service__img arrow-long d-none d-lg-block" />
    //   </div>
    //   <img
    //     src={arrowDown}
    //     className="service__img mx-auto mb-3 mt-3 d-none"
    //     height={140}
    //   />
    //   <div className="service__block service__block_second d-flex mt-5 mt-md-0">
    //     <div className="service__point d-lg-flex col-lg-6 px-0 ml-lg-auto mr-lg-3">
    //       <Circle num={2} className="mx-auto mx-lg-0" />
    //       <div className="service__text mt-4 mt-md-0 px-0 pl-lg-4 mx-auto mx-lg-0 mt-3 mt-lg-0">
    //         <div className="service__title mt-4 mt-sm-0 text-xl bold text-center text-lg-left">
    //           Обсудим план<br></br> действий
    //         </div>
    //         <div className="service__annotation text-l text-left mt-4 pr-lg-5 text-center text-lg-left">
    //           Уточним вашу ситуацию,<br className="d-none d-xl-block"></br>{" "}
    //           предложим решение и порядок<br className="d-none d-xl-block"></br>{" "}
    //           действий. Согласуем условия<br className="d-none d-xl-block"></br>{" "}
    //           и подпишем договор онлайн.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <img
    //     src={arrowDown}
    //     className="service__img mx-auto mb-3 mt-3 d-none"
    //     height={140}
    //   />
    //   <div className="service__block service__block_third d-flex flex-column mt-5 mt-md-0">
    //     <div className="service__img arrow-dotted d-none d-lg-block" />
    //     <div className="service__row d-flex">
    //       <div className="service__point d-lg-flex flex-lg-row col-lg-7 col-xl-7 px-0 mt-lg-5">
    //         <Circle num={3} className="mx-auto mx-lg-0" />
    //         <div className="service__text px-0 pl-lg-5 mx-auto mx-lg-0 mt-3 mt-lg-0">
    //           <div className="service__title mt-4 mt-md-0 text-xl bold text-lg-left text-center">
    //             Начнём работу
    //           </div>
    //           <div className="service__annotation text-l text-left mt-4 text-center text-lg-left">
    //             И доведём её до конца:<br></br> продадим вашу квартиру,<br></br>{" "}
    //             проведём сделку по покупке<br></br> или оформим ипотеку.
    //           </div>
    //         </div>
    //       </div>
    //       <img
    //         src={handShake}
    //         className="service__img man-hand col-lg-6 col-xl-0 px-0 d-none d-lg-block"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};
