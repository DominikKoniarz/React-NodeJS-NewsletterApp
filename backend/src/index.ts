import dotenv from "dotenv";
process.env.NODE_ENV !== "production" && dotenv.config();
import express from "express";
import initServer from "./initializers/initServer";
import rootRouter from "./routes/root";
import errorHandler from "./middlewares/errorHandler";
import notFoundRouter from "./routes/404";
import staticAssets from "./routes/assets";

const PORT = process.env.PORT || "3000";

const app = express();

if (process.env.NODE_ENV === "production") {
	app.use("/", rootRouter);
	app.use("/assets", staticAssets);
}

app.use("*", notFoundRouter);

// error handler
app.use(errorHandler);

initServer(app, PORT);
