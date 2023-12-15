import express from "express";
import rootPageController from "../controllers/rootPageController";

const rootRouter = express.Router();

rootRouter.get(["/", "/unsign", "/submitted"], rootPageController);

export default rootRouter;
