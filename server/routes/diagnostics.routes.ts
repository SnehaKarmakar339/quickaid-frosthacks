import { Router } from "express";

const diagnostics = Router();

diagnostics.route("/diagnostics").post();

export default diagnostics;
