import "dotenv/config";
import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
	development: {
		client: "mysql2",
		connection: {
			host: process.env.DATABASE_HOST,
			port: Number(process.env.DATABASE_PORT),
			user: process.env.DATABASE_USER,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE,
			timezone: "America/Sao_Paulo",
		},

		migrations: {
			tableName: "knex_migrations",
			directory: "./src/database/migrations",
			extension: "ts",
		},
	},

	production: {
		client: "mysql2",
		connection: {
			host: process.env.DATABASE_HOST,
			port: Number(process.env.DATABASE_PORT),
			user: process.env.DATABASE_USER,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE,
			timezone: "America/Sao_Paulo",
		},

		pool: {
			min: 2,
			max: 10,
		},

		migrations: {
			tableName: "knex_migrations",
			directory: "./src/database/migrations",
			extension: "ts",
		},
	},
};

export default config;
