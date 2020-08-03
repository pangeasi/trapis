import { getRCM } from "../../utils/helpers";
import { EntitySchemaOptions } from "typeorm/entity-schema/EntitySchemaOptions";

interface EntitiesModels {
  [key: string]: EntitySchemaOptions<any>;
}
export const getModels = async () => {
  return (getRCM("model") as unknown) as EntitiesModels;
};
