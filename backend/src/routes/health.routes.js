import { Router } from "express";
import mongoose from "mongoose";

const healthRouter = Router();

healthRouter.get("/health", (_request, response) => {
  response.status(200).json({
    server: "running",
    database: {
      status: mongoose.connection.readyState === 1 ? "connected" : "unavailable",
    },
  });
});

export default healthRouter;