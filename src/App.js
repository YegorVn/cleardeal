// import { Dialog } from "./components/Dialog";
// import { HowWeWork } from "./components/HowWeWork";
// import { HowWeWork } from './parts/index'
// import { ServicesPrices } from "./components/ServicesPrices";
// import { Slider } from "./components/Slider";
// import { GetService } from "./components/GetService";
// import { Tickets } from "./components/Tickets";
// import { Disclosure } from "./components/Disclosure";
// import { Header } from "./components/Header";
import { useRef, useEffect, useState } from "react";
import {
  Background,
  Dialog,
  Disclosure,
  Footer,
  Header,
  HowWeWork,
  ServicesPrices,
  WeCoped,
  Tickets,
  Banner,
  GetService,
  StartWork,
  Modal,
} from "./parts";
import {Index as PhoneForm} from './components1/parts/PhoneForm' 

import "./stylesheet/App.css";

// import { PhoneForm } from "./components/PhoneForm";
import { Cookie } from "./components/Cookie";


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
      <Header links={links} />
      <Cookie />
      <Modal />
      <Background />
      <div className="app mx-auto">
        <div className="app__content ">
          <Banner />
          <PhoneForm className=""/>
          <Dialog />
          <h2 className="h-1" ref={benefits}>
            Как мы работаем?
          </h2>
          <HowWeWork content={hwwContent} chat={hwwChat} />
          <h2 className="h-2" ref={services}>
            Услуги и цены
          </h2>
          <ServicesPrices items={servicesPricesCards} />
          <h2 className="h-3" ref={comments}>
            Вот, с чем мы уже справились
          </h2>
          <WeCoped content={sliderContent} cards={sliderCards} />
          <h2 className="mb-5 h-4" ref={contancts}>
            Как получить услугу?
          </h2>
          <GetService />
          <h2 className="h-5">
            С вами работает <div className="team-stroke d-inline-block">команда</div>, а не один риелтор, который может заболеть,
            уйти в отпуск или не брать трубку
          </h2>
          <Tickets />
          <StartWork />
          <h2 className="h-6" ref={questions}>
            Остались вопросы?
          </h2>
          <Disclosure content={disclosureContent} />
          {/* <PhoneForm className="col-12 phone-form_main" />
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
          <Disclosure className="" content={disclosureContent} /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
