import "./index.css";

export const Index = ({ state, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={
        "burger ml-auto d-flex " +
        (!state ? "burger__opened" : "burger__closed")
      }
    >
      <div className="burger__string"></div>
      <div className="burger__string"></div>
      <div className="burger__string"></div>
    </div>
  );
};
