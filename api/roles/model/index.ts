import { EntitySchemaOptions } from "typeorm/entity-schema/EntitySchemaOptions";

export default {
  name: "roles",
  columns: {
    title: {
      type: String,
    },
  },
} as EntitySchemaOptions<any>;
