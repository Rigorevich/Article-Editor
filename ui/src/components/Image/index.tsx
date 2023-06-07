import React from "react";
import styled from "./Image.module.css";
import classNames from "classnames";

import { ImageNode } from "../../interfaces/Image";
import { imageAlignment } from "../../utils/image-alignment";

type ImageProps = {
  image: ImageNode;
};

const Image: React.FC<ImageProps> = ({ image }) => {
  const { src, caption, alignment } = image.data;
  return (
    <img
      className={styled.image}
      src={src}
      alt={caption}
      style={{ float: alignment }}
    />
  );
};

export default Image;
