import "./App.css";
import logo from "./assets/images/logo.png";

const PhoneForm = () => {
  const PhoneInput = ({ className }) => {
    return <input className={"input input_phone " + className} />;
  };

  const Button = ({ text, className }) => {
    return <button className={"btn btn_contact " + className}>{text}</button>;
  };

  return <div className="phone-form d-flex"></div>;
};

function App() {
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
            <div className="ml-4 mr-4 text-m header__link">{link.text}</div>
          );
        })}
      </header>
      <h1 className="text-center mt-5 pt-5 font-monts">
        Сделки с недвижимостью<br></br> по фиксированной цене{" "}
      </h1>
      <div className="text-l text-center col-lg-8 mx-auto mt-5">
        Помогаем продать, купить квартиру и одобрить ипотеку<br></br> на ясных
        условиях: вы сразу видите цену и что в неё входит.
      </div>
    </div>
  );
}

export default App;
