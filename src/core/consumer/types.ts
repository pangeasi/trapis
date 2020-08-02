import { Method } from "./../types";
import { Middleware } from "koa";
export interface PathConfig {
  method: Method;
  endpoint: string;
  handler: "find" | "findOne" | string;
}

export interface ControllerFn {
  [key: string]: Middleware;
}

//TODO: buscar un nombre, Component es un mal nombre
export interface RCM {
  [key: string]: PathConfig[] | ControllerFn;
}

export interface Paths {
  [key: string]: PathConfig[];
}

export interface Controllers {
  [key: string]: ControllerFn;
}
