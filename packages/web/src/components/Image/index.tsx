import React from 'react';
import styled from './Image.module.css';

import { ImageNode } from '@monorepo/api/src/interfaces';

export type ImageProps = {
  image: ImageNode;
};

const Image = ({ image }: ImageProps) => {
  const { src, caption, alignment } = image.data;
  return (
    <img
      className={styled.image}
      src={src}
      alt={caption}
      style={
        alignment === 'left' || alignment === 'right'
          ? {
              float: alignment,
              marginRight: `${alignment && alignment === 'left' ? '1rem' : '0'}`,
              marginLeft: `${alignment && alignment === 'right' ? '1rem' : '0'}`,
            }
          : {
              display: 'block',
              margin: '0 auto 2rem',
            }
      }
    />
  );
};

export default Image;
