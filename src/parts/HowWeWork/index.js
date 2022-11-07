import "./index.css";

import React, { useEffect, useState } from "react";
// import { HwwVidget } from "./pieces/HwwVidget";
import { index as Switch } from "./Switch";
import { Index as Chat } from "./Chat/index.js";
import { Index as Check } from "./Check/index.js";
import { Index as Roadmap } from "./RoadMap/index.js";

export const Index = ({ chat, content }) => {
  const [current, setCurrent] = useState(content[0].val);
  const [stop, setStop] = useState(false);
  useEffect(() => {
    let i = 0;
    let timer1 = setInterval(() => {
      if (i + 1 > content.length) i = 0;
      else {
        console.log(i);
        setCurrent(content[i].val);
        i = i + 1;
      }
    }, 6000);
    if (stop) clearInterval(timer1);
    return () => {
      clearInterval(timer1);
    };
  }, [stop]);

  const changeHandler = (e) => {
    setCurrent(e.target.value);
    setStop(true);
  };

  return (
    <div className="how-we-work">
      <Switch
        buttons={[
          { text: "Человеческое общение", val: "communicate" },
          { text: "Честная цена", val: "communicate1" },
          { text: "Ясная сделка", val: "communicate2" },
        ]}
        changeHandler={changeHandler}
        current={current}
      />
      <div className="how-we-work__body d-flex flex-column flex-lg-row mt-4 mt-sm-5 pt-lg-5">
        <div className="mx-auto mx-lg-0 col-lg-5 col-xl-6 pt-0 pr-xl-4 pl-0">
          <div className="hwwWidget background-grey border-r-20">
            {current === "communicate" && <Chat bubbles={chat}/>}
            {current === "communicate1" && <Check />}
            {current === "communicate2" && <Roadmap />}
          </div>
        </div>
        <div className="col-lg-6 col-xl-7 px-0 mt-5 mt-lg-0 ">
          <div className="col-lg-12 px-0">
            {content.map((block) => {
              return (
                <>
                  {
                    <div className="how-we-work__block" key={block.val}>
                      {block.val === current && (
                        <div className="text-xl bold pr-sm-4 pr-xl-0 how-we-work__header">
                          {block.header}
                        </div>
                      )}
                      {block.val === current && (
                        <div className="text-l mt-4 mt-sm-5 text-left pl-0 pr-0 pr-sm-5">
                          {block.annotation}
                        </div>
                      )}
                    </div>
                  }
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
