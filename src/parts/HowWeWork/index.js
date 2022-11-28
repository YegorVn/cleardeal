import "./index.css";

import React, { useEffect, useState } from "react";
import { Index as Switch } from "./Switch";
import { Index as Chat } from "./Chat/index.js";
import { Index as Check } from "./Check/index.js";
import { Index as Roadmap } from "./RoadMap/index.js";

export const Index = ({ chat, content }) => {
  const [current, setCurrent] = useState(0);
  const [stop, setStop] = useState(false);
  const [idx, setIdx] = useState(0)

  // useEffect(() => {
  //   let timer1 = setInterval(() => {
  //     if (current + 1 >= content.length) setCurrent(0);
  //     else {
  //       setCurrent(current => current += 1);
  //     }
  //     console.log(current)
  //   }, 15000);
  //   return () => {
  //     clearInterval(timer1);
  //   };
  // }, [current]);

  const changeHandler = (e) => {
    setCurrent(+e.target.value);
    // setStop(true);
  };

  return (
    <div className="how-we-work ">
      <Switch
        buttons={[
          { text: "Человеческое общение", val: 0 },
          { text: "Честная цена", val: 1 },
          { text: "Ясная сделка", val: 2 },
        ]}
        changeHandler={changeHandler}
        current={current}
      />
      <div className="how-we-work__body d-flex flex-column flex-lg-row mt-4 mt-sm-5 pt-lg-5">
        <div className="mx-auto mx-lg-0 col-lg-6 col-xl-6 pt-0 pr-xl-4 px-0">
          <div className="hwwWidget background-grey border-r-20">
            {current === 0 && <Chat bubbles={chat}/>}
            {current === 1 && <Check />}
            {current === 2 && <Roadmap />}
          </div>
        </div>
        <div className="col-lg-6 col-xl-6 px-0 mt-5 mt-lg-0 ">
          <div className="col-lg-12 px-0">
            {content.map((block, index) => {
              return (
                <>
                  {
                    <div className="how-we-work__block" key={block.val}>
                      {index === current && (
                        <div className="text-xxxl bold  pr-sm-4 pr-xl-0 how-we-work__title">
                          {block.header}
                        </div>
                      )}
                      {index === current && (
                        <div className="text-m mt-4 mt-sm-5 text-left pl-0 pr-0 how-we-work__annotation">
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
