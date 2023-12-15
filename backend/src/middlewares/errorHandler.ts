import type { NextFunction, Request, Response } from "express";

const errorHandler = (
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log(error.message);
	if (process.env.NODE_ENV !== "production") {
		res.status(500).json({ message: `Server error: ${error.message}` });
		return;
	} else {
		res.status(500).json({ message: "Server error" });
		return;
	}
};

export default errorHandler;
