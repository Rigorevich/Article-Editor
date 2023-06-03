import React from "react";
import styled from "./Paragraph.module.css";
import { Paragraph as ParagraphProps } from "../../interfaces/Paragraph";
import { getFormattedText } from "../../utils/text-formatter";

const Paragraph: React.FC<ParagraphProps> = ({ data }) => {
  return (
    <p className={styled.paragraph}>
      {data.map((item, index) => {
        return <span key={item.text + index}>{getFormattedText(item)}</span>;
      })}
    </p>
  );
};

export default Paragraph;
