"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Methods_1 = require("../methods/Methods");
var MetaDataKeys_1 = require("../MetaDataKeys/MetaDataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.Path, path, target, key);
            Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.Methods, method, target, key);
        };
    };
}
exports.Get = routeBinder(Methods_1.Methods.Get);
exports.Post = routeBinder(Methods_1.Methods.Post);
exports.Put = routeBinder(Methods_1.Methods.Put);
exports.Patch = routeBinder(Methods_1.Methods.Patch);
exports.Delete = routeBinder(Methods_1.Methods.Delete);
