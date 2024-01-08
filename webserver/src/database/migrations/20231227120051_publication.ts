import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	// return knex.schema.createTable("publications", table => {
	// 	table.string("id").primary().notNullable();
	// 	table.string("user_id").notNullable().references("users");
	// 	table.text("caption");
	// 	table.json("post_url");
	// 	table.string("type").defaultTo("post");
	// 	table.dateTime("created_at").notNullable();
	// 	table.dateTime("updated_at").notNullable();
	// });
}

export async function down(knex: Knex): Promise<void> {
	// return knex.schema.dropTable("publications");
}
