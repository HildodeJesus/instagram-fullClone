import { App } from "./app";
import DB from "./database";
import logger from "./libs/logger";

const port = process.env.PORT || 6000;

(async () => {
	const date = new Date();
	const currentDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
	try {
		DB.initialize();
		new App().server.listen(port);
		logger.info(
			`Server started! url: http://localhost:${port} moment: ${currentDate}`
		);
	} catch (e) {
		logger.error(e);
	}
})();
