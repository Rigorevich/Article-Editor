import { GenericNode } from "./Node";
import { TextNode } from "./Text";
import { ImageNode } from "./Image";

export interface TableData {
  tableName?: string;
}

export interface TableColNode extends GenericNode<"tcol", {}> {
  nodes: (TextNode | ImageNode)[];
}

export interface TableRowNode extends GenericNode<"trow", {}> {
  nodes: TableColNode[];
}

export interface TableNode extends GenericNode<"table", TableData> {
  nodes: TableRowNode[];
}
