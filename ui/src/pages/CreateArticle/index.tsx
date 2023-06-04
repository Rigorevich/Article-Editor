import React, { useState } from "react";
import styled from "./CreateArticle.module.css";
import Container from "../../components/Container";

export default function CreateArticle() {
  const [jsonValue, setJsonValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const parsedJson = JSON.parse(jsonValue);
      console.log(parsedJson);
    } catch (error) {
      console.error("Ошибка парсинга JSON:", error);
    }
  };
  return (
    <Container>
      <form className={styled.form} onSubmit={handleFormSubmit}>
        <div className={styled.textareaContainer}>
          <textarea
            className={styled.textarea}
            value={jsonValue}
            onChange={handleInputChange}
            placeholder="Введите JSON структуру"
          />
        </div>
        <button className={styled.submitButton} type="submit">
          Отправить
        </button>
      </form>
    </Container>
  );
}
