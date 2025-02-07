import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

import diagnostics from "./routes/diagnostics.routes";
app.use("/api/v1", diagnostics);

export default app;
