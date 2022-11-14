import { useState } from "react";
import { Button } from "../../pieces";
import "./index.css";
export const Index = () => {
  const [shown, setShown] = useState(true);
  return (
    <div
      className={`cookie col-12 position-fixed px-5 px-lg-5 pt-5 pb-5 pt-lg-4 pb-lg-4 flex-column flex-lg-row align-items-center ${
        shown ? "d-flex" : "d-none"
      }`}
    >
      <div className="cookie__text text-m col-12 col-lg-6 px-0">
        Мы используем файлы cookie и аналогичные технологии, чтобы делать сайт
        удобнее для вас
      </div>
      <div className="cookie__btns mt-5 mt-lg-0 ml-lg-auto d-flex align-items-center">
        <a className="cookie__learn-more text-m">Узнать подробнее</a>
        <Button
          className="btn ml-5 border-r-50 px-5 text-m"
          variant="white"
          onClick={() => setShown(false)}
        >
          Ясно
        </Button>
      </div>
    </div>
  );
};
