import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import "./index.css";

export const Index = () => {
  return (
    <MouseParallaxContainer
      className="background"
      resetOnLeave
      useWindowMouseEvents={true}
    >
      <MouseParallaxChild
        className="gradient-1"
        factorX={0.01}
        factorY={0.01}
        updateStyles={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #97cbf8 0%, rgba(217, 217, 217, 0) 100%)",
        }}
      />
      <MouseParallaxChild
        className="gradient-2"
        factorX={0.01}
        factorY={0.01}
        updateStyles={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #577bfa 0%, rgba(217, 217, 217, 0) 100%)",
        }}
        inverted={true}
      />
      <MouseParallaxChild
        className="gradient-3"
        factorX={0.05}
        factorY={0.01}
        updateStyles={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #a3cff4 0%, rgba(217, 217, 217, 0) 100%)",
        }}
      />
      <MouseParallaxChild
        className="gradient-4"
        factorX={0.05}
        factorY={0.01}
        updateStyles={{
          background:
            "radial-gradient(50% 50% at 50% 50%,#577bfa 0%,rgba(217, 217, 217, 0) 100%)",
        }}
      />
      <MouseParallaxChild
        className="gradient-5"
        factorX={0.03}
        factorY={0.01}
        updateStyles={{
          background:
            "radial-gradient(50% 50% at 50% 50%,#577bfa 0%,rgba(217, 217, 217, 0) 87.5%)",
        }}
      />
      <MouseParallaxChild
        className="gradient-6"
        factorX={0.04}
        factorY={0.01}
        updateStyles={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #577BFA 0%, rgba(217, 217, 217, 0) 100%)",
        }}
      />
      <MouseParallaxChild
        className="gradient-7"
        factorX={0.01}
        factorY={0.01}
        updateStyles={{
          background:
            "radial-gradient(50% 50% at 37.3% 50%, #577BFA 0%, rgba(217, 217, 217, 0) 76.04%)",
        }}
      />
      <MouseParallaxChild
        className="gradient-8"
        factorX={0.01}
        factorY={0.01}
        updateStyles={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #577BFA 0%, rgba(217, 217, 217, 0) 87.5%)",
        }}
      />
      <MouseParallaxChild
        className="gradient-9"
        factorX={0.01}
        factorY={0.01}
        updateStyles={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #A3CFF4 0%, rgba(217, 217, 217, 0) 100%)",
        }}
      />
    </MouseParallaxContainer>
  );
};
