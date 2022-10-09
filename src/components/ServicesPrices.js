export const ServicesPrices = () => {
  const cards = [
    {
      header: "Юридическое сопровождение",
      text: "Найдём покупателя и проведём безопасную сделку. ",
      price: "19 900 ₽",
      annotation:
        "Займёмся рекламой квартиры и договоримся о просмотрах. Когда покупатель будет найден, проверим его надёжность, подготовим документы для сделки и проведём безопасный расчёт.",
    },
    {
      header: "Юридическое сопровождение",
      text: "Найдём покупателя и проведём безопасную сделку. ",
      price: "19 900 ₽",
      annotation:
        "Займёмся рекламой квартиры и договоримся о просмотрах. Когда покупатель будет найден, проверим его надёжность, подготовим документы для сделки и проведём безопасный расчёт.",
    },
    {
      header: "Юридическое сопровождение",
      text: "Найдём покупателя и проведём безопасную сделку. ",
      price: "19 900 ₽",
      annotation:
        "Займёмся рекламой квартиры и договоримся о просмотрах. Когда покупатель будет найден, проверим его надёжность, подготовим документы для сделки и проведём безопасный расчёт.",
    },
  ];

  const ShowButton = ({className, ...props}) => {
    return (
      <div className={"btn-show " + className}>
        <div className="btn-show__icon"></div>
        <div className="btn-show__text">{props.children}</div>
      </div>
    );
  };
  const Card = ({ header, text, annotation, price, className
 }) => {
    return (
      <div className={"card d-flex flex-column align-items-start " + className}>
        <div className="card__header text-xl">{header}</div>
        <div className="card__text text-m mt-5 pr-4">{text}</div>
        <ShowButton className="mt-5">Подробнее</ShowButton>
        <div className="card__price text-xl bolder mt-5 ">{price}</div>
        <button className="btn card__btn align-self-stretch text-m mt-5 align-self-stretch">Купить</button>
      </div>
    );
  };

  return (
    <div className="services d-flex mt-5 ">
      {cards.map((card) => {
        return (
          <Card
            className="col-4 pl-4 pt-5 pb-4"
            header={card.header}
            text={card.text}
            price={card.price}
            annotation={card.annotation}
          />
        );
      })}
    </div>
  );
};
