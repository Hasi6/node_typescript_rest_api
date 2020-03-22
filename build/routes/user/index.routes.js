"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var addUser_1 = require("./addUser");
var addUserValidatorArray_1 = require("../../middlewares/userValidator/addUserValidatorArray");
var bodyValidator_1 = __importDefault(require("../../middlewares/bodyValidator"));
var searchUsers_1 = require("./searchUsers");
var findAllUser_1 = require("./findAllUser");
var router = express_1.Router();
router.get('/firstName=:firstName&age=:age', searchUsers_1.searchUserRoute);
router.get('/perPage=:perPage&page=:page', findAllUser_1.findAllUsersRoute);
router.post('/', addUserValidatorArray_1.addUserValidateArray, bodyValidator_1.default, addUser_1.addUserRoute);
exports.default = router;
