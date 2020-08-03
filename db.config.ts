import { ConnectionOptions } from "typeorm";

export const configDB: ConnectionOptions = {
  type: "mariadb",
  host: "localhost",
  port: 3306,
  username: "user",
  password: "12345",
  database: "db",
  synchronize: true,
  dropSchema: true,
  logging: true,
};
