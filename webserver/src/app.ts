import "dotenv/config";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";

export class App {
	server: express.Application;

	constructor() {
		this.server = express();
		this.middleware();
		this.router();
	}

	private middleware() {
		this.server.use(cors());
		this.server.use(helmet());
		this.server.use(bodyParser.urlencoded({ extended: true }));
	}
	private router() {}
}
