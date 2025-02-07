import { Router } from "express";
import { diagnosticsController } from "../controllers/diagnostics.controller";

const diagnostics = Router();

diagnostics.route("/diagnostics").post(diagnosticsController);

export default diagnostics;
