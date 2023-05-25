import React from "react";
import classNames from "classnames";
import styled from "./Text.module.css";
import { textStyle } from "../../utils/text-style";

type TextProps = {
  variant: "normal" | "bold" | "italic" | "heading";
  text: string;
};

const Text: React.FC<TextProps> = ({ variant, text }) => {
  const style: string = textStyle(variant);

  return <p className={classNames(styled.text, styled[style])}>{text}</p>;
};

export default Text;
