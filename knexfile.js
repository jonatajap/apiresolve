import {
  DB_PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} from "./src/config/config.js";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const development = {
  client: "pg",
  connection: {
    port: DB_PORT,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/database/migrations",
  },
  seeds: {
    directory: "./src/database/seeds",
  },
};

export default {
  development,
};
