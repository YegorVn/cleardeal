import { useState, useRef } from "react";
import "./stylesheet/App.css";
// import logo from "./assets/images/logo.png";
import logo from "./assets/images/logo.svg";
import logoWhite from "./assets/images/logoWhite.svg";
import { Dialog } from "./components/Dialog";
import { PhoneForm } from "./components/PhoneForm";
import { HowWeWork } from "./components/HowWeWork";
import { ServicesPrices } from "./components/ServicesPrices";
import { Slider } from "./components/Slider";
import { GetService } from "./components/GetService";
import { Tickets } from "./components/Tickets";
import { Disclosure } from "./components/Disclosure";
import { Link } from "react-router-dom";

function App() {
  const servicesPricesCards = [
    {
      header: "Юридическое сопровождение",
      text: "Найдём покупателя и проведём безопасную сделку. ",
      price: "19 900 ₽",
      annotation:
        "Займёмся рекламой квартиры и договоримся о просмотрах. Когда покупатель будет найден, проверим его надёжность, подготовим документы для сделки и проведём безопасный расчёт.",
    },
    {
      header: "Продажа квартир",
      text: "Изучим вашу кред-итную историю, подберём выгодную ставку. ",
      price: "19 900 ₽",
      annotation:
        "Займёмся рекламой квартиры и договоримся о просмотрах. Когда покупатель будет найден, проверим его надёжность, подготовим документы для сделки и проведём безопасный расчёт.",
    },
    {
      header: "Одобрение ипотеки",
      text: "Подберём выгодную ставку и получим одобрение",
      price: "19 900 ₽",
      annotation:
        "Займёмся рекламой квартиры и договоримся о просмотрах. Когда покупатель будет найден, проверим его надёжность, подготовим документы для сделки и проведём безопасный расчёт.",
    },
  ];

  const kek = useRef();

  return (
    <>
      <div className="App mx-auto">
        <div className="background-1"></div>
        <div className="background-2"></div>
        <div className="background-3"></div>
        <div className="background-4"></div>
        <div className="background-5"></div>
        <header className="d-flex align-items-center mt-5 header">
          <img className="mr-auto" src={logo} />
          {[
            { text: "Преимущества", ref: kek },
            { text: "Услуги и цены" },
            { text: "Отзывы" },
            { text: "Контакты" },
            { text: "Вопросы" },
          ].map((link) => {
            return (
              <div
                className="ml-4 mr-4 text-m header__link font-inter"
                onClick={() =>
                  link.ref.current.scrollIntoView({
                    block: "start",
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
          Сделки с недвижимостью<br></br> по фиксированной цене
        </h1>
        <div className="text-l text-center col-lg-8 mx-auto mt-5 pb-5">
          Помогаем продать, купить квартиру и одобрить ипотеку<br></br> на ясных
          условиях: вы сразу видите цену и что в неё входит.
        </div>
        <PhoneForm />
        <Dialog className="mt-5" />
        <h2 className="mt-5 pt-5">Как мы работаем?</h2>
        <HowWeWork className="" />
        <ServicesPrices items={servicesPricesCards} />
        <h2 className="mt-5 mb-5 pt-5" ref={kek}>
          Вот, с чем мы уже справились
        </h2>
        <Slider />
        <h2 className="mt-5 mb-5 pt-5">Как получить услугу?</h2>
        <GetService />
        <h2 className="mt-5 mb-5 pt-5 d-flex flex-column">
          <span>С вами работает команда, а не один</span>
          <span>риелтор, который может заболеть,</span>
          <span>не брать трубку, уйти в отпуск или</span>
          <span>просто не подходит вам по</span>
          <span>характеру.</span>
        </h2>
        <Tickets />
        <PhoneForm className="mt-5" />
        <h2 className="mt-5 mb-5 pt-5">Остались вопросы?</h2>
        <Disclosure />
        <div className="footer d-flex flex-wrap col-lg-12 col-xl-10 mx-auto">
          <div className="footer__logo col-lg-6 d-flex flex-column">
            <img src={logoWhite} />
            <a className="footer__founder mt-3 text-s ml-3 color-white pb-2 " href="https://getbootstrap.com/docs/5.0/layout/breakpoints/">
              Проект Александра Колотий
            </a>
          </div>
          <div className="footer__contact col-lg-6 text-xl d-flex flex-column">
            <div className="footer__phone ml-auto">+7 (900) 555 55 55</div>
            <div className="footer__mail ml-auto">kolotii@gmail.com</div>
          </div>
          <div className="footer__socmedia col-lg-6"></div>
          <div className="footer__documents col-lg-6 d-flex justify-content-between mt-5 px-0 pt-5">
            <Link className="col-2 p-0" to={"/"}>Оферта</Link>
            <Link className="col-4 p-0" to={"/"}>
              Пользовательское<br></br> соглашение
            </Link>
            <Link className="col-4 p-0" to={"/"}>
              Юридическое<br></br> лицо
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
