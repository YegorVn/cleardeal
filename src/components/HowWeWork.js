import React, { useState } from "react";

export const HowWeWork = ({ className }) => {
  const [current, setCurrent] = useState("communicate");
  const content = [
    {
      header:
        "Общаемся с вами на равных и объясняем сложные вещи простым языком.  ",
      annotation:
        "Консультируем вас столько, сколько нужно, чтобы вы приняли взвешенное решение. Присылаем полезные материалы и подробно отвечаем на вопросы. Сопровождаем вас на всех этапах и остаёмся на связи даже после сделки. ",
      val: "communicate",
    },
    {
      header:
        "Прозрачные условия работы и оплаты услуг — никакого мелкого шрифта в договоре.",
      annotation:
        "Работаем в белую и дорожим репутацией. Вы заранее видите стоимость услуг, знаете обо всех этапах и о том, сколько времени займёт каждый шаг.",
      val: "communicate1",
    },
    {
      header:
        "Вы платите только за нашу работу, а не за бренд, офис в центре города или надуманную комиссию агента. ",
      annotation:
        "Цена за услугу не зависит от стоимости квартиры и сложности сделки. Она не изменится потому, что вы приехали на Мерседесе или потому, что так захотел риелтор. ",
      val: "communicate2",
    },
  ];

  const Switch = ({ buttons, changeHandler, className, current }) => {
    console.log(current);
    return (
      <div className={"switch d-flex justify-content-center " + className}>
        {buttons.map((btn) => {
          return (
            <button
              key={btn.val}
              onClick={changeHandler}
              value={btn.val}
              className={
                "btn switch__btn px-5 pt-3 pb-3 text-m col-4 " +
                (current == btn.val && "btn_active switch__btn_active")
              }
            >
              {btn.text}
            </button>
          );
        })}
      </div>
    );
  };

  const changeHandler = (e) => {
    setCurrent(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="how-we-work pb-5">
      <Switch
        buttons={[
          { text: "Человеческое общение", val: "communicate" },
          { text: "Честная цена", val: "communicate1" },
          { text: "Ясная сделка", val: "communicate2" },
        ]}
        changeHandler={changeHandler}
        className="mt-5"
        current={current}
      />
      <div className="how-we-work__body d-flex mt-5 pt-5">
        <div className="col-5"></div>
        <div className="col-7 ml-auto ">
          {content.map((block) => {
            return (
              <>
                {block.val === current && (
                  <React.Fragment key={block.val}>
                    <div className="text-xl bold">{block.header}</div>
                    <div className="text-l mt-5 text-left col-11 pl-0">
                      {block.annotation}
                    </div>
                  </React.Fragment>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
