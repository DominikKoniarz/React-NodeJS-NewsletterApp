import type { Request, Response } from "express";
import path from "path";

const INDEX_FILE_PATH = path.join(
	process.cwd(),
	"..",
	"frontend",
	"dist",
	"index.html"
);

const rootPageController = (req: Request, res: Response) => {
	res.sendFile(INDEX_FILE_PATH);
};

export default rootPageController;
