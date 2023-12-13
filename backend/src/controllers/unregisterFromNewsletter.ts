import { NextFunction, Request, Response } from "express";
import prisma from "../initializers/initDb";

const unregisterFromNewsletter = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { email } = req.body;

	if (!email || typeof email !== "string")
		return res.status(400).json({ message: "Email required!" });

	try {
		const foundUser = await prisma.user.findFirst({
			where: { email },
		});

		if (!foundUser)
			return res
				.status(403)
				.json({ message: "This email is not registered to our newsletter!" });

		await prisma.user.delete({
			where: {
				id: foundUser.id,
			},
		});

		res
			.status(200)
			.json({
				message: "You were successfully unregistered from our newsletter!",
			});
	} catch (error: Error | unknown) {
		next(
			error instanceof Error ? error : "Unknown newsletter unregister error!"
		);
	}
};

export default unregisterFromNewsletter;
