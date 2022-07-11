import express from "express";
import { config } from "./config";
import { 
    errorHandler,
    errorNotFoundHandler
} from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";

// Create Express server
export const app = express();

// Express configuration
app.set("port", config.port || 3000);

app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);