import "./index.css";
import sign from "../../../assets/images/roadmap/sign.svg";
import plainLogo from "../../../assets/images/plainLogo.png";
export const Index = ({ className, items }) => {
  return (
    <div className="roadmap">
      <div className="roadmap__list background-white px-4 d-flex flex-column ">
        {/* {Array.from({ length: 4 }, (_, i) => i + 1).map((str) => {
          return <div className="roadmap__stroke mt-3" key={str}></div>;
        })} */}

        <div className="roadmap__annotation mt-5 text-xxxs d-lg-block d-none">
          Договор вступает в силу<br></br> с момента его подписания<br></br> и
          действует до полного<br></br>
          исполнения сторонами<br></br> своих обязательств.
        </div>
        <div className="roadmap__strokes d-block d-lg-none">
          <div className="roadmap__stroke mt-2"></div>
          <div className="roadmap__stroke mt-2"></div>
        </div>
        <div className="d-flex roadmap__signs text-xxs mt-auto mb-4">
          <div className="">
            <div className="roadmap__name">
            «ИП Колотий»
            </div>
          </div>
          
          <img className="roadmap__sign ml-auto" src={sign} />
        </div>
      </div>
      <div className="roadmap__main background-white p-4 d-flex flex-column">
        <div className="roadmap__header d-flex align-items-center">
          <img src={plainLogo} className="roadmap__logo" />
          <div className="text-xs roadmap__title ml-2">Договор</div>
        </div>
        <div className="roadmap__steps mt-auto">
          {[
            { text: "Уточнили вашу ситуацию" },
            { text: "Выбрали ипотечные" },
            { text: "Согласовали подходящие" },
            { text: "Уточнили вашу ситуацию" },
            { text: "Выбрали ипотечные" },
          ].map((el, index) => {
            return (
              <>
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                        .roadmap__circle_${index}::after {
                            animation-delay: ${index + 2 + "s"};
                        }
                        .roadmap__circle_${index}::before {
                            animation-delay: ${index + 2 + "s"};
                        }
                        .roadmap__step_${index}::after {
                            animation-delay: ${index + 2 + "s"};
                        }
                        .roadmap__text_${index} {
                            animation-delay: ${index + "s"};
                        }
                        .roadmap__text_${index}::before {
                            animation-delay: ${index + "s"};
                        }
                        .roadmap__text_${index}::after {
                            animation-delay: ${index + 2 + "s"};
                            content: ${"'" + el.text + "'"};
                        }
                        `,
                  }}
                ></style>
                <div
                  className={
                    "d-flex align-items-center roadmap__step roadmap__step_" +
                    index
                  }
                >
                  <div
                    className={"roadmap__circle roadmap__circle_" + index}
                  ></div>
                  <div
                    className={"text-xs roadmap__text roadmap__text_" + index}
                  ></div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
