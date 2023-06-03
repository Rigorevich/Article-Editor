import React from "react";
import styled from "./Checkbox.module.css";
import { Checkbox as CheckboxListProps } from "../../interfaces/Checkbox";
import { CheckboxData as CheckboxItemProps } from "../../interfaces/Checkbox";

const CheckboxItem: React.FC<CheckboxItemProps> = ({ option, checked }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} />
      {option}
    </label>
  );
};

const CheckboxList: React.FC<CheckboxListProps> = ({ data }) => {
  return (
    <div className={styled.box}>
      {data.map(({ option, checked }) => (
        <CheckboxItem key={option} option={option} checked={checked} />
      ))}
    </div>
  );
};

export default CheckboxList;
