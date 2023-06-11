import { GenericNode } from "./Node";

export interface ColData {
  id: string;
  value: string;
}

export interface RowData {
  id: string;
  cols: ColData[];
}

export interface TableData {
  tableName?: string;
  rows: RowData[];
}

export type TableNode = GenericNode<"table", TableData>;
