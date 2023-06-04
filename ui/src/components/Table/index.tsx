import React from "react";
import styled from "./Table.module.css";
import { getFormattedText } from "../../utils/text-formatter";
import { Table as TableProps } from "../../interfaces/Table";
import { TableRow as TableRowProps } from "../../interfaces/Table";
import { Text as TableColProps } from "../../interfaces/Text";

const TableCol: React.FC<TableColProps> = ({ text, marks }) => (
  <div className={styled.table_cell}>{getFormattedText({ text, marks })}</div>
);

const TableRow: React.FC<TableRowProps> = ({ cols }) => {
  return (
    <div className={styled.table_row}>
      {cols.map(({ text, marks }, cellIndex) => (
        <TableCol key={text + cellIndex} text={text} marks={marks} />
      ))}
    </div>
  );
};

const Table: React.FC<TableProps> = ({ tableName, data }) => {
  return (
    <div className={styled.wrapper}>
      <h4 className={styled.table_name}>{tableName}</h4>
      <div className={styled.table}>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex} type={row.type} cols={row.cols} />
        ))}
      </div>
    </div>
  );
};

export default Table;
