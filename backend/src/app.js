import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import toDo from "./routes/toDo";

const app = express();
const port = 3000;

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use("/toDo", toDo);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
