import React from "react";
import { Text as TextProps } from "../interfaces/Text";

export const getFormattedText = ({
  text,
  marks,
}: TextProps): React.ReactNode => {
  let formattedText: React.ReactNode = text;

  marks?.forEach((mark) => {
    if (mark === "italic") {
      formattedText = React.createElement("em", null, formattedText);
    } else if (mark === "bold") {
      formattedText = React.createElement("strong", null, formattedText);
    }
  });

  return formattedText;
};
