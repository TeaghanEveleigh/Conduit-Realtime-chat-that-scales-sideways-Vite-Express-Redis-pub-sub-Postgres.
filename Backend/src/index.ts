// index.js
import express from "express";

const app = express();
const port = process.env.PORT ?? "3001";


app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Response sent");
});

app.listen(port, () => {
  console.log(`Server Can be found at http://localhost:${port}`);
});
