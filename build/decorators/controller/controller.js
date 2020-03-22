"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = require("express");
exports.router = express_1.Router();
function Controller(routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata("path", target.prototype, key);
            if (path) {
                exports.router.get("" + routePrefix + path, routeHandler);
                exports.router.post("" + routePrefix + path, routeHandler);
                exports.router.put("" + routePrefix + path, routeHandler);
                exports.router.delete("" + routePrefix + path, routeHandler);
                exports.router.patch("" + routePrefix + path, routeHandler);
            }
        }
    };
}
exports.Controller = Controller;
