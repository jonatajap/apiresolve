import knex from "knex";

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export const up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => knex.schema.dropTable("users");
