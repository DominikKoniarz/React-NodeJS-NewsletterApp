import { NextFunction, Request, Response } from "express";
import { validate } from "email-validator";
import prisma from "../initializers/initDb";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: parseInt(process.env.SMTP_PORT || ""),
	auth: {
		user: process.env.MAIL_SENDER_EMAIL,
		pass: process.env.MAIL_SENDER_PASSWORD,
	},
});

const registerToNewsletter = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { name, email } = req.body;

	if (!name || typeof name !== "string")
		return res.status(400).json({ message: "Name required!" });

	if (!email || typeof email !== "string")
		return res.status(400).json({ message: "Email required!" });

	if (!validate(email))
		return res.status(403).json({ message: "Valid email required!" });

	try {
		await prisma.user.create({
			data: {
				name,
				email,
			},
		});

		await transporter.sendMail({
			from: process.env.MAIL_SENDER_EMAIL,
			to: email,
			subject: `Congratulations ${name}! You were successfully registered to our newsletter!`,
			html: "<b>Test!</b>",
		});

		res.sendStatus(201);
	} catch (error: Error | unknown) {
		next(error instanceof Error ? error : "Unknown error!");
	}
};

export default registerToNewsletter;
