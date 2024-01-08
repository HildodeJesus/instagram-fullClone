import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable("users", table => {
		table.string("id").primary().unique().notNullable();
		table.string("name").notNullable();
		table.string("username").unique().notNullable();
		table.string("email").unique().notNullable();
		table.string("password").notNullable();
		table.datetime("created_at").notNullable();
		table.dateTime("updated_at").notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable("users");
}
