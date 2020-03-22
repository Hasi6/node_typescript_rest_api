"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    AppRouter.getInstance = function () {
        if (!AppRouter.instatnce) {
            AppRouter.instatnce = express_1.Router();
        }
        return AppRouter.instatnce;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
