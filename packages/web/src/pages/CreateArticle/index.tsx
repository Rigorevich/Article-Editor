import React, { useState } from "react";
import Container from "../../components/Container";
import Form from "../../components/Form";

import { template, toatifyNotification } from "../../constants";
import { trpc } from "../../trpc";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateArticle() {
  const initValue = JSON.stringify(template, null, 2);
  const [jsonValue, setJsonValue] = useState(initValue);
  const mutation = trpc.article.createArticle.useMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonValue(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await mutation.mutateAsync(jsonValue);
      setJsonValue(initValue);
      toatifyNotification("success", "Статья успешно создана!");
    } catch (error) {
      toatifyNotification("error", "Ошибка! Подробности в консоле!");
    }
  };

  return (
    <Container>
      <Form
        jsonValue={jsonValue}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <ToastContainer />
    </Container>
  );
}
