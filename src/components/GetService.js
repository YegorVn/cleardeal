import girl from "../assets/images/girl.svg";
import arrowLong from "../assets/images/arrowLong.svg";
import arrowDotted from "../assets/images/arrowDotted.svg";

export const GetService = () => {
  return (
    <div className="get-service d-flex flex-column ">
      <div className="get-service__first-step first-step d-flex col-10">
        <div className="step d-flex align-items-center border-r-100per color-blue justify-content-center text-xxl bolder">
          1
        </div>
        <div className="get-service__text col-5 ml-3">
          <div className="get-service__header text-xl bold">
            Оставьте заявку
          </div>
          <div className="get-service__annotation text-m mt-4 ">
            Свяжемся с вами в течение 5 минут и бесплатно проконсультируем.
          </div>
        </div>
        <img src={arrowLong} className="arrow-long position-absolute" />
      </div>
      <div className="get-service__second-step second-step col-6 d-flex ml-auto">
        <div className="step d-flex align-items-center border-r-100per color-blue justify-content-center text-xxl bolder">
          2
        </div>
        <div className="get-service__text col-8 ml-3 ">
          <div className="get-service__header text-xl bold">
            Обсудим план действий
          </div>
          <div className="get-service__annotation text-m mt-4 ">
            Уточним вашу ситуацию, предложим решение и план действий. Согласуем
            условия и подпишем договор онлайн.
          </div>
        </div>
        <img src={arrowDotted} className="arrow-dotted position-absolute" />
      </div>
      <div className="get-service__first-step first-step d-flex col-10">
        <div className="step d-flex align-items-center border-r-100per color-blue justify-content-center text-xxl bolder">
          3
        </div>
        <div className="get-service__text col-5 ml-3">
          <div className="get-service__header text-xl bold">Начнём работу</div>
          <div className="get-service__annotation text-m mt-4 ">
            И доведём её до конца: продадим вашу квартиру, проведём сделку по
            покупке или оформим ипотеку.
          </div>
        </div>
      </div>
    </div>
  );
};
