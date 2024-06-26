import express from "express";
import dotenv from "dotenv";
import path from "path";

import middleware from "./middlewares/middleware";
import { errorGlobalHandler } from "./middlewares/errors/errorGlobalHandler";
import router from "./routes";

dotenv.config({ path: path.join(__dirname, "config", ".env") });

const app = express();

// Middlewares
middleware(app);

// Routes
app.use("/api/v1", router);

// Global error handling
app.use(errorGlobalHandler);

export default app;