import development from "../../knexfile.js";
import knex from "knex";

export const db = knex(development.development);
