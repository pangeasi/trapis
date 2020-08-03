import { EntitySchemaOptions } from "typeorm/entity-schema/EntitySchemaOptions";

export default {
  name: "user",
  columns: {
    name: {
      type: String,
    },
  },
} as EntitySchemaOptions<any>;
