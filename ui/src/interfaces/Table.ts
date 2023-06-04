import { Text } from "./Text";

export interface TableRow {
  type: "row";
  cols: Text[];
}

export interface Table {
  type: "table";
  tableName: string;
  data: TableRow[];
}
