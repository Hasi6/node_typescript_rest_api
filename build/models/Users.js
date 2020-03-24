"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Gender = Object.freeze({
    Male: "male",
    Female: "female",
    Other: "other"
});
var UsersSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    profile: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "profile"
    },
    projects: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: "project"
    },
    age: {
        type: Number,
        required: true
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
        type: String
    },
    gender: {
        type: String,
        enum: Object.values(Gender),
        required: true
    }
}, { timestamps: true });
exports.default = mongoose_1.model("users", UsersSchema);
