import { useState } from "react";

export const ServicesPrices = ({ items }) => {
  const Card = ({ card, className }) => {
    const [closed, setClosed] = useState(true);

    const changeHandler = () => {
      setClosed(!closed);
    };

    return (
      <div
        className={
          "card border-r-40 d-flex flex-column justify-content-end align-items-start background-white " +
          className
        }
      >
        <div className="card__header color-blue bold mb-5">{card.header}</div>
        <div className="card__text text-l mb-auto">{card.text}</div>
        <div
          className="btn-show d-flex align-items-center mb-5"
          onClick={() => changeHandler()}
        >
          <div
            className={
              "btn-show__icon " +
              (closed ? "btn-show__icon_closed" : "btn-show__icon_shown")
            }
          ></div>
          <div className="btn-show__text ml-3 text-l color-blue">Подробнее</div>
        </div>
        <div
          className={
            "card__annotation text-xs " +
            (closed ? "card__annotation_closed" : "mt-5 card__annotation_shown")
          }
        >
          {card.annotation}
        </div>

        <div className="card__price color-blue text-xl bolder mb-5">
          {card.price}
        </div>
        <button className="btn card__btn align-self-stretch text-m mb-3 align-self-stretch">
          Купить
        </button>
      </div>
    );
  };

  return (
    <div className="services">
      <h2 className="mt-5 mb-5 pt-5">Услуги и цены</h2>
      <div className="services__cards d-flex justify-content-between mt-5 pt-5 flex-wrap ">
        {items.map((card) => {
          return (
            <Card
              className="col-md-12 col-xl-4 pl-4 pr-4 pt-5 pb-5"
              card={card}
            />
          );
        })}
      </div>
    </div>
  );
};
