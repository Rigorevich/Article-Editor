import { GenericNode } from "./Node";

export interface CodeData {
  language?: string;
  code: string;
}

export type CodeNode = GenericNode<"code", CodeData>;
