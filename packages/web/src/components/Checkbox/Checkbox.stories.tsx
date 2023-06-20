import React from "react";
import { Story, Meta } from "@storybook/react";
import Checkbox from "./";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    checkbox: {
      table: {
        disable: true,
      },
    },
    checked: {
      control: "boolean",
    },
    option: {
      control: "text",
    },
  },
} as Meta;

type TemplateProps = {
  option: string;
  checked: boolean;
};

const Template: Story<TemplateProps> = ({ option, checked }: TemplateProps) => (
  <Checkbox
    checkbox={{
      id: "0",
      type: "checkbox",
      data: {
        checkboxName: "Преимущества Storybook",
        options: [{ id: "1", option, checked }],
      },
    }}
  />
);

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  option: "Checked",
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  option: "Unchecked",
};
