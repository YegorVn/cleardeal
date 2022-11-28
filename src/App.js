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
import { PhoneForm, Cookie } from "./components1/parts";
import teamStroke from "./assets/images/teamStroke.svg";

import "./stylesheet/App.css";
import { Context } from "./Context.js";

import {
  disclosureContent,
  hwwContent,
  dialogContent,
  hwwChat,
  sliderContent,
  sliderCards,
  servicesPricesCards,
  getServiceContent,
  bannerContent,
  ticketsContent,
} from "./Text";

import { Underline } from "./components1/pieces";

function App() {
  const [context, setContext] = useState({
    city: "moscow",
    modal: false,
    modalStage: "",
    leftPhone: false,
    askedAboutCity: false,
    phone: "",
  });
  const benefits = useRef();
  const services = useRef();
  const comments = useRef();
  const contancts = useRef();
  const questions = useRef();

  const links = [
    { text: "Преимущества", ref: benefits },
    { text: "Услуги и цены", ref: services },
    { text: "Отзывы", ref: comments },
    { text: "Вопросы", ref: questions },
    { text: "Контакты", ref: contancts },
  ];

  return (
    <Context.Provider value={[context, setContext]}>
      <Header links={links} />
      <Cookie />
      <Modal />
      <div className="app mx-auto">
        <Background />
        <Banner items={bannerContent} />
        <PhoneForm className="phone-form__main" />
        <Dialog items={dialogContent} />
        <h2 className="h-1" ref={benefits}>
          Как мы работаем?
        </h2>
        <HowWeWork content={hwwContent} chat={hwwChat} />
        <h2 className="h-2" ref={services}>
          Услуги и цены
        </h2>
        <ServicesPrices items={servicesPricesCards} />
        <h2 className="h-3" ref={comments}>
          Вот, с чем мы уже<br className="d-block d-lg-none"></br> справились
        </h2>
        <WeCoped content={sliderContent} cards={sliderCards} />
        <h2 className="h-4">
          Как получить<br className="d-block d-lg-none"></br> услугу?
        </h2>
        <GetService items={getServiceContent} />
        <h2 className="h-5">
          С вами работает&nbsp;<br className="d-block d-lg-none"></br>
          <Underline img={teamStroke}>команда</Underline>, а не один
          <br className="d-block d-lg-none"></br>
          <br className="d-none d-lg-block"></br> риелтор, который
          <br className="d-block d-lg-none"></br> может заболеть,
          <br className="d-block d-lg-none"></br>
          <br className="d-none d-lg-block"></br>
          уйти в отпуск или<br className="d-block d-lg-none"></br> не брать
          трубку
        </h2>
        <Tickets items={ticketsContent} />
        <StartWork />
        <h2 className="h-6" ref={questions}>
          Остались вопросы?
        </h2>
        <Disclosure items={disclosureContent} />
        <div style={{ width: "2px", height: "2px" }} ref={contancts}></div>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
