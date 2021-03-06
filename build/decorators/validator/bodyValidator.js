"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var MetaDataKeys_1 = require("../MetaDataKeys/MetaDataKeys");
function bodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.Validator, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
