import express from "express";
import unregisterFromNewsletter from "../controllers/unregisterFromNewsletter";

const unregisterRouter = express.Router();

unregisterRouter.post("/", unregisterFromNewsletter);

export default unregisterRouter;
