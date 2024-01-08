import knex from "knex";

const DB = knex({
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
});

export default DB;
