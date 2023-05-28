import { Alignment } from "../interfaces/Image";

export const imageAlignment = (alignment: Alignment): string => {
  switch (alignment) {
    case "center":
      return "center-image";
    case "left":
      return "left-image";
    case "right":
      return "right-image";
    default:
      return "center-image";
  }
};
