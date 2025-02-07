import { Router } from "express";
import { tipsController } from "../controllers/tips.controller";

const tips = Router();

tips.route("/tips").get(tipsController);

export default tips;