import React from "react";
import styled from "./Image.module.css";

import { ImageNode } from "../../interfaces/Image";

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
      style={{
        float: alignment,
        marginRight: `${alignment && alignment === "left" ? "1rem" : "0"}`,
        marginLeft: `${alignment && alignment === "right" ? "1rem" : "0"}`,
      }}
    />
  );
};

export default Image;
