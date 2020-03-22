"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var MetaDataKeys_1 = require("../MetaDataKeys/MetaDataKeys");
function use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.Middleware, target, key) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.Middleware, middlewares, target, key);
    };
}
exports.use = use;
