import morgan from "morgan";
import { notFound } from "./middleware/error/errorMiddleware.js";
import app from "./app.js";

app.use(morgan("dev"));

app.use(notFound);
