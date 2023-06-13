"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleNodeSchema = exports.nodeSchema = exports.headingNodeSchema = exports.paragraphNodeSchema = exports.checkboxNodeSchema = exports.codeNodeSchema = exports.tableNodeSchema = exports.imageNodeSchema = exports.textNodeSchema = void 0;
const zod_1 = require("zod");
const uuid_1 = require("uuid");
exports.textNodeSchema = zod_1.z.object({
    id: zod_1.z.string().default(() => (0, uuid_1.v4)()),
    type: zod_1.z.literal("text"),
    data: zod_1.z.object({
        text: zod_1.z.string(),
        marks: zod_1.z
            .array(zod_1.z.union([zod_1.z.literal("bold"), zod_1.z.literal("italic")]))
            .optional(),
    }),
});
exports.imageNodeSchema = zod_1.z.object({
    id: zod_1.z.string().default(() => (0, uuid_1.v4)()),
    type: zod_1.z.literal("image"),
    data: zod_1.z.object({
        alignment: zod_1.z.union([zod_1.z.literal("left"), zod_1.z.literal("right")]).optional(),
        src: zod_1.z.string().url(),
        caption: zod_1.z.string(),
    }),
});
exports.tableNodeSchema = zod_1.z.object({
    id: zod_1.z.string().default(() => (0, uuid_1.v4)()),
    type: zod_1.z.literal("table"),
    data: zod_1.z.object({
        tableName: zod_1.z.string(),
        rows: zod_1.z.array(zod_1.z.object({
            id: zod_1.z.string().default(() => (0, uuid_1.v4)()),
            cols: zod_1.z.array(zod_1.z.object({
                id: zod_1.z.string().default(() => (0, uuid_1.v4)()),
                value: zod_1.z.string(),
            })),
        })),
    }),
});
exports.codeNodeSchema = zod_1.z.object({
    id: zod_1.z.string().default(() => (0, uuid_1.v4)()),
    type: zod_1.z.literal("code"),
    data: zod_1.z.object({
        language: zod_1.z.string().optional(),
        code: zod_1.z.string(),
    }),
});
exports.checkboxNodeSchema = zod_1.z.object({
    id: zod_1.z.string().default(() => (0, uuid_1.v4)()),
    type: zod_1.z.literal("checkbox"),
    data: zod_1.z.object({
        checkboxName: zod_1.z.string().optional(),
        options: zod_1.z.array(zod_1.z.object({
            id: zod_1.z.string().default(() => (0, uuid_1.v4)()),
            option: zod_1.z.string(),
            checked: zod_1.z.boolean(),
        })),
    }),
});
exports.paragraphNodeSchema = zod_1.z.object({
    id: zod_1.z.string().default(() => (0, uuid_1.v4)()),
    type: zod_1.z.literal("paragraph"),
    nodes: zod_1.z.array(zod_1.z.union([exports.textNodeSchema, exports.imageNodeSchema])),
});
exports.headingNodeSchema = zod_1.z.object({
    id: zod_1.z.string().default(() => (0, uuid_1.v4)()),
    type: zod_1.z.literal("heading"),
    data: zod_1.z.object({
        level: zod_1.z.number().min(1).max(6).optional(),
    }),
    nodes: zod_1.z.array(exports.textNodeSchema),
});
exports.nodeSchema = zod_1.z.union([
    exports.textNodeSchema,
    exports.imageNodeSchema,
    exports.tableNodeSchema,
    exports.codeNodeSchema,
    exports.checkboxNodeSchema,
    exports.paragraphNodeSchema,
    exports.headingNodeSchema,
]);
exports.articleNodeSchema = zod_1.z.object({
    id: zod_1.z.string().default(() => (0, uuid_1.v4)()),
    type: zod_1.z.literal("article"),
    data: zod_1.z.object({
        title: zod_1.z.string(),
    }),
    nodes: zod_1.z.array(exports.nodeSchema),
});
