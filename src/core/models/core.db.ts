import { EntitySchemaColumnOptions } from "typeorm";

export const BaseColumnSchemaPart = {
  id: {
    type: Number,
    primary: true,
    generated: true,
  } as EntitySchemaColumnOptions,
  createdAt: {
    name: "created_at",
    type: "timestamp",
    createDate: true,
  } as EntitySchemaColumnOptions,
  updatedAt: {
    name: "updated_at",
    type: "timestamp",
    updateDate: true,
  } as EntitySchemaColumnOptions,
};
