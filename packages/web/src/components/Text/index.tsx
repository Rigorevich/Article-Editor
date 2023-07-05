import React from 'react';
import styled from './Text.module.css';
import { TextNode } from '@monorepo/api/src/interfaces';
import { getFormattedText } from '../../utils/helpers/text-formatter.helpers';

export type TextProps = {
  text: TextNode;
};

const Text = ({ text: txt }: TextProps) => {
  const { data } = txt;
  const { text, marks } = data;

  return (
    <span className={styled.text} data-test="text">
      {getFormattedText({ text, marks })}
    </span>
  );
};

export default Text;
