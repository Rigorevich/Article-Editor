import React from "react";
import { TextNode } from "../../../../shared/interfaces/Text";
import { getFormattedText } from "../../utils/text-formatter";

type TextProps = {
  text: TextNode;
};

const Text: React.FC<TextProps> = ({ text: txt }) => {
  const { data } = txt;
  const { text, marks } = data;

  return <span>{getFormattedText({ text, marks })}</span>;
};

export default Text;
