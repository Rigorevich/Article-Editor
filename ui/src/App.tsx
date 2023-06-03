import React from "react";
import Container from "./components/Container";
import Image from "./components/Image";
import Heading from "./components/Heading";
import data from "./data.json";

import { Image as IImage } from "./interfaces/Image";
import { Heading as IHeading } from "./interfaces/Heading";
import { Paragraph as IParagraph } from "./interfaces/Paragraph";
import { Code as ICode } from "./interfaces/Code";
import { Checkbox as ICheckbox } from "./interfaces/Checkbox";

import Paragraph from "./components/Paragraph";
import Code from "./components/Code";
import CheckboxList from "./components/Checkbox";

function App() {
  const image: IImage = {
    type: "image",
    data: {
      alignment: "center",
      source: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
      caption: "Подпись к картинке",
    },
  };

  const heading: IHeading = {
    type: "heading",
    level: 1,
    data: [
      {
        text: "Заголовок статьи",
        marks: ["italic"],
      },
      {
        text: " slkjdgjdsgh",
        marks: ["bold"],
      },
    ],
  };

  const paragraph: IParagraph = {
    type: "paragraph",
    data: [
      {
        text: "Тут какой-то текст курсивный",
        marks: ["italic"],
      },
      {
        text: " а здесь жирный",
        marks: ["bold"],
      },
      {
        text: " а здесь все вместе",
        marks: ["bold", "italic"],
      },
    ],
  };

  const code: ICode = {
    type: "code",
    language: "javascript",
    data: {
      code: "console.log('hello world')",
    },
  };

  const checkbox: ICheckbox = {
    type: "checkbox",
    data: [
      {
        option: "Что-то",
        checked: true,
      },
      {
        option: "Что-то еще",
        checked: false,
      },
    ],
  };

  return (
    <Container>
      <Heading {...heading} />
      <Image {...image} />
      <Paragraph {...paragraph} />
      <Paragraph {...paragraph} />
      <Code {...code} />
      <CheckboxList {...checkbox} />
    </Container>
  );
}

export default App;
