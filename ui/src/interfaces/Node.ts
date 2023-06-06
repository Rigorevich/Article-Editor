export type NodeType =
  | "article"
  | "image"
  | "paragraph"
  | "heading"
  | "table"
  | "code"
  | "checkbox"
  | "text"
  | "option"
  | "tcol"
  | "trow";

export type GenericNode<Type extends NodeType, Data extends object> = {
  type: Type;
  data: Data;
};
