import { ICode } from "./Code";
import { ITable } from "./Table";
import { ICheckbox } from "./Checkbox";
import { IText } from "./Text";
import { IImage } from "./Image";
import { IHeading } from "./Heading";

export type Article = Array<
  ICode | ITable | ICheckbox | IText | IImage | IHeading
>;

export interface IArticles {
  articles: Array<Article>;
}
