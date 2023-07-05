import express from "express";
import cors from "cors";
import { PORT, HOST } from "./config/config.js";
import routes from "./routes/routes.js";
import morgan from "morgan";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Express started at ${HOST}:${PORT}`));
