import "dotenv/config";
import { z } from "zod";

const environmentSchema = z.object({
  PORT: z.coerce.number().int().positive().default(5000),
  MONGODB_URI: z
    .string()
    .trim()
    .min(1)
    .default("mongodb://127.0.0.1:27017/nitrr-digital-twin"),
  FRONTEND_ORIGIN: z.string().url().default("http://localhost:5173"),
  MONGODB_SERVER_SELECTION_TIMEOUT_MS: z.coerce.number().int().positive().default(5000),
});

const result = environmentSchema.safeParse(process.env);

if (!result.success) {
  console.error("Invalid environment configuration:", result.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = result.data;