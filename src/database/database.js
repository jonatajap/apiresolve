import knex from "knex";
import {
  DB_PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} from "../config/config.js";

export const database = knex({
  client: "pg",
  connection: {
    port: DB_PORT,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
});
