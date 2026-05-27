import { readFileSync } from "fs";
import { join } from "path";
import pool from "./pool";
import { logger } from "./logger";

async function migrate() {
  try {
    logger.info("Running database migrations...");

    const schema = readFileSync(join(__dirname, "schema.sql"), "utf-8");
    await pool.query(schema);

    logger.info("Migrations completed successfully");
    process.exit(0);
  } catch (error) {
    logger.error({ err: error }, "Migration failed");
    process.exit(1);
  }
}

migrate();
