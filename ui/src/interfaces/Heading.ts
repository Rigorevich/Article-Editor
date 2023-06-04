import { Text } from "./Text";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface Heading {
  type: "heading";
  level?: HeadingLevel;
  data: Text[];
}
