import validator from "validator";

import DB from "../database";
import { User } from "../entities/User";
import { createCustomError } from "../errors/CustomError";
import { Knex } from "knex";

export class UserRepo {
	async create(user: User) {
		await this.validate(user);
		await DB.table("users").insert(user);

		return;
	}
	// async update() {}

	// async delete() {}

	async get(where?: Function) {
		const user = await DB.table("users")
			.select(["id", "name", "email", "username"])
			.where(where);
		if (user.length == 0)
			throw createCustomError("Usuário não encontrado!", 400);

		return user;
	}

	async validate(user: Partial<User>) {
		let errors = [];
		if (!validator.isEmail(user.email)) errors.push("email inválido!");

		if (!validator.isLength(user.name, { min: 1 }))
			errors.push("Nome inválido!");

		if (!validator.isLength(user.username, { min: 1 }))
			errors.push("Usuário inválido!");

		if (!validator.isLength(user.password, { min: 6 }))
			errors.push("Senha inválida!");

		if (errors.length > 0) throw createCustomError(JSON.stringify(errors), 400);

		return;
	}
}
