import {
  ControllerFn,
  PathConfig,
  Controllers,
  Paths,
} from "./../core/consumer/types";
import { API_BASE } from "./constants";
import { readdirSync } from "fs";
export const entitiesDirs = readdirSync(API_BASE);

const importRCM = async (
  pathIndex: string
): Promise<ControllerFn | PathConfig[]> =>
  import(pathIndex).then((path) => path.default);

export const getRCM = async (rcm: string) => {
  const rcms: Controllers | Paths = {};
  for (const entity of entitiesDirs) {
    const entityRCM = `${API_BASE}/${entity}/${rcm}`;

    if (readdirSync(entityRCM).length) {
      const index = await importRCM(entityRCM);
      rcms[entity] = index;
    }
  }
  return rcms;
};
