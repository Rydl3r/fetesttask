import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import MainBlock from "./components/MainBlock";

import "./index.css";

import Cats from "./assets/img/cats.jpg";
import Chubaka from "./assets/img/chubaka.jpg";
import Dogs from "./assets/img/dogs.jpg";
import Dyno from "./assets/img/dyno.jpg";
import Planets from "./assets/img/planets.jpg";

function App(): JSX.Element {
  const [images, setImages] = useState<string[]>([
    Cats,
    Chubaka,
    Dogs,
    Dyno,
    Planets,
  ]);

  const shuffleImages = (): void => {
    const newImages: string[] = [...images];
    for (let i: number = newImages.length - 1; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [newImages[i], newImages[j]] = [newImages[j], newImages[i]];
    }
    setImages(newImages);
  };

  return (
    <div className="App">
      <Header background={images[0]} />
      <div className="container">
        <LeftPanel background={images[1]} />
        <MainBlock shuffle={shuffleImages} background={images[2]} />
        <RightPanel background={images[3]} />
      </div>
      <Footer background={images[4]} />
    </div>
  );
}

export default App;
