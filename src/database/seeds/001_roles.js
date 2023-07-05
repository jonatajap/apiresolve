import Knex from "knex";

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  await knex("roles").del();
  await knex("roles").insert([{ name: "TI" }, { name: "TEACHER" }]);
};
