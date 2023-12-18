import winston from "winston";

const logger = winston.createLogger({
	level: "info",
	format: winston.format.combine(
		winston.format.json(),
		winston.format.errors({ stack: true })
	),
	transports: [
		new winston.transports.File({
			filename: "././logs/info.log",
			level: "info",
		}),
		new winston.transports.File({
			filename: "././logs/error.log",
			level: "error",
		}),
	],
});

if (process.env.NODE_ENV !== "production") {
	logger.add(
		new winston.transports.Console({ format: winston.format.simple() })
	);
}

export = logger;
