import { Method } from "./../types";
import { PathConfig, ControllerFn } from "./types";
import Router, { RouterOptions } from "@koa/router";
import { Context } from "koa";
export const setRoutes = (
  router: Router,
  path: PathConfig,
  controllers: ControllerFn
) => {
  switch (path.method) {
    case Method.Get:
      router.get(
        path.endpoint,
        controllers[path.handler] ||
          (async (ctx: Context) => (ctx.body = { ejemplo: 1 }))
      );
      break;
    case Method.Post:
      router.post(
        path.endpoint,
        controllers[path.handler] ||
          (async (ctx: Context) => (ctx.body = { ejemplo: 1 }))
      );
      break;
    case Method.Put:
      router.put(
        path.endpoint,
        controllers[path.handler] ||
          (async (ctx: Context) => (ctx.body = { ejemplo: 1 }))
      );
      break;
    case Method.Delete:
      router.delete(
        path.endpoint,
        controllers[path.handler] ||
          (async (ctx: Context) => (ctx.body = { ejemplo: 1 }))
      );
      break;
    default:
      break;
  }
  return router;
};
