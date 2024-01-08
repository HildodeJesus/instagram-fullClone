import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

import { User } from "../entities/User";
import { UserRepo } from "../repositories/UserRepo";
import { createCustomError } from "../errors/CustomError";

class UserController {
	async createAnAccount(req: Request, res: Response, next: NextFunction) {
		try {
			const { name, username, email, password } = req.body;

			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);

			const newUser = new User({
				name,
				username,
				email,
				password: hashedPassword,
			});

			await new UserRepo().create(newUser);

			res.status(201).json("criado com sucesso");
		} catch (e) {
			console.log(e);
			next(e);
		}
	}

	async loginInAccount(req: Request, res: Response, next: NextFunction) {
		try {
			//credential é email ou username do usuário
			const { credential, password } = req.body;

			let user: any;
			if (validator.isEmail(credential)) {
				user = await new UserRepo().get(function () {
					this.where("email", credential);
				});
			} else {
				user = await new UserRepo().get(function () {
					this.where("username", credential);
				});
			}

			const validPassword = await bcrypt.compare(password, user.password);
			if (!validPassword) {
				throw createCustomError("Password incorreto! Tente novamente!", 400);
			}

			const payload = {
				name: user.name,
				username: user.username,
				email: user.email,
			};

			const token = jwt.sign(payload, process.env.SECRET_JWT);

			res.status(200).json({ token, user: payload });
		} catch (e) {
			next(e);
		}
	}
}

export = new UserController();
