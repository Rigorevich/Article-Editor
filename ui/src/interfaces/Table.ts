import { Text } from "./Text";

type TableType = "table";

export type TableData = Array<Array<Text>>;

export interface Table {
  type: TableType;
  colsCount: number;
  data: TableData;
}
