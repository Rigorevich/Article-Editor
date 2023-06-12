import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

export const textNodeSchema = z.object({
  id: z.string().default(() => uuidv4()),
  type: z.literal("text"),
  data: z.object({
    text: z.string(),
    marks: z
      .array(z.union([z.literal("bold"), z.literal("italic")]))
      .optional(),
  }),
});

export const imageNodeSchema = z.object({
  id: z.string().default(() => uuidv4()),
  type: z.literal("image"),
  data: z.object({
    alignment: z.union([z.literal("left"), z.literal("right")]).optional(),
    src: z.string().url(),
    caption: z.string(),
  }),
});

export const tableNodeSchema = z.object({
  id: z.string().default(() => uuidv4()),
  type: z.literal("table"),
  data: z.object({
    tableName: z.string(),
    rows: z.array(
      z.object({
        id: z.string().default(() => uuidv4()),
        cols: z.array(
          z.object({
            id: z.string().default(() => uuidv4()),
            value: z.string(),
          })
        ),
      })
    ),
  }),
});

export const codeNodeSchema = z.object({
  id: z.string().default(() => uuidv4()),
  type: z.literal("code"),
  data: z.object({
    language: z.string().optional(),
    code: z.string(),
  }),
});

export const checkboxNodeSchema = z.object({
  id: z.string().default(() => uuidv4()),
  type: z.literal("checkbox"),
  data: z.object({
    checkboxName: z.string().optional(),
    options: z.array(
      z.object({
        id: z.string().default(() => uuidv4()),
        option: z.string(),
        checked: z.boolean(),
      })
    ),
  }),
});

export const paragraphNodeSchema = z.object({
  id: z.string().default(() => uuidv4()),
  type: z.literal("paragraph"),
  nodes: z.array(z.union([textNodeSchema, imageNodeSchema])),
});

export const headingNodeSchema = z.object({
  id: z.string().default(() => uuidv4()),
  type: z.literal("heading"),
  data: z.object({
    level: z.number().min(1).max(6).optional(),
  }),
  nodes: z.array(textNodeSchema),
});

export const nodeSchema = z.union([
  textNodeSchema,
  imageNodeSchema,
  tableNodeSchema,
  codeNodeSchema,
  checkboxNodeSchema,
  paragraphNodeSchema,
  headingNodeSchema,
]);

export const articleNodeSchema = z.object({
  id: z.string().default(() => uuidv4()),
  type: z.literal("article"),
  data: z.object({
    title: z.string(),
  }),
  nodes: z.array(nodeSchema),
});
