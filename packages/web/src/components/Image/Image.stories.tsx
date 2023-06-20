import React from "react";
import { Meta, Story } from "@storybook/react";
import Image from "./";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
    alignment: {
      options: ["left", "right", "center"],
      control: {
        type: "inline-radio",
        labels: { left: "Left", right: "Right", center: "Center" },
      },
    },
    src: {
      control: "text",
      defaultValue:
        "https://i.pinimg.com/564x/a5/94/3a/a5943a02a4c957807ce50032d31c8e01.jpg",
    },
    caption: {
      control: "text",
      defaultValue: "Hello World!",
      description: "The caption of the image",
    },
  },
} as Meta;

type TemplateProps = {
  alignment: "left" | "right";
  src: string;
  caption: string;
};

const Template: Story<TemplateProps> = (args: TemplateProps) => (
  <Image
    image={{
      id: "0",
      type: "image",
      data: {
        alignment: args.alignment,
        src: args.src,
        caption: args.caption,
      },
    }}
  />
);

export const Center = Template.bind({});
Center.args = {
  src: "https://i.pinimg.com/564x/a5/94/3a/a5943a02a4c957807ce50032d31c8e01.jpg",
  caption: "The caption",
};

export const Left = Template.bind({});
Left.args = {
  src: "https://i.pinimg.com/564x/a5/94/3a/a5943a02a4c957807ce50032d31c8e01.jpg",
  alignment: "left",
  caption: "The caption",
};

export const Right = Template.bind({});
Right.args = {
  src: "https://i.pinimg.com/564x/a5/94/3a/a5943a02a4c957807ce50032d31c8e01.jpg",
  alignment: "right",
  caption: "The caption",
};
