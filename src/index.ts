import express from "express";
import connectDB from "./config/db";
import cors from "cors";

import { AppRouter } from "./AppRouter";

// Models
import "./models/Users";
import "./models/Profile";
import "./models/Project";

// Controllers
import "./controllers/user/UserController";
import "./controllers/profile/ProfileController";
import "./controllers//projects/ProjectController";

const app = express();
app.use(cors());

app.use(express.json());

// Db Connection
connectDB();

app.use("/api/", AppRouter.getInstance());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
