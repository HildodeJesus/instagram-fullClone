import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import CustomApiError from "../errors/CustomError";
import logger from "../libs/logger";

export function handleErrors(
	err: ErrorRequestHandler,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (err instanceof CustomApiError) {
		return res.status(err.statusCode).json({ error: err.message });
	}

	logger.error(JSON.stringify(err));

	return res
		.status(500)
		.json({ error: "Algum erro ocorreu na requisição. Tente Novamente!" });
}
