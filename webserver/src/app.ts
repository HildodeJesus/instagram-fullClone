import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";

import userRoutes from "./routes/userRoutes";
import { handleErrors } from "./middlewares/handleErrors";

export class App {
	server: express.Application;

	constructor() {
		this.server = express();
		this.middleware();
		this.router();
	}

	private middleware() {
		this.server.use(express.urlencoded({ extended: false }));
		this.server.use(express.json());
		this.server.use(cors());
		this.server.use(helmet());
	}
	private router() {
		this.server.use(userRoutes);
		this.server.use(handleErrors);
	}
}
