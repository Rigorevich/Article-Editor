import React from "react";
import { Meta, Story } from "@storybook/react";
import Text from "./";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    marks: {
      options: ["bold", "italic"],
      control: {
        type: "inline-check",
        labels: { bold: "Bold", italic: "Italic" },
      },
    },
    text: {
      control: "text",
    },
  },
} as Meta;

type TemplateProps = {
  text: string;
  marks?: ("bold" | "italic")[];
};

const Template: Story<TemplateProps> = (args: TemplateProps) => (
  <Text
    text={{
      id: "0",
      type: "text",
      data: {
        text: args.text,
        marks: args.marks,
      },
    }}
  />
);

export const Default = Template.bind({});
Default.args = {
  text: "Hello World!",
};

export const Bold = Template.bind({});
Bold.args = {
  text: "Hello World!",
  marks: ["bold"],
};

export const Italic = Template.bind({});
Italic.args = {
  text: "Hello World!",
  marks: ["italic"],
};

export const BoldItalic = Template.bind({});
BoldItalic.args = {
  text: "Hello World!",
  marks: ["bold", "italic"],
};
