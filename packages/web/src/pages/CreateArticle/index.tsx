import React, { useState } from "react";
import styled from "./CreateArticle.module.css";
import Container from "../../components/Container";
import Button from "../../components/Button";

import { template, toatifyNotification } from "../../constants";
import { trpc } from "../../trpc";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateArticle() {
  const [jsonValue, setJsonValue] = useState(JSON.stringify(template, null, 2));
  const mutation = trpc.article.createArticle.useMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonValue(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await mutation.mutateAsync(jsonValue);
      toatifyNotification("success", "Статья успешно создана!");
    } catch (error) {
      toatifyNotification("error", "Ошибка! Подробности в консоле!");
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
      <ToastContainer />
    </Container>
  );
}
