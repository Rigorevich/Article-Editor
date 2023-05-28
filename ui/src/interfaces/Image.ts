export type ImageType = "image";
export type Alignment = "center" | "left" | "right";

export interface IImage {
  type: ImageType;
  alignment: Alignment;
  source: string;
  caption: string;
}
