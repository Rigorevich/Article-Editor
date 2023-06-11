import { GenericNode } from "./Node";
import { TextNode } from "./Text";

export interface HeadingData {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface HeadingNode extends GenericNode<"heading", HeadingData> {
  nodes: TextNode[];
}
