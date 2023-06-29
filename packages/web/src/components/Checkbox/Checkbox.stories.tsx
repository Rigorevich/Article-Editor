import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Checkbox from './';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checkbox: {
      table: {
        disable: true,
      },
    },
    checkboxName: {
      control: 'text',
    },
    option: {
      control: 'text',
    },
    checked: {
      control: 'boolean',
    },
  },
} as Meta;

type TemplateProps = {
  option: string;
  checked: boolean;
  checkboxName: string;
};

const Template: Story<TemplateProps> = ({ option, checked, checkboxName }: TemplateProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);
    Checked.args = {
      ...Checked.args,
      checked: newChecked,
    };
  };

  return (
    <Checkbox
      checkbox={{
        id: '0',
        type: 'checkbox',
        data: {
          checkboxName,
          options: [{ id: '1', option, checked: isChecked }],
        },
      }}
      onChange={handleCheckboxChange}
    />
  );
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  option: 'Checked',
  checkboxName: 'Пример того, как выглядит чекбокс',
};
