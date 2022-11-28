import "./index.css";
import startWork from "../../assets/images/startWork/startWork.svg";
// import {Index as PhoneForm} from '../../components1/parts/PhoneForm' 

export const Index = () => {
  return (
    <>
      <div className="start-work d-flex flex-column flex-lg-row">
        <div className="start-work__text d-flex flex-column ml-lg-5 px-0 text-center text-lg-left px-lg-4 mt-lg-5">
          <div className="start-work__title bolder mt-auto">
            Начнём работу?
          </div>
          <div className="start-work__annotation text-m mb-auto mt-3">
            Оставьте заявку, мы всё расскажем
          </div>
        </div>
        <img
          className="start-work__img ml-lg-auto mt-5 mt-lg-0 mr-lg-5 col-lg-5 col-12 px-0 pr-lg-2"
          src={startWork}
        />
      </div>
      {/* <PhoneForm /> */}
    </>
  );
};
