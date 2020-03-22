"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./config/db"));
var cors_1 = __importDefault(require("cors"));
var AppRouter_1 = require("./AppRouter");
// Models
require("./models/Users");
// Controllers
require("./controllers/user/UserController");
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
// Db Connection
db_1.default();
app.use("/api/", AppRouter_1.AppRouter.getInstance());
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server Started at port " + PORT);
});
