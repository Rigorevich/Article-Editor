import { Text } from "./Text";

type ParagraphType = "paragraph";

export interface Paragraph {
  type: ParagraphType;
  data: Array<Text>;
}
