import "./index.css";

export const Index = ({ buttons, changeHandler, className, current }) => {
  return (
    <>
      <div
        className={`switch d-none d-md-flex flex-lg-row flex-column justify-content-between align-items-center ${className}`}
      >
        {buttons.map((btn) => {
          return (
            <button
              key={btn.val}
              onClick={changeHandler}
              value={btn.val}
              className={
                "switch__btn text-m mt-3 mt-lg-0 " +
                (current == btn.val && "switch__btn_active" || "switch__btn_inactive")
              }
            >
              <svg className="switch__svg">
                <defs>
                  <linearGradient
                    id="linear"
                    x1="50"
                    y1="50"
                    x2="800"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#577BFA" />
                    <stop offset="0.3" stopColor="#E5EBEE" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <rect className="switch__rect switch__rect_anim" rx="30"/>
              </svg>
              <svg className="switch__svg">
                <defs>
                  <linearGradient
                    id="linear"
                    x1="50"
                    y1="50"
                    x2="800"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#577BFA" />
                    <stop offset="0.3" stopColor="#E5EBEE" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <rect className="switch__rect switch__rect_bg" rx="30"/>
              </svg>
              {btn.text}
            </button>
          );
        })}
      </div>
      <div
        className={
          "switch-small d-flex justify-content-between align-items-center d-md-none " +
          className
        }
      >
        {buttons.map((btn, index) => {
          return (
            <button
              key={btn.val}
              onClick={changeHandler}
              value={btn.val}
              className={
                "switch-small__btn text-l mt-lg-0 d-flex align-items-center justify-content-center " +
                ((current == btn.val && "switch-small__btn_active") ||
                  "switch-small__btn_inactive")
              }
            >
              {(current == btn.val && btn.text) || index + 1}
            </button>
          );
        })}
      </div>
    </>
  );
};
