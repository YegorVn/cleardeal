// import idea from "../assets/images/idea.svg";
import phone from "../assets/images/tickets/phone.png";
import girl from "../assets/images/tickets/girl.png";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const Tickets = ({ className }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const ticket = {
    visible: {
      opacity: 1,
      transition: { duration: 0.25 },
      boxShadow: "0px 0px 2px 1px #FAFAFB",
    },
    hidden: { opacity: 1, boxShadow: "0px 0px 1px 1px #FAFAFB" },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className="tickets d-flex flex-column col-12 flex-lg-row flex-wrap px-0">
      <div className="d-flex flex-column flex-lg-row">
        <motion.div
          ref={ref}
          variants={ticket}
          initial="hidden"
          animate={control}
          className="ticket border-r-60 background-white d-flex flex-column flex-lg-row col-12 col-lg-8 pb-5 pt-5 px-sm-5"
        >
          <img src={phone} className="phone-img" width={340} height={350} />{" "}
          <div className="ticket__content col-12 col-xl-8 col-lg-7 pr-2 pl-2 px-sm-0">
            <div className="ticket__header color-blue text-xl bold pt-2 text-left ">
              Один чат для связи — прямо в вашем телефоне
            </div>
            <div className="ticket__text text-l col-lg-9 pl-0 pb-5 mt-4">
              Колл-центр ответит на вопросы, менеджер по продажам будет держать
              в курсе сделки, юристы скажут, какие документы потребуются.
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          variants={ticket}
          initial="hidden"
          animate={control}
          className="ticket border-r-60 background-white col-12 col-lg-4 ml-lg-4 mr-5 pb-4 pt-5 px-sm-4 mt-5 mt-lg-0"
        >
          <div className="ticket__content pr-3 pl-2 px-sm-0">
            <div className="ticket__header color-blue text-xl bold text-left pt-2">
              Безопасная сделка
            </div>
            <div className="ticket__text text-l pb-5 mt-4">
              Наша ответственность перед вами застрахована. Если что-то пойдёт
              не так, покроем стоимость недвижимости.
            </div>
          </div>
        </motion.div>
      </div>
      <div className="d-flex flex-column flex-lg-row mt-lg-4">
        <motion.div
          ref={ref}
          variants={ticket}
          initial="hidden"
          animate={control}
          className="ticket border-r-60 background-white col-12 col-lg-5 pt-5 pl-sm-5 mt-5 mt-lg-0 pb-lg-5"
        >
          <div className="ticket__content px-2 px-sm-0">
            <div className="ticket__header color-blue text-xl bold text-left ">
              Вы всегда можете передумать
            </div>
            <div className="ticket__text text-l pb-5 mt-4">
              У нас нет штрафов за отказ от услуг. Вы можете одновременно
              продавать квартиру с нами или сами.
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          variants={ticket}
          initial="hidden"
          animate={control}
          className="ticket border-r-60 d-flex flex-column flex-lg-row background-white px-2 col-12 col-lg-7 ml-lg-4 pt-5 px-sm-5 mt-5 mt-lg-0"
        >
          <img src={girl} className="girl-img" width={340} height={350} />
          <div className="ticket__content col-12 col-lg-7">
            <div className="ticket__header color-blue text-xl bold text-left ">
              Бесплатная консультация
            </div>
            <div className="ticket__text text-l pb-5 mt-4 pr-lg-3">
              Разберёмся в ситуации, предложим варианты действий, чтобы вы
              спокойно приняли взвешенное решение. Бесплатно.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
