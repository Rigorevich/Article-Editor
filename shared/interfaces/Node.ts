import { ImageNode } from "./Image";
import { TableNode } from "./Table";
import { ParagraphNode } from "./Paragraph";
import { HeadingNode } from "./Heading";
import { CheckboxNode } from "./Checkbox";
import { CodeNode } from "./Code";
import { TextNode } from "./Text";
import { ArticleNode } from "./Article";

export type Node =
  | ArticleNode
  | ImageNode
  | TableNode
  | ParagraphNode
  | HeadingNode
  | CheckboxNode
  | CodeNode
  | TextNode;

export type NodeType =
  | "article"
  | "image"
  | "paragraph"
  | "heading"
  | "table"
  | "code"
  | "checkbox"
  | "text";

export type GenericNode<Type extends NodeType, Data extends object> = {
  id: string;
  type: Type;
  data: Data;
};
