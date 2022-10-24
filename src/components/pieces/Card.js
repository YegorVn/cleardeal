import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const Card = ({ card, className, animDuration }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const header = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: (animDuration + 1) * 1 },
    },
    hidden: { opacity: 0, scale: 1 },
  };

  const text = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: (animDuration + 1) * 0.5 },
    },
    hidden: { opacity: 0, scale: 1 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const [closed, setClosed] = useState(true);

  const changeHandler = () => {
    setClosed(!closed);
  };

  return (
    <div
      className={
        "card border-r-40 background-white " +
        className +
        " " +
        (closed ? "card_closed" : "card_opened")
      }
    >
      <motion.div
        ref={ref}
        variants={header}
        initial="hidden"
        animate={control}
        className="card__header color-blue bold "
      >
        {card.header.split(" ").map((word, index) => {
          return (
            <>
              <p key={index}>{word}</p>
            </>
          );
        })}
      </motion.div>
      <motion.div
        ref={ref}
        variants={text}
        initial="hidden"
        animate={control}
        className="card__text text-l pt-3 mb-5"
      >
        {card.text}
      </motion.div>
      <div
        className={
          "btn-show d-flex align-items-center mb-4 mt-5 " +
          (closed ? "btn-show_closed" : "btn-show_shown")
        }
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
      {!closed && (
        <div
          className={
            "card__annotation text-xs mt-3 mb-3 " +
            (closed ? "card__annotation_closed" : " card__annotation_shown")
          }
        >
          {card.annotation}
        </div>
      )}
      <div className="card__price color-blue text-xl bolder mb-5 mt-4">
        {card.price}
      </div>
      <button className="btn card__btn text-m ">Оставить заявку</button>
    </div>
  );
};
