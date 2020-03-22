"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Methods_1 = require("../methods/Methods");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata("path", path, target, key);
            Reflect.defineMetadata("method", method, target, key);
        };
    };
}
exports.Get = routeBinder(Methods_1.Methods.Get);
exports.Post = routeBinder(Methods_1.Methods.Post);
exports.Put = routeBinder(Methods_1.Methods.Put);
exports.Patch = routeBinder(Methods_1.Methods.Patch);
exports.Delete = routeBinder(Methods_1.Methods.Delete);
