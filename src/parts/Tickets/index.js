import "./index.css";

// import idea from "../assets/images/idea.svg";
import phone from "../../assets/images/tickets/phone.png";
import girl from "../../assets/images/tickets/girl.png";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const Index = ({ className }) => {
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();
  const [ref1, inView1] = useInView({});
  const [ref2, inView2] = useInView({});
  const [ref3, inView3] = useInView({});
  const [ref4, inView4] = useInView({});
  const ticket1 = {
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
    hidden: { opacity: 0 },
  };

  const ticket2 = {
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
    hidden: { opacity: 0 },
  };

  const ticket3 = {
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
    hidden: { opacity: 0 },
  };

  const ticket4 = {
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    if (inView1) {
      control1.start("visible");
    }
    if (inView2) {
      control2.start("visible");
    }
    if (inView3) {
      control3.start("visible");
    }
    if (inView4) {
      control4.start("visible");
    }
  }, [
    control2,
    control3,
    control4,
    control1,
    inView1,
    inView2,
    inView3,
    inView4,
  ]);
  return (
    <div className="tickets d-flex flex-column col-12 flex-lg-row flex-wrap px-0">
      <div className="d-flex flex-column flex-lg-row">
        <motion.div
          ref={ref1}
          variants={ticket1}
          initial="hidden"
          animate={control1}
          className="ticket border-r-60 background-white d-flex flex-column flex-lg-row col-12 col-lg-8 pb-5 pt-5 px-sm-5"
        >
          <img src={phone} className="phone-img d-none d-lg-block pr-2" />
          <div className="ticket__content col-12 col-xl-8 col-lg-7 pr-2 pl-2 px-sm-0">
            <div className="ticket__header color-blue text-xl bold pt-2 text-left ">
              Один чат для связи — прямо в вашем телефоне
            </div>
            <img
              src={phone}
              className="phone-img col-12 px-0 pt-4 d-block d-lg-none"
            />
            <div className="ticket__text text-l col-lg-9 pl-0 pb-sm-5 pr-xl-2 mt-4">
              Колл-центр ответит на вопросы, менеджер по продажам будет держать
              <br className="d-none d-xl-block"></br>в курсе сделки, юристы
              <br className="d-none d-xl-block"></br> скажут, какие документы
              потребуются.
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          variants={ticket2}
          initial="hidden"
          animate={control2}
          className="ticket border-r-60 background-white col-12 col-lg-4 ml-lg-4 mr-5 pb-4 pt-5 px-sm-4 mt-5 mt-lg-0"
        >
          <div className="ticket__content pr-3 pl-2 px-sm-4">
            <div className="ticket__header color-blue text-xl bold text-left pt-2">
              Безопасная сделка
            </div>
            <div className="ticket__text text-l pb-4 pb-sm-5 mt-4">
              Наша ответственность застрахована.
              <br className="d-none d-xl-block"></br> С нами вы в полной
              безопасности.
            </div>
          </div>
        </motion.div>
      </div>
      <div className="d-flex flex-column flex-lg-row mt-lg-4">
        <motion.div
          ref={ref3}
          variants={ticket3}
          initial="hidden"
          animate={control3}
          className="ticket border-r-60 background-white col-12 col-lg-5 pt-5 pl-sm-5 mt-5 mt-lg-0 pb-lg-5"
        >
          <div className="ticket__content px-2 px-sm-0">
            <div className="ticket__header color-blue text-xl bold text-left ">
              Вы всегда можете передумать
            </div>
            <div className="ticket__text text-l pb-5 mt-4">
              У нас нет штрафов за отказ от услуг.
              <br className="d-none d-xl-block"></br> Вы можете одновременно
              продавать квартиру с нами или сами.
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref4}
          variants={ticket4}
          initial="hidden"
          animate={control4}
          className="ticket border-r-60 d-flex flex-column flex-lg-row background-white px-2 col-12 col-lg-7 ml-lg-4 pt-5 px-sm-5 mt-5 mt-lg-0"
        >
          <img src={girl} className="girl-img d-none d-lg-block" />
          <div className="ticket__content col-12 col-lg-7">
            <div className="ticket__header color-blue text-xl bold text-left ">
              Бесплатная консультация
            </div>
            <img
              src={girl}
              className="girl-img pt-4 col-12 d-block d-lg-none"
            />
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
