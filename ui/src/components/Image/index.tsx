import React from "react";
import styled from "./Image.module.css";
import classNames from "classnames";
import { IImage } from "../../interfaces/Image";
import { imageAlignment } from "../../utils/image-alignment";

const Image: React.FC<IImage> = ({ source, alignment, caption }) => {
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
