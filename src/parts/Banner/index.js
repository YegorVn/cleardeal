import "./index.css";

export const Index = ({ items }) => {
  return (
    <div className="banner">
      <div className="banner__title bolder text-center d-none d-lg-block">
        {items.title}
      </div>
      <div className="banner__title bolder text-center d-block d-lg-none">
        <div className="banner__highlight">{items.highlight}</div>
        {items.smallTitle}
      </div>
      <div className="banner__annotation text-s text-center">
        {items.annotation}
      </div>
    </div>
  );
};
