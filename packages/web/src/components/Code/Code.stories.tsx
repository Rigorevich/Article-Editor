import Code from './';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Code',
  component: Code,
  argTypes: {
    code: {
      control: 'text',
    },
    language: {
      control: 'text',
    },
  },
} as Meta;

type TemplateProps = {
  code: string;
  language?: string;
};

const Template: Story<TemplateProps> = (args: TemplateProps) => (
  <Code
    code={{
      id: '0',
      type: 'code',
      data: {
        language: args.language,
        code: args.code,
      },
    }}
  />
);

export const JavaScript = Template.bind({});
JavaScript.args = {
  language: 'JavaScript',
  code: 'console.log("Hello, World!");',
};
