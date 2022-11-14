import "./index.css";
import sign from "../../../assets/images/roadmap/sign.png";
import plainLogo from "../../../assets/images/plainLogo.png";
export const Index = ({ className }) => {
  return (
    <div className="roadmap">
      <div className="roadmap__list background-white px-4 d-flex flex-column ">
        {Array.from({ length: 4 }, (_, i) => i + 1).map((str) => {
          return <div className="roadmap__stroke mt-3" key={str}></div>;
        })}
        <div className="roadmap__stroke w-50 mt-3"></div>
        <div className="d-flex roadmap__signs text-xxs mt-auto mb-auto">
          <div className="roadmap__sign">
            <div className="roadmap__name">Александр Колотий</div>
          </div>
          <div className="roadmap__sign ml-auto ">
            <img className="mt-2" src={sign} />
          </div>
        </div>
      </div>
      <div className="roadmap__main background-white p-4 d-flex flex-column">
        <div className="roadmap__header d-flex align-items-center">
          <img src={plainLogo} />
          <div className="text-xs roadmap__title">Договор</div>
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
