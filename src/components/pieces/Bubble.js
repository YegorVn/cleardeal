export const Bubble = ({ text, className, img }) => {
  return (
    <div className={"bubble d-flex col-10 mt-5 text-s " + className}>
      <img className="bubble__img mt-auto" src={img} />
      <div className="bubble__body px-5 pt-4 pb-4">{text}</div>
    </div>
  );
};
