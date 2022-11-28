import "./index.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export const Index = ({ num, className }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 1,
    rootMargin: "-2%",
  });
  const point_1 = {
    visible: {
      borderRadius: "100%",
      transition: { duration: 0.5 },
      border: "70px solid var(--blue)",
      color: 'var(--white)'
    },
    hidden: {
      borderRadius: "100%",
      backgroundColor: "#e5ebee",
      color: "#577BFA",
      border: "6px solid var(--blue)",
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
