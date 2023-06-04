import React, { useState } from "react";
import styled from "./Checkbox.module.css";
import { getFormattedText } from "../../utils/text-formatter";
import { Checkbox as CheckboxListProps } from "../../interfaces/Checkbox";
import { CheckboxData as CheckboxItemProps } from "../../interfaces/Checkbox";

const CheckboxItem: React.FC<CheckboxItemProps> = ({ option, checked }) => {
  const [checkedState, setCheckedState] = useState(checked);
  const { text, marks } = option;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState(event.target.checked);
  };

  return (
    <label>
      <input type="checkbox" checked={checkedState} onChange={handleChange} />
      {getFormattedText({ text, marks })}
    </label>
  );
};

const CheckboxList: React.FC<CheckboxListProps> = ({ data }) => {
  return (
    <div className={styled.box}>
      {data.map(({ option, checked }) => (
        <CheckboxItem key={option.text} option={option} checked={checked} />
      ))}
    </div>
  );
};

export default CheckboxList;
