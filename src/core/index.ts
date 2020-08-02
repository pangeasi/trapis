import { configDB } from "./../../db.config";
import { Method } from "./types";
import { getControllers } from "./consumer/helpersControllers";
import { getRoutesConfig } from "./consumer/helpersRoutes";
import { PathConfig, ControllerFn, Paths, Controllers } from "./consumer/types";
import Koa, { Context } from "koa";
import Router from "@koa/router";
import { setRoutes } from "./consumer/commonHelpers";
import { createConnection } from "typeorm";

const app = new Koa();
let router = new Router();

createConnection(configDB)
  .then((res) => console.log("db connection stablished."))
  .catch((err) => console.log("Error:", err));

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

(async () => {
  await generateRoutes();
  app.use((() => router.routes())());
  app.listen(3000, () => console.log("server is running..."));
})();
