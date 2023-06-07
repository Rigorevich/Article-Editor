import React, { useState } from "react";
import styled from "./CreateArticle.module.css";
import Container from "../../components/Container";
import Button from "../../components/Button";

export default function CreateArticle() {
  const [jsonValue, setJsonValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const parsedJson = JSON.parse(jsonValue);
      setJsonValue("");
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
        <Button type="submit" primary>
          Сохранить
        </Button>
      </form>
    </Container>
  );
}
