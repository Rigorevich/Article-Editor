import React from 'react';
import styled from './Heading.module.css';

import { HeadingNode } from '@monorepo/api/src/interfaces';
import { getHeadingTag } from '../../utils/helpers/heading-level.helpers';
import RenderNodes from '../RenderNodes';

export type HeadingProps = {
  heading: HeadingNode;
};

const Heading = ({ heading }: HeadingProps) => {
  const { data, nodes } = heading;
  const Tag = getHeadingTag(data.level);

  return (
    <Tag className={styled.heading}>
      <RenderNodes nodes={nodes} />
    </Tag>
  );
};

export default Heading;
