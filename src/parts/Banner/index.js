import "./index.css";

export const Index = () => {
  return (
    <div className="banner pl-0 ">
      <div className="banner__text pl-0 pr-0 text-left text-sm-center  align-items-center text-xxxl bolder">
        Сделки{" "}
        <div className="banner__highlight d-sm-none d-inline-block">
          <div>Фиксированная цена</div>
        </div>
        <br className="d-sm-none"></br> с недвижимостью
        <div className="d-sm-block d-none">по фиксированной цене</div>
      </div>
      <div className="banner__annotation px-0 text-left text-sm-center col-12 col-lg-9 mx-auto mt-4 mb-5 mb-sm-5 mt-sm-4 pt-sm-3">
        Помогаем продать, купить квартиру и одобрить ипотеку
        <br className="d-none d-xl-block"></br>на&nbsp;
        <div className="banner__stroke">ясных условиях</div>: вы сразу видите
        цену и что в неё входит.
      </div>
    </div>
  );
};
