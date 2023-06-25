import React from 'react';
import styled from './Table.module.css';

import { TableNode, ColData } from '@monorepo/api/src/interfaces';

const TableCol = ({ value }: { value: string }) => <div className={styled.table_cell}>{value}</div>;

const TableRow = ({ cols }: { cols: ColData[] }) => {
  return (
    <div className={styled.table_row}>
      {cols.map(({ id, value }) => (
        <TableCol key={id} value={value} />
      ))}
    </div>
  );
};

const Table = ({ table }: { table: TableNode }) => {
  const { data } = table;

  return (
    <div className={styled.wrapper}>
      <div className={styled.table_name}>{data?.tableName}</div>
      <div className={styled.table}>
        {data.rows.map(({ id, cols }) => (
          <TableRow key={id} cols={cols} />
        ))}
      </div>
    </div>
  );
};

export default Table;
