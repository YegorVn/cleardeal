import "./index.css";
import { Bubble } from "../../components1/pieces";
import person from "../../assets/images/Global/person.png";
import speakLogo from "../../assets/images/speakLogo.png";

export const Index = () => {
  return (
    <div className="dialog">
      <Bubble
        className="bubble_left_big bubble_left bold text-s col-lg-10 pl-0 pr-0"
        text={
          "Пытаюсь продать квартиру, чтобы купить новую. Всё кажется таким запутанным, боюсь что-то упустить и потерять деньги. Агенты берут большие проценты, но говорят, что это не окончательная цена, могут быть дополнительные расходы."
        }
        animation={{ duration: 2, delay: 1 }}
        img={person}
        bodyClassName="dialog__bubble_left border-r-30 ml-3"
        visible={{ opacity: 1 }}
        hidden={{ opacity: 0 }}
      />

      <Bubble
        className="bubble_right_big bubble_right text-s ml-auto mt-5 col-lg-10 pl-0 pr-0"
        text={
          "Очень вас понимаем! Наша главная задача — дать вам ясность и превратить сделку с недвижимостью в понятный процесс, где вы заранее знаете цену, каждый следующий шаг и решаете свой вопрос без риска. "
        }
        animation={{ duration: 2, delay: 2 }}
        img={speakLogo}
        bodyClassName="dialog__bubble_right ml-auto border-r-30 mr-3"
        visible={{ opacity: 1 }}
        hidden={{ opacity: 0 }}
      />
    </div>
  );
};
