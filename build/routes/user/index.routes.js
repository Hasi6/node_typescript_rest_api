"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var addUser_1 = require("./addUser");
var addUserValidatorArray_1 = require("../../middlewares/userValidator/addUserValidatorArray");
var bodyValidator_1 = __importDefault(require("../../middlewares/bodyValidator"));
var router = express_1.Router();
router.post('/addUser', addUserValidatorArray_1.addUserValidateArray, bodyValidator_1.default, addUser_1.addUserRoute);
exports.default = router;
