import { GenericNode } from "./Node";
import { TextNode } from "./Text";
import { ImageNode } from "./Image";

export interface HeadingData {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface HeadingNode extends GenericNode<"heading", HeadingData> {
  nodes: (TextNode | ImageNode)[];
}
