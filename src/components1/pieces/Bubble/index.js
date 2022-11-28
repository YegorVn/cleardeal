import "./index.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export const Index = ({
  text,
  className,
  img,
  bodyClassName,
  writedAnimation,
  writingAnimation,
  disappearAnimation,
  isBubbleDisappear,
  isBubbleEmpty,
  style,
}) => {
  const control = useAnimation();
  const controlDisappear = useAnimation();
  const controlWrited = useAnimation();
  const [bubbleWrited, bubbleWritedView] = useInView({ rootMargin: "-2%" });
  const [bubbleWriting, bubbleWritingView] = useInView({ rootMargin: "-2%" });
  const [bubbleDisappear, bubbleDisappearView] = useInView({
    rootMargin: "-2%",
  });

  const defaultAppearAnim = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  ///
  const bubbleDisappearAnim = {
    visible: {
      opacity: 0,
      transition: {
        duration: disappearAnimation && disappearAnimation.duration,
        delay: disappearAnimation && disappearAnimation.delay,
      },
    },
    hidden: { opacity: 1 },
  };
  ///

  const bubbleWritedAnim = {
    visible: {
      ...(writedAnimation && writedAnimation.visible
        ? writedAnimation.visible
        : defaultAppearAnim.visible),
      transition: {
        duration: writedAnimation && writedAnimation.duration,
        delay: writedAnimation && writedAnimation.delay,
      },
    },
    hidden: {
      ...(writedAnimation && writedAnimation.hidden
        ? writedAnimation.hidden
        : defaultAppearAnim.hidden),
    },
  };

  const bubbleWritingAnim = {
    visible: {
      ...(writingAnimation && writingAnimation.visible
        ? writingAnimation.visible
        : defaultAppearAnim.visible),
      transition: {
        duration: writingAnimation && writingAnimation.duration,
        delay: writingAnimation && writingAnimation.delay * 0.75,
      },
    },
    hidden: {
      ...(writingAnimation && writingAnimation.hidden
        ? writingAnimation.hidden
        : defaultAppearAnim.hidden),
    },
  };

  useEffect(() => {
    if (bubbleWritingView || bubbleWritedView || bubbleDisappearView) {
      control.start("visible");
      if (isBubbleDisappear) controlDisappear.start("visible");
      if (!isBubbleEmpty) controlWrited.start("visible");
    } else {
      control.start("hidden");
      if (isBubbleDisappear) controlDisappear.start("hidden");
      if (!isBubbleEmpty) controlWrited.start("hidden");
    }
  }, [control, bubbleWritingView, bubbleWritedView, bubbleDisappearView]);

  return (
    <>
      <motion.div
        variants={bubbleDisappearAnim}
        animate={controlDisappear}
        ref={bubbleDisappear}
        initial="hidden"
        className={`bubble d-flex ${className}`}
      >
        {img && (
          <img className="bubble__img mt-auto mt-md-0 mt-md-auto " src={img} />
        )}
        <motion.div
          variants={bubbleWritedAnim}
          animate={controlWrited}
          initial="hidden"
          ref={bubbleWrited}
          className={`bubble__body bubble__body_writed ${bodyClassName}`}
        >
          {text && text}
        </motion.div>
        {writingAnimation && (
          <motion.div
            variants={bubbleWritingAnim}
            animate={control}
            initial="hidden"
            ref={bubbleWriting}
            className={`bubble__body bubble__body_writing d-flex`}
          >
            {Array.from({ length: 3 }, (_, i) => i + 1).map((circle, index) => {
              return (
                <div
                  className="bubble__circle"
                  style={{
                    animationDelay:
                      writingAnimation && writingAnimation.delay + index + "s",
                  }}
                ></div>
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </>
  );
};
