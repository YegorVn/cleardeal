import './index.css'

import manHand from "../../assets/images/getService/manHand.svg";
import handShake from "../../assets/images/getService/handShake.svg";
import arrowDown from "../../assets/images/getService/arrowDown.svg";
import {Index as Circle} from './Circle'
export const Index = () => {
  return (
    <div className="service d-flex flex-column">
      <div className="service__block service__block_first d-flex flex-wrap">
        <div className="service__step d-lg-flex col-lg-7 col-xl-6 px-0">
          <Circle num={1} className="mx-auto mx-lg-0" />
          <div className="service__text px-0 pl-lg-5 mx-auto mx-lg-0 mt-3 mt-lg-0">
            <div className="service__title mt-4 mt-md-0 text-xl bold text-center text-lg-left">
              Оставьте заявку
            </div>
            <div className="service__annotation text-l text-left mt-4 pr-lg-5 text-center text-lg-left">
              Свяжемся с вами в течение 5 минут и бесплатно проконсультируем.
            </div>
          </div>
        </div>
        <img
          src={manHand}
          className="service__img man-hand d-none d-lg-block"
        />
        <div className="service__img arrow-long d-none d-lg-block" />
      </div>
      <img src={arrowDown} className="service__img mx-auto mb-3 mt-3 d-none" height={140} />
      <div className="service__block service__block_second d-flex mt-5 mt-sm-0">
        <div className="service__step d-lg-flex col-lg-6 px-0 ml-lg-auto">
          <Circle num={2} className="mx-auto mx-lg-0" />
          <div className="service__text mt-4 mt-md-0 px-0 pl-lg-5 mx-auto mx-lg-0 mt-3 mt-lg-0">
            <div className="service__title mt-4 mt-sm-0 text-xl bold text-center text-lg-left">
              Обсудим план действий
            </div>
            <div className="service__annotation text-l text-left mt-4 pr-lg-5 text-center text-lg-left">
              Уточним вашу ситуацию, предложим решение и план действий.
              Согласуем условия и подпишем договор онлайн.
            </div>
          </div>
        </div>
      </div>
      <img src={arrowDown} className="service__img mx-auto mb-3 mt-3 d-none" height={140} />
      <div className="service__block service__block_third d-flex flex-column mt-5 mt-sm-0">
        <div className="service__img arrow-dotted d-none d-lg-block" />
        <div className="service__row d-flex">
          <div className="service__step d-lg-flex flex-lg-row col-lg-7 col-xl-6 px-0 mt-lg-5">
            <Circle num={3} className="mx-auto mx-lg-0" />
            <div className="service__text px-0 pl-lg-5 mx-auto mx-lg-0 mt-3 mt-lg-0">
              <div className="service__title mt-4 mt-md-0 text-xl bold text-lg-left text-center">
                Начнём работу
              </div>
              <div className="service__annotation text-l text-left mt-4 pr-lg-5 text-center text-lg-left">
                И доведём её до конца: продадим вашу квартиру, проведём сделку
                по покупке или оформим ипотеку.
              </div>
            </div>
          </div>
          <img
            src={handShake}
            className="service__img man-hand col-lg-6 col-xl-0 px-0 d-none d-lg-block"
          />
        </div>
      </div>
    </div>
  );
};
