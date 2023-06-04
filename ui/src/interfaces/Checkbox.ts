import { Text } from "./Text";

export interface CheckboxData {
  option: Text;
  checked: boolean;
}

export interface Checkbox {
  type: "checkbox";
  data: CheckboxData[];
}
