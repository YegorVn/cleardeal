import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./index.css";

export const Index = ({content, animation}) => {
    const [ref, inView] = useInView({
      });
    const control = useAnimation();

    const variants = {
      visible: {
        opacity: 1,
        transition: {
          duration: animation && animation.duration,
          delay: animation && animation.delay,
        },
      },
      hidden: { opacity: 0 },
    };

    useEffect(() => {
      if (inView) {
        control.start("visible");
      }
      else{
        control.start("hidden")
      }
    }, [control, inView]);

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={control}
        className="ticket"
      >
        {content.img && <img src={content.img} className={`ticket__img d-none d-lg-block ${content.img.className}`} />}
        <div className="ticket__header color-blue text-xl bold">
          {content.title}
        </div>
        {content.smallScreenImg && <img src={content.smallScreenImg} className={`d-block d-lg-none mt-4 ${content.img.className}`} />}
        <div className="ticket__text text-xxs col-lg-9 px-0 mt-4">
          {content.text}
        </div>
      </motion.div>
    );
  };