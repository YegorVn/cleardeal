import "./index.css";
import { BtnSlide, BtnOpen, BtnSwitch, BtnDefault } from "../../buttons/index";

export const index = ({ variant, value, className, onClick, ...props }) => {
  return (
    <>
      {(variant === "slide-right" && (
        <BtnSlide
          className={`btn-slide-left ${className}`}
          onClick={onClick}
          text={props.children}
        />
      )) ||
        (variant === "slide-left" && (
          <BtnSlide
            className={`btn-slide-right ${className}`}
            onClick={onClick}
            text={props.children}
          />
        )) ||
        (variant === "open" && (
          <BtnOpen
            className={`${className}`}
            onClick={onClick}
            text={props.children}
          />
        )) ||
        (variant === "switch" && (
          <BtnSwitch
            value={value}
            className={`${className}`}
            onClick={onClick}
            text={props.children}
          />
        )) ||
        (variant === "blue" && (
          <BtnDefault
            className={`btn_blue ${className}`}
            onClick={onClick}
            text={props.children}
          />
        )) ||
        (variant === "white" && (
          <BtnDefault
            className={`btn_white ${className}`}
            onClick={onClick}
            text={props.children}
          />
        ))}
    </>
  );
};
