import { Code } from "./Code";
import { Table } from "./Table";
import { Checkbox } from "./Checkbox";
import { Image } from "./Image";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";

export type Article = Array<
  Heading | Table | Paragraph | Code | Checkbox | Image
>;
