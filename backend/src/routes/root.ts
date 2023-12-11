import express from "express";
import rootPageController from "../controllers/rootPageController";

const router = express.Router();

router.get("/", rootPageController);

export default router;
