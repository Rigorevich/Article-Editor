import { IText } from "./Text";

type TableType = "table";

export interface ITable {
  type: TableType;
  columns: Array<IText>;
}
