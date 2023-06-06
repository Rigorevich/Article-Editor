import { GenericNode } from "./Node";

export interface TextData {
  text: string;
  marks?: ("bold" | "italic")[];
}

export type TextNode = GenericNode<"text", TextData>;
