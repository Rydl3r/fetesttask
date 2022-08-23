import "../index.css";
import { useState } from "react";

function MainBlock(props: {
  background: string;
  shuffle: () => void;
}): JSX.Element {
  const [currentColor, setCurrentColor] = useState<string>("red");

  const autoPlay = (): void => {
    setInterval(() => {
      props.shuffle();
    }, 31200);
  };

  return (
    <div
      className="main"
      style={{
        background: `url(${props.background}) no-repeat`,
      }}
    >
      <button
        className="shuffleButton"
        style={{
          background: currentColor,
        }}
        onClick={() => {
          props.shuffle();
          setCurrentColor(currentColor === "red" ? "blue" : "red");
        }}
      >
        Shuffle Images
      </button>
      <button className="autoPlayButton" onClick={() => autoPlay()}>
        AutoPlay
      </button>
    </div>
  );
}

export default MainBlock;
