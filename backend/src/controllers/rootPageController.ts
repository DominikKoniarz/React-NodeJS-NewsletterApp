import type { NextFunction, Request, Response } from "express";
import path from "path";

const INDEX_FILE_PATH = path.join(
	process.cwd(),
	"..",
	"frontend",
	"dist",
	"index.html"
);

const rootPageController = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		res.sendFile(INDEX_FILE_PATH);
	} catch (error: Error | unknown) {
		next(error);
	}
};

export default rootPageController;
