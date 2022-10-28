import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export const Bubble = ({
  text,
  className,
  img,
  elClassName,
  animDuration,
  animDelay,
  visible,
  hidden,
  bubbleWrite,
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const bubbleAriseAnim = {
    visible: { ...visible, transition: { duration: animDuration } },
    hidden: { ...hidden },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
  }, [control, inView]);

  return (
    <div className={"bubble d-flex flex-column flex-md-row " + className}>
      {img && (
        <img
          className="bubble__img mt-2 mt-md-auto order-1 order-md-0"
          src={img}
        />
      )}
      <motion.div
        ref={ref}
        variants={!bubbleWrite && bubbleAriseAnim}
        initial="hidden"
        animate={control}
      >
        {inView && <div
          className={"bubble__body bubble__body_writed " + elClassName}
          style={
            bubbleWrite && {
              animationDuration: animDuration + "s",
              animationDelay: animDelay + "s",
            }
          }
        >
          {text}
        </div>}
        {bubbleWrite && inView && (
          <div
            className={
              "bubble__body bubble__body_writing d-flex " + elClassName
            }
          >
            <div
              className="bubble__circle"
              style={{ animationDuration: "1s" }}
            ></div>
            <div
              className="bubble__circle"
              style={{ animationDuration: "1.5s" }}
            ></div>
            <div
              className="bubble__circle"
              style={{ animationDuration: "2s" }}
            ></div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
