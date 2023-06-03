import React from "react";
import styled from "./Heading.module.css";
import { Heading as HeadingProps } from "../../interfaces/Heading";
import { getHeadingTag } from "../../utils/heading-level";
import { getFormattedText } from "../../utils/text-formatter";

const Heading: React.FC<HeadingProps> = ({ level, data }) => {
  const Tag = getHeadingTag(level);

  return (
    <Tag className={styled.heading}>
      {data.map((item, index) => {
        return <span key={item.text + index}>{getFormattedText(item)}</span>;
      })}
    </Tag>
  );
};

export default Heading;
