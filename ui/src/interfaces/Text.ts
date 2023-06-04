export type MarksTypes = "bold" | "italic";

export interface Text {
  text: string;
  marks?: Array<MarksTypes>;
}
