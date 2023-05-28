import React from "react";
import Container from "./components/Container";
import Image from "./components/Image";
import data from "./data.json";

import { IImage } from "./interfaces/Image";

function App() {
  const image: IImage = {
    type: "image",
    alignment: "center",
    source: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
    caption: "Подпись к картинке",
  };

  return (
    <Container>
      <Image {...image} />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nisi odio
        repudiandae, aliquid minus non facilis modi vel aspernatur! Quidem,
        natus voluptas ex itaque maiores sit illo obcaecati! Perspiciatis, quas!
      </div>
    </Container>
  );
}

export default App;
