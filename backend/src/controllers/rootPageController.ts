import type { Request, Response } from "express";

const rootPageController = (req: Request, res: Response) => {
	res.send("xd");
};

export default rootPageController;
