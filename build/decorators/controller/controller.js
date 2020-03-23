"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetaDataKeys_1 = require("../MetaDataKeys/MetaDataKeys");
function bodyValidators(keys) {
    return function (req, res, next) {
        var errors = [];
        if (!req.body) {
            res.status(422).json({ errors: [{ msg: "Request Body Not Found" }] });
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                errors = __spreadArrays(errors, [{ msg: key + " is Required", value: key }]);
            }
        }
        if (errors.length > 0) {
            return res.status(400).json({ errors: errors });
        }
        next();
    };
}
function Controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.Path, target.prototype, key);
            var method = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.Methods, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.Middleware, target.prototype, key) ||
                [];
            var requiredBodyProps = Reflect.getMetadata(MetaDataKeys_1.MetaDataKeys.Validator, target.prototype, key) ||
                [];
            var validator = bodyValidators(requiredBodyProps);
            if (path) {
                router[method].apply(router, __spreadArrays(["" + routePrefix + path], middlewares, [validator,
                    routeHandler]));
            }
        }
    };
}
exports.Controller = Controller;
