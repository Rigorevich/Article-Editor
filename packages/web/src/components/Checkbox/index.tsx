import React, { useState } from "react";
import styled from "./Checkbox.module.css";

import { CheckboxNode, OptionsData } from "../../interfaces/Checkbox";

type CheckboxProps = {
  checkbox: CheckboxNode;
};

type InputProps = {
  checkbox: OptionsData;
};

const Input: React.FC<InputProps> = ({ checkbox }) => {
  const { id, option, checked } = checkbox;
  const [checkedState, setCheckedState] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState(event.target.checked);
  };

  return (
    <label key={id} className={styled.label}>
      <input
        className={styled.input}
        type="checkbox"
        checked={checkedState}
        onChange={handleChange}
      />
      {option}
    </label>
  );
};

const Checkbox: React.FC<CheckboxProps> = ({ checkbox }) => {
  const { data } = checkbox;

  return (
    <div className={styled.wrapper}>
      <div className={styled.checkbox__name}>{data.checkboxName}</div>
      {data.options.map((option) => (
        <Input key={option.id} checkbox={option} />
      ))}
    </div>
  );
};

export default Checkbox;
