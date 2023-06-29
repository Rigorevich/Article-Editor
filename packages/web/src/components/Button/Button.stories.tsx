import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click me',
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Click me',
  secondary: true,
};
