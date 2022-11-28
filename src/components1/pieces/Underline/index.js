import "./index.css";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const Index = (props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const variants = {
    visible: {
      transition: { duration: 0.75 }, transform: "scaleX(100%) scaleY(150%)"
    },
    hidden: { transform: "scaleX(0) scaleY(50%)" },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="underline">
      {props.children}
      <motion.div
        variants={variants}
        animate={control}
        style={props.style ? props.style : ""}
        initial="hidden"
        ref={ref}
        className={`underline__stroke ${props.className ? props.className : ""}`}
      >
        <img src={props.img} className="underline__img"/>
      </motion.div>
    </div>
  );
};
