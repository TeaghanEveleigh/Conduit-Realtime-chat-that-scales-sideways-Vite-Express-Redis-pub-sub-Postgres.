import express from "express";

// index.js
import { query } from "#config/db.js";
import { requestLogger } from "#middleware/request-logger.js";

const app = express();
const port = process.env.PORT ?? "3001";
app.use(requestLogger);

app.get("/async", async (req, res) => {
  const users = await query("SELECT * FROM USERS");
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server Can be found at http://localhost:${port}`);
});
