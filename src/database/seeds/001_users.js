import Knex from "knex";

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  await knex("users").del();
  await knex("users").insert([
    {
      name: "John Doe",
      email: "john_doe@tiresolve.com",
      password: "12345678",
    },
  ]);
};
