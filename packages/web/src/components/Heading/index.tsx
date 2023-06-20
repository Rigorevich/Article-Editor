import React from "react";
import styled from "./Heading.module.css";

import { HeadingNode } from "../../interfaces";
import { getHeadingTag } from "../../utils/heading-level";
import RenderNodes from "../RenderNodes";

export type HeadingProps = {
  heading: HeadingNode;
};

const Heading: React.FC<HeadingProps> = ({ heading }) => {
  const { data, nodes } = heading;
  const Tag = getHeadingTag(data.level);

  return (
    <Tag className={styled.heading}>
      <RenderNodes nodes={nodes} />
    </Tag>
  );
};

export default Heading;
