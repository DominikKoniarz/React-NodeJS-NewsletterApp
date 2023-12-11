import dotenv from "dotenv";
process.env.NODE_ENV !== "production" && dotenv.config();
import express from "express";
import initServer from "./initializers/initServer";
import rootRouter from "./routes/root";
import errorHandler from "./middlewares/errorHandler";
import notFoundRouter from "./routes/404";

const PORT = process.env.PORT || ("3000" as string);

const app = express();

process.env.NODE_ENV === "production" && app.use("/", rootRouter);

app.use("*", notFoundRouter);

// error handler
app.use(errorHandler);

initServer(app, PORT);
