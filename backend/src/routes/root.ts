import express from "express";
import rootPageController from "../controllers/rootPageController";

const rootRouter = express.Router();

rootRouter.get("/", rootPageController);

export default rootRouter;
