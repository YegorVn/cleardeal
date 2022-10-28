import { useRef, useEffect, useState } from "react";
import "./stylesheet/App.css";
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
import { Modal } from "./components/Modal";
import { Link } from "react-router-dom";
import vk from "./assets/icons/vk.svg";
import wp from "./assets/icons/wp.svg";
import tg from "./assets/icons/tg.svg";
import startWork from "./assets/images/startWork.svg";
import phone from "./assets/images/phone.svg";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import {
  disclosureContent,
  hwwContent,
  hwwChat,
  sliderContent,
  sliderCards,
  servicesPricesCards,
} from "./Text";
function App() {
  const benefits = useRef();
  const services = useRef();
  const comments = useRef();
  const contancts = useRef();
  const questions = useRef();

  const [burger, setBurger] = useState(false);
  const links = [
    { text: "Преимущества", ref: benefits },
    { text: "Услуги и цены", ref: services },
    { text: "Отзывы", ref: comments },
    { text: "Контакты", ref: contancts },
    { text: "Вопросы", ref: questions },
  ];

  return (
    <>
      <div className="app mx-auto">
        {/* ///триггерится на покидание страницы */}
        <Modal />
        {/* /// */}

        {/* ///двигающийся фон */}
        <MouseParallaxContainer
          className="background"
          containerStyles={{
            width: "100%",
            position: "absolute",
            top: "0",
            overflow: "hidden",
            left: "0",
            zIndex: "-1",
          }}
          resetOnLeave
          useWindowMouseEvents={true}
        >
          <MouseParallaxChild
            className="gradient-1"
            factorX={0.01}
            factorY={0.01}
            updateStyles={{
              position: "absolute",
              background:
                "radial-gradient(50% 50% at 50% 50%, #97cbf8 0%, rgba(217, 217, 217, 0) 100%)",
            }}
          />
          <MouseParallaxChild
            className="gradient-2"
            factorX={0.01}
            factorY={0.01}
            updateStyles={{
              position: "absolute",
              background:
                "radial-gradient(50% 50% at 50% 50%, #577bfa 0%, rgba(217, 217, 217, 0) 100%)",
            }}
            inverted={true}
          />
          <MouseParallaxChild
            className="gradient-3"
            factorX={0.05}
            factorY={0.01}
            updateStyles={{
              position: "absolute",
              background:
                "radial-gradient(50% 50% at 50% 50%, #a3cff4 0%, rgba(217, 217, 217, 0) 100%)",
            }}
          />
          <MouseParallaxChild
            className="gradient-4"
            factorX={0.05}
            factorY={0.01}
            updateStyles={{
              position: "absolute",
              background:
                "radial-gradient(50% 50% at 50% 50%,#577bfa 0%,rgba(217, 217, 217, 0) 100%)",
            }}
          />
          <MouseParallaxChild
            className="gradient-5"
            factorX={0.03}
            factorY={0.01}
            updateStyles={{
              position: "absolute",
              background:
                "radial-gradient(50% 50% at 50% 50%,#577bfa 0%,rgba(217, 217, 217, 0) 87.5%)",
            }}
          />
          <MouseParallaxChild
            className="gradient-6"
            factorX={0.04}
            factorY={0.01}
            updateStyles={{
              position: "absolute",
              background:
                "radial-gradient(50% 50% at 50% 50%, #577BFA 0%, rgba(217, 217, 217, 0) 100%)",
            }}
          />
          <MouseParallaxChild
            className="gradient-7"
            factorX={0.01}
            factorY={0.01}
            updateStyles={{
              position: "absolute",
              background:
                "radial-gradient(50% 50% at 37.3% 50%, #577BFA 0%, rgba(217, 217, 217, 0) 76.04%)",
            }}
          />
          <MouseParallaxChild
            className="gradient-8"
            factorX={0.01}
            factorY={0.01}
            updateStyles={{
              position: "absolute",
              background:
                "radial-gradient(50% 50% at 50% 50%, #577BFA 0%, rgba(217, 217, 217, 0) 87.5%)",
            }}
          />
          <MouseParallaxChild
            className="gradient-9"
            factorX={0.01}
            factorY={0.01}
            updateStyles={{
              position: "absolute",
              background:
                "radial-gradient(50% 50% at 50% 50%, #A3CFF4 0%, rgba(217, 217, 217, 0) 100%)",
            }}
          />
        </MouseParallaxContainer>
        {/* /// */}

        <header className="header">
          <div className="header-small align-items-center pt-5 background-white d-sm-none">
            <div className="d-flex px-5">
              <img className="col-8 col-sm-5 px-0" src={logo} />
              <div className="header__phone ml-auto"></div>
            </div>
            <div className="header-small__overflow">
              <div className="header-small__links pt-4 pb-3 d-flex align-items-center px-5">
                {links.map((link, index) => {
                  return (
                    <div
                      className="ml-5 text-m header-small__link font-inter"
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
            </div>
          </div>
          <div className="header-big d-none d-sm-flex flex-column flex-wrap flex-lg-row align-items-center mt-5 pt-5 pt-lg-0 pb-4 px-lg-0">
            <img className="mr-lg-auto mt-lg-0 d-block" src={logo} />
            <div
              className={
                "header-big__links d-flex flex-column flex-lg-row mt-0 mt-lg-5 mt-xl-0 ml-xl-auto align-items-center"
              }
            >
              {links.map((link, index) => {
                return (
                  <div
                    className="ml-lg-5 mt-3 mt-lg-0 text-m header__link font-inter"
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
          </div>
        </header>

        <div className="app__content px-3">
          <div className="banner pl-0 mt-5 pt-5">
            <div className="banner__text pl-0 pr-0 d-flex text-center flex-column align-items-center text-xxxl bolder">
              Сделки с недвижимостью по фиксированной цене
            </div>
            <div className="banner__annotation text-l text-center col-12 col-lg-9 mx-auto mt-4 pt-3 pb-5">
              Помогаем продать, купить квартиру и одобрить ипотеку<br></br> на
              ясных условиях: вы сразу видите цену и что в неё входит.
            </div>
          </div>

          <PhoneForm className="col-12 phone-form_main" />
          <Dialog className="col-12 px-0" />
          <h2 className="h-1 pb-lg-5 pt-5 mb-5" ref={benefits}>
            Как мы работаем?
          </h2>
          <HowWeWork
            className="pb-5 col-12 col-md-9 col-lg-12 mx-auto px-0"
            content={hwwContent}
            chat={hwwChat}
          />
          <h2 className="h-2 mb-lg-5 pt-5 pb-5" ref={services}>
            Услуги и цены
          </h2>
          <ServicesPrices className="col-12 px-0" items={servicesPricesCards} />
          <h2 className="mb-5 pb-5 pt-5 h-3" ref={comments}>
            Вот, с чем мы уже справились
          </h2>
          <Slider
            className="col-12"
            content={sliderContent}
            cards={sliderCards}
          />
          <h2 className="mb-5 pt-5 pb-5 h-4" ref={contancts}>
            Как получить услугу?
          </h2>
          <GetService className="col-12" />
          <h2 className="h-5 pt-5">
            С вами работает команда, а не один риелтор, который может заболеть,
            уйти в отпуск или не брать трубку
          </h2>
          <Tickets />
          <div className="start-work d-flex flex-column flex-lg-row">
            <div className="start-work__text d-flex flex-column ml-lg-5 px-0 text-center text-lg-left px-lg-4 mt-lg-5">
              <div className="start-work__title text-xxl bolder mt-auto">
                Начнём работу?
              </div>
              <div className="start-work__annotation text-l mb-auto mt-3">
                Оставьте заявку, мы всё расскажем
              </div>
            </div>
            <img
              className="start-work__img ml-lg-auto mt-5 mt-lg-0 mr-lg-5 col-lg-5 col-12 px-0 pr-lg-2"
              src={startWork}
            />
          </div>
          <PhoneForm />
          <h2 className="mb-5 pb-5 h-6 pt-5" ref={questions}>
            Остались вопросы?
          </h2>
          <Disclosure className="" content={disclosureContent} />
        </div>
        <div className="footer d-flex flex-wrap col-lg-12 col-xl-10 mx-auto color-white">
          <div className="footer__logo col-lg-6 d-flex flex-column p-0">
            <img src={logoWhite} />
            <a
              className="footer__founder mt-3 text-s ml-3 color-white pb-2 "
              href="https://getbootstrap.com/docs/5.0/layout/breakpoints/"
            >
              Проект Александра Колотий
            </a>
          </div>
          <div className="footer__contact col-lg-6 text-xl d-flex flex-column p-0 mt-5 mt-lg-0">
            <div className="footer__phone ml-lg-auto">+7 (900) 555 55 55</div>
            <div className="footer__mail ml-lg-auto">kolotii@gmail.com</div>
          </div>
          <div className="footer__socmedia col-lg-6 p-0 mt-5 mt-lg-0 align-items-end d-flex">
            <a href="https://www.instagram.com/">
              <img src={vk} width={35} height={35} />
            </a>
            <a href="https://web.telegram.org/z/">
              <img className="ml-5" src={tg} width={35} height={35} />
            </a>
            <a href="https://www.whatsapp.com/?lang=ru">
              <img className="ml-5" src={wp} width={35} height={35} />
            </a>
          </div>
          <div className="footer__documents col-lg-6 d-flex flex-column flex-md-row justify-content-lg-between mt-5 px-0 pt-lg-5">
            <Link className="col-md-2 p-0" to={"/"}>
              Оферта
            </Link>
            <Link className="col-md-4 mt-3 mt-md-0 p-0" to={"/"}>
              Пользовательское<br></br> соглашение
            </Link>
            <Link className="col-md-4 mt-3 mt-md-0 p-0" to={"/"}>
              Юридическое<br></br> лицо
            </Link>
          </div>
        </div>
        <div className="footer-background">
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
