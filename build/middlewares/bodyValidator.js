"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var bodyValidator = function (req, res, next) {
    try {
        // Get All request body Errors to a Variable
        var errors = express_validator_1.validationResult(req);
        // Check Body is Okay
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).json({ errors: { msg: "Internal Server Error" } });
    }
};
exports.default = bodyValidator;
