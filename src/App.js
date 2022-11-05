import { useRef, useEffect, useState } from "react";
import "./stylesheet/App.css";
import logoWhite from "./assets/images/logoWhite.svg";
import { Dialog } from "./components/Dialog";
import { PhoneForm } from "./components/PhoneForm";
// import { HowWeWork } from "./components/HowWeWork";
import { HowWeWork } from './parts/index'
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
import { Header } from "./components/Header";
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
      <Header links={links}/>
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

        <div className="app__content px-5 px-sm-2">
          <div className="banner pl-0 ">
            <div className="banner__text pl-0 pr-0 d-flex text-left text-sm-center flex-column align-items-center text-xxxl bolder">
              Сделки с недвижимостью <div className="d-sm-block d-none">по фиксированной цене</div>
            </div>
            <div className="banner__annotation px-0 text-left text-sm-center col-12 col-lg-9 mx-auto mt-4 mb-5 mb-sm-5 mt-sm-4 pt-sm-3">
              Помогаем продать, купить квартиру и одобрить ипотеку<br className="d-none d-xl-block"></br> на
              ясных условиях: вы сразу видите цену и что в неё входит.
            </div>
          </div>
          <PhoneForm className="col-12 phone-form_main" />
          <Dialog className="col-12 px-0" />
          <h2 className="h-1" ref={benefits}>
            Как мы работаем?
          </h2>
          <HowWeWork
            className="col-12 col-md-9 col-lg-12 mx-auto px-0"
            content={hwwContent}
            chat={hwwChat}
          />
          <h2 className="h-2" ref={services}>
            Услуги и цены
          </h2>
          <ServicesPrices className="col-12 px-0" items={servicesPricesCards} />
          <h2 className="h-3" ref={comments}>
            Вот, с чем мы уже справились
          </h2>
          <Slider
            className="col-12"
            content={sliderContent}
            cards={sliderCards}
          />
          <h2 className="mb-5 h-4" ref={contancts}>
            Как получить услугу?
          </h2>
          <GetService className="col-12" />
          <h2 className="h-5">
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
          <h2 className="h-6" ref={questions}>
            Остались вопросы?
          </h2>
          <Disclosure className="" content={disclosureContent} />
        </div>
        <div className="footer d-flex flex-wrap px-5 col-lg-12 col-xl-12 mx-auto color-white">
          <div className="footer__logo col-10 col-lg-6 d-flex flex-column p-0">
            <img src={logoWhite} className="px-0"/>
            <a
              className="footer__founder mt-sm-3 text-s ml-auto ml-sm-3 color-white pb-2 "
              href="https://getbootstrap.com/docs/5.0/layout/breakpoints/"
            >
              Проект Александра Колотий
            </a>
          </div>
          <div className="footer__contact col-lg-6 text-xl d-flex flex-column p-0 mt-5 mt-lg-0">
            <div className="footer__phone ml-lg-auto">+7 (900) 555 55 55</div>
            <div className="footer__mail mt-3 mt-sm-0 ml-lg-auto">kolotii@gmail.com</div>
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
