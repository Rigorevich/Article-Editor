import React, { useState } from "react";
import styled from "./CreateArticle.module.css";
import Container from "../../components/Container";
import Button from "../../components/Button";
import data from "../../data.json";

import { trpc } from "../../trpc";

export default function CreateArticle() {
  const initialState = JSON.stringify(data, null, 2);
  const [jsonValue, setJsonValue] = useState(initialState);
  const createUserMutation = trpc.article.createArticle.useMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const parsedJson = JSON.parse(jsonValue);
      createUserMutation.mutate(parsedJson);
      setJsonValue(initialState);
      alert("Статья успешно создана");
    } catch (error) {
      console.error("Ошибка парсинга JSON:", error);
      alert(`Ошибка парсинга JSON: ${error}`);
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
