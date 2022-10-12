import React, { useState } from "react";
import { CardSlider } from "./pieces/CardSlider";
export const Slider = () => {
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

  const cards = [
    {
      name: "Иван, 36 лет",
      region: "Кемерово",
      text: "Я думал, что придётся сильно снижать стоимость квартиры, потому что с ней было столько проблем. Но благодаря команде «Ясной сделки», удалось решить все сложности, найти покупателя и продать квартиру по рыночной цене",
      avatar: "",
    },
    {
      name: "Дмитрий, 26 лет",
      region: "Красноярск",
      text: "Я думал, что придётся сильно снижать стоимость квартиры, потому что с ней было столько проблем. Но благодаря команде «Ясной сделки», удалось решить все сложности, найти покупателя и продать квартиру по рыночной цене",
      avatar: "",
    },
    {
      name: "Николай, 41 год",
      region: "Владивосток",
      text: "Я думал, что придётся сильно снижать стоимость квартиры, потому что с ней было столько проблем. Но благодаря команде «Ясной сделки», удалось решить все сложности, найти покупателя и продать квартиру по рыночной цене",
      avatar: "",
    },
  ];

  const changeHandler = (val) => {
    if (val === "next" && currentIdx < content.length - 1)
      setCurrentIdx((currentIdx) => (currentIdx += 1));
    if (val === "previous" && currentIdx > 0)
      setCurrentIdx((currentIdx) => (currentIdx -= 1));
    console.log(currentIdx);
  };

  return (
    <div className="slider pb-5">
      <div className="slider__body d-flex mt-5 pt-5">
        <CardSlider
          className="col-6 ml-auto"
          changeHandler={changeHandler}
          currentIdx={currentIdx}
          card={cards[currentIdx]}
        />
        <div className={"col-5 slider__block ml-auto mt-4 pl-5 "}>
          {content.map((block, index) => {
            return (
              <>
                <div
                  className={
                    "slider__text " +
                    (currentIdx === index
                      ? "slider__text_fade_in"
                      : "slider__text_fade_out")
                  }
                  key={block.val}
                >
                  <div className="text-xl bold pr-5 ">{block.header}</div>
                  <div className="text-l mt-5 text-left col-11 pl-0">
                    {block.annotation}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
