import { GenericNode } from "./Node";

export interface ImageData {
  alignment: "left" | "right" | "center";
  src: string;
  caption: string;
}

export type ImageNode = GenericNode<"image", ImageData>;
