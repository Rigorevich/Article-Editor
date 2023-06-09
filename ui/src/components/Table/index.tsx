import React from "react";
import styled from "./Table.module.css";

import { TableNode, ColData } from "../../../../shared/interfaces/Table";

const TableCol: React.FC<{ value: string }> = ({ value }) => (
  <div className={styled.table_cell}>{value}</div>
);

const TableRow: React.FC<{ cols: ColData[] }> = ({ cols }) => {
  return (
    <div className={styled.table_row}>
      {cols.map(({ id, value }) => (
        <TableCol key={id} value={value} />
      ))}
    </div>
  );
};

const Table: React.FC<{ table: TableNode }> = ({ table }) => {
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
