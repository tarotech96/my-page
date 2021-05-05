"use strict";

import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
import appRoutes from "./routes/index.js";
import config from "./config.js";

const PORT = process.env.PORT || 8080;

// config app
app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json({ limit: "50mb" }))
  .use(cors())

// app router
appRoutes(app);

// app listen on port
app.listen(PORT, () => {
  console.log(`App is listening on url http://localhost:${PORT}`);
});
