import './index.css'

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {Button} from '../../../components1/pieces'
import { useContext } from 'react';
import { Context } from '../../../Context';
export const Index = ({ card, className, animDuration }) => {
  const [context, ] = useContext(Context)
  const control = useAnimation();
  const [ref, inView] = useInView();
  const header = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: animDuration },
    },
    hidden: { opacity: 0, scale: 1 },
  };

  const text = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0 },
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
        className="card__header text-l color-blue bold "
      >
        {card.header}
        
      </motion.div>
      <motion.div
        ref={ref}
        variants={text}
        initial="hidden"
        animate={control}
        className="card__text text-xs pt-3 mb-5"
      >
        {card.text}
      </motion.div>
      <div
        className={
          "btn-show d-flex align-items-center mb-3 mt-4 mb-sm-4 mt-sm-5 " +
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
        <div className="btn-show__text ml-3 text-m color-blue card__show">Подробнее</div>
      </div>
      {!closed && (
        <div
          className={
            "card__annotation text-xxs mt-3 mb-3 " +
            (closed ? "card__annotation_closed" : " card__annotation_shown")
          }
        >
          {card.annotation}
        </div>
      )}
      <div className="card__price color-blue text-xxl bolder mb-4 mt-3 mb-sm-5 mt-sm-4">
        {card[context.city]}
      </div>
      <Button variant="white" className="text-m card__button">Оставить заявку</Button>
    </div>
  );
};