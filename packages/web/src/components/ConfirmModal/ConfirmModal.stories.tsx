import React from 'react';
import ConfirmModal from './';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'components/Modal',
  component: ConfirmModal,
  argTypes: {
    message: { control: 'text' },
    isOpen: { control: 'boolean' },
  },
} as Meta;

type TemplateArgs = {
  message: string;
  isOpen: boolean;
};

const Template: Story<TemplateArgs> = (args: TemplateArgs) => (
  <ConfirmModal
    isOpen={args.isOpen}
    message={args.message}
    onConfirm={() => console.log('Confirm')}
    onCancel={() => console.log('Cancel')}
  />
);

export const Modal = Template.bind({});
Modal.args = {
  isOpen: true,
  message: 'Удалить статью?',
};
