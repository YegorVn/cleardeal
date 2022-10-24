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
// import startWork from "./assets/images/startWork.png";
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
          className="parallax"
          containerStyles={{
            width: "100%",
            height: "1700px",
            position: "absolute",
            top: "0",
            overflow: "hidden",
            left: "0",
            zIndex: "1",
          }}
          resetOnLeave
          useWindowMouseEvents={true}
        >
          <MouseParallaxChild
            factorX={0.15}
            factorY={0.15}
            updateStyles={{
              position: "absolute",
              width: "800px",
              height: "800px",
              top: "20%",
              background:
                "radial-gradient(50% 50% at 50% 50%, #97cbf8 0%, rgba(217, 217, 217, 0) 100%)",
            }}
          />
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.25}
            updateStyles={{
              position: "absolute",
              width: "1400px",
              height: "1400px",
              top: "-15%",
              right: "-38%",
              background:
                "radial-gradient(50% 50% at 50% 50%, #577bfa 0%, rgba(217, 217, 217, 0) 100%)",
            }}
            inverted={true}
          />
        </MouseParallaxContainer>
        {/* /// */}

        <header className="d-flex flex-column flex-wrap flex-lg-row align-items-center mt-lg-5 pt-5 pt-lg-0 pb-4 px-3 px-lg-0 header">
          <div className="d-flex w-100 px-0 align-items-center d-block d-lg-none">
            <img className="mr-lg-auto mt-lg-0" src={logo} />
            <div
              onClick={() => setBurger(!burger)}
              className={
                "header__button burger ml-auto d-flex " +
                (!burger ? "burger__opened" : "burger__closed")
              }
            >
              <div className="burger__string"></div>
              <div className="burger__string"></div>
              <div className="burger__string"></div>
            </div>
          </div>
          <img className="mr-lg-auto mt-lg-0 d-none d-lg-block" src={logo} />
          <div
            className={
              "header__links d-flex mt-0 mt-lg-5 mt-xl-0 ml-xl-auto flex-column-reverse flex-lg-row align-items-center " +
              (burger ? "header__links_shown" : "header__links_closed")
            }
          >
            {links.map((link, index) => {
              return (
                <div
                  className="ml-lg-5 text-m header__link font-inter"
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
          <h2 className="h-1 pb-lg-5 pt-5 mb-5">Как мы работаем?</h2>
          <HowWeWork
            className="pb-5 col-12 col-md-9 col-lg-12 mx-auto px-0"
            content={hwwContent}
            chat={hwwChat}
          />
          <h2 className="h-2 mb-lg-5 pt-5 pb-5">Услуги и цены</h2>
          <ServicesPrices className="col-12 px-0" items={servicesPricesCards} />
          <h2 className="mb-5 pb-5 pt-5 h-3" ref={benefits}>
            Вот, с чем мы уже справились
          </h2>
          <Slider
            className="col-12"
            content={sliderContent}
            cards={sliderCards}
          />
          <h2 className="mb-5 pt-5 pb-5 h-4" ref={services}>
            Как получить услугу?
          </h2>
          <GetService className="col-12" />
          <h2 className="h-5 pt-5">
            С вами работает команда, а не один риелтор, который может заболеть,
            уйти в отпуск или не брать трубку
          </h2>
          <Tickets/>
          <div className="start-work d-flex flex-column flex-lg-row">
            <div className="start-work__text d-flex flex-column ml-lg-5 px-0 text-center text-lg-left px-lg-4 mt-lg-5">
              <div className="start-work__title text-xxl bolder mt-auto">
                Начнём работу?
              </div>
              <div className="start-work__annotation text-l mb-auto mt-3">
                Оставьте заявку, мы всё расскажем
              </div>
            </div>
            <img className="start-work__img ml-lg-auto mt-5 mt-lg-0 mr-lg-5 col-lg-5 col-12 px-0 pr-lg-2" src={startWork} />
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
