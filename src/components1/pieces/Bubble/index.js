import "./index.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export const Index = ({
  text,
  className,
  img,
  bodyClassName,
  animation,
  visible,
  hidden,
  bubbleWrite,
}) => {
  // const control = useAnimation();
  // const [ref, inView] = useInView();
  // const bubbleAriseAnim = {
  //   visible: { ...visible, transition: { duration: animation && animation.duration } },
  //   hidden: { ...hidden },
  // };

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   }
  //   else{
  //     control.start("hidden")
  //   }
  // }, [control, inView]);

  return (
    <div className={`bubble d-flex ${className}`}>
      {img && (
        <img className="bubble__img mt-auto mt-md-0 mt-md-auto " src={img} />
      )}
      <div
        className={`bubble__body bubble__body_writed ${bodyClassName}`}
        style={{
          animationDuration: animation && animation.duration + "s",
          animationDelay: animation && animation.delay + "s",
        }}
      >
        {text}
      </div>
      <div
        className={`bubble__body bubble__body_writing d-flex ${bodyClassName}`}
      >
        {Array.from({ length: 3 }, (_, i) => i + 1).map((circle, index) => {
          return (
            <div
              className="bubble__circle"
              style={{ animationDelay: index * 0.5 + "s" }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
