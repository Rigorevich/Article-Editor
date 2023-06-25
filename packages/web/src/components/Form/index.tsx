import React from 'react';
import Button from '../Button';
import styled from './Form.module.css';

type FormProps = {
  jsonValue: string;
  handleFormSubmit: (event: React.FormEvent) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Form = ({ jsonValue, handleFormSubmit, handleInputChange }: FormProps) => {
  return (
    <form className={styled.form} onSubmit={handleFormSubmit}>
      <div className={styled.textareaContainer}>
        <textarea
          className={styled.textarea}
          value={jsonValue}
          onChange={handleInputChange}
          placeholder="Введите JSON структуру"
        />
      </div>
      <Button type="submit" primary>
        Сохранить
      </Button>
    </form>
  );
};

export default Form;
