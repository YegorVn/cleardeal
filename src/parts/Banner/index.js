import "./index.css";

export const Index = () => {
  return (
    <div className="banner">
      <div className="banner__text pl-0 pr-0 d-flex flex-column col-12 align-items-center text-xxxl bolder">
        {/* Сделки
        <div className="banner__highlight d-sm-none d-inline-block">
          <div>Фиксированная цена</div>
        </div>
        <br className="d-sm-none"></br> с недвижимостью
        <div className="d-sm-block d-none">по фиксированной цене</div> */}

        <div className="d-lg-block d-none">
          <div className="d-lg-flex d-none flex-nowrap">
            <div>Поможем&nbsp;</div>
            <div>продать&nbsp;</div>
            <div>или&nbsp;</div>
            <div>купить&nbsp;</div>
            <div>квартиру.</div>
          </div>
          <div className="d-flex flex-nowrap justify-content-center">
            <div>Комиссия&nbsp;</div>
            <div>—&nbsp;</div>
            <div>фиксированная.&nbsp;</div>
          </div>
        </div>
        <div className="d-flex flex-column  d-lg-none text-center">
          <div>Поможем продать</div>{" "}
          <div className="d-flex flex-nowrap">
            <div>или&nbsp;</div>
            <div>купить&nbsp;</div>
            <div>квартиру.</div>
          </div>
          <div>Комиссия —</div> <div>фиксированная.</div>
        </div>
      </div>
      <div className="banner__annotation px-0 text-center text-sm-center col-12 col-lg-9 mx-auto mt-4 mb-5 mb-sm-5 mt-sm-4 pt-sm-3">
        Помогаем продать, купить квартиру и одобрить ипотеку
        <br className="d-none d-xl-block"></br>на&nbsp;
        <div className="banner__stroke">ясных условиях</div>: вы сразу видите
        цену и что в неё входит.
      </div>
    </div>
  );
};
