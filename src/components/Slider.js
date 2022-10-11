import React, { useState } from "react";

export const Slider = () => {
  const [current, setCurrent] = useState("communicate");
  const [currentIdx, setCurrentIdx] = useState(0);
  const content = [
    {
      header: "Продали квартиру Ивана, на которой был арест.  ",
      annotation:
        "Продали квартиру Ивана, на которой был арест. Решили вопросыс госорганами, выставили рыночную цену 7 000 000 ₽ и нашли покупателя без торга.",
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

  const CardSlider = ({ changeHandler, className }) => {
    return (
      <div className={"card-slider background-white border-r-20 p-5 " + className}>
        <div className="card-slider__header d-flex justify-content-between">
          <button
            className="btn-slide btn-slide-left"
            onClick={() => changeHandler("previous")}
          >
          </button>
          <div className="card-slider__avatar"></div>
          <div className="card-slider__name text-xl bold">Иван, 36 лет</div>
          <button
            className="btn-slide btn-slide-right"
            onClick={() => changeHandler("next")}
          >
          </button>
        </div>
        <div className="card-slider__text mt-5 text-l">
          Я думал, что придётся сильно снижать стоимость квартиры, потому что с
          ней было столько проблем. Но благодаря команде «Ясной сделки», удалось
          решить все сложности, найти покупателя и продать квартиру по рыночной
          цене.
        </div>
      </div>
    );
  };

  const changeHandler = (val) => {
    if (val === "next" && currentIdx < content.length)
      setCurrentIdx((currentIdx) => (currentIdx += 1));
    if (val === "previous" && currentIdx > 0)
      setCurrentIdx((currentIdx) => (currentIdx -= 1));
    console.log(currentIdx);
  };

  return (
    <div className="slider pb-5">
      <div className="slider__body d-flex mt-5 pt-5">
        <CardSlider className="col-6" changeHandler={changeHandler} />
        <div className="col-5 ml-5 ">
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
