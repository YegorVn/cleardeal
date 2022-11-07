import { useState } from "react";
export const Cookie = () => {
  const [shown, setShown] = useState(true);
  return (
    <div
      className={`cookie col-12 position-fixed px-5 px-lg-5 pt-3 pb-3 flex-column flex-lg-row align-items-center ${
        shown ? "d-flex" : "d-none"
      }`}
    >
      <div className="cookie__text text-m col-12 col-lg-6 px-0">
        Мы используем файлы cookie и аналогичные технологии, чтобы делать сайт
        удобнее для вас
      </div>
      <button
        className="btn mt-4 mt-lg-0 ml-auto border-r-50 px-5 text-m"
        onClick={() => setShown(false)}
      >
        Ясно
      </button>
    </div>
  );
};
