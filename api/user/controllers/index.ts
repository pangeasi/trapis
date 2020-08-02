// Si añades funciones con el handler de la entidad, se sobreecribiran las default

import { Context } from "koa";

export default {
  find: async (ctx: Context) => (ctx.body = "Hola mundo"),
  findOne: (ctx: Context) => (ctx.body = "Hola!!"),
};
