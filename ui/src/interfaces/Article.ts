import { GenericNode } from "./Node";
import { ImageNode } from "./Image";
import { TableNode } from "./Table";
import { ParagraphNode } from "./Paragraph";
import { HeadingNode } from "./Heading";
import { CheckboxNode } from "./Checkbox";
import { CodeNode } from "./Code";

export type ArticleNodes =
  | ParagraphNode
  | HeadingNode
  | ImageNode
  | TableNode
  | CodeNode
  | CheckboxNode;

export interface ArticleData {
  title: string;
}

export interface ArticleNode extends GenericNode<"article", ArticleData> {
  nodes: ArticleNodes[];
}
