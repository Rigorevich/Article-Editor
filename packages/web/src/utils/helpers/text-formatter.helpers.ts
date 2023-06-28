import React from 'react';
import { TextData } from '@monorepo/api/src/interfaces';

export const getFormattedText = ({ text, marks }: TextData): React.ReactNode => {
  let formattedText: React.ReactNode = text;

  marks?.forEach((mark) => {
    if (mark === 'italic') {
      formattedText = React.createElement('em', null, formattedText);
    } else if (mark === 'bold') {
      formattedText = React.createElement('strong', null, formattedText);
    }
  });

  return formattedText;
};
