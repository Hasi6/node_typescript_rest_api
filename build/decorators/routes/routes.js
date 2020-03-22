"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function Get(path) {
    return function (target, key, desc) {
        Reflect.defineMetadata("path", path, target, key);
    };
}
exports.Get = Get;
function Post(path) {
    return function (target, key, desc) {
        Reflect.defineMetadata("path", path, target, key);
    };
}
exports.Post = Post;
function Put(path) {
    return function (target, key, desc) {
        Reflect.defineMetadata("path", path, target, key);
    };
}
exports.Put = Put;
function Delete(path) {
    return function (target, key, desc) {
        Reflect.defineMetadata("path", path, target, key);
    };
}
exports.Delete = Delete;
function Patch(path) {
    return function (target, key, desc) {
        Reflect.defineMetadata("path", path, target, key);
    };
}
exports.Patch = Patch;
