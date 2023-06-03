import React from "react";
import styled from "./Image.module.css";
import classNames from "classnames";
import { Image as ImageProps } from "../../interfaces/Image";
import { imageAlignment } from "../../utils/image-alignment";

const Image: React.FC<ImageProps> = (props) => {
  const { source, caption, alignment } = props.data;
  return (
    <div className={styled.wrapper}>
      <img
        className={classNames(styled.image, styled[imageAlignment(alignment)])}
        src={source}
        alt={caption}
      />
    </div>
  );
};

export default Image;
