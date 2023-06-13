import { GenericNode } from "./Node";
import { TextNode } from "./Text";
import { ImageNode } from "./Image";

export interface ParagraphNode extends GenericNode<"paragraph", {}> {
  nodes: (TextNode | ImageNode)[];
}
