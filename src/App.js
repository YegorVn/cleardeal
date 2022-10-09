import { useState, useRef } from "react";
import "./stylesheet/App.css";
import logo from "./assets/images/logo.png";
import { Dialog } from "./components/Dialog";
import { PhoneForm } from "./components/PhoneForm";
import { HowWeWork } from "./components/HowWeWork";
import { ServicesPrices } from "./components/ServicesPrices";
import { Slider } from "./components/Slider";
import { GetService } from "./components/GetService";

function App() {
  const kek = useRef(null);
  return (
    <div className="App col-lg-8 mx-auto">
      <header className="d-flex align-items-center mt-5 header">
        <img className="mr-auto" src={logo} width={312}></img>
        {[
          { text: "Преимущества", ref: kek },
          { text: "Услуги и цены", ref: kek },
          { text: "Отзывы", ref: kek },
          { text: "Контакты", ref: kek },
          { text: "Вопросы", ref: kek },
        ].map((link) => {
          return (
            <div
              className="ml-4 mr-4 text-m header__link"
              onClick={() =>
                link.ref.current.scrollIntoView({
                  block: "end",
                  behavior: "smooth",
                })
              }
            >
              {link.text}
            </div>
          );
        })}
      </header>
      <h1 className="mt-5 pt-5">
        Сделки с недвижимостью<br></br> по фиксированной цене{" "}
      </h1>
      <div className="text-l text-center col-lg-8 mx-auto mt-5 pb-5">
        Помогаем продать, купить квартиру и одобрить ипотеку<br></br> на ясных
        условиях: вы сразу видите цену и что в неё входит.
      </div>
      <PhoneForm />
      <Dialog className="mt-5" />
      <h2 className="mt-5 pt-5" ref={kek}>
        Как мы работаем?
      </h2>
      <HowWeWork className="" />
      <h2 className="mt-5 pt-5">
        Услуги и цены
      </h2>
      <ServicesPrices />
      <h2 className="mt-5 pt-5">
        Вот, с чем мы уже справились
      </h2>
      <Slider />
      <h2 className="mt-5 pt-5">
      Как получить услугу?
      </h2>
      <GetService />
    </div>
  );
}

export default App;
