"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
exports.addUserValidateArray = [
    express_validator_1.check("firstName", "FirstName is Required")
        .not()
        .isEmpty(),
    express_validator_1.check("email", "Enter a Valid Email Address").isEmail(),
    express_validator_1.check("gender", "Gender is Required, male, female or other").not().isEmpty(),
    express_validator_1.check("height", "Height is Required").isNumeric()
];
