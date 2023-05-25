import React from "react";
import styled from "./Image.module.css";

type ImageProps = {
  type: string;
  url: string;
  alignment: string;
  caption: string;
};

const Image: React.FC<ImageProps> = ({ type, url, alignment, caption }) => {
  return (
    <div className={styled.wrapper}>
      <img className={styled.image} src={url} alt={caption} />
    </div>
  );
};

export default Image;
