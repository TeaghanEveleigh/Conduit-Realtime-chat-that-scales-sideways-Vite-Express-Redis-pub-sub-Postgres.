import { Pool, QueryResultRow } from "pg";

export const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

pool.on("error", () => {
  console.error("Error When Connecting to NEON database");
});

export const query = async <T extends QueryResultRow>(
  text: string,
  values?: unknown[],
): Promise<T[]> => {
  const { rows } = await pool.query<T>(text, values);
  return rows;
};
