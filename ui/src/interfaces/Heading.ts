import { Text } from "./Text";

type HeadingType = "heading";
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface Heading {
  type: HeadingType;
  level: HeadingLevel;
  data: Array<Text>;
}
