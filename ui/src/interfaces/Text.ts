type TextType = "text";
type StyleTypes = "bold" | "italic";

export interface IText {
  type: TextType;
  content: string;
  style?: Array<StyleTypes>;
}
