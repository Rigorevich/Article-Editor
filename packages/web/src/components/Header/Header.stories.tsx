import React from "react";
import { Story, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: Story = () => <Header />;

export const Default = Template.bind({});
