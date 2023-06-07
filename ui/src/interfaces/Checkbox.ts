import { GenericNode } from "./Node";

export interface OptionsData {
  id: string;
  option: string;
  checked: boolean;
}

export interface CheckboxData {
  checkboxName?: string;
  options: OptionsData[];
}

export type CheckboxNode = GenericNode<"checkbox", CheckboxData>;
