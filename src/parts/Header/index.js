import "./index.css";

import logo from "../../assets/images/Global/logo.png";
import { Button, Select } from "../../components1/pieces";
import { useState } from "react";
import { Index as Burger } from "./Burger";

export const Index = ({ links }) => {
  const [burger, setBurger] = useState(false);

  const ConfirmCity = () => {
    const [shown, setShown] = useState();

    const handleClose = () => {
        setShown(true);
    };

    return (
      <div className={`confirm-city align-items-center ${!shown ? "d-xl-flex" : "d-none"}`}>
        <div className="confirm-city__text">Ваш город Москва?</div>
        <Button variant="blue" className="ml-3 text-xxxs pt-1 pb-1 px-3" onClick={handleClose}>
          Да
        </Button>
        <Button variant="white" className="ml-2 text-xxxs pt-1 pb-1 px-3" onClick={handleClose}>
          Изменить
        </Button>
      </div>
    );
  };

  return (
    <>
      <header className="header">
        <div className="header-small align-items-center pt-4 pb-4 d-sm-none col-12">
          <div className="d-flex px-4 align-items-center">
            <img className="col-7 col-sm-8 col-sm-5 px-0" src={logo} />
            <Burger state={burger} onClick={() => setBurger(!burger)} />
          </div>
          <div
            className={`header-small__overflow ${
              burger
                ? "header-small__overflow_shown"
                : "header-small__overflow_hidden"
            }`}
          >
            <div className="header-small__links pt-4 pb-5 d-flex flex-column align-items-center">
              {links.map((link, index) => {
                return (
                  <div
                    className="mt-3 header-small__link font-inter"
                    onClick={() =>
                      link.ref.current.scrollIntoView({
                        block: "start",
                        behavior: "smooth",
                      })
                    }
                    key={index}
                  >
                    {link.text}
                  </div>
                );
              })}
              <Select
                className="text-s mt-3"
                items={[
                  { text: "Москва", val: "moscow" },
                  { text: "Кемерово", val: "kemerovo" },
                ]}
              />
            </div>
          </div>
          <div className="header-small__background"></div>
        </div>
        <div
          className={`header-big background-light-grey col-12 d-none d-sm-flex flex-column flex-wrap flex-xl-row justify-content-center
     align-items-center ${burger ? "header-big_active" : ""}`}
        >
          <div className="d-flex align-items-center">
            <div
              className="mt-lg-0 header-big__logo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            ></div>
            <div
              onClick={() => setBurger(!burger)}
              className={
                "burger ml-5 d-flex d-xl-none " +
                (!burger ? "burger__opened" : "burger__closed")
              }
            >
              <div className="burger__string"></div>
              <div className="burger__string"></div>
              <div className="burger__string"></div>
            </div>
          </div>

          <div
            className={`header-big__content d-flex flex-column flex-xl-row ${
              burger
                ? "header-big__content_shown"
                : "header-big__content_hidden"
            }`}
          >
            <div
              className={
                "header-big__links mx-auto ml-xl-5 d-flex flex-column flex-lg-row mt-0 mt-lg-5 mt-xl-0 align-items-center"
              }
            >
              {links.map((link, index) => {
                return (
                  <div
                    className="ml-lg-4 mt-3 mt-lg-0 bold text-xxs header__link header-big__link"
                    onClick={() =>
                      link.ref.current.scrollIntoView({
                        block: "start",
                        behavior: "smooth",
                      })
                    }
                    key={index}
                  >
                    {link.text}
                  </div>
                );
              })}
            </div>
            <div className="d-flex mt-sm-5 mb-sm-5 mt-xl-0 mb-xl-0 mt-xl-0 mx-auto ml-xl-5 align-items-center">
              <Select
                className="text-s"
                items={[
                  { text: "Москва", val: "moscow" },
                  { text: "Кемерово", val: "kemerovo" },
                ]}
              />
              <div className="header__phone ml-5 d-flex text-s align-items-center justify-content-center">
                +7 (900) 555 55 55
              </div>
            </div>
          </div>
          <ConfirmCity />
        </div>
      </header>
    </>
  );
};
