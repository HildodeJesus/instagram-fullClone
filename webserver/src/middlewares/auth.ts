import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import { UserRepo } from "../repositories/UserRepo";
import { createCustomError } from "../errors/CustomError";
import { User } from "../entities/User";

export async function auth(req: Request, res: Response, next: NextFunction) {
	try {
		const { authorization } = req.headers;

		const token = authorization.split(" ")[1];
		const payload = jwt.verify(token, process.env.SECRET_JWT) as JwtPayload;

		const user = await new UserRepo().get(function () {
			this.where("id", payload.id);
		});

		if (user.length == 0)
			throw createCustomError("Usuário logado inválido", 403);

		const { id, name, email, username } = user[1][1] as User;

		console.log(user);

		req.user.id = id;
		req.user.name = name;
		req.user.username = username;
		req.user.email = email;

		next();
	} catch (e) {
		console.log(e);
		next(e);
	}
}
