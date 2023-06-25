import React, { useState } from 'react';
import styled from './Checkbox.module.css';

import { CheckboxNode, OptionsData } from '@monorepo/api/src/interfaces';

export type CheckboxProps = {
  checkbox: CheckboxNode;
};

export type InputProps = {
  checkbox: OptionsData;
};

const Input = ({ checkbox }: InputProps) => {
  const { id, option, checked } = checkbox;
  const [checkedState, setCheckedState] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState(event.target.checked);
  };

  return (
    <label key={id} className={styled.label}>
      <input className={styled.input} type="checkbox" checked={checkedState} onChange={handleChange} />
      {option}
    </label>
  );
};

const Checkbox = ({ checkbox }: CheckboxProps) => {
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
