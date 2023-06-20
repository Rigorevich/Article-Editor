import React from "react";
import { Story, Meta } from "@storybook/react";
import Paragraph, { ParagraphProps } from "./";

export default {
  title: "Components/Paragraph",
  component: Paragraph,
} as Meta;

const Template: Story<ParagraphProps> = (args: ParagraphProps) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
  paragraph: {
    id: "0",
    type: "paragraph",
    data: {},
    nodes: [
      {
        id: "0",
        type: "text",
        data: {
          text: "Здесь описание к этой ",
        },
      },
      {
        id: "0",
        type: "text",
        data: {
          text: "картинке",
          marks: ["bold"],
        },
      },
      {
        id: "0",
        type: "image",
        data: {
          alignment: "left",
          src: "https://i.pinimg.com/564x/a5/94/3a/a5943a02a4c957807ce50032d31c8e01.jpg",
          caption: "Image",
        },
      },
    ],
  },
};
