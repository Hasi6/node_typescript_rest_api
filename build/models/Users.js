"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Gender = Object.freeze({
    Male: 'male',
    Female: 'female',
    Other: 'other',
});
var UsersSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    nickNames: {
        type: [String],
        default: []
    },
    height: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: Object.values(Gender)
    },
}, { timestamps: true });
exports.default = mongoose_1.model("users", UsersSchema);
