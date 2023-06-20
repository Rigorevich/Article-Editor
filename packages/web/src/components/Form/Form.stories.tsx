import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import Form from "./";

export default {
  title: "Components/Form",
  component: Form,
  argTypes: {
    jsonValue: {
      control: "text",
    },
  },
} as Meta;

const Template: Story = (args) => {
  const [jsonValue, setJsonValue] = useState("");

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Form submitted");
    console.log("JSON value:", jsonValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonValue(event.target.value);
  };

  return (
    <Form
      {...args}
      jsonValue={jsonValue}
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  jsonValue: "",
};
