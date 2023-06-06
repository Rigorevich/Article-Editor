import { GenericNode } from "./Node";

export interface CheckboxOptionData {
  option: string;
  checked: boolean;
}

export type CheckboxOptionNode = GenericNode<"option", CheckboxOptionData>;

export interface CheckboxNode extends GenericNode<"checkbox", {}> {
  nodes: CheckboxOptionNode[];
}
