export type Alignment = "center" | "left" | "right";

export interface ImageData {
  alignment: Alignment;
  source: string;
  caption: string;
}

export interface Image {
  type: "image";
  data: ImageData;
}
