import { useState, useRef } from "react";
import "./stylesheet/App.css";
import logo from "./assets/images/logo.png";
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

  return (
    <div className="App col-lg-8 mx-auto">
      <header className="d-flex align-items-center mt-5 header">
        <img className="mr-auto" src={logo} width={312}></img>
        {[
          { text: "Преимущества" },
          { text: "Услуги и цены" },
          { text: "Отзывы" },
          { text: "Контакты" },
          { text: "Вопросы" },
        ].map((link) => {
          return (
            <div
              className="ml-4 mr-4 text-m header__link font-inter"
              // onClick={() =>
              //   link.ref.current.scrollIntoView({
              //     block: "end",
              //     behavior: "smooth",
              //   })
              // }
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
      <h2 className="mt-5 mb-5 pt-5">Услуги и цены</h2>
      <ServicesPrices items={servicesPricesCards}/>
      <h2 className="mt-5 mb-5 pt-5">Вот, с чем мы уже справились</h2>
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
      <div className="footer d-flex flex-wrap mt-5 pb-5 pt-5">
        <div className="footer__logo col-lg-6">
          <img src={logoWhite} />
          <div className="footer__founder text-s">
            Проект Александра Колотий
          </div>
        </div>
        <div className="footer__contact col-lg-6 text-xl d-flex flex-column">
          <div className="footer__phone ml-auto">+7 (900) 555 55 55</div>
          <div className="footer__mail ml-auto">kolotii@gmail.com</div>
        </div>
        <div className="footer__socmedia col-lg-6"></div>
        <div className="footer__documents col-lg-5 d-flex justify-content-between ml-auto mt-5 pt-5">
          <Link to={"/"}>Оферта</Link>
          <Link to={"/"}>
            Пользовательское<br></br> соглашение
          </Link>
          <Link to={"/"}>
            Юридическое<br></br> лицо
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
