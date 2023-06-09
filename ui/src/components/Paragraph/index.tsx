import React from "react";
import styled from "./Paragraph.module.css";

import { ParagraphNode } from "../../../../shared/interfaces/Paragraph";
import RenderNodes from "../RenderNodes";

type ParagraphProps = {
  paragraph: ParagraphNode;
};

const Paragraph: React.FC<ParagraphProps> = ({ paragraph }) => {
  const sortedNodes = paragraph.nodes.sort((a, b) => {
    if (a.type === "image" && b.type !== "image") {
      return -1;
    } else if (a.type !== "image" && b.type === "image") {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <p className={styled.paragraph}>
      <RenderNodes nodes={sortedNodes} />
    </p>
  );
};

export default Paragraph;
