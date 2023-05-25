type textStyleProps = "normal" | "bold" | "italic" | "heading";

export const textStyle = (variant: textStyleProps): string => {
  switch (variant) {
    case "normal":
      return "text-normal";
    case "bold":
      return "text-bold";
    case "italic":
      return "text-italic";
    case "heading":
      return "text-heading";
    default:
      return "";
  }
};
