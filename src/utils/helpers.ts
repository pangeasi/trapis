import {
  ControllerFn,
  PathConfig,
  Controllers,
  Paths,
} from "./../core/consumer/types";
import { API_BASE } from "./constants";
import { readdirSync } from "fs";
import { EntitySchemaOptions } from "typeorm/entity-schema/EntitySchemaOptions";
export const entitiesDirs = readdirSync(API_BASE);

const importRCM = async (
  entityRCM: string
): Promise<ControllerFn | PathConfig[]> =>
  import(entityRCM).then((path) => path.default);

export const getRCM = async (rcm: string) => {
  const rcms: Controllers | Paths = {};
  for (const entity of entitiesDirs) {
    const entityRCM = `${API_BASE}/${entity}/${rcm}`;
    console.log(entityRCM, readdirSync(entityRCM));
    if (readdirSync(entityRCM).length) {
      const index = await importRCM(entityRCM);
      rcms[entity] = index;
    }
  }
  return rcms;
};
