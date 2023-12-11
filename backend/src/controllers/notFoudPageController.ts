import type { Request, Response } from "express";

const notFoundPageController = (req: Request, res: Response) => {
	res.send("page not found 404");
};

export default notFoundPageController;
