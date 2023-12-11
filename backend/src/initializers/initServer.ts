import type { Application } from "express";

const initServer = (app: Application, port: string) => {
	app.listen(port, () => {
		console.log(`Server started at port ${port}`);
	});
};

export default initServer;
