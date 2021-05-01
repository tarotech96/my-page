import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
import appRoutes from "./routes/index.js";
import config from "./config.js";

// config app
app
  .use(bodyParser.json({ limit: '50mb'}))
  .use(cors());

// app router
appRoutes(app);

// app listen on port
app.listen(config.port, () => {
  console.log(`App is listening on url http://localhost:${config.port}`);
});
