import { CorsOptions } from "cors";

const whitelist =
	process.env.NODE_ENV !== "production"
		? ["http://localhost:5173", "http://127.0.0.1:5173"]
		: ["wpisztudomene.pl"];

const corsConfig: CorsOptions = {
	optionsSuccessStatus: 200,
	origin: (origin, callback) => {
		if (!origin || whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
};

export default corsConfig;
