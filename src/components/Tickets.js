export const Tickets = () => {
  const Ticket = ({ className, text, header, contentClassName }) => {
    return (
      <div className={"ticket border-r-60 background-white p-5 mt-5 " + className}>
        <div className={"ticket__content " + contentClassName}>
          <div className="ticket__header color-blue text-xl bold pt-2 text-left">
            {header}
          </div>
          <div className="ticket__text text-l pb-5 mt-4">{text}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="tickets d-flex flex-wrap">
      <Ticket
        className="col-8"
        text="Колл-центр ответит на вопросы, менеджер по продажам будет держать в курсе сделки, юристы скажут, какие документы потребуются."
        header="Один чат для связи — прямо в вашем телефоне"
        contentClassName="col-8"
      />
      <Ticket
        className="col-4"
        header="Безопасная сделка"
        text="Разберёмся в ситуации, предложим варианты решения, чтобы вы спокойно приняли взвешенное решение. Бесплатно."
      />
      <Ticket
        className="col-5"
        text="У нас нет штрафов за отказ от услуг. Вы можете одновременно продавать квартиру с нами или сами.  "
        header="Один чат для связи — прямо в вашем телефоне"
      />
      <Ticket
        className="col-7"
        header="Бесплатная консультация"
        text="Разберёмся в ситуации, предложим варианты решения, чтобы вы спокойно приняли взвешенное решение. Бесплатно."
        contentClassName="col-8"
      />
    </div>
  );
};
