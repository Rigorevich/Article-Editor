import React, { useState } from "react";
import styled from "./CreateArticle.module.css";
import Container from "../../components/Container";
import Button from "../../components/Button";

import { template } from "../../constants";
import { trpc } from "../../trpc";

export default function CreateArticle() {
  const jsonTemplate = JSON.stringify(template, null, 2);
  const [jsonValue, setJsonValue] = useState(jsonTemplate);
  const createUserMutation = trpc.article.createArticle.useMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const parsedJson = JSON.parse(jsonValue);
      createUserMutation.mutate(parsedJson);
      setJsonValue(jsonTemplate);
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
