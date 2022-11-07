import "./index.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export const Index = ({ num, className }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1,
    rootMargin: "-5%",
  });
  const point_1 = {
    visible: {
      backgroundColor: "#577BFA",
      borderRadius: "100%",
      color: "#FAFAFA",
      transition: { duration: 1 },
    },
    hidden: {
      borderRadius: "100%",
      backgroundColor: "#e5ebee",
      color: "#577BFA",
    },
  };

  useEffect(() => {
    console.log(inView);
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      variants={point_1}
      initial="hidden"
      animate={control}
      className={
        "step d-flex align-items-center border-r-100per color-blue justify-content-center text-xl bolder " +
        className
      }
    >
      {num}
    </motion.div>
  );
};
