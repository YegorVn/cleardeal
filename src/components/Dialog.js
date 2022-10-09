import person from "../assets/images/person.png";
import speakLogo from "../assets/images/speakLogo.png";
import { Bubble } from "./pieces/Bubble";

export const Dialog = () => {
  return (
    <div className="dialog">
      <Bubble
        text={
          "Пытаюсь продать квартиру, чтобы купить новую. Всё кажется таким запутанным, боюсь что-то упустить и потерять деньги. Агенты берут большие проценты, но говорят, что это не окончательная цена, могут быть дополнительные расходы."
        }
        img={person}
      />
      <Bubble
        text={
          "Очень вас понимаем! Наша главная задача — дать вам ясность и превратить сделку с недвижимостью в понятный процесс, где вы заранее знаете цену, каждый следующий шаг и решаете свой вопрос без риска. "
        }
        img={speakLogo}
      />
    </div>
  );
};
