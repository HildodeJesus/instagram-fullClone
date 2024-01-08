import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	// return knex.schema.createTable("follower", table => {
	// 	table.string("follower_id").primary().notNullable().references("users");
	// 	table.string("followed_id").primary().notNullable().references("users");
	// 	table.dateTime("created_at").notNullable();
	// 	table.dateTime("updated_at").notNullable();
	// });
}

export async function down(knex: Knex): Promise<void> {
	// return knex.schema.dropTable("users");
}
