import express from "express";
import registerToNewsletter from "../controllers/registerToNewsletter";

const registerRouter = express.Router();

registerRouter.post("/", registerToNewsletter);

export default registerRouter;
