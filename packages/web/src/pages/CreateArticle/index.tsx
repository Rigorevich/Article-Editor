import React, { useState } from 'react';
import Container from '../../components/Container';
import Form from '../../components/Form';

import { useCreateArticleMutation } from '../../hooks/useCreateArticleMutation';
import { template } from '../../utils/constants/template.constants';

export default function CreateArticle() {
  const initValue = JSON.stringify(template, null, 2);
  const [jsonValue, setJsonValue] = useState(initValue);
  const { createArticle } = useCreateArticleMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonValue(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    createArticle(jsonValue);
    setJsonValue(initValue);
  };

  return (
    <Container>
      <Form jsonValue={jsonValue} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
    </Container>
  );
}
