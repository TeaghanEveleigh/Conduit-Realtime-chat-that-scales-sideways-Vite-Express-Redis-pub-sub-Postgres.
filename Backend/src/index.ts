// index.js
import { query } from "#config/neon-connection.js";
import { requestLogger } from "#middleware/request-logger.js";
import express from "express";


const app = express();
const port = process.env.PORT ?? "3001";
app.use(requestLogger)

app.get("/promise-chain", (req, res) => {
  query("SELECT * FROM USERS")
  .then((users)=>{
    console.log(users);
  })

  res.send("Hello World!");
  console.log("Response sent");
});
app.get("/async", async (req, res) => {
 const users = await query("SELECT * FROM USERS");
 res.json(users)  
});

app.listen(port, () => {
  console.log(`Server Can be found at http://localhost:${port}`);
});
