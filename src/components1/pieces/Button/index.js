import "./index.css";
import { BtnSlide, BtnOpen, BtnSwitch, BtnDefault } from "../../buttons/index";

export const index = ({ variant, value, className, onClick, disabled, ...props }) => {
  return (
    <>
      {(variant === "slide-right" && (
        <BtnSlide
          className={`btn-slide-left ${className}`}
          onClick={onClick}
          text={props.children}
          disabled={disabled}
        />
      )) ||
        (variant === "slide-left" && (
          <BtnSlide
            className={`btn-slide-right ${className}`}
            onClick={onClick}
            text={props.children}
            disabled={disabled}
            />
        )) ||
        (variant === "open" && (
          <BtnOpen
            className={`${className}`}
            onClick={onClick}
            text={props.children}
            disabled={disabled}
            />
        )) ||
        (variant === "switch" && (
          <BtnSwitch
            value={value}
            className={`${className}`}
            onClick={onClick}
            text={props.children}
            disabled={disabled}
            />
        )) ||
        (variant === "blue" && (
          <BtnDefault
            className={`btn_blue ${className}`}
            onClick={onClick}
            text={props.children}
            disabled={disabled}
            />
        )) ||
        (variant === "white" && (
          <BtnDefault
            className={`btn_white ${className}`}
            onClick={onClick}
            text={props.children}
            disabled={disabled}
            />
        ))}
    </>
  );
};
