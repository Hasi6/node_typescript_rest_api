import express from "express";
import connectDB from "./config/db";
import cors from "cors";

import { router } from "./decorators/controller/controller";

// Models
import "./models/Users";

// Controllers
import "./controllers/user/UserController";

// Routes
import UserRoutes from "./routes/user/index.routes";

const app = express();
app.use(cors());

app.use(express.json());

// Db Connection
connectDB();

app.use("/api/", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
