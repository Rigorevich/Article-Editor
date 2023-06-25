import React from 'react';
import { Story, Meta } from '@storybook/react';
import Table from './';
import { TableNode } from '@monorepo/api/src/interfaces';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: Story<{ table: TableNode }> = (args: { table: TableNode }) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  table: {
    id: '0',
    type: 'table',
    data: {
      tableName: 'Example Table',
      rows: [
        {
          id: '1',
          cols: [
            { id: '1', value: 'Cell 1' },
            { id: '2', value: 'Cell 2' },
            { id: '3', value: 'Cell 3' },
          ],
        },
        {
          id: '2',
          cols: [
            { id: '4', value: 'Cell 4' },
            { id: '5', value: 'Cell 5' },
            { id: '6', value: 'Cell 6' },
          ],
        },
      ],
    },
  },
};
