import React from "react";
import { Meta, Story } from "@storybook/react";
import Heading from "./";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    heading: {
      table: {
        disable: true,
      },
    },
    level: {
      control: { type: "number", min: 1, max: 6 },
    },
    text: {
      control: "text",
    },
  },
} as Meta;

type TemplateProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
};

const Template: Story<TemplateProps> = (args: TemplateProps) => (
  <Heading
    heading={{
      id: "0",
      type: "heading",
      data: {
        level: args.level,
      },
      nodes: [
        {
          id: "1",
          type: "text",
          data: {
            text: args.text,
          },
        },
      ],
    }}
  />
);

export const H1 = Template.bind({});
H1.args = {
  level: 1,
  text: "Hello World!",
};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
  text: "Hello World!",
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
  text: "Hello World!",
};

export const H4 = Template.bind({});
H4.args = {
  level: 4,
  text: "Hello World!",
};

export const H5 = Template.bind({});
H5.args = {
  level: 5,
  text: "Hello World!",
};

export const H6 = Template.bind({});
H6.args = {
  level: 6,
  text: "Hello World!",
};
