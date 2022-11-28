import "./index.css";
import { Bubble } from "../../components1/pieces";
import person from "../../assets/images/Global/person.png";
import speakLogo from "../../assets/images/speakLogo.png";

export const Index = ({ items }) => {
  return (
    <div className="dialog">
      {items.map((bubble, index) => {
        return (
          <Bubble
            className={`bold text-xs pl-0 pr-0 ${
              (bubble.val === "left" && "bubble_left_big bubble_left") ||
              (bubble.val === "right" &&
                "bubble_right_big bubble_right justify-content-end mt-5")
            }`}
            text={bubble.text}
            img={
              (bubble.val === "left" && person) ||
              (bubble.val === "right" && speakLogo)
            }
            bodyClassName={`dialog__bubble_left border-r-30 ${
              (bubble.val === "left" && "dialog__bubble_left border-r-30") ||
              (bubble.val === "right" && "dialog__bubble_right border-r-30 ")
            }`}
            writedAnimation={{
              duration: 0.5,
              visible: { transform: "translateX(0%)", opacity: 1 },
              hidden: {
                transform:
                  bubble.val === "left"
                    ? "translateX(-5%)"
                    : "translateX(5%)",
                opacity: 0
              },
            }}
          />
        );
      })}
    </div>
  );
};
