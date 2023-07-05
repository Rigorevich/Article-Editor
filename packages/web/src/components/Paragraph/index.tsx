import React from 'react';
import styled from './Paragraph.module.css';

import { ParagraphNode } from '@monorepo/api/src/interfaces';
import RenderNodes from '../RenderNodes';

export type ParagraphProps = {
  paragraph: ParagraphNode;
};

const Paragraph = ({ paragraph }: ParagraphProps) => {
  const sortedNodes = paragraph.nodes.sort((a, b) => {
    if (a.type === 'image' && b.type !== 'image') {
      return -1;
    } else if (a.type !== 'image' && b.type === 'image') {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <p className={styled.paragraph} data-test="paragraph">
      <RenderNodes nodes={sortedNodes} />
    </p>
  );
};

export default Paragraph;
