type TextStyle = "bold" | "italic";

export const textStyle = (variant: TextStyle): string => {
  switch (variant) {
    case "bold":
      return "text-bold";
    case "italic":
      return "text-italic";
    default:
      return "";
  }
};
