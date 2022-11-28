import "./index.css";
import vk from "../../assets/images/footer/vk.svg";
import wp from "../../assets/images/footer/wp.svg";
import tg from "../../assets/images/footer/tg.svg";
import logoWhite from "../../assets/images/footer/logoWhite.svg";
import { Link } from "react-router-dom";
export const Index = () => {
  return (
    <div className="footer d-flex flex-wrap mx-auto color-white flex-column">
      <div className="col-12 col-lg-12 d-flex p-0 align-items-center flex-column flex-lg-row">
        <img src={logoWhite} className="footer__logo" />
        <a
          className="footer__founder mt-3 d-block d-lg-none mt-lg-0 text-m ml-lg-auto ml-sm-0 color-white"
          href="https://getbootstrap.com/docs/5.0/layout/breakpoints/"
        >
          Проект Александра Колотий
        </a>
        <a
          className="footer__phone ml-lg-auto mt-5 mt-lg-0 text-center text-xxxl text-sm-left"
          href="tel:7-900-555-55-55"
        >
          +7 (900) 555 55 55
        </a>
      </div>
      <div className="footer__contact col-lg-12 align-items-center d-flex p-0 mt-4 mt-lg-3">
        <a
          className="footer__founder text-m ml-auto ml-sm-0 color-white d-none d-lg-block"
          href="https://getbootstrap.com/docs/5.0/layout/breakpoints/"
        >
          Проект Александра Колотий
        </a>
        <a className="footer__mail text-xxxl mr-auto ml-auto mr-lg-0">
          kolotii@gmail.com
        </a>
      </div>
      <div className="p-0 col-12 mt-5 mt-lg-5 align-items-center d-none d-lg-flex">
        <div className="d-flex ml-sm-3">
          <a href="https://www.instagram.com/">
            <img src={vk} width={35} height={35} />
          </a>
          <a href="https://t.me/a_kolotii" className="ml-5">
            <img src={tg} width={35} height={35} />
          </a>
          <a href="https://www.whatsapp.com/?lang=ru" className="ml-5">
            <img src={wp} width={35} height={35} />
          </a>
        </div>
        <div className="footer__documents text-xs mt-0 d-flex justify-content-between ml-lg-auto px-0">
          <Link className="p-0" to={"/"}>
            Согласие на обработку<br></br> персональных данных
          </Link>
          <Link className="p-0 ml-5" to={"/"}>
            Политика<br></br> конфиденциальности
          </Link>
        </div>
      </div>
      <div className="p-0 col-12 mt-4 mt-lg-5 align-items-center d-flex">
        <div className="footer__time text-m text-center text-lg-left">
          Работаем с 9:00 до 20:00 без выходных
        </div>
        <div className="mx-lg-auto text-xxxs d-none d-lg-block">2022</div>
        <div className="footer__contacts text-xxxs d-none d-lg-block">
          ИП Колотий Александр Александрович ИНН 7707083893
        </div>
      </div>
      <div className="footer__documents mt-4 text-xs mt-0 d-flex d-lg-none">
        <Link className="p-0" to={"/"}>
          Согласие на обработку персональных данных
        </Link>
        <Link className="p-0 ml-auto text-center" to={"/"}>
          Политика<br></br> конфиденциальности
        </Link>
      </div>
      <div className="footer__contacts text-xxxs mt-5 d-lg-none text-center">
          <div>ИП Колотий Александр Александрович</div> <div className="">ИНН 7707083893</div> 
          <div className="mt-3">2022</div>
        </div>
    </div>
  );
};
