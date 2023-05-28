type HeadingType = "heading";
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type StyleTypes = "bold" | "italic";

export interface IHeading {
  type: HeadingType;
  level: HeadingLevel;
  content: string;
  style?: Array<StyleTypes>;
}
