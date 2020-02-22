import "dotenv/config";
import express from "express";
import routes from "./routes";

import connection from "./database";

connection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
