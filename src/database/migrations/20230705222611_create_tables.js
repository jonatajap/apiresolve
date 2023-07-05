import knex from "knex";

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 *
 */
export const up = async (knex) => {
  return await knex.schema
    .createTable("roles", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable().unique();

      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })

    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();

      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());

      table.integer("role_id").unsigned().references("id").inTable("roles");
    });
};

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  return await knex.schema.dropTable("users").dropTable("roles");
};
