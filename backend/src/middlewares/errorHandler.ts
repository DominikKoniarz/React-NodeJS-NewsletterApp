import type { NextFunction, Request, Response } from "express";

const errorHandler = (
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (process.env.NODE_ENV !== "production") {
		res.status(500).json({ message: `Server error: ${error.message}` });
		console.log(error.stack);
		return;
	} else {
		res.status(500).json({ message: "Server error" });
		return;
	}
};

export default errorHandler;
