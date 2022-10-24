import React from "react";
import {useState, useEffect} from "react";
export const Modal = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (ev.clientX < 10 || ev.clientY < 10) setModal(true);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const Modal = ({ shown, setShown }) => {
    return (
      <div
        // className={"modal " + (shown ? "modal_shown" : "modal_closed")}
      ></div>
    );
  };
  return <Modal shown={modal} />;
};
