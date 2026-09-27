import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";
import healthRouter from "./routes/health.routes.js";

const app = express();

app.use(cors({ origin: env.FRONTEND_ORIGIN }));
app.use(express.json({ limit: "100kb" }));
app.use("/api/v1", healthRouter);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;