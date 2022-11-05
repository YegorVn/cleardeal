import person from "../assets/images/person.png";
import speakLogo from "../assets/images/speakLogo.png";
import { Bubble } from "./pieces/Bubble";
import { useInView } from "react-intersection-observer";

export const Dialog = ({className}) => {
  
  return (
    <div className={"dialog " + className}>
      <Bubble
        className="bubble_left bold text-s col-lg-10 pl-0 pr-0 flex-row-reverse flex-md-row"
        text={
          "Пытаюсь продать квартиру, чтобы купить новую. Всё кажется таким запутанным, боюсь что-то упустить и потерять деньги. Агенты берут большие проценты, но говорят, что это не окончательная цена, могут быть дополнительные расходы."
        }
        animDuration={2}
        img={person}
        elClassName="dialog__bubble_left border-r-30 ml-3 background-white"
        visible={{opacity: 1}}
        hidden={{opacity: 0}}
      />
      
      <Bubble
        className="bubble_right text-s ml-auto mt-5 col-lg-10 pl-0 pr-0"
        text={
          "Очень вас понимаем! Наша главная задача — дать вам ясность и превратить сделку с недвижимостью в понятный процесс, где вы заранее знаете цену, каждый следующий шаг и решаете свой вопрос без риска. "
        }
        animDuration={2}
        img={speakLogo}
        elClassName="dialog__bubble_right ml-auto border-r-30 mr-3 background-blue color-white"
        visible={{opacity: 1}}
        hidden={{opacity: 0}}
      />
    </div>
  );
};
