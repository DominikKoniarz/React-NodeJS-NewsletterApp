import dotenv from "dotenv";
dotenv.config();
import express from "express";
import initServer from "./initializers/initServer";
import rootRouter from "./routes/root";
import errorHandler from "./middlewares/errorHandler";
import notFoundRouter from "./routes/404";
import staticAssets from "./routes/assets";
import registerRouter from "./routes/register";
import cors from "cors";
import corsConfig from "./config/corsConfig";
import unregisterRouter from "./routes/unregister";
import path from "path";

const PORT = process.env.PORT || "3000";

const app = express();

app.use(express.json());
app.use(cors(corsConfig));

if (process.env.NODE_ENV !== "production") {
	app.use((req, res, next) => {
		console.log(req.path, req.method);
		next();
	});
} else {
	app.use("/", rootRouter);
	app.use("/assets", staticAssets);
}

app.use("/register", registerRouter);
app.use("/unregister", unregisterRouter);

app.use(
	"*",
	process.env.NODE_ENV === "production" ? rootRouter : notFoundRouter
);

// error handler
app.use(errorHandler);

initServer(app, PORT);
