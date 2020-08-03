import { getModels } from "./models/helpersModels";
import { configDB } from "./../../db.config";
import { Method } from "./types";
import { getControllers } from "./consumer/helpersControllers";
import { getRoutesConfig } from "./consumer/helpersRoutes";
import { PathConfig, ControllerFn, Paths, Controllers } from "./consumer/types";
import Koa, { Context } from "koa";
import Router from "@koa/router";
import { setRoutes } from "./consumer/commonHelpers";
import { createConnection, EntitySchema } from "typeorm";
import { EntitySchemaOptions } from "typeorm/entity-schema/EntitySchemaOptions";
import { BaseColumnSchemaPart } from "./models/core.db";

const app = new Koa();
let router = new Router();

const generateRoutes = async () => {
  const routes = await getRoutesConfig();
  const controllers = await getControllers();

  Object.entries(routes as Paths).forEach((obj) => {
    const [entity, value] = obj;
    value.forEach((path) => {
      router = setRoutes(router, path, controllers[entity] as ControllerFn);
    });
  });
};

const generateModels = async () => {
  const entities: any[] = [];
  const models = await getModels();
  Object.entries(models).forEach((model) => {
    const [entity, value] = model;
    entities.push(
      new EntitySchema({
        ...value,
        columns: { ...BaseColumnSchemaPart, ...value.columns },
      })
    );
  });

  createConnection({ ...configDB, entities })
    .then((res) => console.log("db connection stablished."))
    .catch((err) => console.log("Error:", err));
};

(async () => {
  await generateRoutes();
  await generateModels();
  app.use((() => router.routes())());
  app.listen(3000, () => console.log("server is running..."));
})();
