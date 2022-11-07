import "./index.css";
import vk from "../../assets/images/footer/vk.svg";
import wp from "../../assets/images/footer/wp.svg";
import tg from "../../assets/images/footer/tg.svg";
import logoWhite from "../../assets/images/footer/logoWhite.svg";
import { Link } from "react-router-dom";
export const Index = () => {
  return (
    <>
      <div className="footer d-flex flex-wrap px-5 col-lg-12 col-xl-12 mx-auto color-white">
        <div className="footer__logo col-10 col-lg-6 d-flex flex-column p-0">
          <img src={logoWhite} className="px-0" />
          <a
            className="footer__founder mt-sm-3 text-s ml-auto ml-sm-3 color-white pb-2 "
            href="https://getbootstrap.com/docs/5.0/layout/breakpoints/"
          >
            Проект Александра Колотий
          </a>
        </div>
        <div className="footer__contact col-lg-6 text-xl d-flex flex-column p-0 mt-5 mt-lg-0">
          <div className="footer__phone ml-lg-auto">+7 (900) 555 55 55</div>
          <div className="footer__mail mt-3 mt-sm-0 ml-lg-auto">
            kolotii@gmail.com
          </div>
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
    </>
  );
};
