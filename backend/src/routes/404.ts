import express from "express";
import notFoundPageController from "../controllers/notFoudPageController";

const notFoundRouter = express.Router();

notFoundRouter.all("*", notFoundPageController);

export default notFoundRouter;
