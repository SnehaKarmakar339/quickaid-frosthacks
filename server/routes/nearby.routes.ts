import { Router } from "express";
import { NearbyController } from "../controllers/nearby.controller";

const nearby = Router();

nearby.route("/nearby").post(NearbyController);

export default nearby;
