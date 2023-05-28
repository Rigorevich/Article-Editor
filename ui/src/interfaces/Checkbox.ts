type CheckboxType = "checkbox";

export interface CheckboxData {
  option: string;
  checked: boolean;
}

export interface Checkbox {
  type: CheckboxType;
  data: CheckboxData;
}
