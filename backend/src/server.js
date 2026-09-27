import app from "./app.js";
import { connectDatabase } from "./config/database.js";
import { env } from "./config/env.js";

app.listen(env.PORT, () => {
  console.info(`API server running at http://localhost:${env.PORT}`);
});

void connectDatabase();