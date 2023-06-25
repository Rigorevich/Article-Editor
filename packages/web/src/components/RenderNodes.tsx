import React from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Image from './Image';
import Code from './Code';
import Checkbox from './Checkbox';
import Table from './Table';
import Text from './Text';

import { Node } from '@monorepo/api/src/interfaces';

const RenderNodes = ({ nodes }: { nodes: Node[] }) => {
  return (
    <>
      {nodes.map((node) => {
        switch (node.type) {
          case 'text':
            return <Text key={node.id} text={node} />;
          case 'heading':
            return <Heading key={node.id} heading={node} />;
          case 'paragraph':
            return <Paragraph key={node.id} paragraph={node} />;
          case 'image':
            return <Image key={node.id} image={node} />;
          case 'code':
            return <Code key={node.id} code={node} />;
          case 'checkbox':
            return <Checkbox key={node.id} checkbox={node} />;
          case 'table':
            return <Table key={node.id} table={node} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default RenderNodes;
